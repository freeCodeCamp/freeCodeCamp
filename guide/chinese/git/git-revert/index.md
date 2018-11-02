---
title: Git Revert
localeTitle: Git Revert
---
## Git Revert

`git revert`命令撤消提交，但与`git reset` （从提交历史记录中删除提交）不同，它会附加一个带有结果内容的新提交。这可以防止Git丢失历史记录，这对于修订历史记录的完整性和可靠的协作非常重要。当您与其他开发人员一起使用存储库时，使用`git reset`非常危险，因为您更改了提交的历史记录，这使得很难与其他开发人员保持一致的提交历史记录。

### 常见选项

1.）这是默认选项，不需要指定。此选项将打开已配置的系统编辑器，并在提交还原之前提示您编辑提交消息。

```shell
  -e 
  --edit 
```

2.）这是-e选项的反转。 `revert`将不会打开编辑器。

```shell
  --no-edit 
```

3.）传递此选项将阻止`git revert`创建一个反转目标提交的新提交。此选项不会创建新提交，而是将相反的更改添加到暂存索引和工作目录。

```shell
  -n 
  --no-edit 
```

### 例。

让我们想象下面的情况。 1.）您正在处理文件，并添加并提交更改。 2.）然后，您可以处理其他一些事情，并进行更多提交。 3.）现在你意识到，你做了三到四次提交，你做了一些你想要撤消的事情 - 你怎么能这样做？

您可能在想，只需使用`git reset` ，但这将删除您想要更改的所有提交 - `git revert`为救援！让我们来看看这个例子：

```shell
mkdir learn_revert # Create a folder called `learn_revert` 
 cd learn_revert # `cd` into the folder `learn_revert` 
 git init # Initialize a git repository 
 
 touch first.txt # Create a file called `first.txt` 
 echo Start >> first.txt # Add the text "Start" to `first.txt` 
 
 git add . # Add the `first.txt` file 
 git commit -m "adding first" # Commit with the message "Adding first.txt" 
 
 echo WRONG > wrong.txt # Add the text "WRONG" to `wrong.txt` 
 git add . # Add the `wrong.txt` file 
 git commit -m "adding WRONG to wrong.txt" # Commit with the message "Adding WRONG to wrong.txt" 
 
 echo More >> first.txt # Add the text "More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding More to first.txt" # Commit with the message "Adding More to first.txt" 
 
 echo Even More >> first.txt # Add the text "Even More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding Even More to First.txt" # Commit with the message "Adding More to first.txt" 
 
 # OH NO! We want to undo the commit with the text "WRONG" - let's revert! Since this commit was 2 from where we are not we can use git revert HEAD~2 (or we can use git log and find the SHA of that commit) 
 
 git revert HEAD~2 # this will put us in a text editor where we can modify the commit message. 
 
 ls # wrong.txt is not there any more! 
 git log --oneline # note that the commit history hasn't been altered, we've just added a new commit reflecting the removal of the `wrong.txt` 
```

#### 更多信息：

*   [Git还原文档](https://git-scm.com/docs/git-revert)
*   [Git还原了互动教程](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)