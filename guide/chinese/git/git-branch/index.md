---
title: Git Branch
localeTitle: Git Branch
---
## Git Branch

Git的分支功能允许您创建项目的新分支，以测试想法，隔离新功能或实验，而不会影响主项目。

**目录**

*   [查看分支机构](#view-branches)
*   [结账分行](#checkout-a-branch)
*   [创建一个新分支](#create-a-new-branch)
*   [重命名分支](#rename-a-branch)
*   [删除分支](#delete-a-branch)
*   [比较分支](#compare-branches)
*   [帮助Git Branch](#help-with-git-branch)
*   [更多信息](#more-information)

### 查看分支机构

要查看Git存储库中的分支，请运行以下命令：

```shell
git branch 
```

要查看远程跟踪分支和本地分支，请运行以下命令：

```shell
git branch -a 
```

您当前所在的分支旁边会有一个星号（\*）。

您可以使用`git branch`包含许多不同的选项来查看不同的信息。有关分支的更多详细信息，可以使用`-v` （或`-vv`或`--verbose` ）选项。分支列表将包括其名称旁边的每个分支的`HEAD`的SHA-1值和提交主题行。

您可以使用`-a` （或`--all` ）选项显示本地分支以及存储库的任何远程分支。如果您只想查看远程分支，请使用`-r` （或`--remotes` ）选项。

### 结账分行

要签出现有分支，请运行以下命令：

```shell
git checkout BRANCH-NAME 
```

通常，除非您的工作目录是干净的，否则Git不会让您签出另一个分支，因为您将丢失任何未提交的工作目录更改。您有三种方法可以处理更改： 1）垃圾（详见[Git checkout](https://guide.freecodecamp.org/git/git-checkout/) ）或 2）提交它们（ [有关详细信息，](https://guide.freecodecamp.org/git/git-commit/)请参阅[Git提交](https://guide.freecodecamp.org/git/git-commit/) ）或 3）存储它们（ [有关详细信息，](https://guide.freecodecamp.org/git/git-stash/)请参阅[Git存储](https://guide.freecodecamp.org/git/git-stash/) ）。

### 创建一个新分支

要创建新分支，请运行以下命令：

```shell
git branch NEW-BRANCH-NAME 
```

请注意，此命令仅创建新分支。你需要运行`git checkout NEW-BRANCH-NAME`切换到它。

有一个快捷方式可以立即创建和签出新分支。您可以使用`git checkout`传递`-b`选项（用于分支）。以下命令执行相同的操作：

```shell
# Two-step method 
 git branch NEW-BRANCH-NAME 
 git checkout NEW-BRANCH-NAME 
 
 # Shortcut 
 git checkout -b NEW-BRANCH-NAME 
```

创建新分支时，它将包括来自父分支的所有提交。父分支是您在创建新分支时所在的分支。

### 重命名分支

要重命名分支，请运行以下命令：

```shell
git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME 
 
 # Alternative 
 git branch --move OLD-BRANCH-NAME NEW-BRANCH-NAME 
```

### 删除分支

Git不会让你删除你当前所在的分支。首先需要签出一个不同的分支，然后运行命令：

```shell
git branch -d BRANCH-TO-DELETE 
 
 # Alternative: 
 git branch --delete BRANCH-TO-DELETE 
```

您切换到的分支会产生影响。如果您尝试删除的分支中的更改未完全合并到当前分支中，Git将抛出错误。你可以覆盖它并强制Git删除带有`-D`选项的分支（注意大写字母）或使用`--force`选项和`-d`或`--delete` ：

```shell
git branch -D BRANCH-TO-DELETE 
 
 # Alternatives 
 git branch -d --force BRANCH-TO-DELETE 
 git branch --delete --force BRANCH-TO-DELETE 
```

### 比较分支

您可以使用`git diff`命令比较分支：

```shell
git diff FIRST-BRANCH..SECOND-BRANCH 
```

你会看到分支之间变化的彩色输出。对于所有已更改的行， `SECOND-BRANCH`版本将是以“+”开头的绿线， `FIRST-BRANCH`版本将是以“ - ”开头的红线。如果您不希望Git为每次更改显示两行，则可以使用`--color-words`选项。相反，Git将以红色显示一行删除的文本，并以绿色添加文本。

如果要查看完全合并到当前分支的所有分支的列表（换句话说，当前分支包括列出的其他分支的所有更改），请运行命令`git branch --merged` 。

### 帮助Git Branch

如果您忘记了如何使用选项，或想要探索`git branch`命令的其他功能，您可以运行以下任何命令：

```shell
git help branch 
 git branch --help 
 man git-branch 
```

### 更多信息：

*   `git merge`命令： [fCC指南](https://guide.freecodecamp.org/git/git-merge/)
*   `git checkout`命令： [fCC指南](https://guide.freecodecamp.org/git/git-checkout/)
*   `git commit`命令： [fCC指南](https://guide.freecodecamp.org/git/git-commit/)
*   `git stash`命令： [fCC指南](https://guide.freecodecamp.org/git/git-stash/)
*   Git文档： [分支](https://git-scm.com/docs/git-branch)