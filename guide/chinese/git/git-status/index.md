---
title: Git Status
localeTitle: Git状态
---
## Git状态

`git status`命令显示工作目录和暂存区域的状态。它显示`index`文件和当前`HEAD`提交之间存在差异的路径，工作树和`index`文件之间存在差异的路径，以及工作树中未由Git跟踪的路径（ [gitignore](https://git-scm.com/docs/gitignore)不会忽略这些[路径）](https://git-scm.com/docs/gitignore)

`git status`命令输出不会显示有关已提交项目历史记录的任何信息。为此，您需要使用`git log` 。

### 用法

```shell
git status 
```

列出哪些文件已暂存，未暂存和未跟踪。