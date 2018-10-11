---
title: Basic Commands
---
## Basic Commands

Here you will find a list of basic commands to start developing iOS and Android apps using React Native. If you don't have it installed yet, is highly recommended that you follow the [official guide](https://facebook.github.io/react-native/docs/getting-started.html).


### Starting a new project

There are different ways you can bootstrap a react native application. You can use **Expo** or `create-react-native-app`(which in turns uses Expo-Cli) to start your new project, but with this method you are in more control of what happend in your projecto and can communicate, tweak and write your own modules with native libraries for iOS and Android mobile platform.
```
react-native init [PROJECT-NAME]
cd [PROJECT-NAME]
```



**Run app in Android emulator**

This command is self explanatory and as it says it will start the Android emulator and install the app you just created. You need to be in the root of the project to run this command.
```
react-native run-android
```


**Run app in iOS emulator**

This command do exactly the same as `react-native run-android` but instead of the Android emulator, it opens the iPhone simulator.
```
react-native run-ios
```


**Link dependencies to native projects**

Some libraries have dependencies that need to be linked in the native code generated for React Native. If something doesn't work after you installed a new library, maybe is because you skip this step.
```
react-native link [LIBRARY-NAME]
```


**Clear bundle**

If something don't run as expected, maybe you need to clear and create a new bundle with this command.
```
watchman watch-del-all
```


**Support decorators**

JSX doesn't support decorators by default so you need to install the **Babel** plugin to make it work.
```
npm install babel-plugin-transform-decorators-legacy --save
npm install babel-plugin-transform-class-properties --save
```


### Export APK to run in device
With the following commands you will have and unsigned apk so you can install and share with your colleagues for testing purposes. Just remember that this apk is not ready to upload to the App Store or production. 
You will find your fresh apk in *android/app/build/outputs/apk/app-debug.apk*

**1. Bundle debug build**
```
react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
```


**2. Create debug build**
```
cd android
./gradlew assembleDebug
```
