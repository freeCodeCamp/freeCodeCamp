---
title: Git Cherry Pick
localeTitle: Git Cherry Pick
---
## Git Cherry Pick

`git cherry-pick`命令应用某些现有提交引入的更改。本指南将重点介绍尽可能多地解释此功能，但当然真正的[Git文档](https://git-scm.com/docs/git-cherry-pick)将总是派上用场。

### 从主人那里查看现有的分支樱桃选择

要应用主分支顶端的提交引入的更改，并使用此更改创建新的提交。运行以下命令

```shell
git cherry-pick master 
```

### 检查来自其他提交的更改

要将提交引入的更改应用于所需的特定哈希值，请运行以下命令

```shell
git cherry-pick {HASHVALUE} 
```

这会将该提交中引用的更改添加到当前存储库

### 从一个分支到另一个分支应用某些提交

`cherry-pick`允许您在从一个分支到另一个分支的提交之间进行选择。假设您有两个分支`master`和`develop-1` 。在分支`develop-1`你有3个提交，提交ID为`commit-1` ， `commit-2`和`commit-3` 。在这里，您只能通过以下方式将`commit-2`应用于分支`master` ：

```shell
git checkout master 
 git cherry-pick commit-2 
```

如果此时遇到任何冲突，您必须修复它们并使用`git add`添加它们，然后您可以使用continue标志来应用cherry-pick。

```shell
git cherry-pick --continue 
```

如果您希望中途使用樱桃挑选，您可以使用中止标志：

```shell
git cherry-pick --abort 

```