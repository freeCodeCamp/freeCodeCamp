---
title: Firebase Cloud Messaging
--- 
# Firebase Cloud Messaging
Firebase Cloud Messaging is a free service to send Notifications to your app. Firebase Cloud Messaging or **FCM** is used to send notifications to your app from either the Firebase Console or using your own server.

FCM can also carry payload or data messages along with Notification Messages. These data messages can be used as parameters to a functions which can then perform an action like check for updates from your server, make changes to shared preferences, etc to name a few possibilities.

FCM is a very powerful tool in user engagement and user retention.

# Setup Firebase Cloud Messaging in Android Studio

 1.  If you haven't already, [add Firebase to your Android project](https://firebase.google.com/docs/android/setup).
 2.  Add the following line to the build.gradle file (App level)  
 `implementation 'com.google.firebase:firebase-messaging:17.3.3'` 
  Always check if there is a new version available i.e. 17.3.+
 
 3. Add the following code to the Android App Manifest
 `<service  android:name=".java.MyFirebaseMessagingService">  `
` <intent-filter>  `
 `<action  android:name="com.google.firebase.MESSAGING_EVENT"  />  `
 `</intent-filter>  `
`</service>`
 4. Create a Java File named **MyFirebaseMessagingService** with the contents similar to [this file](https://raw.githubusercontent.com/firebase/quickstart-android/ed84b6e96933754d2d376edb761ab641fed312c1/messaging/app/src/main/java/com/google/firebase/quickstart/fcm/java/MyFirebaseMessagingService.java)
 
And that's it. You can now use the Firebase console to receive messages sent to the app.

# Related Courses

 - [Udacity's Firebase in a Weekend](https://classroom.udacity.com/courses/ud0352)
 - [Firebase Codelab by Google](https://codelabs.developers.google.com/codelabs/firebase-android/#0)
