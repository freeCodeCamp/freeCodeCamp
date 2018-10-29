---
title: How to Remove a Submodule in Git
localeTitle: 如何删除Git中的子模块
---
在不再需要子模块时，删除子模块非常有用。以下步骤概述了子模块的删除。

## 删除子模块

*   从`.gitmodules`文件中删除引用子模块的部分
*   通过`git add .gitmodules`进行更改
*   从`.git/config`删除子模块的相关部分。
*   运行`git rm --cached path_to_submodule` （没有尾部斜杠）
*   运行`rm -rf .git/modules/path_to_submodule`
*   使用\`git commit -m“删除子模块”提交更改“
*   删除现在未跟踪的子模块文件`rm -rf path_to_submodule`

## 来源

*   [Stackoverflow - 如何删除子模块](http://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule)
*   [git.wiki.kernel.org - 删除Git子模块](https://git.wiki.kernel.org/index.php/GitSubmoduleTutorial#Removal)