---
title: Gitignore
localeTitle: 的.gitignore
---
## Gitignore

`.gitignore`文件是一个文本文件，告诉Git在项目中忽略哪些文件或文件夹。

本地`.gitignore`文件通常放在项目的根目录中。您还可以创建一个全局`.gitignore`文件，该文件中的所有条目都将在所有Git存储库中被忽略。

要创建本地`.gitignore`文件，请创建一个文本文件并将其命名为`.gitignore` （请记住在开头包含`.` ）。然后根据需要编辑此文件。每个新行都应列出您希望Git忽略的其他文件或文件夹。

此文件中的条目也可以遵循匹配模式。

*   `*`用作通配符匹配
*   `/`用于忽略相对于`.gitignore`文件的路径名
*   `#`用于向`.gitignore`文件添加注释

这是`.gitignore`文件的外观示例：
```
# Ignore Mac system files 
 .DS_store 
 
 # Ignore node_modules folder 
 node_modules 
 
 # Ignore all text files 
 *.txt 
 
 # Ignore files related to API keys 
 .env 
 
 # Ignore SASS config files 
 .sass-cache 
```

要添加或更改全局.gitignore文件，请运行以下命令：

```bash
git config --global core.excludesfile ~/.gitignore_global 
```

这将创建文件`~/.gitignore_global` 。现在，您可以像编辑本地`.gitignore`文件一样编辑该文件。您的所有Git存储库都将忽略全局`.gitignore`文件中列出的文件和文件夹。

### 更多信息：

*   Git文档： [gitignore](https://git-scm.com/docs/gitignore)
*   忽略文件： [GitHub](https://help.github.com/articles/ignoring-files/)
*   有用的`.gitignore`模板： [GitHub](https://github.com/github/gitignore)