---
title: Override Local Files with Git Pull
localeTitle: 使用Git Pull覆盖本地文件
---
# 什么时候需要覆盖本地文件？

如果您觉得需要丢弃所有本地更改，只需使用远程分支中的副本重置/覆盖所有内容，则应遵循本指南。

重要提示：如果您有任何本地更改，它们将丢失。无论有没有`--hard`选项，任何未被推送的本地提交都将丢失。  
如果您有任何未被Git跟踪的文件（例如上传的用户内容），则这些文件不会受到影响。

## 覆盖工作流程：

要覆盖本地文件，请执行以下操作：
```
git fetch --all 
 git reset --hard <remote>/<branch_name> 
```

例如：
```
git fetch --all 
 git reset --hard origin/master 
```

## 这个怎么运作：

`git fetch`从远程下载最新版本而不尝试合并或重新绑定任何内容。

然后git reset将master分支重置为刚刚获取的分支。 `--hard`选项更改工作树中的所有文件以匹配`origin/master`中的文件。

## 附加信息：

值得注意的是，可以通过在重置之前从`master`或要处理的任何分支创建分支来维护当前的本地提交：

例如：
```
git checkout master 
 git branch new-branch-to-save-current-commits 
 git fetch --all 
 git reset --hard origin/master 
```

在此之后，所有旧提交将保留在`new-branch-to-save-current-commits` 。然而，未提交的更改（即使是暂存的）也将丢失。确保存储并提交您需要的任何内容。

## 归因：

_这篇文章是基于一个堆栈溢出问题[在这里](http://stackoverflow.com/questions/1125968/force-git-to-overwrite-local-files-on-pull/8888015#8888015)_