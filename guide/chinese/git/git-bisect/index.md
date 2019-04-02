---
title: Git Bisect
localeTitle: Git Bisect
---
## Git Bisect

`git bisect`命令可帮助您查找在项目中添加特定更改的提交。如果您需要查找引入错误的更改，这将特别有用。

此命令的工作原理是提供一个“错误”提交，其中包含错误和引入错误之前的“良好”提交。通过二进制搜索， `git bisect`将选择提交并要求您确定提交是“好”还是“坏”。这将继续，直到命令能够找到引入更改的确切提交。

### Bisect命令

要启动bisect会话，您将告诉git启动bisect会话，识别“坏”版本，并识别“好”版本。假设当前提交已中断但提交`4b60707`是好的，您将运行以下命令：

```shell
git bisect start 
 git bisect bad 
 git bisect good 4b60707 
```

Git将检查“好”和“坏”版本之间的提交，并输出如下内容：
```
Bisecting: 2 revisions left to test after this (roughly 2 steps) 
```

你现在应该告诉git当前的提交是否适用于`git bisect good`或者当前的提交是否被`git bisect bad`破坏了。此过程将重复，直到命令能够打印出第一个错误提交。

完成后，您应该清理bisect会话。这会将HEAD重置为启动bisect会话之前的状态：

```shell
git bisect reset 
```

### 其他资源

*   [Git bisect文档](https://git-scm.com/docs/git-bisect)