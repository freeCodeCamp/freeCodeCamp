---
title: connecting-to-firebase
---

# Prerequisites
1. The Latest Version of Android Studio

<br>
The easiest way to connect to Firebase is through the Firebase Assistant in Android Studio. 

# 1. Connecting using Firebase Assistant

1. Create an account in the [Firebase Console](https://console.firebase.google.com).
Click _add project_ to add your Android Studio project to it. 

2. Install Google Repository
You can do this by adding the dependency into your project-level build.gradle file, as shown below:

```java
allprojects{
  repositories {
        maven {
            url "https://maven.google.com" // Google's Maven repository
        }
    }
}
```

Alternatively, you could do that [using the GUI](https://developer.android.com/studio/write/firebase). 

3. Go to Tools > Firebase and select Connect to Firebase

If you wish to connect to Firebase manually, detailed instructions are available [here](https://firebase.google.com/docs/android/setup). 
<br>
Having connected your Android Studio project to Firebase, you can either 
1. click on a product in the Firebase Assistant to get to the appropriate Google docs where you will be told how to proceed.
2. go to desired product in **Project Overview** in the Console and click on **Get Started**.
3. go to the [Firebase docs](https://www.firebase.com/docs/android/quickstart.html) to see how to setup individual products in your project.

Reading a combination of all three will enable you to setup the product, which includes adding suitable dependencies to your build.gradle file.

**If You Encounter Gradle Sync errors**
Try To Change The Firebase-core Version or Firebase-database version
