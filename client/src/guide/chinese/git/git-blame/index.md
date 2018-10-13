---
title: Git Blame
localeTitle: Git Blame
---
## Git Blame

使用`git blame`您可以看到谁在一个特定的文件中逐行更改了内容，这对于在团队中工作非常有用，而不是单独使用。例如，如果一行代码让你想知道为什么它存在，你可以使用`git blame` ，你会知道你必须要问谁。

### 用法

你像这样使用`git blame` ： `git blame NAME_OF_THE_FILE`

例如： `git blame triple_welcome.rb`

你会看到这样的输出：

```shell
0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 1) 3.times do 
 e483daf0 (John Doe      2018-06-18 23:50:40 -0500 2)   print 'Welcome ' 
 0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 3) end 
```

每行都使用SHA，作者姓名和上次提交日期进行注释。

### 别名Git Blame

一些程序员不喜欢“责备”这个词，因为“指责某人”带来的负面含义。此外，该工具很少（如果有的话）用于指责某人，而是寻求建议或了解文件的历史记录。因此，有时候人们会使用别名将`git blame`改为听起来更好的东西，比如`git who` ， `git history`或`git praise` 。要做到这一点，你只需添加这样的git别名：

`git config --global alias.history blame`

您可以[在此处](../git-alias/index.md)找到有关别名git命令的更多信息。

### 使用Git Blame的文本编辑器插件

有一些插件可供各种文本编辑使用`git blame` 。例如，创建类似热图的内容或为正在检查的当前行添加内联信息。一个着名的例子是[GitLense](https://gitlens.amod.io/) for VSCode。

### 进一步阅读

*   [Git Blame文档](https://git-scm.com/docs/git-blame)
*   [进一步阅读Git Blame的使用](https://corgibytes.com/blog/2016/10/18/git-blame/)