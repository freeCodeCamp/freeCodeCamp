---
title: Front End File Structure
localeTitle: 前端文件结构
---
首先要做的事：所有面向用户的文件和角度文件都在**/ client / app /中**

1.  **app.js** ：定义你的应用程序并包含一些基本的应用程序范围的功能，除非你试图为你的应用程序添加更多的依赖项，否则你可能不需要弄乱它。我们现在不用担心。
2.  **app.css** ：一个应用程序范围的样式表，如果你愿意，你可以把样式放在这里，但我建议你把它们放在**main / main.css中** ，因为这些样式也是应用程序范围的。
3.  **main /** ：此文件夹包含用户在加载您的网站时首先看到的内容。 **main.html**是页面模板，当用户进入您网站的顶级目录时， **main.js**将用户路由到**main.html** - 即http：//yourapp.wherever.itis/没有/ other /网址/层次结构 。您还将很快了解到您可以定义您的应用程序/ url / heirarchy /公平/任意 。你不需要编辑**main.js**或**main.controller.spec.js** ，所以我们现在不用担心。如果你看看通过**main.html中**的文件，你会看到它使用了_NG-重复_ ，以显示_awesomeThings_ _事情_ 。它在哪里得到了_很棒的东西_ ？
4.  **main / main.controller.js** ：你想用来直接与用户交互的所有javascript函数都在这里！你可以在这里放置函数来与你的API交互，为你的用户刷新视图等等。这里， _awesomeThings_从你的数据库中提取并添加到本地范围，这样你的HTML视图就可以显示它们！挺酷的！我们将在一分钟内将自定义对象添加到您的数据库中。

大！现在你知道如何与用户互动！但是，如果您希望您的应用程序有另一个页面执行其他操作，该怎么办？也许**main.html会**显示主页，但是您想要一个显示表单的页面来添加民意调查？也许http：//yourapp.wherever.itis/newpage ？这是自耕农发电机派上用场的地方。

[上一页](http://forum.freecodecamp.com/t/guides-to-back-end-projects/14265) 下一页