---
title: Git Checkout
localeTitle: Git Checkout
---
## Git Checkout

`git checkout`命令在分支之间切换或恢复工作树文件。此命令有许多不同的选项，这里不会介绍，但您可以在[Git文档中](https://git-scm.com/docs/git-checkout)查看所有这些选项。

### 签出特定提交

要签出特定的提交，请运行以下命令：

```shell
git checkout specific-commit-id 
```

我们可以通过运行获取特定的提交ID：

```shell
git log 
```

### 签出现有分支

要签出现有分支，请运行以下命令：

```shell
git checkout BRANCH-NAME 
```

通常，除非您的工作目录是干净的，否则Git不会让您签出另一个分支，因为您将丢失任何未提交的工作目录更改。您有三种方法可以处理您的更改：1）删除它们，2） [提交它们](https://guide.freecodecamp.org/git/git-commit/) ，或3） [存储它们](https://guide.freecodecamp.org/git/git-stash/) 。

### 结帐新分行

要使用单个命令创建和签出新分支，您可以使用：

```shell
git checkout -b NEW-BRANCH-NAME 
```

这将自动切换到新分支。

### 签出新分支或将分支重置为起点

以下命令类似于检出新分支，但使用`-B` （注意captital B）标志和可选的`START-POINT`参数：

```shell
git checkout -B BRANCH-NAME START-POINT 
```

如果`BRANCH-NAME`分支不存在，Git将创建它并在`START-POINT`处启动它。如果`BRANCH-NAME`分支已经存在，则Git将分支重置为`START-POINT` 。这相当于使用`-f`运行`git branch` 。

### 强制结账

您可以使用`git checkout`命令传递`-f`或`--force`选项以强制Git切换分支，即使您有未分阶段的更改（换句话说，工作树的索引与`HEAD`不同）。基本上，它可以用来抛弃局部变化。

当您运行以下命令时，Git将忽略未合并的条目：

```shell
git checkout -f BRANCH-NAME 
 
 # Alternative 
 git checkout --force BRANCH-NAME 
```

### 撤消工作目录中的更改

您可以使用`git checkout`命令撤消对工作目录中的文件所做的更改。这会将文件还原为`HEAD`的版本：

```shell
git checkout -- FILE-NAME 

```