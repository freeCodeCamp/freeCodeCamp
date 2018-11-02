---
title: Tagging in Git
localeTitle: 在Git中标记
---
标记允许开发人员在项目开发过程中标记重要的检查点。例如，可以标记软件发行版本。 （例如：v1.3.2）它实质上允许你为提交提供一个特殊的名称（标记）。

要按字母顺序查看所有创建的标记：

```bash
git tag 
```

要获取有关标记的更多信息：

```bash
git show v1.4 
```

有两种类型的标签：

1.  注释

```bash
git tag -a v1.2 -m "my version 1.4" 
```

2.  轻量级

```bash
git tag v1.2 
```

它们的存储方式不同。  
这些在您当前的提交中创建标记。

Incase，您要标记先前的提交，指定您要标记的提交ID：

```bash
git tag -a v1.2 9fceb02 
```

在检出并将提交推送到远程仓库时，可以使用标签名称而不是提交ID。

#### 更多信息：

*   Git文档： [文档](https://git-scm.com/docs/git-tag)
*   Git Tagging章节： [书](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

您可以使用`git tag`命令列出项目中的所有可用标记（nate它们将按字母顺序显示）：
```
$ git tag 
 v1.0 
 v2.0 
 v3.0 
```

这种列出标签的方式非常适合小型项目，但更大的项目可以有数百个标签，因此您可能需要在搜索历史记录中的重要点时对其进行过滤。您可以找到包含特定字符的`git tag` ，在`git tag`命令中添加`-l` ：
```
$ git tag -l "v2.0*" 
 v2.0.1 
 v2.0.2 
 v2.0.3 
 v2.0.4 
```

## 创建一个标签

您可以创建两种类型的标记：带注释和轻量级。它们首先是GIT数据库中的竞争对象：它们是校验和，需要消息（如提交）并存储其他重要数据，如姓名，电子邮件和日期。另一方面，轻量级标签不需要消息或存储其他数据，只是作为指向项目中特定点的指针。

### 创建带注释的标签

要创建anotated标记，请在`git tag`命令中添加`-a tagname -m "tag message"` ：
```
$ git tag -a v4.0 -m "release version 4.0" 
 $ git tag 
 v1.0 
 v2.0 
 v3.0 
 v4.0 
```

如您所见， `-a`指定您创建带注释的标记，在标记名称到达之后，最后是`-m`后跟要存储在Git数据库中的标记消息。

### 创建一个轻量级标签

轻量级标签仅包含提交校验和（不存储其他信息）。要创建一个，只需运行`git tag`命令而不使用任何其他选项（名称末尾的-lw字符用于表示轻量级标记，但您可以根据需要标记它们）：
```
$ git tag v4.1-lw 
 $ git tag 
 v1.0 
 v2.0 
 v3.0 
 v4.0 
 v4.1-lw 
```

这次您没有指定消息或其他相关数据，因此标记仅包含引用的提交的校验和。

## 查看标签的数据

您可以运行`git show`命令来查看存储在标记中的数据。对于带注释的标签，您将看到标签数据和提交数据：
```
$ git show v4.0 
 tag v4.0 
 Tagger: John Cash <john@cash.com> 
 Date:   Mon Sat 28 15:00:25 2017 -0700 
 
 release version 4.0 
 
 commit da43a5fss745av88d47839247990022a98419093 
 Author: John Cash <john@cash.com> 
 Date:   Fri Feb 20 20:30:05 2015 -0700 
 
  finished details 
```

如果您正在观看的标记是轻量级标记，则只能看到引用的提交数据：
```
$ git show v1.4-lw 
 commit da43a5f7389adcb9201ab0a289c389ed022a910b 
 Author: John Cash <john@cash.com> 
 Date:   Fri Feb 20 20:30:05 2015 -0700 
 
  finished details 
```

## 标记旧提交

您还可以使用git标记提交标记过去的提交。为此，您需要在命令行中指定commit的校验和（或至少其中的一部分）。

首先，运行git log以找出所需的commit的校验和：
```
$ git log --pretty=oneline 
 ac2998acf289102dba00823821bee04276aad9ca added products section 
 d09034bdea0097726fd8383c0393faa0072829a7 refactorization 
 a029ac120245ab012bed1ca771349eb9cca01c0b modified styles 
 da43a5f7389adcb9201ab0a289c389ed022a910b finished details 
 0adb03ca013901c1e02174924486a08cea9293a2 small fix in search textarea styles 
```

当您需要校验和时，将其添加到标记创建行的末尾：
```
$ git tag -a v3.5 a029ac 
```

您将看到标记已正确添加运行`git tag` ：
```
$ git tag 
 v1.0 
 v2.0 
 v3.0 
 v3.5 
 v4.0 
 v4.1-lw 
```

## 推标签

运行git push命令时，Git默认不会推送标签。因此，要成功将标签推送到服务器，您必须使用`git push origin`命令：
```
$ git push origin v4.0 
 Counting objects: 14, done. 
 Delta compression using up to 8 threads. 
 Compressing objects: 100% (16/16), done. 
 Writing objects: 100% (18/18), 3.15 KiB | 0 bytes/s, done. 
 Total 18 (delta 4), reused 0 (delta 0) 
 To git@github.com:jcash/gitmanual.git 
 * [new tag]         v4.0 -> v4.0 
 ``` 
 
 You can also use the ```--tags``` option to add multiple tags at once with the ```git push origin``` command: 
```

$ git push origin --tags 计数对象：1，完成。 写入对象：100％（1/1），160字节| 0字节/秒，完成。 总计1（delta 0），重用0（delta 0） 致git@github.com:jcash/gitmanual.git

*   \[新标签\] v4.0 - > v4.0
*   \[新标签\] v4.1-lw - > v4.1-lw
```
## Checking out Tags 
 
 You can use ```git checkout``` to checkout to a tag like you would normally do. But you need to keep in mind that this would result a *detached HEAD* state. 
```

$ git checkout v0.0.3 注意：退房'v0.0.3'。

你处于'独立的HEAD'状态。你可以环顾四周，做实验 更改并提交它们，您可以放弃您在此中提交的任何提交 通过执行另一次结账而不影响任何分支的状态。
```
## Deleting a Tag 
 
 You may find a situation were you want to delete a certain tag. There's a very useful command for this situations: 
```

$ git tag --delete v0.0.2 $ git标签 v0.0.1 v0.0.3 v0.0.4 \`\`\`

### 更多信息

*   [Git Pro - 标记基础知识](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
*   [Git Pro - 文档](https://git-scm.com/docs/git-tag)
*   [Git HowTo](https://githowto.com/tagging_versions)
*   [Git小贴士：标签](http://alblue.bandlem.com/2011/04/git-tip-of-week-tags.html)
*   [创建标签](https://www.drupal.org/node/1066342)

### 来源

Git文档： [标签](https://git-scm.com/book/en/v2/Git-Basics-Tagging)