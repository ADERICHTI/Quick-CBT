// Initialize Firebase services
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
        
        // Set or update user document
        await userRef.set({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            online: true,
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        
        // Set up listener for connection status
        manageConnectionStatus(userRef);
    } catch (error) {
        console.error('Error updating user status:', error);
    }
}

// Manage real-time connection status
function manageConnectionStatus(userRef) {
    // Detect connection state changes
    const connectionRef = db.collection('.info').doc('connected');
    
    const unsubscribe = connectionRef.onSnapshot((snapshot) => {
        if (snapshot.data().connected) {
            // User is online
            userRef.update({
                online: true,
                lastSeen: null
            });
        } else {
            // User went offline
            userRef.update({
                online: false,
                lastSeen: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
    });
    
    // Clean up listener when user signs out
    auth.onAuthStateChanged((user) => {
        if (!user) {
            unsubscribe();
        }
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
