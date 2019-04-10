---
title: Cloning a Specific Branch in Git
localeTitle: 克隆Git中的特定分支
---
要克隆分支，请在终端中输入以下内容：
```
git clone -b <branch> <remote_repo> 
```

如果您只想获取指定的分支：
```
git clone -b <branch> --single-branch <remote_repo> 
```

以下是从FreeCodeCamp获取`staging`分支的示例：
```
git clone -b staging https://github.com/FreeCodeCamp/FreeCodeCamp.git 

```