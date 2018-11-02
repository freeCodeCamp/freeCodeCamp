---
title: Checkout a Remote Branch in Git
localeTitle: 在Git中签出一个远程分支
---
# 签出远程分支工作流程

根据您当地仓库的遥控器数量，请遵循相应的流程。

## 对于使用一个遥控器的回购：

如果你的本地仓库只有一个遥控器，例如`origin` ：
```
git remote -v 
 origin  https://github.com/my_username/AwesomeRepo.git (fetch) 
 origin  https://github.com/my_username/AwesomeRepo.git (push) 
```

然后你可以简单地做：

`git fetch`

`git checkout some_branch_name`

## 对于具有多个远程的repos：

如果您的本地仓库有多个遥控器：
```
git remote -v 
 origin      https://github.com/raisedadead/wiki.git (fetch) 
 origin      https://github.com/raisedadead/wiki.git (push) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (fetch) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (push) 
```

然后你还必须指定一个遥控器：  
`git fetch`  
`git checkout -b some_branch_name <remote>/some_branch_name`  
其中`<remote>`在此示例中是`upstream`或`origin` 。