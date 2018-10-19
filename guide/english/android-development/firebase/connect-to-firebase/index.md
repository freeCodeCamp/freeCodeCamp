---
title: connecting-to-firebase
---

# Prerequisites
1. The Latest Version of Android Studio
2. Device running Android 4.0 or newer
<br>
## Connect firebase using one of this two ways:
1. Connect using Firebase Assistant in Android Studio
2. Connect firebase [using the GUI](https://developer.android.com/studio/write/firebase).
3. Connect firebase manually 
 
<br>
The easiest way to connect to firebase is to use the firebase assistant. 

# 1. Connecting using Firebase Assistant in Android Studio

(i) Create an account in the [Firebase Console](https://console.firebase.google.com).
Click add project to add your Android Studio project to it. 

(ii) Install Google Repository
You can do this by adding the dependency into your project-level build.gradle file like this:

```java
allprojects{
  repositories {
        maven {
            url "https://maven.google.com" // Google's Maven repository
        }
    }
}
```

# 2. You could connect firebase [using the GUI](https://developer.android.com/studio/write/firebase). 

(i) Go to Tools > Firebase and select Connect to Firebase

# 3. Connect to firebase manually, detailed instructions are available [here](https://firebase.google.com/docs/android/setup). 
<br>
Having connected your Android Studio project to Firebase, you can either 
(i) click on a product in the firebase assistant and get taken to the Google docs where you will be told how to proceed
(ii) go to desired product in **Project Overview** in the Console and click on **Get Started** 
(iii) go to the [Firebase docs](https://www.firebase.com/docs/android/quickstart.html) to see how to setup individual products in your project

Reading a combination of all three will enable you to setup the product, which includes adding suitable dependencies to your build.gradle file.

**If You Encounter Gradle Sync**
Try To Change The Firebase-core Version or Firebase-database version

