---
title: How to Squash Multiple Commits into One with Git
localeTitle: 如何用Git将多个提交压缩成一个
---
这是可以在`interactive`模式中使用的`rebase`一个很棒的功能。要将最后的_n次_提交压缩为一次，请运行以下命令：
```
git rebase -i HEAD~n 
```

这将打开一个文本编辑器，其内容类似于以下内容：
```
pick commit_1 
 pick commit_2 
 pick commit_3 
 ... 
 pick commit_n 
 # Bunch of comments 
```

假期第一单独提交，并更改的其余`pick` s到`squash` 。保存并退出编辑器。

因此，如果你想压缩最后三次提交，你将首先运行`git rebase -i HEAD~3`然后你将要编辑你的提交看起来像这样：
```
pick dd661ba Commit 1 
 squash 71f5fee Commit 2 
 squash f4b4bf1 Commit 3 
```

如果您在压缩提交之前已经推送到遥控器，则必须使用`-f`标志再次推送到遥控器，否则git会向您抛出错误。

强烈建议您阅读已打开文件中的信息，因为您可以执行许多操作。