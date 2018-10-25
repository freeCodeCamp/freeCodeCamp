---
title: Known Issues with Codepen
localeTitle: Codepen的已知问题
---
鼓励免费的Code Camp学习者使用[Codepen.io](http://www.codepen.io/)来组合项目，Codepen是快速组合可用代码的绝佳资源。但是，Codepen确实在调试代码的过程中引入了额外的抽象级别。如果您不了解它们，可以在Codepen中解决一些已知的问题：

1.  **锚标记的URL问题：** CodePen会覆盖`<a href='URL'>`锚元素，这意味着您必须向锚元素添加`target='_blank'` - 否则它们将无效。
2.  **https插件问题：**已知Chrome扩展程序“HTTPS Everywhere”（由[Electronic Frontiers Foundation](http://www.eff.org/)创建）会干扰AJAX调用。由于扩展程序自动使用HTTPS，因此可能会导致“混合内容”错误，从而阻止加载JSON / XML数据。如果您遇到这样的错误，请确保您的插件不是罪魁祸首。您可以选择使用[crossorigin.me](http://crossorigin.me)作为代理。
3.  **imgur hotlinking：**如果您使用来自[http://imgur.com的](http://imgur.com)图片，他们大多数时间都不会出现，这是由于他们的服务条款。解决此问题的方法是使用像[http://postimg.org](http://postimg.org)这样的替代服务
4.  **自动重新加载：**默认情况下，每次在HTML或JS编辑器窗口中进行更改时，预览窗口都会刷新。你可以通过转到设置>行为>“想要一个运行按钮？”来关闭它并启用“运行按钮”。并且解开盒子。
5.  **location.reload：**如果在调试视图或JSFiddle中遇到代码问题，但在Codepen编辑器视图或完整页面视图中没有问题，请仔细检查是否使用了`location.reload()` 。如果你这样做，你必须找到另一种方法来实现所需，因为Codepen将剥离`location.reload`并在代码中保留only `()` 。 [在这里](https://blog.codepen.io/documentation/editor/things-we-strip/)阅读更多[：](https://blog.codepen.io/documentation/editor/things-we-strip/)
6.  **显示图像，添加css / js文件，托管在Github上：**您可能希望包含在**Github上托管**的Codepen项目样式表，图像或js文件中。如果您将文件的Github链接添加到Codepen中的设置，或者添加到您的html / css中，它将无法开箱即用。你需要做的是：
    1.  转到文件的“Raw”版本
    2.  复制URL
    3.  更改`raw.githubusercontent.com`到`rawgit.com`
    4.  使用该URL链接到github上托管的文件