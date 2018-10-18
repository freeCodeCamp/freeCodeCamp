---
title: Setting up Cloud Firestore
---

# Setting up Cloud Firestore

Cloud Firestore is a scalable and flexible NoSQL database for mobile, web, and server development. Like real-time database it offers listeners to keep the data in sync for mobile and web clients and also offers offline capability.

## Prerequisites
1. The latest version of Android Studio
2. Have connected with Firebase manually or via Firebase Assistant (See [Connecting to Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase)).

It is recommended that you do this so as to not be confused by partial instructions related to this in the docs mentioned below.

## Setting it up with Android Studio

Once you have added firebase to your project, you need to perfrom additional steps such as adding the relevant dependencies and so on. You can find out more information and sample code from the [documentation](https://firebase.google.com/docs/firestore/quickstart).

**Add Gradle Dependencies**

In your app-level build.gradle file, add the following

```java
dependencies {
    implementation 'com.google.firebase:firebase-firestore:17.1.1'
}
```

## Resources

* You can learn more from the [codelabs](https://codelabs.developers.google.com/codelabs/firestore-android/#0) offered by Google.
* You can watch a video about it [here](https://www.youtube.com/watch?v=kDZYIhNkQoM).