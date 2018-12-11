---
title: Untrack Files Previously Committed from New Gitignore
localeTitle: 以前从新Gitignore承诺的Untrack文件
---
要解开_单个_文件，即停止跟踪文件但不从系统中删除它：

`git rm --cached filename`

要解开`.gitignore` _每个_文件：

首先**提交**任何未完成的代码更改，然后运行：

`git rm -r --cached`

这将从索引（暂存区域）中删除所有已更改的文件，然后运行：

`git add .`

承诺：

`git commit -m ".gitignore is now working"`

要撤消`git rm --cached filename` ，请使用`git add filename`