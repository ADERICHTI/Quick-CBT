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

// Google Sign-In Handler
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    authLoader.style.display = 'block';
    signInButton.disabled = true;
    
    auth.signInWithPopup(provider)
        .then(result => {
            // Signed in successfully
            console.log('User signed in:', result.user);
        })
        .catch(error => {
            console.error('Sign in error:', error);
            authLoader.style.display = 'none';
            signInButton.disabled = false;
        });
}

// Sign Out Handler
function signOut() {
    auth.signOut()
        .then(() => {
            console.log('User signed out');
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
