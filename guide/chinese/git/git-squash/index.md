---
title: Git Squash
localeTitle: Git Squash
---
## Git Squash

开发人员经常听到关于他们的拉取请求的事情之类的事情就像“对我来说好看，请挤压并合并”。有趣的是，没有像`git squash`这样的命令（除非你为它创建一个[别名](https://guide.freecodecamp.org/git/git-rebase) ）。为了`squash` pull请求通常意味着在此请求所有提交压缩成一个（很少到其他号码），使之更简洁，可读性和不污染主要分支的历史。要实现该开发人员需要使用[Git Rebase](https://guide.freecodecamp.org/git/git-rebase)命令的**交互模式** 。

通常，当您开发一些新功能时，您最终会在历史记录中进行多次间歇性提交 - 毕竟您会逐渐增加。这可能只是一些拼写错误或最终解决方案的步骤。大多数情况下，在最终公共版本的代码中使用所有这些提交是没有用的，因此将所有这些提交压缩成一个，单个和最终的更有益。

因此，假设您在作为pull请求的一部分合并的分支中有以下提交日志：

```shell
$ git log --pretty=oneline --abbrev-commit 
 30374054 Add Jupyter Notebook stub to Data Science Tools 
 8490f5fc Minor formatting and Punctuation changes 
 3233cb21 Prototype for Notebook page 
```

很明显，我们宁愿在这里只有一个提交，因为知道我们开始编写的内容以及我们稍后在那里修改了哪个拼写错误没有任何好处，只有最终结果才是重要的。

所以我们做的是从当前**HEAD** （提交**30374054** ）开始交互式rebase会话以提交**3233cb21** ，意图将**3个**最新提交合并为一个：

```shell
$ git rebase -i HEAD~3 
```

这将打开一个编辑器，如下所示：

```shell
pick 3233cb21 Prototype for Notebook page 
 pick 8490f5fc Minor formatting and Punctuation changes 
 pick 30374054 Add Jupyter Notebook to Data Science Tools 
 # Rebase 
 # 
 # Commands: 
 #  p, pick = use commit 
 #  r, reword = use commit, but edit the commit message 
 #  e, edit = use commit, but stop for amending 
 #  s, squash = use commit, but meld into previous commit 
 #  f, fixup = like "squash", but discard this commit's log message 
 #  x, exec = run command (the rest of the line) using shell 
 # 
 # These lines can be re-ordered; they are executed from top to bottom. 
 # 
 # If you remove a line here THAT COMMIT WILL BE LOST. 
 # 
 # However, if you remove everything, the rebase will be aborted. 
 # 
 # Note that empty commits are commented out 
```

和往常一样，Git给了我们非常好的帮助信息，你可以看到我们正在寻找的这个`squash`选项。

目前，交互式rebase的指令表示`pick`每个指定的提交**并**保留相应的提交消息。那就是 - 不要改变任何东西。但我们希望最终只有一个提交。只需在您编辑替换编辑文本`pick`与`squash` （或只是`s` ）未来哟每一个承诺，我们要摆脱和保存/退出编辑器。这可能看起来像这样：

```shell
s 3233cb21 Prototype for Notebook page 
 s 8490f5fc Minor formatting and Punctuation changes 
 pick 30374054 Add Jupyter Notebook to Data Science Tools 
```

当您关闭编辑器保存此更改时，它将立即重新打开，建议选择并重新提交提交消息。就像是

```shell
# This is a combination of 3 commits. 
 # The first commit's message is: 
 Prototype for Notebook page 
 
 # This is the 2nd commit message: 
 
 Minor formatting and Punctuation changes 
 
 # This is the 3rd commit message: 
 
 Add Jupyter Notebook to Data Science Tools 
 
 # Please enter the commit message for your changes. Lines starting 
 # with '#' will be ignored, and an empty message aborts the commit. 
```

此时，您可以删除不希望包含在最终提交版本中的所有消息，重写它们或只是从头开始编写提交消息。请记住，新版本将包含所有不以`#`字符开头的行。再一次，保存并退出编辑器。

您的终端现在应该显示成功消息，包括`Successfully rebased and updated <branch name>` ，并且git日志应该只显示一个提交的良好和压缩历史记录。所有中间提交都已消失，我们准备合并！

### 有关本地和远程提交历史记录不匹配的警告

如果您的分支已经发布在远程存储库中，则此操作稍微有点危险 - 毕竟您正在修改提交历史记录。因此，在**推送**之前最好在本地分支上进行压缩操作。有时它会被推 - 你怎么会创建拉请求呢？在这种情况下，您必须在执行压缩后**强制**执行远程分支上的更改，因为远程存储库中的本地历史记录和分支历史记录不同：

`shell $ git push origin +my-branch-name`

尽力确保你是唯一一个在这一点上使用这个远程分支的人，或者你将使他们的生活更加困难，因为历史不匹配。但是，由于**挤压**通常是在分支之前作为分支的最终操作完成的，因此通常没有那么大的担忧。