
---
title: Setting up Firebase Crashlytics
---

# Setting up Firebase Crashlytics

Firebase Crashlytics is a powerful tool to analyse your crashes as they occur in real world deployed app. It is lightweight and proves to be helpful in finding and tracking crashes. Crashlytics is available for both android and ios.

## Prerequisites
1. The latest version of Android Studio
2. Have connected with Firebase manually or via Firebase Assistant (See [Connecting to Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase)).

It is recommended that you do this so as to not be confused by partial instructions related to this in the docs mentioned below.

## Setting it up with Android Studio

Once you have added firebase to your project, you need to perform additional steps such as adding the relevant dependencies and so on. You can find out more information and sample code from the [documentation](https://firebase.google.com/docs/crashlytics/get-started#android).

**Add Gradle Dependencies**

In your `app-level build.gradle` file, add the following

```java
apply plugin:  'io.fabric'
dependencies {
    implementation 'com.google.firebase:firebase-core:16.0.4'  // Add dependency 
    implementation 'com.crashlytics.sdk.android:crashlytics:2.9.5'**
}
```
In your `project-level build.gradle` file, add the following

```java
buildscript { 
  repositories {
        maven { url 'https://maven.fabric.io/public'  }
  }

   dependencies { 
     classpath 'com.google.gms:google-services:4.1.0' 
     classpath 'io.fabric.tools:gradle:1.25.4'
   }
}
allprojects {  
 repositories {  
       maven { url 'https://maven.google.com/'  }
   }  
}
```

## Resources

* You can learn more from the [codelabs](https://codelabs.developers.google.com/codelabs/firebase-android/#0) offered by Google.

