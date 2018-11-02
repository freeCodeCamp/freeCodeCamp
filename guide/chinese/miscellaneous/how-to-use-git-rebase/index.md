---
title: How to Use Git Rebase
localeTitle: 如何使用Git Rebase
---
**您是否被引用此页面以接受您的公关？然后在FCC滚动到Git Rebase吧！**

`git rebase`是一个非常有用的工具，是所有关于重写提交历史，但最常用的多次提交_挤进_一个。虽然在这种情况下很有用，但这并不是`git rebase`命令可以执行的唯一功能。这实际上证明使用其名称所暗示的预期功能的时候要更加有用：基本上_变基_的一个分支。让我解释一下我的意思。

让我们说你有一个这样的存储库：
```
                                                  --- Commit 5 ----------- auth branch 
                                                / 
                                               --- Commit 4 -------------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch 
```

如果你想将`auth`分支与`dev`分支合并，git会向你抛出一个错误，因为你的`auth`分支是过时的：它没有考虑提交4.你必须把你的分支 -至今。

Git为您提供了两种方法： `merge`命令和`rebase`命令。有关`merge`命令的探索，请访问相关的wiki文章： [Git Merge](//forum.freecodecamp.com/t/understand-how-to-use-git-merge/13215)

我们现在运行`rebase` ：
```
$ git checkout auth 
 $ git rebase dev 
```

回购现在看起来像这样：
```
                                                                 --- Commit 5 --- auth branch 
                                                               / 
                                               --- Commit 4 --------------------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 --------------------------------------- master branch 
```

你看到发生了什么？ Git本质上保存了`auth`分支中的提交，“删除”它，然后在`dev`分支中提交_之后_使用相同的提交再次创建它。这意味着`Commit 4`仅存在于`dev`分支中，而不存在于`auth`分支中！而这就是它的全部内容！这可能看起来有点令人困惑，但尝试理解图表。这是一个非常有用的工具。

## FCC的Git-Rebase

### 防止合并冲突

如果您参与FCC代码库，或者计划执行此操作，请始终在对本地文件进行任何更改之前运行此命令并推送它们：

`git pull --rebase upstream staging`

如果你没有`upstream`设置，那么在运行上面的命令之前运行这个命令（git会抛出一个错误，因为它不知道上游是什么）： `git remote add upstream https://github.com/freecodecamp/freecodecamp.git`

这将从FCC临时分支中提取最新的更改并使用fork的暂存分支对它们进行重新绑定，以便在打开PR时不会发生任何冲突![:slight_smile:](//forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=2 "：slight_smile：")

### 挤压

如果您要将多个提交**[压缩](//forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231)**成一个，请按照**[Squashing](//forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231)**的说明进行**[操作](//forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231)** 。