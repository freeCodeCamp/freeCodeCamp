---
title: Understand How to Use Git Merge
localeTitle: 了解如何使用Git Merge
---
我们假设您正在开发一个类似于Reddit的应用程序，但专门用于代码片段。在这样的应用程序中，您可能有一个包含所有已发布功能的`master`分支，一个`dev`分支，它可能包含已编码但尚未实现的功能。团队中的每个开发人员都将在`dev`分支上创建自己的分支以获取各个功能。存储库结构看起来像这样：
```
                                  --- Commit 3 --------- dev branch 
                                / 
 --- Commit 1 ---- Commit 2 ---------------------------- master branch 
```

如果您决定将第3次提交（ `Commit 3` ）从`dev`分支合并到`master`分支中，那么它就像运行`git merge`命令一样简单，因为`dev`分支与`master`分支是_最新_的：所有`master`分支中的提交存在于`dev`分支中。您可以通过运行以下命令来合并分支：
```
git checkout dev 
 git merge master 
```

结果将是这样的：
```
                                               --------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch 
```

现在您决定使用身份验证功能。要处理身份验证功能，请根据`dev`分支创建另一个分支，并决定将其称为`auth` 。这就是repo结构的样子：
```
                                                  ------ auth branch 
                                                / 
                                               --------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch 
```

如果你提交的任何更改`auth`分公司，合并他们`dev`的分支将是微不足道的，因为它是由最新与`dev`分支。现在，当您正在研究身份验证功能时，其中一位开发人员完成了语法突出显示功能的编码，并决定将其与`dev`分支合并。回购现在看起来像这样：
```
                                                  --- Commit 5 --- auth branch 
                                                / 
                                               --- Commit 4 ------ dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 ------------------------ master branch 
```

你的分支，在Git术语中，现在是`dev`分支后面的一个提交。这意味着您不能简单地合并两个分支：您必须使用`dev`分支使您的`auth`分支更新。这可以通过`git merge`完成！

将`auth`分支与`dev`分支或`dev`分支与`master`分支合并是很简单的并且按照你的期望进行，但是相反地合并它有自己的特性，乍一看并不直观。我可以喋喋不休，或者我可以向您展示另一个很好的图表，如果您此时合并`dev`分支与`auth`分支会发生什么：
```
                                                  --- Commit 5 ----------- auth branch 
                                                /               / 
                                               --- Commit 4 -------------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch 
```

看看我在那里做了什么？查看图表一秒钟，并在继续之前尝试了解这里发生的事情。您基本上是对`auth`分支进行了另一次提交，其中包含了`dev`分支中的提交。但那没关系，对吧？毕竟，在一天结束时，我想让我的`auth`分支与`dev`分支最新，现在它_是_最新的？是的。但是，让我向您展示一个图表，以明确说明其他图表所暗示的内容：您的`auth`分支现在看起来像这样：
```
    --- Commit 5 ------- Commit 4 ------- auth branch 
  /                / 
 ------ Commit 4 --- --------------------- dev branch 
```

现在看？您_复制_了提交。如果你现在要合并到`dev`分支，它看起来像这样：
```
    --- Commit 5 ------- Commit 4 -------------------------------------- auth branch 
  /                /                  \ 
 ------- Commit 4 ----------------------- Commit 5 ---- Commit 4 -------- dev branch 
```

你合并了两次相同的提交！这当然对你的代码本身没有任何影响，但是如果你有一个好日子决定查看你的`git logs` ，你会立即意识到你的git历史是多么脏，一些提交一遍又一遍。如果您想恢复提交，则很难确定要还原到哪个提交。

您最好使用[Git-Rebase](http://forum.freecodecamp.com/t/how-to-use-git-rebase/13226) 。