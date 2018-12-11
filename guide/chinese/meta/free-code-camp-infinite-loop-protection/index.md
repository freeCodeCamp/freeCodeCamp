---
title: Free Code Camp Infinite Loop Protection
localeTitle: 免费Code Camp无限循环保护
---
免费代码营代码运行器具有内置的无限循环保护功能，利用[JSBin的Loop Protect](https://github.com/jsbin/loop-protect) 。循环保护将一些代码注入到用户创建的循环中，以便在超过约500ms的情况下安全退出而不退出循环。循环保护将捕获许多但不是所有无限循环问题。如果您看到此消息：

`Error: Potential infinite loop at line X`

这意味着您已受到无限循环保护。

**注意：** Loop Protect无法检测无限递归。

## 禁用循环保护

在某些情况下 - 慢速计算机或长循环 - 您可能会得到不正确的循环保护。要禁用循环保护，请在循环保护消息列出的行中添加以下注释：

`//noprotect`

**警告：**禁用循环保护意味着您可能会允许代码进入无限循环，从而导致浏览器无响应。

## 恢复无响应的代码

如果您有错误且错误地禁用了环路保护并且现在没有响应的解决方案，则可以禁用代码自动运行。

默认情况下，Free Code Camp站点会自动加载并运行您最近录制的解决方案。如果您不小心创建了无限循环或其他不可恢复的错误，或者只是不信任该代码，您可以通过在URL中添加以下内容来禁用代码自动运行：run = disabled

例：
```
URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?solution=function%20meetBonfire(argument) 
 
 No-Run URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?run=disabled&solution=function%20meetBonfire(argument) 

```