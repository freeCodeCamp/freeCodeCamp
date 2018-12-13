---
title: Setting up Firebase Authentication
---

# Setting up Firebase Authentication

## Prerequisites
1. The latest version of Android Studio
2. Have connected with Firebase manually or via Firebase Assistant (See [Connecting to Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase)). 

It is recommended that you do this so as to not be confused by partial instructions related to this in the docs mentioned below. 

## Setting it up with Android Studio

After adding Firebase to your project, you will need to add extra dependencies and do some other things in order to setup 
the Firebase Authentication for Google sign-in. There are following documentation about this:

* [Firebase](https://firebase.google.com/docs/storage/android/start)

There may be chance of confusion in that documentation or if you are new to firebase then you may face little bit hard to understand it. 
So follow the belows steps carefully:


**Add Gradle Dependencies**

In your app-level build.gradle file, add the following

```java
dependencies {
implementation 'com.google.firebase:firebase-auth:16.0.4'
implementation 'com.google.android.gms:play-services-auth:16.0.1'
}
```
## Installation of Firebase Android SDK, permissions and setup code
Detailed instructions for these can be found [here](https://firebase.google.com/docs/android/setup).

## Resources

* [SHA-1 fingerprint](https://developers.google.com/android/guides/client-auth)

It is important that after you connect your project to firebase you should specify SHA-1 fingerprint, do so from the Settings page of the Firebase console. 

* [Enable Google Sign-In in the Firebase console]
1. In the Firebase console, open the Auth section. 
![](https://i.imgur.com/mEvXx3A.png)
2. On the Sign in method tab, enable the Google sign-in method and click Save.
![](https://i.imgur.com/tYzAJK1.png)

There are four steps that must be followed for the sign-in:

1. Integrate Google Sign-In bt following the link attached [Integrating Google Sign-In into Your Android App page](https://developers.google.com/identity/sign-in/android/sign-in) this helps in setting up the login button, checking for existing users etc. When you configure the GoogleSignInOptions object, call requestIdToken:
```
GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
        .requestIdToken(getString(R.string.default_web_client_id))
        .requestEmail()
        .build();
 ```      
You must pass your server's client ID to the requestIdToken method. To find the OAuth 2.0 client ID:
1. Open the [Credentials](https://console.developers.google.com/apis/credentials) page in the API Console.
2. The Web application type client ID is your backend server's OAuth 2.0 client ID.

After you integrate Google Sign-In, your sign-in activity has code similar to the following:
```
private void signIn() {
    Intent signInIntent = mGoogleSignInClient.getSignInIntent();
    startActivityForResult(signInIntent, RC_SIGN_IN);
}

@Override
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);

    // Result returned from launching the Intent from GoogleSignInApi.getSignInIntent(...);
    if (requestCode == RC_SIGN_IN) {
        Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
        try {
            // Google Sign In was successful, authenticate with Firebase
            GoogleSignInAccount account = task.getResult(ApiException.class);
            firebaseAuthWithGoogle(account);
        } catch (ApiException e) {
            // Google Sign In failed, update UI appropriately
            Log.w(TAG, "Google sign in failed", e);
            // ...
        }
    }
}

```
2. In your sign-in activity's onCreate method, get the shared instance of the FirebaseAuth object:
```
private FirebaseAuth mAuth;
// ...
// Initialize Firebase Auth
mAuth = FirebaseAuth.getInstance();
```
3. It is important to check if the a user has already participated and initialized his gmail account with application hence onStart you need to test the user status:
```
@Override
public void onStart() {
    super.onStart();
    // Check if user is signed in (non-null) and update UI accordingly.
    FirebaseUser currentUser = mAuth.getCurrentUser();
     if(currentUser!=Null){
     //User exists
     }
}
```
4. Finally, after a user successfully signs in, get the ID token from the GoogleSignInAccount object, exchange it for a Firebase credential, and authenticate with Firebase using the Firebase credential, without this step your user details will not be logged in the Firebase Auth user list:
```
private void firebaseAuthWithGoogle(GoogleSignInAccount acct) {
    Log.d(TAG, "firebaseAuthWithGoogle:" + acct.getId());

    AuthCredential credential = GoogleAuthProvider.getCredential(acct.getIdToken(), null);
    mAuth.signInWithCredential(credential)
            .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                @Override
                public void onComplete(@NonNull Task<AuthResult> task) {
                    if (task.isSuccessful()) {
                        // Sign in success, update UI with the signed-in user's information
                        Log.d(TAG, "signInWithCredential:success");
                        FirebaseUser user = mAuth.getCurrentUser();
                        updateUI(user);
                    } else {
                        // If sign in fails, display a message to the user.
                        Log.w(TAG, "signInWithCredential:failure", task.getException());
                        Snackbar.make(findViewById(R.id.main_layout), "Authentication Failed.", Snackbar.LENGTH_SHORT).show();
                        updateUI(null);
                    }

                    // ...
                }
            });
}
```
## Note
Google now deprecated 'compile' and in place of that you need to use 'implementation'.

