---
title: Git Commit
localeTitle: Git Commit
---
## Git Commit

`git commit`命令将在本地存储库的“提交”中保存所有暂存的更改以及用户的简要描述。

提交是Git使用的核心。您可以将提交视为项目的快照，其中在当前存储库中创建该项目的新版本。提交的两个重要特征是：

*   您可以在以后调用提交的更改，或将项目还原到该版本（ [请参阅Git checkout](https://guide.freecodecamp.org/git/git-checkout) ）
*   如果多个提交编辑项目的不同部分，即使提交的作者彼此不知道，它们也不会相互覆盖。这是使用Git而不是像Dropbox或Google Drive这样的工具的好处之一。

### 选项

`git commit`可以包含许多选项。但是，本指南仅涵盖两个最常见的选项。有关广泛的选项列表，请参阅[Git文档](https://git-scm.com/docs/git-commit) 。

#### \-m选项

与`git commit`一起使用的最常见选项是`-m`选项。 `-m`代表消息。调用`git commit` ，需要包含一条消息。该消息应该是对提交的更改的简短描述。消息应该在命令的末尾，并且必须用引号`" "`包装。

如何使用`-m`选项的示例：

```shell
git commit -m "My message" 
```

终端中的输出应如下所示：

```shell
[master 13vc6b2] My message 
 1 file changed, 1 insertion(+) 
```

**注意：**如果`git commit`命令中不包含`-m` ，系统将提示您在默认文本编辑器中添加消息 - 请参阅下面的“使用详细提交消息”。

#### \-a选项

另一个流行的选择是`-a`选项。 `-a`代表所有人。此选项自动分阶段提交所有已修改的文件。如果添加了新文件， `-a`选项将不会暂存这些新文件。只提交Git存储库知道的文件。

例如：

假设您有一个已经提交到存储库的`README.md`文件。如果对此文件进行了更改，则可以使用commit命令中的`-a`选项暂存并将更改添加到存储库。但是，如果您还添加了一个名为`index.html`的新文件，该怎么办？ `-a`选项不会对`index.html`因为它当前不存在于存储库中。添加新文件时，应调用`git add`命令以便在将文件提交到存储库之前对其进行分段。

如何使用`-a`选项的示例：

```shell
git commit -am “My new changes” 
```

终端中的输出应如下所示：

```shell
[master 22gc8v1] My new message 
 1 file changed, 1 insertion(+) 
```

### 使用详细的提交消息

尽管`git commit -m "commit message"`工作得很好，但提供更详细和系统的信息会很有用。

如果您在不使用`-m`选项的情况下提交，git将使用新文件打开您的默认文本编辑器，该文件将包含提交中暂存的所有文件/更改的注释列表。然后编写详细的提交消息（第一行将被视为主题行），并在保存/关闭文件时执行提交。

记住：

*   保持您的提交消息行长度小于72个字符作为标准做法
*   完全可以 - 甚至建议 - 编写多行提交消息
*   您还可以在提交消息中引用其他问题或提取请求。 GitHub为所有拉取请求和问题分配了一个数字引用，例如，如果你想引用拉请求＃788，只需在主题行或正文中适当地这样做

#### \--amend选项

`--amend`选项允许您更改上次提交。假设您刚刚提交，并且您在提交日志消息中犯了一个错误。您可以使用以下命令方便地修改最近的提交：

```shell
git commit --amend -m "an updated commit message" 
```

如果您忘记在提交中包含文件：

```shell
git add FORGOTTEN-FILE-NAME 
 git commit --amend -m "an updated commit message" 
 
 # If you don't need to change the commit message, use the --no-edit option 
 git add FORGOTTEN-FILE-NAME 
 git commit --amend --no-edit 
```

在您的日常开发过程中，过早提交会一直发生。很容易忘记暂存文件或如何正确格式化提交消息。 `--amend`标志是修复这些小错误的便捷方法。此命令将使用命令中指定的更新消息替换旧的提交消息。

修改后的提交实际上是全新的提交，之前的提交将不再在您当前的分支上。当您与其他人合作时，如果最后一次提交已经被推入存储库，您应该尽量避免修改提交。

随着`--amend` ，您可以使用有用的标志之一是`--author` ，使您能够改变最后的作者提交您所做。想象一下你没有在git配置中正确设置你的名字或电子邮件的情况，但你已经提交了一个提交。使用`--author`标志，您只需更改它们而无需重置最后一次提交。
```
git commit --amend --author="John Doe <johndoe@email.com>" 
```

#### \-v或--verbose选项

使用`-v`或`--verbose`选项时不使用`-m`选项。当您希望在默认编辑器中编辑Git提交消息，同时能够看到您为提交所做的更改时， `-v`选项非常有用。该命令将打开您的默认文本编辑器，其中包含提交消息模板_以及_您为此提交所做的更改的副本。更改或差异不会包含在提交消息中，但是当您在提交消息中描述更改时，它们提供了一种很好的方式来引用您的更改。

### 更多信息：

*   Git文档： [提交](https://git-scm.com/docs/git-commit)