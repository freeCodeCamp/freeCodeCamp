---
title: How to Make a Pull Request on Free Code Camp
localeTitle: 如何在免费代码营中提出拉取请求
---
# 免费代码营拉请求

**什么是拉动请求？**

拉取请求（PR）是一种提交免费代码营回购（或任何回购，就此而言）的建议更改的方法。您将在个人分支中更改组成免费代码营的文件副本，然后申请由Free Code Camp接受。

## 需要帮忙？

免费代码营问题Mods和工作人员随时为我们的[帮助贡献者聊天室提供](https://gitter.im/FreeCodeCamp/Contributors)有关Pull Request相关问题的[帮助。](https://gitter.im/FreeCodeCamp/Contributors)

## 方法

有两种创建Pull for Free Code Camp的方法：

1.  通过GitHub界面编辑文件
2.  编辑本地克隆上的文件

## 重要提示：始终在分支机构上进行编辑

从本文档中只拿走一件事，它应该是这样的：从不，永远编辑`staging`分支。在编辑文件之前，总是建立一个新的分支。这很关键，因为如果您的PR不被接受，您的`staging`副本将永远被玷污，解决它的唯一方法是删除您的分叉并重新分叉。

## 通过Local Fork进行编辑（推荐）

这是推荐的方法。阅读有关[如何设置和维护免费代码阵营的本地实例的信息](http://forum.freecodecamp.com/t/how-to-fork-and-maintain-a-local-instance-of-free-code-camp/19116) 。

1.  执行重新定位`staging`的维护步骤
2.  使用`git status`确保您在`staging`分支上：

\`  
$ git状态  
在分支分期  
您的分支机构与“origin / staging”保持同步。

无需提交，工作目录清理  
\`

1.  如果您没有登台或工作目录不干净，请解决所有未完成的文件/提交和结帐分段`git checkout staging`
2.  使用git创建一个`staging`的分支： `git checkout -B branch/name-here`注意：分支命名很重要。使用诸如`fix/short-fix-description`或`feature/short-feature-description`查看[贡献指南](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md)以获取更多详细信息。
3.  使用您选择的编辑器在本地编辑您的文件
4.  检查您的`git status`以查看未分级的文件。
5.  添加您编辑的文件： `git add path/to/filename.ext`您还可以执行： `git add .`添加所有未暂存的文件。但请注意，因为您可以意外添加不想添加的文件。首先检查你的`git status` 。
6.  提交您的编辑： `git commit -m "Brief Description of Commit"`
7.  如果有多个[提交](http://forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231) ， [请对您的提交进行压缩](http://forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231) 。
8.  将你的提交推送到你的GitHub Fork： `git push -u origin branch/name-here`
9.  转到共同步骤

## 通过GitHub界面进行编辑

**注意：**不建议通过GitHub接口进行编辑，因为在不删除和重新创建分支的情况下，无法通过GitHub的界面更新分支。

1.  创建FCC Repo的分支
2.  在fork中[创建一个分支](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/) 。注意：分支命名很重要。使用诸如`fix/short-fix-description`或`feature/short-feature-description`查看[贡献指南](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md)以获取更多详细信息。
3.  编辑文件并提交更改。
4.  继续共同步骤。

## 共同步骤

1.  提交编辑后，系统将提示您在fork的Github页面上创建拉取请求。
2.  默认情况下，所有拉取请求都应该针对FCC主仓库， `staging`分支。
3.  为你的公关制定一个明确的标题，简明扼要地指出正在修复的内容。不要在标题中添加问题编号。示例： `Add Test Cases to Algorithm Drop It` `Correct typo in Challenge Size Your Images`
4.  在PR的正文中包含更详细的摘要，包括您所做的更改以及原因。
5.  表明您是否在本地网站副本上进行了测试。
6.  如果您的PR出现问题，您可以通过添加关键字如`Closes #xxxx`自动[引用和关闭该问题](https://help.github.com/articles/closing-issues-via-commit-messages/) ，其中`xxxx`是问题编号。

## 下一步

### 如果要求更改

不用担心，许多PR，特别是第一个PR，需要更正或更新。如果您已使用GitHub界面创建PR，则需要关闭PR，创建新分支并重新提交。这是因为你不能通过GitHub界面压缩你的提交。

如果你有一个repo的本地副本，你可以进行所请求的更改并修改你的提交： `git commit --amend`这将更新你现有的提交。当你将它推到你的分支时，你需要强制推送来覆盖你的旧提交： `git push --force`

务必在PR对话中发布您已进行所请求更改的内容。

### 如果您的公关被接受

接受PR后，您可以删除您创建的分支以提交它。这样可以保持工作叉的清洁。只需按一下GitHub PR界面上的按钮即可完成此操作。您可以使用以下命令删除分支的本地副本： `git branch -D branch/to-delete-name`

### 如果您的公关被拒绝

不要绝望！您应该从问题主持人那里收到有关其被拒绝的原因以及所需内容的可靠反馈。请继续贡献。