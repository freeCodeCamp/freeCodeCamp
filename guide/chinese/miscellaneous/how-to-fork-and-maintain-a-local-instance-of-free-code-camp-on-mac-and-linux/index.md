---
title: How to Fork and Maintain a Local Instance of Free Code Camp on Mac and Linux
localeTitle: 如何在Mac和Linux上分叉并维护一个免费代码阵营的本地实例
---
如果您打算为免费代码营写一个Pull Request ，您几乎肯定需要该网站的本地副本。拥有该站点的本地副本将为您提供Git的其他功能，这些功能无法通过GitHub浏览器界面获得，包括更新fork和rebasing / squashing提交。

本指南将介绍如何分叉FCC项目，克隆本地副本以及如何维护fork。将为命令行提供所有Git命令，我们强烈建议您使用，但大多数命令也可以在图形Git环境中执行。

如果您使用的是Windows，请[改用本指南](https://forum.freecodecamp.com/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366) 。

## 需要帮忙？

免费代码营问题Mods和工作人员随时为我们的[帮助贡献者聊天室提供](https://gitter.im/FreeCodeCamp/HelpContributors)有关Pull Request相关问题的[帮助](https://gitter.im/FreeCodeCamp/HelpContributors)

## 设置系统

1.  安装[Git](https://git-scm.com/)或您最喜欢的Git客户端
2.  （可选）为Github [设置SSH密钥](https://help.github.com/articles/generating-ssh-keys/) 。  
    使用SSH可以大大加快与GitHub的交互，因为系统不会提示您输入密码。
3.  在系统上创建父项目目录。出于本文档的目的，我们假设它是`/mean/`

## 分叉免费代码营

1.  导航到顶级免费代码库存储库： `https://github.com/FreeCodeCamp/freecodecamp` ： `https://github.com/FreeCodeCamp/freecodecamp`
2.  单击界面右上角的“Fork”按钮。 [更多细节在这里](https://help.github.com/articles/fork-a-repo/) 。
3.  项目分叉后，您将被转到您的`username/freecodecamp`的FCC回购副本

## 克隆你的叉子

1.  从您的FCC分支，复制HTTPS或SSH（如果您安装了SSH密钥）克隆URL
2.  打开Bash Shell /命令行/终端到项目目录（IE： `/mean/` ）
3.  克隆你的git之叉：

`git clone https://github.com/yourUserName/FreeCodeCamp.git`

这会将整个FCC仓库下载到您的项目目录中。

`bash $ git clone https://github.com/yourUserName/FreeCodeCamp.git Cloning into 'FreeCodeCamp'... remote: Counting objects: 37294, done. remote: Compressing objects: 100% (13/13), done. remote: Total 37294 (delta 5), reused 0 (delta 0), pack-reused 37281 Receiving objects: 100% (37294/37294), 18.69 MiB | 3.99 MiB/s, done. Resolving deltas: 100% (26053/26053), done. Checking connectivity... done. Checking out files: 100% (573/573), done.`

### 设置您的上游

1.  将目录更改为新的`FreeCodeCamp`目录
2.  在官方FCC回购中添加遥控器：

`git remote add upstream https://github.com/FreeCodeCamp/FreeCodeCamp.git`

恭喜，您现在拥有FCC回购的本地副本！

## 维护你的叉子

现在您已经拥有了fork的副本，您需要做一些工作才能保持最新状态。

## 从上游重新定位

每次在为PR创建分支之前执行此操作：

1.  确保您在`staging`分支中

`bash $ git status On branch staging Your branch is up-to-date with 'origin/staging'.`

1.  如果您没有登台，请解决所有未完成的文件/提交和结帐登台  
    `git checkout staging`
2.  对`upstream`做一次反弹：

`git pull --rebase upstream staging`

这将删除官方分段上的所有更改，而无需在本地仓库中进行额外提交。  
4.（可选）强制将更新的分段推送到GitHub分支

`git push origin staging --force`

这将覆盖fork上的staging分支。

`bash $ git push origin staging --force Counting objects: 99, done. Delta compression using up to 12 threads. Compressing objects: 100% (38/38), done. Writing objects: 100% (38/38), 16.14 KiB | 0 bytes/s, done. Total 38 (delta 25), reused 0 (delta 0) To git@github.com:yourUserName/FreeCodeCamp.git f7a525c..8a2271d staging -> staging`