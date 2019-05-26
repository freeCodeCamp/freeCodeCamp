---
title: Setting up Firebase Authentication
---

# Setting up Firebase Authentication

Firebase Authentication is an easy way for mobile, web authentication. Firebase provides us with a default UI but can be used with customized UI too. It is a hassel free way to perform Auth operations in your android app.

## Prerequisites
1. The latest version of Android Studio
2. Have connected with Firebase manually or via Firebase Assistant (See [Connecting to Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase)).

It is recommended that you do this so as to not be confused by partial instructions related to this in the docs mentioned below.

## Setting it up with Android Studio

Once you have added firebase to your project, you need to perform additional steps such as adding the relevant dependencies and so on. You can find out more information and sample code from the [documentation](https://firebase.google.com/docs/auth/android/start/).

**Add Gradle Dependencies**

In your app-level build.gradle file, add the following

```java
dependencies {
    implementation 'com.google.firebase:firebase-auth:16.0.4'
}
```

## Resources

* You can learn more from the [codelabs](https://codelabs.developers.google.com/codelabs/firebase-android/#0) offered by Google.

