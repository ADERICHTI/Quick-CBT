const auth = firebase.auth();
const db = firebase.firestore();

// DOM Elements
const authContainer = document.getElementById('authContainer');
const userProfile = document.getElementById('userProfile');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userAvatar = document.getElementById('userAvatar');
const signInButton = document.getElementById('signInButton');
const signOutButton = document.getElementById('signOutButton');
const authLoader = document.getElementById('authLoader');

// Enable Firestore offline persistence
db.enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.log("Offline persistence can only be enabled in one tab at a time.");
    } else if (err.code == 'unimplemented') {
      console.log("The current browser does not support offline persistence.");
    }
  });

// Track connection status
let isOnline = navigator.onLine;
const connectionStatus = document.createElement('div');
connectionStatus.id = 'connectionStatus';
connectionStatus.style.position = 'fixed';
connectionStatus.style.bottom = '10px';
connectionStatus.style.right = '10px';
connectionStatus.style.padding = '5px 10px';
connectionStatus.style.borderRadius = '4px';
connectionStatus.style.backgroundColor = isOnline ? '#4CAF50' : '#FF9800';
connectionStatus.style.color = 'white';
connectionStatus.textContent = isOnline ? 'Online' : 'Offline';
document.body.appendChild(connectionStatus);

window.addEventListener('online', () => {
  isOnline = true;
  connectionStatus.textContent = 'Online';
  connectionStatus.style.backgroundColor = '#4CAF50';
  hideNetworkError();
});

window.addEventListener('offline', () => {
  isOnline = false;
  connectionStatus.textContent = 'Offline';
  connectionStatus.style.backgroundColor = '#FF9800';
  showNetworkError('You are offline. Some features may not work properly.');
});

// Firebase Auth State Listener
auth.onAuthStateChanged(async (user) => {
  if (user) {
    // User is signed in
    await handleUserSignIn(user);
    showUserProfile(user);
    showAppContent();
  } else {
    // User is signed out
    showSignInScreen();
  }
});

// Google Sign-In Handler
async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  authLoader.style.display = 'block';
  signInButton.disabled = true;
  
  try {
    const result = await auth.signInWithPopup(provider);
    console.log('User signed in:', result.user);
  } catch (error) {
    console.error('Sign in error:', error);
    authLoader.style.display = 'none';
    signInButton.disabled = false;
    
    if (!isOnline || error.code === 'auth/network-request-failed') {
      showNetworkError('Could not connect to authentication service. Please check your network connection.');
    }
  }
}

// Sign Out Handler
async function signOut() {
  try {
    // Update user status before signing out
    const user = auth.currentUser;
    if (user) {
      await db.collection('users').doc(user.uid).update({
        online: false,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
    
    await auth.signOut();
    console.log('User signed out');
  } catch (error) {
    console.error('Sign out error:', error);
  }
}

// Handle user sign-in and status update
async function handleUserSignIn(user) {
  try {
    const userRef = db.collection('users').doc(user.uid);
    
    await userRef.set({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      online: true,
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    
    // Set up real-time connection listener
    const unsubscribe = db.collection('.info').doc('connected').onSnapshot((doc) => {
      const isConnected = doc.data().connected;
      userRef.update({
        online: isConnected,
        lastSeen: isConnected ? null : firebase.firestore.FieldValue.serverTimestamp()
      });
    });
    
    // Clean up listener when user signs out
    auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        unsubscribe();
      }
    });
  } catch (error) {
    console.error('Error updating user status:', error);
    if (!isOnline || error.code === 'unavailable') {
      showNetworkError('Could not sync your status with the server. Changes will sync when you reconnect.');
    }
  }
}

// UI Functions
function showUserProfile(user) {
  userName.textContent = user.displayName || 'User';
  userEmail.textContent = user.email;
  userAvatar.src = user.photoURL || 'https://via.placeholder.com/150';
  authLoader.style.display = 'none';
}

function showSignInScreen() {
  authContainer.style.display = 'flex';
  userProfile.style.display = 'none';
  authLoader.style.display = 'none';
  signInButton.disabled = false;
  document.querySelector('.container').style.display = "none";
}

function showAppContent() {
  authContainer.style.display = 'none';
  userProfile.style.display = 'block';
  document.querySelector('.container').style.display = 'block';
}

// Network error handling
function showNetworkError(message) {
  const networkErrorPopup = document.getElementById('networkErrorPopup');
  if (!networkErrorPopup) {
    const popup = document.createElement('div');
    popup.id = 'networkErrorPopup';
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = '#FF5252';
    popup.style.color = 'white';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '4px';
    popup.style.zIndex = '9999';
    popup.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    popup.innerHTML = `
      <p>${message || 'Network error occurred'}</p>
      <button id="dismissNetworkError" style="background: white; border: none; padding: 5px 10px; border-radius: 3px; margin-top: 5px;">Dismiss</button>
    `;
    document.body.appendChild(popup);
    
    document.getElementById('dismissNetworkError').addEventListener('click', () => {
      popup.style.display = 'none';
    });
  } else {
    networkErrorPopup.querySelector('p').textContent = message;
    networkErrorPopup.style.display = 'block';
  }
}

function hideNetworkError() {
  const popup = document.getElementById('networkErrorPopup');
  if (popup) {
    popup.style.display = 'none';
  }
}

// Event Listeners
signInButton.addEventListener('click', signInWithGoogle);
signOutButton.addEventListener('click', signOut);

// Initialize the app
function initAuth() {
  showSignInScreen();
  document.querySelector('.container').style.display = 'none';
}

// Export for testing if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    signInWithGoogle,
    signOut,
    initAuth
  };
}
