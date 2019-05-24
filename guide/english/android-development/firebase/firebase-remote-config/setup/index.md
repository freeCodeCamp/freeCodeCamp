---
title: Setting up Firebase Remote Config
---

# Setting up Firebase Remote Config

Firebase Remote Config is an easy way to modify parameters of your app. Using the Firebase Console one can easily alter the parameters to provide a new look to the app. Remote Config can also be used to perform A/B testing.

## Prerequisites
1. The latest version of Android Studio
2. Have connected with Firebase manually or via Firebase Assistant (See [Connecting to Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase)).

It is recommended that you do this so as to not be confused by partial instructions related to this in the docs mentioned below.

## Setting it up with Android Studio

Once you have added firebase to your project, you need to perform additional steps such as adding the relevant dependencies and so on. You can find out more information and sample code from the [documentation](https://firebase.google.com/docs/remote-config/use-config-android).

**Add Gradle Dependencies**

In your `app-level build.gradle` file, add the following

```
dependencies {
  implementation 'com.google.firebase:firebase-config:16.1.0'
}
```


## Resources

* You can learn more from the [codelabs](https://codelabs.developers.google.com/codelabs/firebase-android/#0) offered by Google.

