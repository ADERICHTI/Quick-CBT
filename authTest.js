// Initialize Firebase
const auth = firebase.auth();
const db = firebase.firestore();

// ======================
// DOM Elements
// ======================
const elements = {
  authContainer: document.getElementById('authContainer'),
  userProfile: document.getElementById('userProfile'),
  userName: document.getElementById('userName'),
  userEmail: document.getElementById('userEmail'),
  userAvatar: document.getElementById('userAvatar'),
  signInButton: document.getElementById('signInButton'),
  signOutButton: document.getElementById('signOutButton'),
  authLoader: document.getElementById('authLoader'),
  settingsBtn: document.getElementById('settingsBtn'),
  settingsPanel: document.getElementById('settingsPanel'),
  settingsClose: document.getElementById('settingsClose'),
  profileEditBtn: document.getElementById('profileEditBtn'),
  settingsProfilePic: document.getElementById('settingsProfilePic'),
  settingsUserName: document.getElementById('settingsUserName'),
  settingsUserEmail: document.getElementById('settingsUserEmail'),
  settingsFaculty: document.getElementById('settingsFaculty'),
  settingsDepartment: document.getElementById('settingsDepartment'),
  settingsLevel: document.getElementById('settingsLevel'),
  recentTestsContainer: document.getElementById('recentTestsContainer'),
  coursesProgressContainer: document.getElementById('coursesProgressContainer'),
  mainContainer: document.querySelector('.container')
};

// ======================
// State Management
// ======================
const state = {
  currentUser: null,
  isEditingProfile: false,
  activeToasts: 0
};

// ======================
// Authentication Service
// ======================
const authService = {
  async signInWithGoogle() {
    try {
      this.showAuthLoader();
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error('Sign in error:', error);
      this.showToast('Failed to sign in. Please try again.', true);
      throw error;
    } finally {
      this.hideAuthLoader();
    }
  },

  async signOut() {
    try {
      if (auth.currentUser) {
        await db.collection('users').doc(auth.currentUser.uid).update({
          status: 'offline',
          lastOnline: firebase.firestore.FieldValue.serverTimestamp(),
          active: false
        });
      }
      await auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
      this.showToast('Failed to sign out. Please try again.', true);
      throw error;
    }
  },

  showAuthLoader() {
    elements.authLoader.style.display = 'block';
    elements.signInButton.disabled = true;
  },

  hideAuthLoader() {
    elements.authLoader.style.display = 'none';
    elements.signInButton.disabled = false;
  }
};

// ======================
// User Profile Service
// ======================
const userService = {
  async initializeUserProfile(user) {
    try {
      const userRef = db.collection('users').doc(user.uid);
      const docSnap = await userRef.get();

      if (!docSnap.exists) {
        await userRef.set({
          uid: user.uid,
          status: 'online',
          active: false,
          lastOnline: firebase.firestore.FieldValue.serverTimestamp(),
          schoolData: {
            faculty: 'Not set',
            department: 'Not set',
            level: 'Not set'
          },
          testData: {
            recents: [],
            courses: {}
          }
        });
      } else {
        await userRef.update({
          status: 'online',
          lastOnline: firebase.firestore.FieldValue.serverTimestamp()
        });
      }

      return userRef;
    } catch (error) {
      console.error('Error initializing user profile:', error);
      throw error;
    }
  },

  async updateProfile(updates) {
    try {
      if (!state.currentUser) return;
      
      await db.collection('users').doc(state.currentUser.uid).update(updates);
      return true;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  },

  async loadUserData() {
    try {
      if (!state.currentUser) return;
      
      const docSnap = await db.collection('users').doc(state.currentUser.uid).get();
      return docSnap.exists ? docSnap.data() : null;
    } catch (error) {
      console.error('Error loading user data:', error);
      throw error;
    }
  }
};

// ======================
// UI Service
// ======================
const uiService = {
  showUserProfile(user) {
    elements.userName.textContent = user.displayName || 'User';
    elements.userEmail.textContent = user.email;
    elements.userAvatar.src = user.photoURL || 'https://via.placeholder.com/150';
    elements.userProfile.style.display = 'block';
  },

  showSignInScreen() {
    elements.authContainer.style.display = 'flex';
    elements.userProfile.style.display = 'none';
    elements.mainContainer.style.display = 'none';
  },

  showAppContent() {
    elements.authContainer.style.display = 'none';
    elements.mainContainer.style.display = 'block';
  },

  toggleSettingsPanel(show) {
    if (show) {
      elements.settingsPanel.classList.add('active');
    } else {
      elements.settingsPanel.classList.remove('active');
    }
  },

  toggleEditMode(enable) {
    const fields = [
      elements.settingsFaculty,
      elements.settingsDepartment,
      elements.settingsLevel
    ];

    fields.forEach(field => {
      field.contentEditable = enable;
      enable 
        ? field.classList.add('editable')
        : field.classList.remove('editable');
    });

    elements.profileEditBtn.textContent = enable ? 'Save Changes' : 'Edit Profile';
    state.isEditingProfile = enable;
  },

  updateSettingsUI(userData) {
    // Profile Section
    elements.settingsProfilePic.src = state.currentUser.photoURL || 'https://via.placeholder.com/150';
    elements.settingsUserName.textContent = state.currentUser.displayName || 'User';
    elements.settingsUserEmail.textContent = state.currentUser.email || 'Not available';
    
    // School Data
    elements.settingsFaculty.textContent = userData.schoolData.faculty;
    elements.settingsDepartment.textContent = userData.schoolData.department;
    elements.settingsLevel.textContent = userData.schoolData.level;

    // Recent Tests
    this.updateRecentTests(userData.testData.recents);

    // Course Progress
    this.updateCourseProgress(userData.testData.courses);
  },

  updateRecentTests(recents) {
    elements.recentTestsContainer.innerHTML = '';
    
    if (!recents || recents.length === 0) {
      elements.recentTestsContainer.innerHTML = '<p>No recent tests found</p>';
      return;
    }

    recents.slice(0, 10).forEach(test => {
      const testElement = document.createElement('div');
      testElement.className = 'recent-test';
      testElement.innerHTML = `
        <span>${test.testID || 'Unknown Test'}</span>
        <span>${test.score || 0}%</span>
        <span>${test.timeStamp?.toDate().toLocaleDateString() || 'Unknown date'}</span>
        <span>${test.timeSpent || 0}s</span>
      `;
      elements.recentTestsContainer.appendChild(testElement);
    });
  },

  updateCourseProgress(courses) {
    elements.coursesProgressContainer.innerHTML = '';
    
    if (!courses || Object.keys(courses).length === 0) {
      elements.coursesProgressContainer.innerHTML = '<p>No course data available</p>';
      return;
    }

    Object.entries(courses).forEach(([courseCode, tests]) => {
      const courseElement = document.createElement('div');
      courseElement.className = 'course-progress';
      
      const totalPossible = Object.values(tests).length * 100;
      const totalAchieved = Object.values(tests).reduce((sum, test) => sum + (test.score || 0), 0);
      const percentage = Math.round((totalAchieved / totalPossible) * 100);
      const isComplete = percentage === 100;
      
      courseElement.innerHTML = `
        <div class="course-header">
          <span>${courseCode}</span>
          <span>${percentage}%</span>
        </div>
        <div class="progress-container">
          <div class="progress-fill" style="width: ${percentage}%"></div>
          ${isComplete ? '<div class="completed-icon">✓</div>' : ''}
        </div>
      `;
      elements.coursesProgressContainer.appendChild(courseElement);
    });
  },

  showToast(message, isError = false) {
    if (state.activeToasts >= 3) return;
    
    state.activeToasts++;
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'error' : 'success'}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        toast.remove();
        state.activeToasts--;
      }, 300);
    }, 3000);
  }
};

// ======================
// Event Handlers
// ======================
const setupEventListeners = () => {
  // Authentication
  elements.signInButton.addEventListener('click', handleSignIn);
  elements.signOutButton.addEventListener('click', handleSignOut);
  
  // Settings Panel
  elements.settingsBtn.addEventListener('click', () => uiService.toggleSettingsPanel(true));
  elements.settingsClose.addEventListener('click', () => uiService.toggleSettingsPanel(false));
  
  // Profile Editing
  elements.profileEditBtn.addEventListener('click', handleProfileEdit);
};

const handleSignIn = async () => {
  try {
    await authService.signInWithGoogle();
  } catch (error) {
    uiService.showToast('Sign in failed. Please try again.', true);
  }
};

const handleSignOut = async () => {
  try {
    await authService.signOut();
    uiService.showToast('Signed out successfully');
  } catch (error) {
    uiService.showToast('Sign out failed. Please try again.', true);
  }
};

const handleProfileEdit = async () => {
  if (state.isEditingProfile) {
    try {
      const updates = {
        'schoolData.faculty': elements.settingsFaculty.textContent.trim(),
        'schoolData.department': elements.settingsDepartment.textContent.trim(),
        'schoolData.level': elements.settingsLevel.textContent.trim()
      };

      if (!updates['schoolData.faculty'] || !updates['schoolData.department'] || !updates['schoolData.level']) {
        uiService.showToast('Please fill all fields', true);
        return;
      }

      await userService.updateProfile(updates);
      uiService.toggleEditMode(false);
      uiService.showToast('Profile updated successfully!');
    } catch (error) {
      uiService.showToast('Failed to update profile', true);
    }
  } else {
    uiService.toggleEditMode(true);
  }
};

// ======================
// Initialization
// ======================
const initAuth = () => {
  setupEventListeners();
  uiService.showSignInScreen();

  auth.onAuthStateChanged(async (user) => {
    try {
      if (user) {
        state.currentUser = user;
        uiService.showUserProfile(user);
        uiService.showAppContent();
        
        await userService.initializeUserProfile(user);
        const userData = await userService.loadUserData();
        
        if (userData) {
          uiService.updateSettingsUI(userData);
        }
      } else {
        state.currentUser = null;
        uiService.showSignInScreen();
      }
    } catch (error) {
      console.error('Auth state change error:', error);
      uiService.showToast('Error loading application data', true);
    }
  });
};


