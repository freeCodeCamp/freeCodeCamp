---
title: Git Pull
localeTitle: Git Pull
---
## Git Pull

`git pull`是一个Git命令，用于从远程更新存储库的本地版本。

它是Git提示网络交互的四个命令之一。默认情况下， `git pull`做两件事。

1.  更新当前本地工作分支（当前已检出分支）
2.  更新所有其他分支的远程跟踪分支。

`git pull` fetches（ `git fetch` ）新提交并将它们合并[（ `git merge` ）](https://guide.freecodecamp.org/git/git-merge)到你的本地分支中。

该命令的语法如下：

```shell
# General format 
 git pull OPTIONS REPOSITORY REFSPEC 
 
 # Pull from specific branch 
 git pull REMOTE-NAME BRANCH-NAME 
```

其中：

*   **选项**是命令选项，例如`--quiet`或`--verbose` 。您可以在[Git文档中](https://git-scm.com/docs/git-pull)阅读有关不同选项的更多信息
*   **REPOSITORY**是您的回购的URL。示例：https：//github.com/freeCodeCamp/freeCodeCamp.git
*   **REFSPEC**指定要获取的引用和要更新的本地引用
*   **REMOTE-NAME**是远程存储库的名称。例如： _origin_ 。
*   **BRANCH-NAME**是您的分支机构的名称。例如： _开发_ 。

**注意**

如果您有未提交的更改， `git pull`命令的合并部分将失败，您的本地分支将不受影响。

因此， _在_从远程存储库中_提取_新提交_之前_ ，应_始终在分支中提交更改_ 。

**目录**

*   [用`git pull`](#using-git-pull)
*   [分布式版本控制](#distributed-version-control)
*   [`git fetch` + `git merge`](#git-fetch-plus-git-merge)
*   [`git pull`入IDE](#git-pull-in-IDEs)

### 用git pull

使用`git pull`从相应的远程存储库更新本地存储库。例如：在`master`本地工作时，执行`git pull`来更新`master`的本地副本并更新其他远程跟踪分支。 （有关远程跟踪分支的更多信息，请参阅下一节。）

但是，有一些事情要记住这个例子是真的：

*   本地存储库具有链接的远程存储库
*   通过执行`git remote -v`来检查这一点
*   如果有多个遥控器， `git pull`可能不够信息。您可能需要输入`git pull origin`或`git pull upstream` 。
*   您当前签出的分支具有相应的远程跟踪分支
*   通过执行`git status`来检查这一点。如果没有远程跟踪分支，Git不知道_从_哪里提取信息。

### 分布式版本控制

Git是一个**分布式版本控制系统** （DVCS）。使用DVCS，开发人员可以在不同的环境中同时处理同一文件。 _将_代码_推_送到共享远程存储库后，其他开发人员可以_提取已_更改的代码。

#### Git中的网络交互

只有四个命令可以在Git中提示网络交互。在有信息请求之前，本地存储库不知道对远程存储库所做的更改。并且，在推送提交之前，远程存储库不会意识到本地更改。

四个网络命令是：

*   `git clone`
*   `git fetch`
*   `git pull`
*   `git push`

#### DVCS中的分支机构

使用Git时，可能会感觉到有相同代码的大量副本在整个地方浮动。每个分支上有相同文件的不同版本。并且，每个开发人员的计算机和远程计算机上的相同分支的不同副本。为了跟踪这一点，Git使用了一种称为**远程跟踪分支的**东西。

如果在Git存储库中执行`git branch --all` ，远程跟踪分支将显示为红色。这些是远程显示的代码的只读副本。 （最后一次网络交互是什么时候会在本地带来信息？请记住上次更新此信息的时间。远程跟踪分支中的信息反映了该交互的信息。）

使用**远程跟踪分支** ，您可以在几个分支上使用Git而无需网络交互。每次执行`git pull`或`git fetch`命令时，都会更新**远程跟踪分支** 。

### git fetch加上git merge

`git pull`是一个组合命令，等于`git fetch` + `git merge` 。

#### git fetch

`git fetch`本身更新了本地存储库中的所有远程跟踪分支。实际上没有任何变化反映在任何本地工作分支上。

#### git merge

没有任何参数， `git merge`会将相应的远程跟踪分支合并到本地工作分支。

#### git pull

`git fetch`更新远程跟踪分支。 `git merge`使用相应的远程跟踪分支更新当前分支。使用`git pull` ，您可以获得这些更新的两个部分。但是，这意味着如果您签出了`feature`分支并执行`git pull` ，那么当您签出要`master` ，将不会包含任何新的更新。每当你签到另一个可能有新变化的分支时，执行`git pull`总是一个好主意。

### git拉入IDE

其他IDES中的通用语言可能不包括单词`pull` 。如果您注意单词`git pull`但看不到它们，请查找单词`sync` 。

### 将远程PR（Pull Request）放入本地仓库

出于审查等目的，应将遥控器中的PR提取到本地存储库。您可以使用`git fetch`命令执行此操作。

`git fetch origin pull/ID/head:BRANCHNAME`

ID是拉取请求ID，BRANCHNAME是您要创建的分支的名称。创建分支后，您可以使用`git checkout`切换到该brach。

### 关于git pull的其他资源

*   [git的供应链管理](https://git-scm.com/docs/git-pull)
*   [GitHub帮助文档](https://help.github.com/articles/fetching-a-remote/#pull)
*   [GitHub按需培训](https://services.github.com/on-demand/intro-to-github/create-pull-request)
*   [同步教程](https://www.atlassian.com/git/tutorials/syncing)

### 关于git的其他资源，请访问guide.freecodecamp.org

*   [Git合并](../git-merge/index.md)
*   [Git结账](../git-checkout/index.md)
*   [Git提交](../git-commit/index.md)
*   [Git藏匿](../git-stash/index.md)
*   [Git分支](../git-branch/index.md)