---
title: Git Show
localeTitle: Git Show
---
## Git Show

`git show`是一个方便的命令，使您可以查看给定对象（提交，标记，blob和树）的详细视图。

该命令的语法如下：

```bash
git show [<options>] [<object>…​]
```

对于不同的git对象， `git show`给出了不同的输出。

*   提交它显示提交日志消息，其中包含已提交的更改差异。
*   对于标签，它显示标签消息和引用的对象。
*   对于树木，它显示了名称
*   对于普通blob，它显示普通内容

`git show`的最常见用法是与git commit对象相关联

```bash
git show 3357d63
```

你会得到类似的输出，
```
commit 3357d63d8f44104940e568a1ba89fa88a16dc753
 Author: John Doe <johndoe@acme.com>
 Date:   Tue Oct 2 00:57:38 2018 +0530

    add a section on git commit --amend --author

 diff --git a/src/pages/git/git-commit/index.md b/src/pages/git/git-commit/index.md
 index fc9f568..8f1c8eb 100644
 --- a/src/pages/git/git-commit/index.md
 +++ b/src/pages/git/git-commit/index.md
 @@ -73,5 +73,11 @@ Premature commits happen all the time in the course of your day-to-day developme

 Amended commits are actually entirely new commits and the previous commit will no longer be on your current branch. When you're working with others, you should try to avoid amending commits if the last commit is already pushed into the repository.

 +With `--amend`, one of the useful flag you could use is `--author` which enables you to change the author of the last commit you've made. Imagine a situation you haven't properly set up your name or email in git configurations but you already made a commit. With `--author` flag you can simply change them without resetting the last commit.
 +
 +```
 +git commit --amend --author="John Doe <johndoe@email.com>"
 +```
 +
 ### More Information:
 - Git documentation: [commit](https://git-scm.com/docs/git-commit)
```

您可以使用`git show` ，它将显示最新git提交的内容。

### 更多信息：

*   [Git文档 - 显示](https://git-scm.com/docs/git-show)