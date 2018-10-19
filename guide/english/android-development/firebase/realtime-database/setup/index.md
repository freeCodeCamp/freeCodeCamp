---
title: Setting up Firebase Realtime Database
---

# Prerequisites
1. The latest version of Android Studio
2. Have connected with Firebase manually or via Firebase Assistant(See [Connecting to Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase)). 
<br>
It is recommended that you do this so as to not be confused by partial instructions related to this in the docs mentioned below. 

# Setting it up with Android Studio
<br>
After adding Firebase to your project, you will need to add extra dependencies and do some other things in order to setup 
the Realtime Database. There are two documentations about this:

1. Firebase quickstart [docs](https://www.firebase.com/docs/android/quickstart.html)
2. Google [docs](https://firebase.google.com/docs/database/android/start/)

There are some discrepancies between the two. 
To make up for them, you can follow the Firebase docs, but instead of just using the gradle dependencies listed there, use the following list. 
That way, you will not miss any steps from either documentation. 

<br>

**Add Gradle Dependencies**<sup>1</sup>
<br>
In your app-level build.gradle file, add the following
<br>
```java
dependencies {
    implementation 'com.firebase:firebase-client-android:2.5.2+'
    implementation 'com.google.firebase:firebase-database:15.0.0'
}
```
# Installation of Firebase Android SDK, permissions and setup code
Detailed instructions for these can be found [here](https://www.firebase.com/docs/android/quickstart.html).

# Resources 
To learn about how to read from and write to the database in your Android application, refer to the two docs listed in References.
<br>
You can also find out how to use Firebase products in the Google documentation, but again it is probably a good idea to look at the Firebase docs as well, or anything that might be helpful.

# References
- FIREBASE, _Android Quickstart_, 17/04/2018, 07/05/2018, https://www.firebase.com/docs/android/quickstart.html
- GOOGLE, _Set up Firebase Realtime Database for Android_, 05/04/2018, 07/05/2018, https://firebase.google.com/docs/database/android/start/

# Footnote
The first line comes from the Firebase [docs](https://www.firebase.com/docs/android/quickstart.html) on setting up realtime db in Android Studio.
<br>
In the docs, 'compile' is used but that is deprecated and replaced by 'implementation'. 
<br>
The second line comes from the Google [docs](https://firebase.google.com/docs/database/android/start/) on setting up realtime db in Android Studio.
<br>
If it is actually redundant to add both, please correct this article. 
Check dependencies in case of errors
