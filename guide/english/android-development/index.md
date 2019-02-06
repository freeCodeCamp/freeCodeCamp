---
title: Android Development
---

## Table of Contents

* [Android Development](#android-development)
* [Getting started](#getting-started)
* [Setting Up and Getting Started with Android Studio](#setting-up-and-getting-started-with-android-studio)
* [Official Documentation](#official-documentation)
* [Java vs Kotlin](#java-vs-kotlin)
* [Beginners in Android Development Should Start With Java](#beginners-in-android-development-should-start-with-java)
* [Java Programmers Should Learn Kotlin](#java-programmers-should-learn-kotlin)
* [Practice](#practice)
* [Google Developer Console](#google-developer-console)
* [Training Resources](#training-resources)
* [Android Studio](#android-studio)

# Android Development

Android apps can be a great and fun way to get into the world of programming. Officially, programmers can use Java, Kotlin, or C++ to develop for Android. Though there may be API restrictions using tools, developers can use a large number of languages, including JavaScript, C, or assembly, and the possibilities are endless. There are also cross-platform tools like Apache Cordova, Flutter, and Xamarin to develop an Android application.

From simple games and utility apps to full-blown music players, there are many opportunities to create something meaningful with Android. The Android developer community is widespread, and the documentation and online resources are easy to find, so that you can tackle any issue that you're facing.

There is definitely a learning curve getting used to the Android framework, but once you understand the core components that make up the app, the rest will come naturally.

The learning curve involved in Android has a relatively smaller slope compared to learning other technologies such as NodeJS. It is also relatively easier to understand and make contributions to the [Android Open Source Project](https://source.android.com) (AOSP) hosted by Google. 

## Getting started
Check out the guides in this folder to learn about the 4 [core components](core-components/index.md) that make up an Android app and how you can get started with a sample app, and then delve into the more advanced topics such as fragments and the Gradle build system. Then check out the material design specifications guide as well to learn how to make your apps beautiful and user-friendly.

### Setting Up and Getting Started with Android Studio
Go to the [Java SE Download page](https://www.oracle.com/technetwork/java/javase/downloads/index.html) and install the latest JDK.

Download the Android Studio and SDK tools bundle from the [Android Studio Download page](https://developer.android.com/studio/).

Install the Android Studio and SDK following the set up. Keep note of the SDK location.

If you face any error go to settings later to solve it.

Lastly, learn to integrate 3rd party libraries and Firebase services to add numerous functionalities to your app. It would be helpful if you go through the official documentation for each component.

### Official Documentation

[Google Developers Guide for Android](https://developer.android.com/training/index.html)

#### Java vs Kotlin

Ever since Google announced Kotlin as an official language for Android development (joining Java) at Google IO in 2017, programmers new to the Android Developer ecosystem find themselves in a dilemma. The big question in front of them is whether they should learn Kotlin or Java.

##### Beginners in Android Development Should Start With Java

First and foremost is that Android development is not everything; as a programmer, you may be starting your career with Android development, but if you start with a well-established language like Java, you become a part of the bigger Java community and market, which directly means more job opportunities.

The second, and more important, thing is that there is a huge community of Java programmers, which means you can find answers when you are stuck. This is very important because, as a beginner, you will face a lot of technical problems and you might not know where to look when you are stuck. When you search Google with a Java problem, you are bound to get answers; the same cannot be said for Kotlin, which is still a relatively new programming language, so there aren't as many resources out there.

###### Java Programmers Should Learn Kotlin

Now, coming back to the second set of programmers who want to learn Android development: our fellow Java developers. For them, it's best to learn Kotlin because it can improve productivity.

A class which takes 50 lines of code in Java can be written in just one line in Kotlin. It can help you avoid all boiler-plate code, e.g. you don't need to specify getters and setters, equals(), hashCode() or toString() methods. Kotlin can generate all that by itself.

Kotlin was developed by JetBrains, the company behind one of the most popular Java IDEs: IntelliJ IDEA. They built Kotlin to improve productivity, but realized that all of their code couldn't be re-written in Kotlin. So they went on to make Kotlin fully interoperable with Java, a big bonus to many Android developers today.

Because Kotlin generates Java bytecode, you can use your favorite Java frameworks and libraries in Kotlin and your Java friends can also use any Kotlin framework you develop.

Here is the official kotlin learning - [Kotlin-Learning](https://kotlinlang.org/docs/reference/)

###### Develop Android & iOS Apps Using Flutter

[Official Docs](https://flutter.io)
If you are just a beginner in Android Developement. You can directly start learning Flutter (According to official docs flutter is a SDK for building high-performance, high-fidelity, apps for iOS and Android) using a single codebase. Flutter team made a statement that Flutter is now production ready. Flutter uses Dart programming language for building Apps.
*Few Advantages of using flutter for developing Apps for iOS and Android:*

1. Create Android and iOS apps using a single codebase.
2. Saves lots of time and effort.
3. Increase Productivity.

### Practice

[Codelabs for Boosting up Skills](https://codelabs.developers.google.com)

### Google Developer Console

[Google Developer Console For Publishing Your App In Google Play Store](https://developer.android.com/distribute/console/)

## Training Resources

- [Udacity Android Nanodegree Program](https://udacity.com/course/android-developer-nanodegree-by-google--nd801)
- [Android Developer Course on Udemy](https://www.udemy.com/become-an-android-developer-from-scratch)
- [Udemy The Complete Android Kotlin Developer Course](https://www.udemy.com/the-complete-kotlin-developer-course/)
- [Stanford CS193a Lecture Videos](http://web.stanford.edu/class/cs193a/lectures.shtml)

Following list contains the curated training resources for Android Development.

### [Udacity's Android Basics Nanodegree](https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803)

Ideal for **beginners**, this program comprises of following courses:

1. [Android Basics: User Interface](https://www.udacity.com/course/android-basics-user-interface--ud834)
2. [Android Basics: User Input](https://www.udacity.com/course/android-basics-user-input--ud836)
3. [Android Basics: Multiscreen Apps](https://www.udacity.com/course/android-basics-multiscreen-apps--ud839)
4. [Android Basics: Networking](https://www.udacity.com/course/android-basics-networking--ud843)
5. [Android Basics: Data Storage](https://www.udacity.com/course/android-basics-data-storage--ud845) *now removed from the Nanodegree program*

### [Udacity's Android Developer Nanodegree](https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801)

Ideal for **intermediate** level, this program comprises of following free courses and few paid *unlisted* here:

1. [Developing Android Apps](https://www.udacity.com/course/new-android-fundamentals--ud851)
2. [Advanced Android App Development](https://www.udacity.com/course/advanced-android-app-development--ud855)
3. [Gradle for Android and Java](https://www.udacity.com/course/gradle-for-android-and-java--ud867)
4. [Material Design for Android Developers](https://www.udacity.com/course/material-design-for-android-developers--ud862)

### [Developer Training by Google!](https://developers.google.com/training/android/)

This website contains *the best resources* from Google, must have a look at these. 

### [Udemy The Complete Android Kotlin Developer Course](https://www.udemy.com/the-complete-kotlin-developer-course/)

For Kotlin oriented Android Development.

### Books
- [Head First Android Development](https://www.amazon.in/Head-First-Android-Development-Griffiths/dp/1449362184)
- [Android Application Development All-In-One for Dummies, 2ed](https://www.amazon.in/Android-Application-Development-All-Dummies/dp/1118027701)

### Code Samples
It is good to check out code samples and projects for your learning process. There are many code samples available online. Here is a link for some android code samples - [Samples | Android Developers](https://developer.android.com/samples/).

### Android Studio
- [Android Studio](https://developer.android.com/studio/)  
- [Installing Android Studio](https://developer.android.com/studio/install)  
- [Running Apps in an Emulator](https://developer.android.com/studio/run/emulator)

### Useful Libraries
- [Retrofit](https://square.github.io/retrofit/) - HTTP Requests made easy.
- [Room Persistence Library](https://developer.android.com/topic/libraries/architecture/room) - Google's database wrapper to make storing local data easier.
- [LiveData](https://developer.android.com/topic/libraries/architecture/livedata) - Google's lifecycle aware library for making your UI react to data.
 
### Additional References
- [Android Vocabulary Glossary](https://developers.google.com/android/for-all/vocab-words/)
- [Android Documentation Search](https://developer.android.com/)
