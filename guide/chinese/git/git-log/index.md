---
title: Git Log
localeTitle: Git Log
---
## Git Log

`git log`命令显示存储库历史记录中的所有提交。

默认情况下，该命令显示每个提交的：

*   安全散列算法（SHA）
*   作者
*   日期
*   提交消息

### 浏览Git日志

Git使用Less终端分页器来浏览提交历史记录。您可以使用以下命令进行导航：

*   向下滚动一行，使用j或↓
*   要向上滚动一行，请使用k或↑
*   要向下滚动一页，请使用空格键或Page Down按钮
*   要向上滚动一页，请使用b或Page Up按钮
*   要退出日志，请使用q

### Git Log Flags

您可以使用标志自定义`git log`提供的信息。

#### \- 一条线

`git log --oneline`

`--oneline`标志导致`git log`显示

*   每行一次提交
*   SHA的前七个字符
*   提交消息

#### \--stat

`git log --stat`

`--stat`标志导致`git log`显示

*   每次提交中修改的文件
*   添加或删除的行数
*   包含已更改的文件和行总数的摘要行

#### \--patch或-p

`git log --patch`

或者，较短的版本

`git log -p`

`--patch`标志会显示`git log`

*   您修改的文件
*   您添加或删除的行的位置
*   您所做的具体更改

### 按作者查看指定的提交数

要查看作者对当前仓库的指定提交次数（可选择以美化格式），可以使用以下命令

`git log --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" -n {NUMBER_OF_COMMITS} --author="{AUTHOR_NAME}" --all`

#### 从特定提交开始

要在特定提交时启动`git log` ，请添加SHA：

`git log 7752b22`

这将显示SHA 7752b22的提交以及在提交之前进行的所有提交。您可以将其与任何其他标志结合使用。

#### \- 图形

`git log --graph`

`--graph`标志使您可以将`git log`视为图形。为了使事情变得有趣，您可以将此命令与从上面学习的`--oneline`选项结合使用。

`git log --graph --oneline`

输出类似于，
```
* 64e6db0 Update index.md 
 * b592012 Update Python articles (#5030) 
 * ecbf9d3 Add latest version and remove duplicate link (#8860) 
 * 7e3934b Add hint for Compose React Components (#8705) 
 * 99b7758 Added more frameworks (#8842) 
 * c4e6a84 Add hint for "Create a Component with Composition" (#8704) 
 *   907b004 Merge branch 'master' of github.com:freeCodeCamp/guide 
 |\ 
 | * 275b6d1 Update index.md 
 * |   cb74308 Merge branch 'dogb3rt-patch-3' 
 |\ \ 
 | |/ 
 |/| 
 | *   98015b6 fix merge conflicts after folder renaming 
 | |\ 
 |/ / 
 | * fa83460 Update index.md 
 * | 6afb3b5 rename illegally formatted folder name (#8762) 
 * | 64b1fe4 CSS3: border-radius property (#8803) 
```

使用此命令的一个好处是，它使您能够概述提交已合并的方式以及如何创建git历史记录。

您可以将其他选项与`--graph`结合使用。他们中的`--decorate`是`--decorate`和`--all` 。一定要尝试这些。有关更多有用的信息，请参阅[文档](https://git-scm.com/docs/git-log) 。

#### 更多信息：

*   [Git Basics - 查看提交历史记录](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
*   [Git Log](https://git-scm.com/docs/git-log)

##### 关于Git的其他资源，请访问guide.freecodecamp.org

*   [Git Merge](../git-merge/index.md)
*   [Git Checkout](../git-checkout/index.md)
*   [Git Commit](../git-commit/index.md)
*   [Git Stash](../git-stash/index.md)
*   [Git Branch](../git-branch/index.md)