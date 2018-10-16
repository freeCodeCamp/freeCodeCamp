---
title: Change the Url of a Remote Repository
localeTitle: 更改远程存储库的URL
---
`git remote set-url`命令更改现有的远程存储库URL。

**此命令有两个参数：**

1.  现有的远程名称。例如，起源或上游是两种常见的选择。
    
2.  远程的新URL。例如， `https://github.com/USERNAME/OTHERREPOSITORY.git`
    

**因此，要更改远程存储库的URL，您可以执行以下操作：**

1.  查看现有的远程存储库：

`git remote -v`

1.  更改远程存储库的URL：

`git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git`

1.  您可以通过执行以下操作来验证新的远程存储库：

`git remote -v`

_有关更多信息，请查看[此github文章。](https://help.github.com/articles/changing-a-remote-s-url/)_