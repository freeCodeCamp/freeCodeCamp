# 如何翻譯 freeCodeCamp 的資源

## 貢獻前的準備

> The freeCodeCamp Localization Roadmap – There Are No Speed Limits

> [!TIP] You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay).

You can translate as much as you want, when you want. It's only a matter of how much time and energy you are willing to invest as a volunteer translator.

We just ask that you understand the following:

1. **翻譯是一件團隊協作的事情。**

   翻譯 freeCodeCamp 的資源是對貢獻者來說最有趣和最有意義的經歷之一。如果你邀請與你使用同一種語言的朋友和同事參與，那麼效果最好。

   You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay) with your friends and showing your interest before starting off with translations. Crowdin and other tools make it easy to contribute translations, but it's still a lot of work.

   我們希望你在貢獻過程感到快樂，而不是感到疲憊，然後失去興趣。

   如果你們有一個四到五人的小組，就可以開始翻譯一種新的語言了。 你可以再招募更多的朋友來加入這個隊伍。

2. **爲每種語言版本提供服務器，需要較高的成本。**

   表面上來看，技術棧可能看起來沒那麼複雜，但是實際上消耗了很多資源來讓引擎跑起來。 這包括提供額外的服務器和專職人員來管理它們。

   freeCodeCamp.org is committed to providing these for free as always, however we need to prioritize resources for those who need them the most. 我們非常不想看到某種語言的翻譯活動結束了，並且內容過時了，然後我們不得不關閉相應的服務器。

   For translating the curriculum, once a language reaches at least a few certifications we can begin deploying the language live on [`/learn`](https://www.freecodecamp.org/learn), while you continue to translate the remaining certifications.

   舉個例子， 當我們正式上線一個新的語言版本的時候，我們希望至少上線整個前端認證的內容。

3. **但是，如果一種語言沒有在翻譯平臺上列出來，怎麼辦呢？**

   我們已經查看了我們的用戶羣，並且在翻譯平臺的可用語言列表上添加了三十多種的常用語言。 有一些語言，例如中文和西班牙語，已經在 **"/learn"** 上線了。

   然而遺憾的是，這個語言列表並沒有涵蓋所有的世界語言。 我們每天都能收到許多像你一樣的貢獻者的需求， 希望將我們的資源翻譯成他們的語言。

   我們當然希望在這個列表上增加更多的語言種類， 但是你可能已經猜到了， 假如我們有足夠的人來翻譯某一語言才能讓這件事變得實際。

   假如你希望我們增加某一種新的語言， 我們建議你鼓動你的朋友一起來參與貢獻。

   如果你們有一個組的人（至少四到五人）對某一種語言感興趣，並且承諾翻譯這種語言， 那麼我們可以在翻譯平臺上增加這種語言。 我們會解釋一切的細節，並且幫助你掌握這些翻譯工具和理解這些翻譯的過程。

## Overview of Crowdin

It's our dream to provide you with the resources to learn, no matter the world language you speak. To help us with this massive effort, we have integrated our open-source code-base & curriculum with [Crowdin](https://crowdin.com/) - A tool to help us localize our code-base.

> [!NOTE] We use a different tool and workflow for translating [news articles](https://www.freecodecamp.org/news). If you are interested in translating articles, read [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/) and reach out to your Language Lead.

The translation workflow is split into two main activities:

- **翻譯**課程文件、文檔和 UI 元素（如按鈕、標籤）：

  譯者可以在[我們的翻譯平臺](https://translate.freecodecamp.org)註冊，然後從 30+ 種語言版本中選擇要參與貢獻的版本，進行翻譯。

- **校對**上述翻譯。

  校對者確認社區成員貢獻的譯文語調一致，沒有錯別字等常見問題。 簡而言之，校對者需要確保譯文是高質量的。 注意，我們不使用任何機器翻譯。

> [!WARNING] We are no longer using GitHub to translate files directly, if you are a returning contributor head to our [translation platform](https://translate.freecodecamp.org/) instead.

## Getting started

First, make sure you come say "Hi" in our [Discord](https://discord.gg/PRyKn3Vbay). 我們會在聊天室定期更新翻譯的資源和回答很多問題。

其次，去我們的[翻譯平臺](https://translate.freecodecamp.org/)並且登陸（假如你以前沒有貢獻翻譯過，你需要創建一個新賬戶）。

最後，瀏覽下面提供的細節圖來理解怎麼使用翻譯工具和流程。

祝你在翻譯過程中感到快樂哦！

## Select a Project and File

當你訪問翻譯平臺，你應該可以看到很多不同的等待翻譯的項目：

1. [貢獻文檔](https://translate.freecodecamp.org/contributing-docs)項目，其中包含此文檔站點的文件。
2. [編程課程](https://translate.freecodecamp.org/curriculum)項目，其中包含我們課程的挑戰文件。
3. [學習用戶界面](https://translate.freecodecamp.org/learn-ui)項目，其中包含我們學習平臺的按鈕、標籤等 UI 元素的字符串。

選擇你想參與的任何項目，你將看到可供翻譯的語言列表。

![圖片 - 可翻譯語言版本列表](https://contribute.freecodecamp.org/images/crowdin/languages.png)

選擇你要使用的語言，你將看到完整的文件樹。

![圖片 - 可翻譯文件列表](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

每個文件和文件夾都會顯示一個進度條。 進度條的**藍色**部分表示多少百分比的文件已經被翻譯了，而**綠色**部分表示多少百分比的文件已經被校對團隊審覈確認。

選擇你想翻譯的文件，然後 Crowdin 會打開編輯界面。

> [!NOTE] When the editor view opens, you will need to click the settings icon (shown as a gear) and switch the 'HTML tags displaying' setting to 'SHOW'. This will ensure you can see tags such as `<code></code>` instead of `<0></0>`.

## Translate Curriculum

![圖片 - 編輯界面](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin 將文檔分成可翻譯的“字符串”，通常是句子。 每個字符串都被單獨翻譯。 參考上圖：

1. 以綠色標示的字符串已經有了一個建議的翻譯。
2. 以紅色標示的字符串_沒有_建議的翻譯。
3. 帶有灰色文本的字符串不可翻譯。 對於代碼塊和其他必須不被翻譯的內容，就是這種情況。 你將無法在編輯器中選擇這些字符串。
4. 如果某位貢獻者對某個字符串有建議的譯文，那麼 Crowdin 將在此處顯示所有的建議。 你無法保存相同的譯文。如果某個譯文是正確的，那麼你可以點擊 `+` 圖標，給它投票表示贊同。 如果你覺得某個譯文不正確，那麼你可以點擊 `-` 圖標，投反對票。
5. Crowdin 將基於翻譯記憶（TM）或機器翻譯（MT）推薦譯文。 翻譯記憶是指我們已在其他文件中翻譯過/批准過的相似的或相同的字符串。 機器翻譯是指由 Crowdin 系統推薦的翻譯。
6. 這是編輯器窗口，你可以在其中輸入你對於所選字符串建議的譯文。
7. 編輯窗口當前選中的字符串將被標註爲黃色。
8. 這裏的標籤是表示字符串的狀態。 `Done` 標籤表示字符串有至少一個建議的譯文。 `Todo` 標籤表示字符串還沒有建議的譯文。
9. 這裏是評論窗口。 如果你對某個字符串有疑問或疑慮，可以在此處對字符串發表評論，以便其他翻譯人員查看。
10. 點擊這兩個“窗格”按鈕，可以隱藏左邊的（文件）視圖和右邊的（評論）視圖。

> [!NOTE] If you see a hidden string that includes translations, please notify us in the [Discord](https://discord.gg/PRyKn3Vbay) so we can remove the translation from memory.

當你翻譯完一個字符串，請點擊 `Save` 按鈕，將你的譯文保存在  Crowdin 中。 然後其他貢獻者可以給你的譯文投票，而校對者也將審覈確認你的譯文。

你想翻譯多少字符串，都可以，我們非常歡迎你貢獻！當你翻譯完某個文件或某個字符串之後，你不需要採取其他步驟。 你只需要點擊 `Save` 按鈕，就能保存你的譯文了。

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
"[player_name]？好巧，我們的VIP隊友{a=[vip_profile_url]}[player_name]{/a}會很高興的。"
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
new "{icon=icon-fast-forward} 跳過"
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
layla @ neutral "哈哈，[player_name]，你真有趣。我相信你一定會喜歡你的開發者工作的。"
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
player "也許這都是一場夢？" nointeract
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
player @ surprised "{b}全棧{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# original
What is that?
# translated, no quotes on either side
這是什麼？
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# original
I better take notes so I can learn more about it."
# translated, keeping the closing quotes `"`
我最好做筆記，這樣我可以學習更多東西。"
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
