# 如何翻译 freeCodeCamp 的资源

## 贡献前的准备

> The freeCodeCamp Localization Roadmap – There Are No Speed Limits

> [!TIP] You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay).

You can translate as much as you want, when you want. It's only a matter of how much time and energy you are willing to invest as a volunteer translator.

We just ask that you understand the following:

1. **翻译是一件团队协作的事情。**

   翻译 freeCodeCamp 的资源是对贡献者来说最有趣和最有意义的经历之一。如果你邀请与你使用同一种语言的朋友和同事参与，那么效果最好。

   You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay) with your friends and showing your interest before starting off with translations. Crowdin and other tools make it easy to contribute translations, but it's still a lot of work.

   我们希望你在贡献过程感到快乐，而不是感到疲惫，然后失去兴趣。

   如果你们有一个四到五人的小组，就可以开始翻译一种新的语言了。 你可以再招募更多的朋友来加入这个队伍。

2. **为每种语言版本提供服务器，需要较高的成本。**

   表面上来看，技术栈可能看起来没那么复杂，但是实际上消耗了很多资源来让引擎跑起来。 这包括提供额外的服务器和专职人员来管理它们。

   freeCodeCamp.org is committed to providing these for free as always, however we need to prioritize resources for those who need them the most. 我们非常不想看到某种语言的翻译活动结束了，并且内容过时了，然后我们不得不关闭相应的服务器。

   For translating the curriculum, once a language reaches at least a few certifications we can begin deploying the language live on [`/learn`](https://www.freecodecamp.org/learn), while you continue to translate the remaining certifications.

   举个例子， 当我们正式上线一个新的语言版本的时候，我们希望至少上线整个前端认证的内容。

3. **但是，如果一种语言没有在翻译平台上列出来，怎么办呢？**

   我们已经查看了我们的用户群，并且在翻译平台的可用语言列表上添加了三十多种的常用语言。 有一些语言，例如中文和西班牙语，已经在 **"/learn"** 上线了。

   然而遗憾的是，这个语言列表并没有涵盖所有的世界语言。 我们每天都能收到许多像你一样的贡献者的需求， 希望将我们的资源翻译成他们的语言。

   我们当然希望在这个列表上增加更多的语言种类， 但是你可能已经猜到了， 假如我们有足够的人来翻译某一语言才能让这件事变得实际。

   假如你希望我们增加某一种新的语言， 我们建议你鼓动你的朋友一起来参与贡献。

   如果你们有一个组的人（至少四到五人）对某一种语言感兴趣，并且承诺翻译这种语言， 那么我们可以在翻译平台上增加这种语言。 我们会解释一切的细节，并且帮助你掌握这些翻译工具和理解这些翻译的过程。

## Overview of Crowdin

It's our dream to provide you with the resources to learn, no matter the world language you speak. To help us with this massive effort, we have integrated our open-source code-base & curriculum with [Crowdin](https://crowdin.com/) - A tool to help us localize our code-base.

> [!NOTE] We use a different tool and workflow for translating [news articles](https://www.freecodecamp.org/news). If you are interested in translating articles, read [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/) and reach out to your Language Lead.

The translation workflow is split into two main activities:

- **翻译**课程文件、文档和 UI 元素（如按钮、标签）：

  译者可以在[我们的翻译平台](https://translate.freecodecamp.org)注册，然后从 30+ 种语言版本中选择要参与贡献的版本，进行翻译。

- **校对**上述翻译。

  校对者确认社区成员贡献的译文语调一致，没有错别字等常见问题。 简而言之，校对者需要确保译文是高质量的。 注意，我们不使用任何机器翻译。

> [!WARNING] We are no longer using GitHub to translate files directly, if you are a returning contributor head to our [translation platform](https://translate.freecodecamp.org/) instead.

## Getting started

First, make sure you come say "Hi" in our [Discord](https://discord.gg/PRyKn3Vbay). 我们会在聊天室定期更新翻译的资源和回答很多问题。

其次，去我们的[翻译平台](https://translate.freecodecamp.org/)并且登陆（假如你以前没有贡献翻译过，你需要创建一个新账户）。

最后，浏览下面提供的细节图来理解怎么使用翻译工具和流程。

祝你在翻译过程中感到快乐哦！

## Select a Project and File

当你访问翻译平台，你应该可以看到很多不同的等待翻译的项目：

1. [贡献文档](https://translate.freecodecamp.org/contributing-docs)项目，其中包含此文档站点的文件。
2. [编程课程](https://translate.freecodecamp.org/curriculum)项目，其中包含我们课程的挑战文件。
3. [学习用户界面](https://translate.freecodecamp.org/learn-ui)项目，其中包含我们学习平台的按钮、标签等 UI 元素的字符串。

选择你想参与的任何项目，你将看到可供翻译的语言列表。

![图片 - 可翻译语言版本列表](https://contribute.freecodecamp.org/images/crowdin/languages.png)

选择你要使用的语言，你将看到完整的文件树。

![图片 - 可翻译文件列表](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

每个文件和文件夹都会显示一个进度条。 进度条的**蓝色**部分表示多少百分比的文件已经被翻译了，而**绿色**部分表示多少百分比的文件已经被校对团队审核确认。

选择你想翻译的文件，然后 Crowdin 会打开编辑界面。

> [!NOTE] When the editor view opens, you will need to click the settings icon (shown as a gear) and switch the 'HTML tags displaying' setting to 'SHOW'. This will ensure you can see tags such as `<code></code>` instead of `<0></0>`.

## Translate Curriculum

![图片 - 编辑界面](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin 将文档分成可翻译的“字符串”，通常是句子。 每个字符串都被单独翻译。 参考上图：

1. 以绿色标示的字符串已经有了一个建议的翻译。
2. 以红色标示的字符串_没有_建议的翻译。
3. 带有灰色文本的字符串不可翻译。 对于代码块和其他必须不被翻译的内容，就是这种情况。 你将无法在编辑器中选择这些字符串。
4. 如果某位贡献者对某个字符串有建议的译文，那么 Crowdin 将在此处显示所有的建议。 你无法保存相同的译文。如果某个译文是正确的，那么你可以点击 `+` 图标，给它投票表示赞同。 如果你觉得某个译文不正确，那么你可以点击 `-` 图标，投反对票。
5. Crowdin 将基于翻译记忆（TM）或机器翻译（MT）推荐译文。 翻译记忆是指我们已在其他文件中翻译过/批准过的相似的或相同的字符串。 机器翻译是指由 Crowdin 系统推荐的翻译。
6. 这是编辑器窗口，你可以在其中输入你对于所选字符串建议的译文。
7. 编辑窗口当前选中的字符串将被标注为黄色。
8. 这里的标签是表示字符串的状态。 `Done` 标签表示字符串有至少一个建议的译文。 `Todo` 标签表示字符串还没有建议的译文。
9. 这里是评论窗口。 如果你对某个字符串有疑问或疑虑，可以在此处对字符串发表评论，以便其他翻译人员查看。
10. 点击这两个“窗格”按钮，可以隐藏左边的（文件）视图和右边的（评论）视图。

> [!NOTE] If you see a hidden string that includes translations, please notify us in the [Discord](https://discord.gg/PRyKn3Vbay) so we can remove the translation from memory.

当你翻译完一个字符串，请点击 `Save` 按钮，将你的译文保存在  Crowdin 中。 然后其他贡献者可以给你的译文投票，而校对者也将审核确认你的译文。

你想翻译多少字符串，都可以，我们非常欢迎你贡献！当你翻译完某个文件或某个字符串之后，你不需要采取其他步骤。 你只需要点击 `Save` 按钮，就能保存你的译文了。

> [!NOTE] If you see something in the English source file that is inaccurate or incorrect, please do not fix it through the translation flow. Instead, leave a comment on the string to notify us that there is a discrepancy, or create a GitHub issue.

## Translate the Learn Interface

Our `/learn` interface relies on JSON files loaded into an i18n plugin to generate translated text. This translation effort is split across both Crowdin and GitHub.

### On GitHub

The `links.json`, `meta-tags.json`, `motivation.json`, and `trending.json` files contain information that needs to be updated to reflect your language. However, we cannot load these into Crowdin, as the content isn't something that would be a one-to-one translation.

These files will most likely be maintained by your language lead but you are welcome to [read about how to translate them](language-lead-handbook.md).

### On Crowdin

> [!ATTENTION] Do not edit the following files through a GitHub PR.

The `intro.json` and `translations.json` files are both translated on Crowdin, in the Learn User Interface project. Translating these can be a bit tricky, as each individual JSON value appears as its own string and sometimes the context is missing.

However, the `Context` information provided in Crowdin can help understand where the string fits in to the larger structure.

![Image with an arrow pointing to Crowdin's context information](https://contribute.freecodecamp.org/images/crowdin/context.png)

If you have any questions about where a string fits in to the prose, reach out to us in our [contributor chat](https://discord.gg/PRyKn3Vbay).

## Translate Documentation

Translating our contributing documentation is a similar flow to translating our curriculum files.

> [!NOTE] Our contributing documentation is powered by `docsify`, and we have special parsing for message boxes like this one. If you see strings that start with `[!NOTE]`, `[!WARNING]`, or `[!TIP]`, these words should NOT be translated.

### How to translate documentation with internal links

When you work on translating contributing documentation, watch out for internal links targeting a different section of the documentation.

Make sure to replace the id of the target section (the part after `#`) with the id on the translated document. For example, it will look like this in Japanese:

Before translation

```
// in HTML
<a href="target-file-name.md#target-section-heading-id">Link text</a>
<a href="#target-section-heading-id">Link text</a>

// in Markdown
[Link text](target-file-name.md#target-section-heading-id)
[Link text](#target-section-heading-id)
```

After translation

```
// in HTML
<a href="target-file-name.md#翻訳後の-id">翻訳後のリンクテキスト</a>
<a href="#翻訳後の-id">翻訳後のリンクテキスト</a>

// in Markdown
[翻訳後のリンクテキスト](target-file-name.md#翻訳後の-id)
[翻訳後のリンクテキスト](#翻訳後の-id)
```

The actual files in docs are written in Markdown, but they will appear as HTML tags on Crowdin.

You can find out how `docsify` converts a string in your language into an id by looking into the translated pages. If the translation is not deployed yet, you can preview it by [running the docs site locally](how-to-work-on-the-docs-theme.md#serving-the-documentation-site-locally).

You can learn more about [internal links in our docs here](how-to-work-on-the-docs-theme.md#how-to-create-an-internal-link).

## Translate the LearnToCode RPG

The LearnToCode RPG runs on Ren'Py, which uses special syntax for translated strings: (See [Ren'Py Text documentation](https://www.renpy.org/doc/html/text.html))

- The sentences to be translated are always between `""`. These are dialogues or UI strings. The keywords that come before or after the dialogue are game engine control keywords and will be explained in details in subsequent rules. Please note that this first rule governs all subsequent rules listed.
- In case of `new "..."` Do not translate the `new` keyword.
- Prefixes like `player`, `annika`, `layla`, `marco` (or variants like `player happy`, `player @ happy`) should not be translated. These are control keywords to correctly display the character sprite in the game.
- Postfixes like `nointeract` should not be translated.
- Do not translate things between `[]` and `{}`. These are variable interpolations and text tags. These must remain halfwidth parentheses `[]` and `{}` instead of their fullwidth counterparts `【】` and `「」`
- Do not translate the `nointeract` keyword at the end of the sentence.
- If we try to use fullwidth parentheses `（）`, a QA warning will show. To avoid the QA warning, use halfwidth parentheses `()`

### Examples

---

#### Before translation

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."  <--- this is the line that needs to be translated. see translation below
```

#### After translation

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]？好巧，我们的VIP队友{a=[vip_profile_url]}[player_name]{/a}会很高兴的。"
```

Note: The `[]` and `{}` tags should be left intact.

---

#### Before translation

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Skip" <-- translate this line, see below
```

#### After translation

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} 跳过"
```

Note: Again, the `new` prefix and the `{icon=icon-fast-forward}` tag should be left intact.

---

#### Before translation

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
```

#### After translation

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "哈哈，[player_name]，你真有趣。我相信你一定会喜欢你的开发者工作的。"
```

Note: `layla @ neutral` and `[player_name]` are left unchanged.

---

#### Before translation

```renpy
# player "Maybe this is all a dream?" nointeract
player "Maybe this is all a dream?" nointeract
```

#### After translation

```renpy
# player "Maybe this is all a dream?" nointeract
player "也许这都是一场梦？" nointeract
```

---

### A Note on How Crowdin Segments a Sentence

Pay attention to how Crowdin segments a line of dialogue wrapped between opening and closing quotes `""`. When we are translating the dialogue, we need to make sure to retain the opening and closing quotes, even if the quotes appear in different segments.

This is the line to be translated:

```renpy
player @ surprised "{b}Full-stack{/b}... What is that? I better take notes so I can learn more about it."
```

Crowdin segments it into three parts like below:

<img width="836" alt="Screen Shot 2022-01-23 at 10 36 43" src="https://user-images.githubusercontent.com/35674052/150693962-d3b091e5-2432-44d0-9d24-195ea7d7aeda.png" />

```renpy
# original
player @ surprised "{b}Full-stack{/b}
# translated, keeping the opening quotes `"`
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# original
What is that?
# translated, no quotes on either side
这是什么？
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# original
I better take notes so I can learn more about it."
# translated, keeping the closing quotes `"`
我最好做笔记，这样我可以学习更多东西。"
```

## Rate Translations

Crowdin allows you to rate the existing proposed translations. If you attempt to save a translation, you may see a message indicating that you cannot save a duplicate translation - this means another contributor has proposed that identical translation. If you agree with that translation, click the `+` button to "upvote" the translation.

If you see a translation that is inaccurate or does not provide the same clarity as the original string, click the `-` button to "downvote" the translation.

Crowdin uses these votes to give a score to each proposed translation for a string, which helps the proofreading team determine which translation is the best fit for each string.

## Quality Assurance Checks

We have enabled some quality assurance steps that will verify a translation is as accurate as possible - this helps our proofreaders review proposed translations.

When you attempt to save a translation, you may see a warning message appear with a notification regarding your proposed translation.

![Image - QA Warning Message](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

This message appears when Crowdin's QA system has identified a potential error in the proposed translation. In this example, we have modified the text of a `<code>` tag and Crowdin has caught that.

> [!WARNING] You have the option to save a translation in spite of errors. If you do, by clicking "Save Anyway", you should also tag a proofreader or project manager and explain why the QA message needs to be ignored in this case.

## Translation Best Practices

Follow these guidelines to ensure our translations are as accurate as possible:

- Do not translate the content within `<code>` tags. These tags indicate text that is found in code and should be left in English.
- Do not add additional content. If you feel a challenge requires changes in the text content or additional information, you should propose the changes through a GitHub issue or a pull request that modifies the English file.
- Do not change the order of content.

If you have any questions, feel free to reach out to us in our [Discord](https://discord.gg/PRyKn3Vbay) and we will be happy to assist you.
