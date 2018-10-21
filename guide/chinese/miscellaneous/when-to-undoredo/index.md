---
title: When to Undoredo
localeTitle: 什么时候去Undoredo
---
当您对git进行一些更改时，通常需要UNDO / REDO，并意识到需要删除/还原更改。这在场景中非常常见，例如，当您对某些文件进行临时更改并忘记还原它们时，然后继续将它们添加到意外提交中。

## UNDO / REDO工作流程：

假设您做了一些更改并做出如下提交：
```
git commit -m "Commit 1 - Some changes to the code" 
 git commit -m "Commit 2 - Some MORE changes to the code" 
```

1.  （ `git reset --soft HEAD~` ）：恢复最后一次提交`git reset --soft HEAD~`
2.  _做这些改变。_
3.  将文件添加到临时区域`git add <filenames or paths>`或`git add --all`
4.  （重做）：做提交。 `git commit -c ORIG_HEAD`或`git commit -C ORIG_HEAD`

## 这个怎么用？

现在你知道了流程让我们了解它在幕后的运作方式。

1.  `Step 1`将最后一次提交，即`"Commit 2 - Some MORE..."`重置为`"Commit 1 - Some..."`提交。
2.  在`Step 2` ，您将根据文件进行更改。
3.  在`Step 3` ，您可以选择性地使用`git add <filenames>`或使用`git add --all`所有已更改的文件添加到暂存区域。
4.  在最后一步中，您将在暂存区域中提交更改。

注意：您可以使用`-c`或`-C` 。 small `-c`将打开一个用于修改提交消息的编辑器，在这种情况下它将是`Commit 2 - Some MORE...`您可以根据需要编辑提交消息。

或者你可以使用大写`-C` ，其中git将跳过编辑器窗口， _并重_用_LAST_提交消息，在这种情况下再次`Commit 2 - Some MORE...`

重用“相同”提交消息也称为重做/重新授权。

## 在提交之前取消暂停

要在提交之前撤消暂存的更改，只需运行`git reset <file>`或`git reset`以在提交之前取消所有更改。

注意：在旧版本的git中，命令分别是`git reset HEAD <file>`和`git reset HEAD` 。这在Git 1.8.2中有所改变

## 更多技巧：

您可以通过使用返回任意数量的提交`git reset --soft HEAD~n`要撤消最后`n`提交。

## 归因：

本文基于Stack Overflow问题[在此处](http://stackoverflow.com/questions/927358/how-do-you-undo-the-last-commit/927386#927386)和[此处](http://stackoverflow.com/questions/348170/undo-git-add-before-commit/348234#348234) 。