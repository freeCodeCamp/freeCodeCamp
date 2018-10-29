---
title: Get Screen Size in Pixels
localeTitle: 以像素为单位获取屏幕尺寸
---
有时您的JS应用程序需要知道屏幕的大小才能执行某些操作。

幸运的是，我们有内置的JavaScript功能，可以轻松地在用户设备上抓取不同尺寸的屏幕（以像素为单位）。使用什么取决于你想做什么。

## 获得用户的解决方案

您可能希望执行涉及用户设备分辨率的操作。在这种情况下，您应该使用内置的`screen.width`和`screen.height`属性。这些可以为您提供所处理屏幕的大小。 **这不是您必须在页面上使用的区域;这些值代表整个屏幕，即用户的显示分辨率。**

## 获取浏览器大小

可能有一个有趣的应用程序来处理浏览器的当前大小。如果需要访问这些尺寸，请使用`screen.availWidth`和`screen.availHeight`属性来执行此操作。请记住，这些是整个浏览器窗口的维度，从浏览器窗口的顶部到浏览器与任务栏或桌面边缘的位置，具体取决于您的设置。

**一个有趣的注意事项** ： `screen.availHeight`也可用于计算任务栏在计算机上的高度。如果您的浏览器分辨率为`1366 x 768` ，而`screen.availHeight`报告728像素，那么您的任务栏高40像素。您还可以通过减去`screen.height`和`screen.availHeight`来计算任务栏高度：
```
var taskbarHeight = parseInt(screen.height,10) - parseInt(screen.availHeight,10) + " pixels"; 
 /* 
 For a user that has a screen resolution of 1366 x 768 pixels, their taskbar is likely 40 pixels if using Windows 10 with no added accessibility features. 
 */ 
```

## 获取查看窗口大小

这些属性很有趣，可用于创建一些漂亮的效果。您可以使用`window.innerHeight`和`window.innerWidth`来获取用户看到的网页窗口的大小。这些值不是静态的，并且会根据浏览器本身的情况而改变。换句话说，如果浏览器本身很小，这些值会更小，如果浏览器最大化，它们会更大。

例如，如果您在Google Chrome中工作并打开控制台（必须停靠在窗口的一侧）， `window.innerHeight`将更改以反映控制台的高度，因为窗口的一部分将被阻止。您可以通过调用`window.innerHeight`来测试它，记下该值，然后增加控制台的大小，并再次调用`window.innerHeight` 。

如果您的浏览器以任何方式最大化或调整大小，这些属性也会更改。在浏览器的最大大小，属性`window.innerWidth`与`screen.width`和`screen.availWidth`相同（除非侧面有任务栏，在这种情况下`screen.availWidth`将不相等）。 `window.innerHeight`等于页面本身窗口中的区域数量（网页区域）。

## 获取网页的高度和宽度

如果您需要查看网页的实际高度或宽度，可以使用属性来获取这些维度： `document.body.offsetWidth`和`document.body.offsetHeight` 。这些属性表示页面本身内容的大小。没有内容的页面的`document.body.offsetHeight`接近与`window.innerHeight`相同的值，具体取决于在文档正文上设置的边距/填充。如果在html根元素和文档正文上将边距和填充设置为`0` ，则`document.body.offsetHeight`和`window.innerHeight`将等于没有内容。

这些属性可用于与您的页面/应用程序交互，具体取决于您要执行的操作。

## 结论

使用哪种财产完全取决于您的目标。阅读他们每个人的工作，并自己决定您需要为项目使用哪些属性。