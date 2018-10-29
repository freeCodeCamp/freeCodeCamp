---
title: Removing All Locally Stored Challenges
localeTitle: 删除所有本地存储的挑战
---
删除所有本地存储的挑战将解决与FreeCodeCamp上的浏览器崩溃相关的许多问题

在Chrome中：

*   在[freecodecamp上](https://freecodecamp.com)打开你的控制台
    *   Windows： `Ctrl` + `Shift` + `J`
    *   Mac OS： `Cmd` + `Opt` + `J`
*   转到资源选项卡（chrome）。
    *   单击右侧导航栏中的“本地存储”链接。
*   删除右侧的所有条目，或在浏览器的控制台中运行此命令以清除localStorage中的所有条目： `localStorage.clear();`
*   看看这是否解决了您的问题

![](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9ea6a9cf48282cbf2aa766a6aa5ce59218c80528.png)

或者，如果您在冻结浏览器时遇到特定挑战的问题，请[在本地存储中找到该挑战的名称并仅删除该名称](http://forum.freecodecamp.com/t/clear-specific-values-from-your-browser-local-storage/19128) 。