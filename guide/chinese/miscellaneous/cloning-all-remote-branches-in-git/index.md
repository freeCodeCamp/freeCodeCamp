---
title: Cloning All Remote Branches in Git
localeTitle: 克隆Git中的所有远程分支
---
要克隆远程git存储库，请在终端中输入以下内容：

> 注意：确保您位于根文件夹中，例如`webdev`而不是项目特定文件夹。
```
git clone <remote_repo> 
 cd <remote_repo> 
```

使用以下命令列出分支：
```
git branch // Lists local branches 
 git branch -a // Lists local and remote branches 
```

要在本地签出远程分支：
```
git checkout <branch> 
```

以下是从FreeCodeCamp获取远程`master`分支的示例：
```
git clone https://github.com/FreeCodeCamp/FreeCodeCamp.git 
 cd FreeCodeCamp 
 git checkout master 

```