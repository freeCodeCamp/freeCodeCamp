# How to Translate freeCodeCamp's resources

## Prepare yourself for contributions

> The freeCodeCamp Localization Roadmap – There Are No Speed Limits

> [!TIP]
> You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay).

You can translate as much as you want, when you want. It's only a matter of how much time and energy you are willing to invest as a volunteer translator.

We just ask that you understand the following:

1. **Translations are a team effort.**

   Translating freeCodeCamp's resources is one of the most fun and rewarding experiences as a contributor, and it works best if you involve your friends and colleagues who speak the same world language as you.

   You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay) with your friends and showing your interest before starting off with translations. Crowdin and other tools make it easy to contribute translations, but it's still a lot of work.

   We want you to enjoy contributing and not burn out or lose interest.

   A small group of 4-5 individuals is a good size to start your niche for your world language. You can then recruit even more friends to join the team.

2. **It costs quite a lot to spin servers for each language.**

   On the surface it might not seem how complicated the technical stack is, but it costs quite a lot to keep the engines running. This includes provisioning additional servers and dedicating staff to look after them.

   freeCodeCamp.org is committed to providing these for free as always, however we need to prioritize resources for those who need them the most. The last thing we want is to shutdown servers for a language if the translation activity dies off & things become outdated.

   For translating the curriculum, once a language reaches at least a few certifications we can begin deploying the language live on [`/learn`](https://www.freecodecamp.org/learn), while you continue to translate the remaining certifications.

   For example, we would want to deploy at least the entire front-end certifications suite when we ship a new world language for the first time.

3. **But what about the languages not listed on the translation platform?**

   We have looked at our user base and added 30+ most widely spoken languages to the list of enabled languages on the translations platform. Some languages like Chinese and Spanish are already deployed live on **"/learn"** at this moment.

   Unfortunately, the list does not include hundreds of languages out there. We get dozens of requests from contributors like you every day who want to help translate the site into a language they speak.

   We are definitely looking forward to adding more languages to the list, but as you may already guess, it would only be feasible if we get enough momentum around a world language.

   If you would like us to include a new world language, we recommend getting your friends excited about this.

   Once you have a small group of people (at least 4-5) interested and committed, we can hop on a call. We will explain all the details and walk you through some of the tools and processes.

## Overview of Crowdin

It's our dream to provide you with the resources to learn, no matter the world language you speak. To help us with this massive effort, we have integrated our open-source code-base & curriculum with [Crowdin](https://crowdin.com/) - A tool to help us localize our code-base.

> [!NOTE]
> We use a different tool and workflow for translating [news articles](https://www.freecodecamp.org/news). If you are interested in translating articles, read [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/) and reach out to your Language Lead.

The translation workflow is split into two main activities:

- **Translating** curriculum files, documentation and UI elements like buttons, labels, etc.:

  As a translator you can sign up on [our translation platform](https://translate.freecodecamp.org) and contribute translations in any of the 30+ languages enabled in there.

- **Proofreading** the translations for all of the above.

  Proofreaders verify that the community contributed translations are uniform in tone and free of common issues like typos, etc. In short, they ensure that the quality of translations is high. Note that we do not use machine translations for a reason.

> [!WARNING]
> We are no longer using GitHub to translate files directly, if you are a returning contributor head to our [translation platform](https://translate.freecodecamp.org/) instead.

## Getting started

First, make sure you come say "Hi" in our [Discord](https://discord.gg/PRyKn3Vbay). We post regular updates about translating resources and answer a lot of your queries in there.

Next, head to our [translation platform](https://translate.freecodecamp.org/) and login (if you have not contributed to translations before, you will need to create an account).

Finally, go through the detailed walk-thru below to understand the translation tools and workflows at your disposal.

Happy translating.

## Select a Project and File

Once you visit the translation platform, you should see multiple "projects" available for translation:

1. [Contributing documentation](https://translate.freecodecamp.org/contributing-docs) project, which contains the files for this documentation site.
2. [Coding Curriculum](https://translate.freecodecamp.org/curriculum) project, which contains our challenge files for our curriculum.
3. [Learn User Interface](https://translate.freecodecamp.org/learn-ui) project which contains strings for UI elements like buttons, labels, etc. for our learning platform.

Select any project you want to contribute to, and you will see a list of available languages for translation.

![Image - List of available languages](https://contribute.freecodecamp.org/images/crowdin/languages.png)

Select the language you want to work on, and you will see the complete file tree.

![Image - List of available files](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

Each file and folder will show a progress bar. The **blue** portion of the progress bar indicates what percentage of the file has been translated, while the **green** portion of the progress bar indicates what percentage of the file has been approved by the proofreading team.

Select a file to work on and Crowdin will open the editor view.

> [!NOTE]
> When the editor view opens, you will need to click the settings icon (shown as a gear) and switch the 'HTML tags displaying' setting to 'SHOW'. This will ensure you can see tags such as `<code></code>` instead of `<0></0>`.

## Translate Curriculum

![Image - Editor View](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin separates a document into translatable "strings", usually sentences. Each string is translated individually. Referring to the image above:

1. A string highlighted in green already has a proposed translation.
2. A string highlighted in red does _not_ have a proposed translation.
3. A string with greyed out text is not translatable. This is the case for code blocks and other content that must not be translated. You will be unable to select these strings in the editor.
4. If a contributor has proposed a translation to a string, Crowdin will display those proposals here. You will not be able to save an identical translation - instead, if a translation is accurate, you should click the `+` icon to "upvote" it. An inaccurate translation can be "downvoted" with the `-` icon.
5. Crowdin will recommend translations based on Translation Memory (TM) or Machine Translation (MT). Translation Memory refers to similar or identical strings that we have translated/approved in other files. Machine Translation refers to translations recommended by their integrated library.
6. This is the editor pane, where you may write your proposed translation for the selected string.
7. The currently selected string in the editor will be highlighted in yellow.
8. Here you will see tags indicating the state of the string. `Done` means the string has at least one proposed translation. `Todo` means the string does not have any proposed translations.
9. Here you can see the comments window. If you have questions or concerns about a particular string, you can leave a comment on the string here for other translators to see.
10. These two "pane" buttons will hide the left (document) and right (comments) views.

> [!NOTE]
> If you see a hidden string that includes translations, please notify us in the [Discord](https://discord.gg/PRyKn3Vbay) so we can remove the translation from memory.

When you have completed a translation for a string, select the `Save` button to store your translation on Crowdin. Other contributors will then be able to vote on your translation and proofreaders will be able to approve it.

You are welcome to translate as many strings as you like - there are no additional steps required when you complete a full file or propose a new translation. Clicking the `Save` button is all that is needed to store a translation.

> [!NOTE]
> If you see something in the English source file that is inaccurate or incorrect, please do not fix it through the translation flow. Instead, leave a comment on the string to notify us that there is a discrepancy, or create a GitHub issue.

## Translate the Learn Interface

Our `/learn` interface relies on JSON files loaded into an i18n plugin to generate translated text. This translation effort is split across both Crowdin and GitHub.

### On GitHub

The `links.json`, `meta-tags.json`, `motivation.json`, and `trending.json` files contain information that needs to be updated to reflect your language. However, we cannot load these into Crowdin, as the content isn't something that would be a one-to-one translation.

These files will most likely be maintained by your language lead but you are welcome to [read about how to translate them](language-lead-handbook.md).

### On Crowdin

> [!ATTENTION]
> Do not edit the following files through a GitHub PR.

The `intro.json` and `translations.json` files are both translated on Crowdin, in the Learn User Interface project. Translating these can be a bit tricky, as each individual JSON value appears as its own string and sometimes the context is missing.

However, the `Context` information provided in Crowdin can help understand where the string fits in to the larger structure.

![Image with an arrow pointing to Crowdin's context information](https://contribute.freecodecamp.org/images/crowdin/context.png)

If you have any questions about where a string fits in to the prose, reach out to us in our [contributor chat](https://discord.gg/PRyKn3Vbay).

## Translate Documentation

Translating our contributing documentation is a similar flow to translating our curriculum files.

> [!NOTE]
> Our contributing documentation is powered by `docsify`, and we have special parsing for message boxes like this one. If you see strings that start with `[!NOTE]`, `[!WARNING]`, or `[!TIP]`, these words should NOT be translated.

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

<img width="836" alt="Screen Shot 2022-01-23 at 10 36 43" src="https://user-images.githubusercontent.com/35674052/150693962-d3b091e5-2432-44d0-9d24-195ea7d7aeda.png">

```renpy
# original
player @ surprised "{b}Full-stack{/b}
# translated, keeping the opening quotes `"`
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png">

```renpy
# original
What is that?
# translated, no quotes on either side
这是什么？
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png">

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

> [!WARNING]
> You have the option to save a translation in spite of errors. If you do, by clicking "Save Anyway", you should also tag a proofreader or project manager and explain why the QA message needs to be ignored in this case.

## Translation Best Practices

Follow these guidelines to ensure our translations are as accurate as possible:

- Do not translate the content within `<code>` tags. These tags indicate text that is found in code and should be left in English.
- Do not add additional content. If you feel a challenge requires changes in the text content or additional information, you should propose the changes through a GitHub issue or a pull request that modifies the English file.
- Do not change the order of content.

If you have any questions, feel free to reach out to us in our [Discord](https://discord.gg/PRyKn3Vbay) and we will be happy to assist you.
