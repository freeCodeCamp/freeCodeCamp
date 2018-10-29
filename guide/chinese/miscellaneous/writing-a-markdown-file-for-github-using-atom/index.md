---
title: Writing a Markdown File for Github Using Atom
localeTitle: 使用Atom为Github写一个Markdown文件
---
Markdown是一种在Web上设置文本样式的方法，GitHub用户使用markdown为其存储库提供文档。

来自[GitHub指南](https://guides.github.com/features/mastering-markdown/) ：

> 您可以控制文档的显示;将单词格式化为粗体或斜体，添加图像和创建列表只是我们可以使用Markdown执行的一些操作。大多数情况下，Markdown只是常规文本，其中包含一些非字母字符，如＃或\*。
> 
> 你可以在GitHub周围的大多数地方使用Markdown：
> 
> *   要旨
> *   问题和请求中的注释
> *   扩展名为.md或.markdown的文件
> 
> Markdown文件的扩展名为`.md` ，你会发现大量的GitHub存储库都有`README.md`文件。

一个很好的例子是，如果你想为这个存储库编写一个Wiki文件，那么它需要是一个`.md`文件。你现在正在阅读的是一个名为`writing-a-markdown-file-using-atom.md`的降价文件。

Markdown文件很容易编写，你可以[在这里](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)找到降价备忘单。

## 在GitHub上创建自述文件

您可以在GitHub上编写README.md文件：

![截屏2016-02-29于18 07 19](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9a1d7f226df87df437f616fcaf5b7adcf02c8e87.png)

这使您能够在“编辑新文件”和“预览”视图之间切换：

![截屏2016-02-29于18 06 24](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e0b3ddb69c3f2c32c0c7e73f1b1d196a54f03c21.png)

如果您的自述文件很小，并且您不介意在两个视图之间切换，这是理想的选择。

但是，如果您的`.md`文件不是自述文件，并且您希望在文本编辑器中工作并在编辑时同时实时预览文本的内容，该怎么办？

## 使用Atom编写Markdown文件

如果您正在编写一个长或详细的markdown文件，那么有助于实时预览您的markdown的样子，就像您正在使用实时重新加载功能来更新浏览器一样例如，它使用HTML和CSS。

创建markdown文件的好方法是使用[Atom文本编辑器](https://atom.io/) 。您可以免费安装和使用Atom。

与其他文本编辑器一样，Atom使用包，这些包是允许您自定义工作流的代码片段。  
1.首先，您需要从[此处](https://atom.io/)安装Atom文本编辑器。  
2.安装Atom时，打开它，然后打开扩展名为`.md`的新文件。  
3.要查看实时预览，请右键单击左侧资源管理器中的`.md`文件，然后选择顶部选项“Markdown Preview”：

![屏幕截图2016-02-29 18 17 30](//discourse-user-assets.s3.amazonaws.com/original/2X/e/ea3746446180c0e0ad2bb61f30a6c3ad8bc25c57.png)

凉！您现在应该在Atom中看到两个窗格。左边是你的文字，右边是你的'编译'降价，即它在GitHub上的样子：

![截屏2016-02-29 at 18 21 38](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a1f27aa8afe060e252f245ced3456f196c85ef1b.png)

请注意，Atom还会将您正在使用的内容识别为特定格式，即“GitHub Markdown”：

![截屏2016-02-29 at 19 15 43](//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf5b2fc473c32a14a2de302fd88e4c2edde02453.png)

1.  当您的markdown文件准备好提交到您的GitHub存储库时，您可以继续提交它！

要为FreeCodeCamp wiki做贡献，请转到[此页面](https://github.com/FreeCodeCamp/freecodecamp/wiki)并查看“如何贡献的指南”部分。

要将项目或文件添加到GitHub，请转到[此页面](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) 。

**奖金步骤：** Atom有一个名为[Markdown Preview Plus](https://atom.io/packages/markdown-preview-plus)的软件包。它与普通的降价预览器相同，但预览文件的样式更准确地符合GitHub样式。继续安装此软件包，看看你得到了什么。