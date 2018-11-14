---
title: Git Rebase
localeTitle: 去Rebase
---
## Git Rebase

在Git中重新分支分支是一种将整个分支移动到树中另一个点的方法。最简单的例子是在树中进一步向上移动分支。假设我们在A点有一个与主分支不同的分支：
```
        /o-----o---o--o-----o--------- branch 
 --oo--A--o---o---o---o----o--ooo--- master 
```

如果你改变，你可以这样移动：
```
                                   /o-----o---o--o-----o------ branch 
 --oo--A--o---o---o---o----o--ooo master 
```

要进行rebase，请确保在master分支中的rebase中拥有所需的所有提交。检查要重新绑定的分支并键入`git rebase master` （其中master是要重新绑定的分支）。

也可以在不同的分支上进行rebase，以便例如基于另一个分支的分支（让我们称之为功能）在master上重新定位：
```
                            /---oo branch 
           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
```

在你签出分支后，在`git rebase master branch`或`git rebase master` ，你会得到：
```
           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
                                  \---oo branch 
```

### 在控制台中使用Git rebase交互

要在控制台中使用带有提交列表的`git rebase` ，您可以选择，编辑或删除rebase：

*   输入`git rebase -i HEAD~5` ，最后一个数字是您要查看的最近一次提交的任意数量的提交。
*   在vim中，按`esc` ，然后`i`开始编辑测试。
*   在左侧，您可以使用以下命令之一覆盖`pick` 。如果要将提交压缩到前一个提交并丢弃提交消息，请在提交`pick`位置输入`f` 。
```
pick 452b159 <message for this commit> 
 pick 7fd4192 <message for this commit> 
 pick c1af3e5 <message for this commit> 
 pick 5f5e8d3 <message for this commit> 
 pick 5186a9f <message for this commit> 
 
 # Rebase 0617e63..5186a9f onto 0617e63 (30 commands) 
 # 
 # Commands: 
 # p, pick = use commit 
 # r, reword = use commit, but edit the commit message 
 # e, edit = use commit, but stop for amending 
 # s, squash = use commit, but meld into previous commit 
 # f, fixup = like "squash", but discard this commit's log message 
 # x, exec = run command (the rest of the line) using shell 
 # d, drop = remove commit 
 # 
 # These lines can be re-ordered; they are executed from top to bottom. 
 # 
 # If you remove a line here THAT COMMIT WILL BE LOST. 
 # 
 # However, if you remove everything, the rebase will be aborted. 
 # 
 # Note that empty commits are commented out 
```

*   输入`esc`然后输入`:wq`进行保存并退出。
*   如果它成功重新绑定，那么你需要强制推送你的更改，使用`git push -f`将更新的版本添加到你的github仓库。
*   如果存在合并冲突，可通过多种方法解决此问题，包括遵循[本指南中](https://help.github.com/enterprise/2.11/user/articles/resolving-a-merge-conflict-using-the-command-line/)的建议。一种方法是在文本编辑器中打开文件并删除不需要的代码部分。然后使用`git add <file name>`然后使用`git rebase --continue` 。您可以通过输入`git rebase --skip`跳过冲突的提交，在控制台中输入`git rebase --abort`退出git rebase。

### 更多信息：

*   [Git文档：rebase](https://git-scm.com/docs/git-rebase)
*   [虽然是git rebase的互动指南](https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history)