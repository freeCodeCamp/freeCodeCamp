---
title: Git Push
localeTitle: Git Push
---
## Git Push

`git push`命令允许您将提交从本地Git存储库中的本地分支发送（或_推送_ ）到远程存储库。

为了能够推送到远程存储库，您必须确保**提交对本地存储库的所有更改** 。

该命令的语法如下：

```bash
git push <repo name> <branch name> 
```

您可以通过命令传递许多不同的选项，您可以在[Git文档中](https://git-scm.com/docs/git-push#_options_a_id_options_a)了解有关它们的更多信息或运行`git push --help` 。

### 推送到特定的远程存储库和分支

为了推送代码，您必须首先将存储库克隆到本地计算机。

```bash
# Once a repo is cloned, you'll be working inside of the default branch (the default is `master`) 
 git clone https://github.com/<git-user>/<repo-name> && cd <repo-name> 
 # make changes and stage your files (repeat the `git add` command for each file, or use `git add .` to stage all) 
 git add <filename> 
 # now commit your code 
 git commit -m "added some changes to my repo!" 
 # push changes in `master` branch to github 
 git push origin master 
```

要了解有关分支机构的更多信息，请查看以下链接

*   [git checkout](https://github.com/renington/guides/blob/master/src/pages/git/git-checkout/index.md)
*   [git branch](https://github.com/renington/guides/blob/master/src/pages/git/git-branch/index.md)

### 推送到特定的远程存储库及其中的所有分支

如果要将所有更改推送到远程存储库及其中的所有分支，可以使用：

```bash
git push --all <REMOTE-NAME> 
```

其中：

*   `--all`是表示您要将所有分支推送到远程存储库的标志
*   `REMOTE-NAME`是要推送到的远程存储库的名称

### 使用force参数推送到特定分支

如果你想忽略在Github上对Git存储库进行的本地更改（大多数开发人员都对开发服务器进行热修复），那么你可以使用--force命令来忽略这些变化。

```bash
git push --force <REMOTE-NAME> <BRANCH-NAME> 
```

其中：

*   `REMOTE-NAME`是要将更改推送到的远程存储库的名称
*   `BRANCH-NAME`是要将更改推送到的远程分支的名称

### 推动忽略Git的预推钩

默认情况下， `git push`会触发`--verify`切换。这意味着git将执行可能已配置的任何客户端预推脚本。如果预推脚本失败，那么git push也会失败。 （Pre-Push挂钩适用于诸如检查提交消息是否符合公司标准，运行单元测试等等）。有时，您可能希望忽略此默认行为，例如，在您希望将更改推送到功能分支以供另一个贡献者提取的情况下，但您的工作进度更改会破坏单元测试。要忽略该钩子，只需输入push命令并添加标志`--no-verify`

```bash
git push --no-verify 
```

### 更多信息：

*   [Git文档 - 推送](https://git-scm.com/docs/git-push)
*   [Git钩子](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)