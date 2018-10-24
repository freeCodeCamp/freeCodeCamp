## Firebase Authentication for Web
Firebase ships with its own email/password auth as well as OAuth2 integrations for Google, Facebook, Twitter and GitHub. You can also integrate your own proprietary auth systems with Firebase Authentication to grant users access to data without forcing them to create an account outside of your existing systems.

## Firebase User System

Firebase Auth includes a user management system. You can save some basic data against your Firebase Auth users, and you offer multiple login methods — email/password, Google, Facebook… — and link your users’ accounts into single Firebase Auth user accounts. Auth also provides for integrations into your pre-existing auth system so that your app can take advantage of Firebase’s security rules.

Firebase Auth provides an observer for auth changes:
```java
firebase.auth().onAuthStateChanged(function(user) {
 window.user = user; // user is undefined if no user signed in
});
```

The above example keeps window.user in sync with your Firebase Auth user. user will be undefined if the user is not logged in.
 
 You can also manipulate your current user. You obtain your current user with firebase.auth().currentUser, which looks like the object below 👇, but with a bunch of extraneous Firebase attributes that you’ll never use and don’t need to know.
 
 ```
 {
 	displayName: null,
 	email: “chris@quiver.is”,
 	emailVerified: false,
 	isAnonymous: false,
 	photoURL: null,
 	providerData: {
  	refreshToken: “ANflqpEVNvT4iOyKVVRyybjcuwKqnca…”,
  	uid: “P1yjH4GgcFQcJUHULmTgMLC68w64”
 	},
 	refreshToken: “ANflqpEVNvT4iOyKVVRyybjcuwKqnca…”,
 	uid: “P1yjH4GgcFQcJUHULmTgMLC68w64”
}
 ```
 
 Other OAuth providers such as Google and Facebook will give you more data in your providerData node depending on the scopes that you ask your users to approve. 
 
 You can also use the following functions — all of which return promises — to manipulate your user:
 
 ```
 	var currentUser = firebase.auth().currentUser;
	currentUser.updateProfile({
 		displayName: “Bill Murray”,
 		photoURL: “http://www.fillmurray.com/g/200/300"
	});
	currentUser.sendPasswordResetEmail(“bill-murray@gmail.com”); // Sends a temporary password
	// Re-authentication is necessary for email, password and delete functions
	var credential = firebase.auth.EmailAuthProvider.credential(email, password);
	currentUser.reauthenticate(credential);
	currentUser.updateEmail(“bill-murray@gmail.com”);
	currentUser.updatePassword(“some-new-password-string”);
	currentUser.delete();
 ```
 
## Email/Password
Email/password auth has functions to register new users, sign in existing users and sign out a signed-in user. All functions return promises, and new user registration automatically signs in the user. All three functions trigger the ```onAuthStateChanged``` observer… so you should be handling successful auth changes in the handler instead of with the promises that these functions return.

```
	// Register a new user
	firebase.auth().createUserWithEmailAndPassword(email, password)
 	.catch(function (err) {
   	// Handle errors
 	});

	// Sign in existing user
	firebase.auth().signInWithEmailAndPassword(email, password)
 	.catch(function(err) {
   	// Handle errors
 	});

	// Sign out user
	firebase.auth().signOut()
 	.catch(function (err) {
   	// Handle errors
 	});
```

## Google Sign In
Review the Google Sign-In docs. They’re better than anything that I could write up here, and Google will keep them up to date.

My only notes are that you need to continue using the onAuthStateChanged observer as before, and make sure to add some scopes:
```
<script src=”https://apis.google.com/js/platform.js" async defer></script>
<script>
 var provider = new firebase.auth.GoogleAuthProvider();
 provider.addScope(‘profile’);
 provider.addScope(‘email’);
 provider.addScope(‘https://www.googleapis.com/auth/plus.me');
 firebase.auth().signInWithPopup(provider); // Opens a popup window and returns a promise to handle errors.
</script>
```

## Anonymous Auth
You can automatically sign in your user anonymously to create a sort of Firebase-persisted session.
```
firebase.auth().signInAnonymously()
 .catch(function(error) {
  // Handle errors
 });
 ```
