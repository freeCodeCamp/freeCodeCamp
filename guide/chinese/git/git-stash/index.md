---
title: Git Stash
localeTitle: Git Stash
---
## Git Stash

Git有一个名为stash的区域，您可以在其中临时存储更改的快照，而无需将它们提交到存储库。它与工作目录，临时区域或存储库分开。

当您对尚未准备好提交的分支进行更改但是需要切换到另一个分支时，此功能非常有用。

### 藏匿变化

要将更改保存在存储中，请运行以下命令：

```shell
git stash save "optional message for yourself" 
```

这将保存您的更改并将工作目录恢复为最新提交的外观。可以从该存储库中的任何分支进行隐藏更改。

请注意，您要隐藏的更改需要位于跟踪的文件中。如果您创建了一个新文件并尝试存储更改，则可能会收到错误“ `No local changes to save` 。

### 查看Stashed Changes

要查看存储中的内容，请运行以下命令：

```shell
git stash list 
```

这将以`stash@{0}: BRANCH-STASHED-CHANGES-ARE-FOR: MESSAGE`的格式返回已保存快照的列表`stash@{0}: BRANCH-STASHED-CHANGES-ARE-FOR: MESSAGE` 。 `stash@{0}`部分是存储的名称，花括号（ `{ }` ）中的数字是该存储的索引。如果您有多个更改集存储，则每个更改集将具有不同的索引。

如果您忘记了存储中所做的更改，您可以使用`git stash show NAME-OF-STASH`查看它们的摘要。如果要查看典型的diff-style补丁布局（使用+'和-s进行逐行更改），可以包含`-p` （for patch）选项。这是一个例子：

```shell
git stash show -p stash@{0} 
 
 # Example result: 
 diff --git a/PathToFile/fileA b/PathToFile/fileA 
 index 2417dd9..b2c9092 100644 
 --- a/PathToFile/fileA 
 +++ b/PathToFile/fileA 
 @@ -1,4 +1,4 @@ 
 -What this line looks like on branch 
 +What this line looks like with stashed changes 
```

### 检索隐藏的更改

要从存储中检索更改并将其应用到您当前的分支，您有两个选择：

1.  `git stash apply STASH-NAME`应用更改并在存储中`git stash apply STASH-NAME`副本
2.  `git stash pop STASH-NAME`应用更改并从存储中删除文件

应用更改时可能会发生冲突。您可以解决类似于合并的冲突（ [有关详细信息，请参阅Git merge](https://guide.freecodecamp.org/git/git-merge/) ）。

### 删除隐藏的更改

如果要在不应用它们的情况下删除隐藏的更改，请运行以下命令：

```shell
git stash drop STASH-NAME 
```

要清除整个存储，请运行以下命令：

```shell
git stash clear 
```

### 更多信息：

*   `git merge`命令： [fCC指南](https://guide.freecodecamp.org/git/git-merge/)
*   Git文档： [藏匿](https://git-scm.com/docs/git-stash)