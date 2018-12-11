---
title: Basic Commands
---
## Basic Commands

Here you will find a list of basic commands to start developing iOS and Android apps using React Native. If you don't have it installed yet, is highly recommended that you follow the [official guide](https://facebook.github.io/react-native/docs/getting-started.html).


### Starting a new project

There are different ways you can bootstrap a react native application. You can use **Expo** or `create-react-native-app`(which in turns uses Expo-Cli) to start your new project, but with this method you are in more control of what happend in your project and can communicate, tweak and write your own modules with native libraries for iOS and Android mobile platform.
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

**iOS Manual Linking**

The Link function in the `react-native-cli` occasionally doesn't work for iOS and you will need to manually link your Library. In order to link a library that uses native code manually, follow these steps. 

1. If the library has native code, there should be an .xcodeproj file inside of it's folder. Drag this file to your project on Xcode (usually under the Libraries group on Xcode), or right click your Libraries group and select "Add files to <Your Project>"

2. Click on your main project file (the one that represents the .xcodeproj). Then select Build Phases and drag the static library from the Products folder inside the Library you are importing to Link Binary With Libraries, or under the Link Binary With Libraries section, you can click the + button and find the library that file that represents the library you are trying to link in the list.

3. Not every library will need this step, what you need to consider is: Do I need to know the contents of the library at compile time? What that means is, are you using this library on the native side or only in JavaScript? If you are only using it in JavaScript, you are good to go!
 If you do need to call it from native, then we need to know the library's headers. To achieve that you have to go to your project's file, select Build Settings and search for Header Search Paths. There you should include the path to your library. 

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
