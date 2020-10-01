# 使用回复模板

这些是您在审查合并请求和尝试问题时可以使用的一些标准回复模板。

> 您可以使用 GitHub 内置的 [**保存的回复**](https://github.com/settings/replies/) 功能或使用下面的功能。

### 谢谢你

```markdown
感谢您对页面的贡献！ :thumbs_up：
我们很高兴接受这些更改，并期待着未来的贡献。 🎉
```

### 谢谢你和组合。

> 感谢并鼓励首次提供捐助者。

```markdown
您好 @username 恭喜您的第一个拉取请求 (PR) ！ :party_poper:

谢谢您对页面的贡献！ :thumbs_up：
我们很高兴接受这些更改，并期待着未来的贡献。 📝
```

### 构建错误

```markdown
您好 @username

我们希望能够合并您的更改，但看起来与 Travis CI 构建有一个错误。 :waring_selector:

一旦您解决了这些问题，我们将能够审阅您的 PR 并合并它。 :smiling_fac_with_smiling_eyes:

----

> 自由参考[撰写文章的风格指南](https://github)。 在正确格式化一篇文章的时候, 这个repo的番茄/免费CodeCamp/免费CodeCamp#article-title) 可以正确格式化你的 Travis CI 构建通行证。 :whit_heavy_check_mark:
>
> 另外，它在 GitHub 上编写您在创建 PR时所作更改的简要说明。 📝
```

### 正在同步Fork

> 当PR 不是最新的 `master` 分支。

``````markdown
您好 @username

我们希望能够合并您的更改，但看起来与 Travis CI 构建有一个错误。 ⚠️

```bash
错误：ENOTDIR: 不是一个目录，打开 'src/pages/java/data-abastraction/index.md'
``````

这个特定的错误不是由您的文件引起的，而是由于将错误代码合并到 `主` 分支而造成的旧错误。 自那时以来，这个问题已得到解决。

要传递这个版本，您必须同步来自 `FreeCodeCamp/freeCodeCodeCamp` 仓库的 `主` 分支的最新更改。

使用命令行，您可以通过以下三个简单步骤做到这一点：

```bash
git 远程添加上游流的 git://github.com/freeCodeCamp/freeCodeCamp.git

git 获取上游流

git 拉取上游流管理员
```

如果您正在使用GUI，您可以只需 `添加一个新的遥控器...` 并使用 `github.com/freeCodeCamp/freeCodeCamp.git` 上面的链接。

一旦你同步你的分叉并通过构建，我们将能够审核并合并它。 😊

---

> 请随时参考GitHub 上的 [同步一个Fork](https://help.github.com/articles/syncing-a-fork/) 文章，以便更深入地了解如何跟上上游版本库更新你的叉。 🔄
> 
> 另外，它在 GitHub 上的良好做法是在创建PR时对您的更改作简要说明。 📝
``````

### 合并冲突

> 当PR 合并冲突需要解决时。

```markdown
Hey @username

我们希望能够合并你的更改，但看起来你有一些合并冲突。 :waring_selector:

一旦您解决了这些冲突，我们将能够审阅您的 PR 并合并它。 :smiling_fac_with_smiling_eyes:

----

> 如果你不熟悉合并冲突进程 请随时查看GitHub的指南["解决合并冲突"](https://help)。 ithub.com/articles/resolving-a-merge-conflict on-github/)。 :magnifying_glass_tilted_left：
>
> 另外，GitHub 上的良好做法是在创建PR时对您的更改编写简要说明。 📝
``````
1 如果第一个时间贡献者发生合并冲突，维护者将为他们解决冲突。

### Duplicate

> 当PR 是重复或重复时。

```markdown
你好 @username

这篇文章早些时候已经接受了类似的更改，很抱歉。 :downcast_fac_with_sweat:

如果你觉得要添加更多内容，请随时打开一个新的 PR。

再次谢谢！ :smiling_fac_with_smiling_eyes:

----

> 如果你有任何疑问，请随时通过 [Gitter](https://gitter.im/FreeCodeCamp/Contributors)或通过下面的评论进行联系。 💬
```

### 关闭无效的合并请求

> 当PR 无效

```markdown
您好 @username

您没有添加任何内容，我们将关闭此PR 并将其标记为“无效”。 :downcast_fac_with_sweat:

自由地打开另一个PR ！ 👍
```