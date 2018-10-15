---
title: Getting Started with Sass
localeTitle: Sass入门
---
### 介绍

Sass代表“Syntactically Awesome Stylesheets”，是一款CSS预处理器。预处理器将以特定语言编写的代码编译为机器可读（浏览器可读）的“产品”代码。基本上，Sass将代码编译为我们的浏览器可以解释的常规CSS！ _为什么CSS已存在时在Sass中编写代码？_简短的回答是Sass在其语法中内置了更强大的功能，允许开发人员编写DRY-er，可扩展且更易于维护的前端代码。

如果您熟悉CSS，那么学习Sass对您来说会更容易一些。如果没有，在他们的前端开发认证课程中开始学习Free Code Camp的HTML5和CSS部分的一些CSS基础知识，以及看看[MDN的CSS文章](https://developer.mozilla.org/en-US/docs/Web/CSS)可能是理想[的](https://developer.mozilla.org/en-US/docs/Web/CSS) 。

在本文的第1部分中，我将解释如何在您的计算机上安装Sass以及如何将Sass编写的代码编译为CSS。

## 安装

将Sass安装到您的计算机上的最简单方法是通过命令行。 Sass是一个Ruby gem，需要以下命令：

对于Mac和PC：

`sudo gem install sass`

对于Linux，您需要先安装Ruby语言，然后：

`sudo su -c "gem install sass"`

您现在应该能够检查已安装的Sass版本：

`sass -v`

它应该返回类似于：

`Sass 3.4.21 (Selective Steve)`

如果是这样，恭喜你，你刚刚安装了Sass！现在使用Sass。

## 基本用法和语法

让我们从一个非常简单的例子开始，来说明Sass实际上是如何工作的。您可以按照步骤进行操作，也可以直接阅读。

_进口旁注：Sass可以用两种略有不同的风格书写，每种风格都有其自身的优点。一种风格将使用文件扩展名_ `.sass` _和其他将使用_ `.scss` 。 _稍后将简要解释两种风格的差异。有关深入解释，请查看John W. Long的_ [Sass vs. SCSS文章](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better) 。

_为了保持一致性，本文将提供`.scss`格式的代码示例，但这两种样式同样受欢迎。_

好吧，让我们开始吧。我们将创建一个新文件夹来存放我们的示例文件（您可以在计算机上的任何位置执行此操作，并可以使用命令行或手动执行此操作）。

在该文件夹中，我们将创建一个名为`style.scss`的文件和一个名为`index.html`样式的HTML文件：

_上图中的`tree`命令来自您可以安装的npm包，并且不是命令行的本机。 `ls`命令基本上做同样的`ls` 。_

现在我们已经设置了项目文件夹，我们可以使用Sass watch命令“密切关注”我们的Sass文件，并在检测到文件更改时编译代码。我们在要查看的文件上输入watch命令：

`sass --watch style.scss`

下一步是在您选择的文本编辑器中打开项目文件夹。一旦我们打开文件并准备好进行编辑，我们就可以添加一个非常基本的HTML页面（对我们来说样式），如下所示：
```
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>Sass!</title> 
  <link rel="stylesheet" href="style.css"> 
 </head> 
 <body> 
  <article> 
    <h1>Hello World</h1> 
    <p class="cat-paragraph-1">Cat ipsum dolor sit amet, stand in front of the computer screen, so chase imaginary bugs has closed eyes but still sees you caticus cuteicus.</p> 
    <p class="cat-paragraph-2">Drink water out of the faucet chew on cable or if it fits, i sits roll on the floor purring your whiskers off.</p> 
  </article> 
 </body> 
 </html> 
```

设置完HTML后，我们可以打开我们的`style.scss`文件并在Sass中开始样式化。在下面的示例代码中，您可能会注意到某些样式选择器是如何嵌套在文章选择器中的; Sass独有的东西。不要担心，语法将在第2部分中解释。现在我们只想了解Sass如何以最简单的形式工作。
```
article { 
  h2 { 
    font-family: Arial; 
    color: blue; 
  } 
  .cat-paragraph-1 { 
    color: red; 
  } 
  .cat-paragraph-2 { 
    color: green; 
  } 
 } 
```

一旦键入该代码并将其保存到`style.scss`文件中，我们打入命令行的监视任务将检测到文件中的更改，将我们的Sass编译为CSS，并输出一个名为`style.css`的新文件。您可能还会在项目文件夹中看到一个名为`style.css.map`文件，该文件也神奇地出现了。这个文件叫做源图，在调试Sass时很有用，但是现在我们就把它留下来了。

下面我们可以看到项目文件夹中列出的文件。

现在，如果我们在Web浏览器中打开`index.html` ，我们可以看到我们的HTML页面使用CSS格式化，这是从示例Sass代码编译而来的。同样，我们可以打开`style.css`文件来查看Sass如何输出原始的Sass代码。紧凑，不是吗？

## 然后去哪儿？

_大！现在我知道如何在我的计算机上编译Sass。是吗？_

不是由一个长镜头。这是Sass工作原理的一个简单例子，因此在Sass中编写优于vanilla CSS的好处可能并不明显。我们编写了12行“Sass”，结果得到7行CSS。不完全是任何标准的主要差异。在第2部分中，我们将解释Sass语法背后的**魔力** ，例如变量和mixins，以及这些工具的使用如何在样式化时为我们提供超级大国。

如果你仍然坚持Sass如何神奇地编译成CSS或者你想要更多的示例代码， [Sassmeister](http://www.sassmeister.com/)是一个很棒的在线界面，它允许你用Sass语法编写并立即看到你的代码编译成CSS而没有必须在您的计算机上安装任何东西或进行任何设置。这是沙盒和尝试Sass代码的非常有用的资源。