---
title: Adding Snippets to Your Sublime Text Installation
localeTitle: 将片段添加到您的Sublime文本安装
---
如果你是一个崇高文本的用户（我希望你是，它踢屁股。你可以[在这里](https://www.sublimetext.com/)得到它），那么你可能已经注意到了一些标签完成功能。例如，当您打开html标记（例如`<p>` ，它会在您键入`/`时自动关闭标记。您可以为最终重写的代码片段获得类似的功能，这非常简单！

这是一个示例，在键入`div`然后选项卡后激活：

![替代文字](//discourse-user-assets.s3.amazonaws.com/original/2X/5/59a4d233d2dcb17b76a9c36ca30c5bb07a35d00b.png)

## 步骤1。

单击导航栏中的“ `Tools > New Snippet...` ”。这将打开一个片段骨架文件，如下所示：

![替代文字](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a56106fbf754f7e641342d1ebdbc3f5bed582263.png)

## 第2步。

您将通过替换文本`Hello, ${1:this} is a ${2:snippet}.`来添加代码段`Hello, ${1:this} is a ${2:snippet}.`

对于`div`代码段，它就像在代码段区域中放置以下文本一样简单：
```
<!-- $1 --> 
 <div class= "$1"> 
 
 </div> 
 <!-- $1 --> 
```

`$`运算符引用一旦键入`div`然后选项卡将输入的变量。事实上，你可以拥有任意数量的！

## 第3步。

保存文件。你可以给它任何你想要的文件名，但扩展名**必须**是`.sublime-snippet` 。请记住，每个文件只能有一个代码段！我喜欢给他们描述性名称，例如`html-div.sublime-snippet` 。

你有它！您可以随心所欲地获得创意。