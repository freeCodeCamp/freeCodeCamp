---
title: Git Reset
localeTitle: Git重置
---
## Git重置

`git reset`命令允许您将当前头重置为指定状态。您可以重置特定文件的状态以及整个分支。

### 重置文件或文件集

以下命令允许您有选择地选择内容块并还原或取消暂存。

```shell
git reset (--patch | -p) [tree-ish] [--] [paths] 
```

### 取消暂存文件

如果您使用`git add`文件移动到暂存区域，但不再希望它成为提交的一部分，则可以使用`git reset`来取消`git reset`该文件：

```shell
git reset HEAD FILE-TO-UNSTAGE 
```

您所做的更改仍将在文件中，此命令只是从暂存区域中删除该文件。

### 将分支重置为先前的提交

以下命令将当前分支的HEAD重置为给定的`COMMIT`并更新索引。它基本上会回退你的分支的状态，然后你所做的所有提交都会写出重置点之后的任何内容。如果省略`MODE` ，则默认为`--mixed` ：

```shell
git reset MODE COMMIT 
```

`MODE`的选项是：

*   `--soft` ：不重置索引文件或工作树，但重置HEAD以`commit` 。将所有文件更改为“要提交的更改”
*   `--mixed` ：重置索引但不重置工作树，并报告尚未更新的内容
*   `--hard` ：重置索引和工作树。自`commit`以来对工作树中跟踪文件的任何更改都将被丢弃
*   `--merge` ：重置索引并更新工作树中`commit`和HEAD之间不同的文件，但保留索引和工作树之间不同的文件
*   `--keep` ：重置索引条目并更新工作树中`commit`和HEAD之间不同的文件。如果`commit`和HEAD之间不同的文件具有本地更改，则重置将中止

### 更多信息：

*   [Git重置文档](https://git-scm.com/docs/git-reset)