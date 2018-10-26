---
title: Git Hooks
localeTitle: Git Hooks
---
## Git Hooks

Git Hooks是位于git存储库的`.git/hooks/`目录中的脚本。这些脚本在版本控制过程中的不同阶段触发后运行。

### 样品

在这个目录中有一些示例脚本，例如`pre-commit.sample` 。每次用户运行`git commit`时，此特定示例都会运行。如果钩子脚本以0以外的状态退出，则提交将停止。

### 文档

*   [Git Hooks的文档](https://git-scm.com/docs/githooks)
*   [关于Git Hooks的Atlassian教程](https://www.atlassian.com/git/tutorials/git-hooks)
*   [Git Hooks指南](http://githooks.com/)