---
title: Setting up Firebase Realtime Database
localeTitle: 设置Firebase实时数据库
---
# 先决条件

1.  最新版本的Android Studio
2.  已手动或通过Firebase助手与Firebase连接（请参阅[连接到Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ）。 建议您这样做，以免在下面提到的文档中与此相关的部分说明混淆。

# 使用Android Studio进行设置

将Firebase添加到项目后，您需要添加额外的依赖项并执行其他操作才能进行设置 实时数据库。有两个关于此的文件：

1.  Firebase快速入门[文档](https://www.firebase.com/docs/android/quickstart.html)
2.  谷歌[文档](https://firebase.google.com/docs/database/android/start/)

两者之间存在一些差异。 要弥补它们，您可以按照Firebase文档进行操作，但不要只使用其中列出的gradle依赖项，而是使用以下列表。 这样，您就不会错过任何文档中的任何步骤。

**添加Gradle依赖项** 1 在app-level build.gradle文件中，添加以下内容

```java
dependencies { 
    implementation 'com.firebase:firebase-client-android:2.5.2+' 
    implementation 'com.google.firebase:firebase-database:15.0.0' 
 } 
```

# 安装Firebase Android SDK，权限和设置代码

有关这些的详细说明，请[访问此处](https://www.firebase.com/docs/android/quickstart.html) 。

# 资源

要了解如何在Android应用程序中读取和写入数据库，请参阅参考资料中列出的两个文档。 您还可以在Google文档中了解如何使用Firebase产品，但同样也可以查看Firebase文档或任何可能有用的文档。

# 参考

*   FIREBASE， _Android快速入门_ ，17/04 / 201,07 / 05/201，https：//www.firebase.com/docs/android/quickstart.html
*   GOOGLE， _为Android设置Firebase实时数据库_ ，05/04 / 201,07 / 05/201，https：//firebase.google.com/docs/database/android/start/

# 脚注

第一行来自Firebase [文档，介绍](https://www.firebase.com/docs/android/quickstart.html)如何在Android Studio中设置实时数据库。 在文档中，使用了'compile'，但不推荐使用'compile'并将其替换为'implementation'。 第二行来自谷歌[文档](https://firebase.google.com/docs/database/android/start/) ，在Android Studio中设置实时数据库。 如果添加两者实际上是多余的，请更正本文。