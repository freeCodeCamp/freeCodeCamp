---
title: Git Aliases
localeTitle: Git别名
---
## Git Alias

如果您部分输入，Git不会自动推断您的命令。如果您不想键入每个Git命令的整个文本，可以使用git config轻松地为每个命令设置别名。以下是您可能想要设置的几个示例：

```shell
$ git config --global alias.co checkout 
 $ git config --global alias.br branch 
 $ git config --global alias.ci commit 
 $ git config --global alias.st status 
```

这意味着，例如，您只需键入git ci，而不是键入git commit。当你继续使用Git时，你可能也经常使用其他命令;不要犹豫，创建新的别名。

此技术在创建您认为应存在的命令时也非常有用。例如，要更正您在取消暂存文件时遇到的可用性问题，可以将自己的unstage别名添加到Git：

```shell
$ git config --global alias.unstage 'reset HEAD --' 
```

这使得以下两个命令等效：

```shell
$ git unstage fileA 
 $ git reset HEAD fileA 
```

这看起来有点清楚。添加最后一个命令也很常见，如下所示：

```shell
$ git config --global alias.last 'log -1 HEAD' 
```

这样，您可以轻松地看到最后一次提交：

```shell
$ git last 
 commit 66938dae3329c7aebe598c2246a8e6af90d04646 
 Author: Josh Goebel <dreamer3@example.com> 
 Date:   Tue Aug 26 19:48:51 2008 +0800 
 
    test for current head 
 
    Signed-off-by: Scott Chacon <schacon@example.com> 
```

```shell
$ git config --global alias.st status --short --branch 
```

当您运行命令`git st` ，您的git状态将以漂亮，简化的格式显示。

### 查看，编辑和删除别名

要查看在计算机上创建的所有别名，请运行以下命令：

```shell
cat ~/.gitconfig 
```

用`nano`替换`cat`将允许您编辑它们或完全删除它们。

### 别名以查看所有别名

要添加别名以查看计算机上创建的所有其他别名，请添加别名

```shell
    git config --global alias.aliases 'config --get-regexp alias' 

```