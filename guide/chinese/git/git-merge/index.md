---
title: Git Merge
localeTitle: Git Merge
---
## Git Merge

`git merge`命令会将对单独分支上的代码库所做的任何更改合并到当前分支。

命令语法如下：

```shell
git merge BRANCH-NAME 
```

例如，如果您当前正在一个名为`dev`的分支中工作，并且想要合并在名为`new-features`的分支中进行的任何新更改，那么您将发出以下命令：

```shell
git merge new-features 
```

**请注意：**如果当前分支上有任何未提交的更改，Git将不允许您合并，直到当前分支中的所有更改都已提交。要处理这些更改，您可以：

*   创建一个新分支并提交更改

```shell
git checkout -b new-branch-name 
 git add . 
 git commit -m "<your commit message>" 
```

*   存放它们

```shell
git stash               # add them to the stash 
 git merge new-features  # do your merge 
 git stash pop           # get the changes back into your working tree 
```

*   放弃一切

```shell
git reset --hard        # removes all pending changes 
```

## 合并冲突

合并冲突是指您在不同的分支上进行提交，这些分支以冲突的方式更改同一行。因此Git不会知道要保留哪个版本的文件

导致错误消息：

CONFLICT（内容）：在resumé.txt中合并冲突 自动合并失败;修复冲突，然后提交结果。

在代码编辑器中，Git使用标记来指示文件的HEAD（主）版本以及文件的其他版本。

`<<<<<<< HEAD`

`>>>>>>> OTHER`

从代码编辑器中删除/更新以解决冲突并删除包括HEAD和OTHER文件名的特殊标记，重新加载文件，然后重新添加并重新发送更改。

有关`git merge`命令和所有可用选项的更多信息，请参阅[Git文档](https://git-scm.com/docs/git-merge) 。