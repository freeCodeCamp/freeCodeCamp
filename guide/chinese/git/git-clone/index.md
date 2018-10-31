---
title: Git Clone
localeTitle: Git Clone
---
## Git Clone

`git clone`命令允许您将远程存储库复制到本地计算机上。

首先，找到您正在处理或感兴趣的项目的远程存储库 - 这也可以是您项目的分支。接下来，复制它的URL。例如，如果您已经分叉了freeCodeCamp指南库，则URL看起来像`https://github.com/YOUR-GITHUB-USERNAME/guides.git` 。

在本地计算机的命令行中，导航到要在项目工作目录中保存项目的位置。最后，运行`git clone`命令：

```shell
git clone URL-OF-REPOSITORY 
```

计算机上新目录的默认名称是存储库的名称，但您可以通过包含最后一个（可选）参数来更改此名称：

```shell
git clone URL-OF-REPOSITORY NAME-OF-DIRECTORY-ON-COMPUTER 
```

Git为遥控器提供了别名“origin”。当您想要将更改推送到远程服务器或从中提取更改时，这是引用远程的有用方法。有关更多详细信息，请参阅[Git push](https://guide.freecodecamp.org/git/git-push/)和[Git pull](https://guide.freecodecamp.org/git/git-pull/) 。

Git只将遥控器的主分支拉到您的计算机上。该分支通常按惯例命名为“主”，但根据项目可能会有不同的定义。

此外，Git会自动设置您的本地主分支以跟踪远程分支。当您运行`git status` ，您将看到有关您的本地分支是否与远程数据库最新的信息。这是一个示例输出：

```shell
myCommandPrompt (master) >> git status 
 On branch master 
 Your branch is up-to-date with 'origin/master'. 
 nothing to commit, working tree clean 
 myCommandPrompt (master) >> 
```

如果您的本地`master`分支有三个提交尚未推送到远程服务器，则状态将显示“您的分支在3个提交之前超过'origin / master'。”

### Git Clone Mirror

如果要托管存储库的镜像，可以使用mirror参数。

```shell
git clone URL-OF-REPOSITORY --mirror 
```

镜像存储库后，您可以从服务器克隆本地镜像。

```shell
git clone NAME-OF-DIRECTORY-ON-COMPUTER 
```

### 更多信息：

*   Git文档： [克隆](https://git-scm.com/docs/git-clone)