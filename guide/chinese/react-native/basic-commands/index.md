---
title: Basic Commands
localeTitle: 基本命令
---
## 基本命令

在这里，您将找到使用React Native开始开发iOS和Android应用程序的基本命令列表。如果您尚未安装，强烈建议您按照[官方指南进行操作](https://facebook.github.io/react-native/docs/getting-started.html) 。

### 开始一个新项目

您可以通过不同的方式引导反应本机应用程序。您可以使用**Expo**或`create-react-native-app` （它们依次使用Expo-Cli）来启动您的新项目，但是通过这种方法，您可以更好地控制项目中发生的事情，并可以进行沟通，调整和编写拥有适用于iOS和Android移动平台的本机库的模块。
```
react-native init [PROJECT-NAME] 
 cd [PROJECT-NAME] 
```

**在Android模拟器中运行应用**

这个命令是自我解释的，因为它说它将启动Android模拟器并安装刚刚创建的应用程序。您需要位于项目的根目录中才能运行此命令。
```
react-native run-android 
```

**在iOS模拟器中运行应用程序**

此命令与`react-native run-android`完全相同，但它不是Android模拟器，而是打开iPhone模拟器。
```
react-native run-ios 
```

**将依赖项链接到本机项目**

某些库具有需要在为React Native生成的本机代码中链接的依赖项。如果在安装新库后某些操作无效，可能是因为您跳过此步骤。
```
react-native link [LIBRARY-NAME] 
```

**清除捆绑**

如果某些内容未按预期运行，则可能需要使用此命令清除并创建新的bundle。
```
watchman watch-del-all 
```

**支持装饰者**

JSX默认不支持装饰器，因此您需要安装**Babel**插件才能使其工作。
```
npm install babel-plugin-transform-decorators-legacy --save 
 npm install babel-plugin-transform-class-properties --save 
```

### 导出APK以在设备上运行

使用以下命令，您将拥有和未签名的apk，以便您可以安装并与同事共享以进行测试。请记住，这个apk还没有准备好上传到App Store或制作。 你会发现你的新鲜apk在_android / app / build / outputs / apk / app-debug.apk_

**1.捆绑调试版本**
```
react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug 
```

**2.创建调试版本**
```
cd android 
 ./gradlew assembleDebug 

```