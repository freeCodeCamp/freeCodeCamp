---
title: connecting-to-firebase
localeTitle: 连接到火力
---
# 先决条件

1.  Android Studio的最新版本

连接到firebase的最简单方法是使用firebase助手。

# 1.使用Firebase助手进行连接

1.  在[Firebase控制台中](https://console.firebase.google.com)创建一个帐户。 单击添加项目以将Android Studio项目添加到其中。
    
2.  安装Google Repository 您可以通过将依赖项添加到项目级build.gradle文件中来执行此操作，如下所示：
    

```java
allprojects{ 
  repositories { 
        maven { 
            url "https://maven.google.com" // Google's Maven repository 
        } 
    } 
 } 
```

或者，您可以[使用GUI](https://developer.android.com/studio/write/firebase)执行此[操作](https://developer.android.com/studio/write/firebase) 。

3.  转到工具> Firebase，然后选择连接到Firebase

如果您希望手动连接到firebase，可以[在此处](https://firebase.google.com/docs/android/setup)获取详细说明。 将Android Studio项目连接到Firebase后，您也可以

1.  点击firebase助手中的产品，然后转到Google文档，在那里您将被告知如何继续操作
2.  转到控制台中的**项目概述**中的所需产品，然后单击**“开始使用”**
3.  转到[Firebase文档](https://www.firebase.com/docs/android/quickstart.html) ，了解如何在项目中设置单个产品

读取所有这三者的组合将使您能够设置产品，其中包括向build.gradle文件添加合适的依赖项。

**如果您遇到Gradle Sync** 尝试更改Firebase核心版本或Firebase数据库版本