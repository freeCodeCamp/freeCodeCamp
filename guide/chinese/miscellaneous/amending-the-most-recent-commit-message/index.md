---
title: Amending the Most Recent Commit Message
localeTitle: 修改最新提交的消息
---
通常，会出现提前提交最后一次提交（丢失文件，丢失文件中的更改等）或提交消息可能输入错误或不完整的情况。对于这样的场合，Git提供了`--amend` commit标志。要修改提交，请先输入：
```
git commit --amend 
```

以上将提交任何其他更改并打开您的编辑器，允许您更改最近提交的提交消息。此外，您可以在命令行中直接设置提交消息：
```
git commit --amend -m "New commit message" 
```

如果要向提交添加文件或更改，只需确保在运行命令之前使用`git add`将更改添加到登台。此外，如果要添加所有已观看，已修改的文件（在暂存或其他情况下）并更改提交，您可以使用：
```
git commit --amend -am "New commit message" 
```

`-a`标志表示添加Git告诉跟踪的所有文件。

## 推送到远程后修改提交

当使用`--amend`标志时，Git将使用新的哈希替换最后一次提交。这意味着如果您在修改之前已经推送到远程，那么任何后续推送都将丢失旧提交，并且将拒绝任何新推送。解决这个问题的方法是 - `--force`推动。 _注： `--force`不应轻易完成。_为此，请键入：
```
git push <remote> <branch> --force 
```

**要么**
```
git push <remote> <branch> -f 
```

强制推送将使用本地状态覆盖远程分支。如果远程分支上有您在本地分支中没有的提交，则会丢失它们。如果其他人已经从您的回购中提取或克隆，这可能会导致问题。如果您认为其他人_可能_已经下载了修改过的提交，请与他们协调。

## 也可以看看

*   [git-commit（1）手册页](https://www.kernel.org/pub/software/scm/git/docs/git-commit.html)
*   [亲Git](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)
*   [堆栈溢出](http://stackoverflow.com/questions/179123/edit-an-incorrect-commit-message-in-git/179147#179147)