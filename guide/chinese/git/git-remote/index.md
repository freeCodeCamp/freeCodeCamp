---
title: Git Remote
localeTitle: Git Remote
---
## Git Remote

`git remote`命令允许您管理Git远程存储库。远程存储库是对在同一代码库上运行的其他Git存储库的引用。

您可以 [从中拉出来](https://guide.freecodecamp.org/git/git-pull/) 和 [推动](https://guide.freecodecamp.org/git/git-push/) 远程存储库。

您可以推送或拉入HTTPS URL（例如`https://github.com/user/repo.git` ）或SSH URL（例如`git@github.com:user/repo.git` 。

不用担心，每次推送东西时，都不需要输入整个URL。 Git将远程URL与名称关联，大多数人使用的名称是`origin` 。

### 列出所有已配置的远程存储库

```bash
git remote -v 
```

此命令列出所有远程存储库及其位置。

远程存储库按名称引用。如上所述，项目的主存储库通常称为`origin` 。

当你使用 [git clone](https://guide.freecodecamp.org/git/git-clone/) 为了获取存储库的副本，Git将原始位置设置为_源_远程存储库。

### 添加远程存储库

要将远程存储库添加到项目，请运行以下命令：

```bash
git remote add REMOTE-NAME REMOTE-URL 
```

`REMOTE-URL`可以是HTTPS或SSH。您可以通过单击存储库中的“克隆或下载”下拉列表在GitHub上找到该URL。

例如，如果要添加远程存储库并将其称为`example` ，则应运行：

```bash
git remote add example https://example.org/my-repo.git 
```

### 更新远程URL

如果远程存储库的URL发生更改，则可以使用以下命令对其进行更新，其中`example`是远程存储库的名称：

```bash
git remote set-url example https://example.org/my-new-repo.git 
```

### 删除遥控器

删除遥控器的方式如下：

```bash
git remote rm REMOTE-NAME 
```

您可以通过查看现有遥控器列表来确认遥控器已消失：

```bash
git remote -v 
```

### 更多信息：

*   [Git远程文档](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)