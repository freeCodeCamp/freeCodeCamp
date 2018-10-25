---
title: React Native
localeTitle: 反应原生
---
## 反应原生

React Native是一个跨平台框架，用于构建可在浏览器外部运行的移动应用程序 - 最常见的是iOS和Android应用程序

它可用于在Windows设备，桌面操作系统和Apple TV应用程序上构建应用程序，但本指南仅涵盖其最常见的用途 - Android和iOS应用程序。

**目录**

*   [什么是React Native？](#what-is-react-native)
*   [选择React Native的原因](#reasons-to-choose-react-native)
*   [如何开始使用React Native](#how-to-get-started-with-react-native)

### 什么是React Native

React Native介于移动应用程序频谱上的本机应用程序和混合应用程序之间。您创建的用户界面完全是本机的，整体应用程序性能几乎与编写本机应用程序一样好。它还使您可以灵活地将Web视图（网页）或本机代码（适用于Android的Java / Kotlin，适用于iOS的Objective C / Swift）嵌入到您希望的应用程序中。

它遵循与React相同的模式，其中视图（您在屏幕上看到的内容）是从JavaScript文件呈现的。不同之处在于它提供了自己的API来处理本机移动视图与Web上的DOM。如果您对此工作原理感到困惑，请遵循freeCodeCamp上的本指南，它将逐步介绍这些概念。

### 选择React Native的原因

1.  **代码可重用性** - 它使用一个在两个平台之间共享的代码。
2.  **重用Web工具和技能** - 重用JavaScript知识，工具和实用程序，如`axios` ，Redux和其他不需要Web上的DOM的库。
3.  **针对开发人员的工作效率进行了优化** - 具有热/实时模块重新加载和chrome开发工具等功能，可以开箱即用！
4.  **性能** - 比Ionic和Cordova等混合应用程序框架**表现**更好，因为它不使用Web视图。
5.  **公司支持** - 很多公司支持和贡献React Native，包括Walmart，Airbnb，Wix，当然还有Facebook。
6.  **社区** - React Native拥有一个庞大（并且不断增长）的社区，其核心项目贡献者超过1500人，还有数千人为各种图书馆做出贡献。
7.  **更好的用户体验** - React Native使用JavaScript代码从手机的操作系统中呈现本机组件。换句话说，应用程序的用户界面（UI）完全是原生的！
8.  **跨平台** - 构建可在iOS和Android设备上运行的通用用户界面或平台特定移动应用程序的原型和节省时间的绝佳方式。

### 如何开始使用React Native

有两种快速简便的React Native入门方法。根据您的具体情况，您可以选择更好的选择。

1.  [创建React Native App](https://www.npmjs.com/package/create-react-native-app) - 与Create React App类似，它使用终端运行起来。
2.  [Expo](https://expo.io) - 最适合应用程序原型设计或者是早期阶段。使用Expo，您甚至可以使用snack.expo.io中的拖放功能创建一个快速应用程序。