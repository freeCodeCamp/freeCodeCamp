---
title: Android core components
localeTitle: Android核心组件
---# Android核心组件

核心组件是Android应用程序所必需的基本元素。他们每个人都有自己的目的和生命周期，但并非所有人都是独立的。他们是：

*   活动
*   服务
*   广播接收器
*   内容提供商

## [活动](https://developer.android.com/guide/components/activities/)

_活动_是具有用户界面并代表单个屏幕的组件。应用程序可以有多个活动，每个活动都可以是应用程序本身为用户或系统的入口点（应用程序的活动想要打开属于同一应用程序或不同应用程序的另一个活动）。

## [服务](https://developer.android.com/guide/components/services)

_服务_是没有用户界面的组件，用于在后台执行长时间运行的操作。 有两种服务：

*   _前台_服务：它们与用户的交互（例如音乐播放）严格相关，因此系统很难杀死它们。
*   _后台_服务：它们与用户的活动没有直接关系，因此如果需要更多RAM，它们可能会被杀死。

## [广播接收器](https://developer.android.com/guide/components/broadcasts)

_广播接收器_是另一个没有用户界面的组件（除了可选的状态栏通知），它允许系统从应用程序传送事件，即使后者之前没有启动过。

## [内容提供商](https://developer.android.com/guide/topics/providers/content-providers)

_内容提供程序_是用于管理要与其他应用程序共享的一组应用程序数据的组件。保存在内容提供者中的每个项目由URI方案标识。

有关该主题的详细信息，请参阅官方[Android基础](https://developer.android.com/guide/components/fundamentals)文档