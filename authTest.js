// Initialize Firebase Authentication and handle UI
const auth = firebase.auth();

// DOM Elements
const authContainer = document.getElementById('authContainer');
const userProfile = document.getElementById('userProfile');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userAvatar = document.getElementById('userAvatar');
const signInButton = document.getElementById('signInButton');
const signOutButton = document.getElementById('signOutButton');
const authLoader = document.getElementById('authLoader');

// Firebase Auth State Listener
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in
        showUserProfile(user);
        showAppContent();
    } else {
        // User is signed out
        showSignInScreen();
    }
});

      // Generalized update function
async function updateUserDocument(user, updates) {
    try {
        await db.collection('users').doc(user.uid).set(updates, { merge: true });
    } catch (error) {
        console.error("Error updating user document: ", error);
    }
}   

// Sign-in handler
async function handleUserSignIn(user) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    
    const userData = {
        uid: user.uid,  // Always include UID for new docs
        schoolData: {
            // These will be preserved if they exists
          faculty: firebase.firestore.FieldValue.delete(), 
          department: firebase.firestore.FieldValue.delete(), 
          level: firebase.firestore.FieldValue.delete(),    // Example: Remove if exists
        },
      status: "online",
      loginTimeStamp: timestamp,
        logoutTimeStamp: null,
        // Initialize other top-level fields if needed
        preferences: {
            theme: "light",
            defaultDuration: 30
        }
    };
    
    await updateUserDocument(user, userData);
}

// Sign-out handler
async function handleUserSignOut(user) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    
    const updates = {
        'status': 'offline',
        'logoutTimeStamp': timestamp
    };
    
    await updateUserDocument(user, updates);
}

// Google Sign-In Handler
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    authLoader.style.display = 'block';
    signInButton.disabled = true;
    
    auth.signInWithPopup(provider)
        .then(result => {
            // Signed in successfully
            console.log('User signed in:', result.user);
          const user = result.user;
            await handleUserSignIn(user);
        })
        .catch(error => {
            console.error('Sign in error:', error);
            authLoader.style.display = 'none';
            signInButton.disabled = false;
        });
}

// Sign Out Handler
function signOut() {
  const user = auth.currentUser;
    auth.signOut()
        .then(() => {
            console.log('User signed out');
          await handleUserSignOut(user);
        })
        .catch(error => {
            console.error('Sign out error:', error);
        });
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

// Event Listeners
signInButton.addEventListener('click', signInWithGoogle);
signOutButton.addEventListener('click', signOut);

// Initialize the app
function initAuth() {
    showSignInScreen();
    document.querySelector('.container').style.display = 'none';
}

// Export for testing if needed-probably not
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        signInWithGoogle,
        signOut,
        initAuth
    };
}
