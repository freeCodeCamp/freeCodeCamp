---
title: Setting up Firebase Storage
localeTitle: 设置Firebase存储
---
# 设置Firebase存储

## 先决条件

1.  最新版本的Android Studio
2.  已手动或通过Firebase助手与Firebase连接（请参阅[连接到Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ）。

建议您这样做，以免在下面提到的文档中与此相关的部分说明混淆。

## 使用Android Studio进行设置

将Firebase添加到项目后，您需要添加额外的依赖项并执行其他操作才能进行设置 Firebase存储。有以下文档：

*   [火力地堡](https://firebase.google.com/docs/storage/android/start)

该文档中可能存在混淆的可能性，或者如果您是firebase的新手，那么您可能会面临一些难以理解的问题。 因此，请仔细遵循以下步骤：

**添加Gradle依赖项**

在app-level build.gradle文件中，添加以下内容

```java
dependencies { 
    implementation 'com.google.firebase:firebase-storage:16.0.2' 
 } 
```

## 安装Firebase Android SDK，权限和设置代码

有关这些的详细说明，请[访问此处](https://firebase.google.com/docs/android/setup) 。

## 资源

要了解如何在Android应用程序中读取和写入存储，请参阅下面列出的文档。

*   [从Android上传文件 Firebase指南](https://firebase.google.com/docs/storage/android/upload-files)
    
*   [将文件下载到Android Firebase指南](https://firebase.google.com/docs/storage/android/download-files)
    

## Firebase开发人员的示例项目

您可以从Firebase开发人员处获取这些示例，以启动Firebase存储 Firebase Quickstart-Android [android-sample](https://github.com/firebase/quickstart-android/tree/master/storage)

## 注意

谷歌现在弃用“编译”而代替你需要使用“实现”。