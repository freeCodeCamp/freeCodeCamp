---
title: Use Github Static Pages to Host Your Front End Projects
localeTitle: 使用Github静态页面来托管您的前端项目
---
**优点**

我喜欢Codepen.io，它是一个简单易用的工具，可用于简单的前端实验。但随着fcc项目变得越来越复杂，我意识到本地编码会给我带来一些麻烦。我的文本编辑器和[代码套件](https://incident57.com/codekit/)组合速度更快。

*   自动完成
*   编译所有东西（codepen真的拖着试图编译Jade）
*   更好的自动刷新
*   内置凉亭
*   Git版本控制
*   改善了屏幕房地产体验

## Git到Github

由于我已经在本地保存，并使用git进行版本控制，我想也可以上传到Github。此外，Github还为前端项目提供了一个非常棒的免费服务，称为[Github Pages](https://pages.github.com/) 。只需更新您的仓库，您的更改即会生效。

它的工作原理很简单。 Github检查您的存储库是否有一个名为`gh-pages`的分支，并提供位于该分支中的任何代码。这里没有后端内容，但HTML，CSS和JS就像魅力一样。

## 首先要做的事情

让我们为您的项目创建一个新文件夹。我将以[Camper News](http://www.freecodecamp.com/challenges/stylize-stories-on-camper-news)项目为例。

到达您的工作目录并创建一个新目录。您可以在终端中执行此操作（或不执行此操作）。

![项目目录](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2e3faaa2752657c592a9991ceed29a0200f332e6.png)

现在，进入项目目录，并且（这次在终端中确定）使用命令`git init` 。注意，本教程假设[您已安装git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 。

好的，太棒了。现在我们准备工作了。

## 下一步

在campNews目录中创建一些文件。我不知道，也许是index.html，可能是app.css和app.js，或者你喜欢的任何命名约定。将您的代码放在这些文件中。好的，现在我们已经为第一次提交做好了准备。它需要**两个步骤** 。

1.  `git add -A`将准备所有这些新文件及其中的新代码
2.  `git commit -m 'relevant message'`将把你所做的所有工作提交到你当前所在的分支（默认为'master'）

## 这整件事的关键

好的，到目前为止我们仍然在当地。我们需要做一些事情来完成我们的工作并将其转移到github。在这一点上，我喜欢切换分支。请记住 - github仅从gh-pages提供服务，如果你到目前为止，你的分支被称为'master'。让我们创建一个新的（本地）gh-pages分支。

`git checkout -b gh-pages`将创建它，将所有工作从master复制到gh-pages并切换到分支。唷。

`git branch -d master`将摆脱master分支。听起来很疯狂我知道，但我们需要它做什么？只需将gh-pages视为新的主分支。

现在，为了以防万一， `git add -A`再次`git add -A`和`git commit -m 'relevant message'` 。并准备离开您的编辑和终端，并第一次上网。

转到您的github配置文件并创建一个新的repo。将其命名为相关内容，例如campNews。

![新的回购](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3f113af87b94fcd649c78d5f6d36463795671e7b.png)

创建后，进入并获取HTTPS克隆URL。 （忽略我的屏幕截图中的文件，此时您的仓库将为空）。

![克隆网址](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a0f3da26ba0802342d7d6f7890763a2bca32b62a.png)

## 把它们放在一起

你可以离开网络世界。回到终端！让我们将我们的本地项目连接到这个github仓库。所需要的只是一个命令。

`git remote add origin <server>`只需用刚刚复制的HTTPS url替换服务器。所以我的命令看起来像这样：

`git remote add origin https://github.com/gkobilansky/campNews.git` 。

好的，到目前为止我们已经：

1.  创建了我们的项目
2.  用git对它进行了版本控制
3.  进行了一些改变
4.  将其切换到'gh-pages'分支
5.  将它连接到github

## 最后一步！

将项目推送到github。同样，简单：

`git push origin gh-pages`

该命令将确保您的最新提交上传到github。一旦你完成了至少一次，你的项目应该是http：// _username_ .github.io / _repository_ ，所以对我来说它是[http://gkobilansky.github.io/campNews](http://gkobilansky.github.io/campNews) 。

完成所有操作后，该过程将重复：

1.  `git add -A`
2.  `git commit -m 'relevant message'`
3.  `git push origin gh-pages`

当然，比codepen.io更陡峭的学习曲线，但是一旦掌握了它，就会更快，更灵活。

快乐的编码！

PS。感谢Roger Dudler的[这本指南](http://rogerdudler.github.io/git-guide/) ，让事情变得简单。