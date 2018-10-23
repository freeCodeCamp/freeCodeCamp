---
title: Uploading an Android application to the Playstore
---
To upload an application to playstore you need to follow the following steps:

## Obtain License from google to publish apps:


1.  Navigate [here](https://play.google.com/apps/publish/signup/) and sign in using your Gmail account.
2.  Accept the developer agreement.
3.  Pay the 25 USD fees and fill in other details.

## Post Obtaining license you need to follow some steps before generating an apk.

1. Every apk must be generated in release mode. The mode can be found in Build variant
![](https://i.imgur.com/oQc1SKK.png)


2. In build.gradle of the application ensure that the **version code** is unique for every apk build. Playstore will use this number to keep a track of seperate apk versions.

3. Ensure that debuggable has been set to false and resources have been shrunk appropriately. Look for buildTypes within build.gradle of the application.
```
buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            debuggable false
            signingConfig signingConfigs.config
        }
        debug {
            debuggable false
        }
    }
```
4. Finally generate a signed apk. Click [here](https://developer.android.com/studio/publish/app-signing) to learn more about signing the apk.


## After generating signed apk navigate back to the play console.
The instructions to be followed subsequently are provided [here](https://support.google.com/googleplay/android-developer/answer/113469?hl=en&ref_topic=7072031).


Note: Information provided here is in respsect with the author's practices which happen to follow the guidlines followed and recommended by the andrid community. 
           
