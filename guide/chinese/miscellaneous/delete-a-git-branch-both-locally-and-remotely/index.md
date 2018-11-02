---
title: Delete a Git Branch Both Locally and Remotely
localeTitle: 本地和远程删除Git分支
---
//本地（（如果你知道你在做什么！） git branch -d localBranchName
```
// and then if you need to... 
 // on remote 
 git push origin :remoteBranchName 
```

## 何时删除分支？

通常在贡献流中， `Branches`是处理不同功能，修复等的好方法，同时将它们与主代码库隔离开来。因此，回购可能有一个`master`分支，并且可以使用不同的分支来处理不同的功能。

通常，在功能上完成工作后，建议删除分支。

## 删除工作流程：

假设您有一个名为`AwesomeRepo` ，它在Github上托管，位于`https://github.com/my_username/AwesomeRepo` 。

还假设它具有如下分支：  
`master`  
`feature/some-cool-new-stuff`  
`fix/authentication`  
`staging`

为了保持一致性，我们假设分支名称在`local`和`remote`上都是相同的。

现在，假设您已完成该身份验证修复，并希望删除分支`fix/authentication` 。

## 删除分支REMOTELY：

简单地说：

`git push --delete <remote> <branch>` 。

例如： `git branch --delete origin fix/authentication`

如果你收到错误
```
error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to 'git@repository_name' 
```

也许其他人已经删除了分支。尝试使用同步您的分支列表
```
git fetch -p 
```

git手册说-p， - prune取出后，删除遥控器上不再存在的任何远程跟踪分支。

## 删除分支LOCALLY：

首先结帐到您要删除的分支的其他分支：

`git checkout <branch>` 。

例如： `git checkout master`

Git不会让你删除你当前所在的分支。

然后继续删除：

`git branch -D <branch>` 。

例如： `git branch -D fix/authentication`