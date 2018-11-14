---
title: Rename Local Branches in Git
localeTitle: 在Git中重命名本地分支
---
要重命名本地分支，请在终端中输入以下内容：

> `-m`代表move，就像`mv`在linux中用来重命名文件一样。
```
git branch -m <oldname> <newname> 
```

如果您已经签出了要更改的分支：
```
git branch -m <newname> 
```

下面是一个重命名`feature/react-challenges`分支来`fix/react-hikes`来自FreeCodeCamp的示例：
```
git checkout feature/react-challenges 
 git branch -m fix/react-hikes 

```