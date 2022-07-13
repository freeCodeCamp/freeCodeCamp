# freeCodeCamp のリソースを翻訳する方法

## コントリビューションの心構え

> The freeCodeCamp Localization Roadmap – There Are No Speed Limits

> [!TIP] You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay).

You can translate as much as you want, when you want. It's only a matter of how much time and energy you are willing to invest as a volunteer translator.

We just ask that you understand the following:

1. **翻訳はチームでの活動です。**

   freeCodeCamp のリソースの翻訳は、コントリビューターとして最も楽しくやりがいのある経験の一つであり、あなたと同じ言語を話す友人や同僚を巻き込むとよりうまくいくでしょう。

   You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay) with your friends and showing your interest before starting off with translations. Crowdin and other tools make it easy to contribute translations, but it's still a lot of work.

   私達はあなたが楽しんで貢献できて、燃え尽きたり興味を失ったりしないよう望んでいます。

   ある言語の翻訳を始めるには 4、5 人の小さなグループで始めるのが良いでしょう。 その後、さらに多くの仲間を募集することもできます。

2. **各言語ごとのサーバーを運用するには多くのコストがかかります。**

   表面的には複雑な技術スタックに見えないかもしれませんが、エンジンを動かし続けるにはかなりのコストがかかります。 これには追加のサーバーを準備することやスタッフをその管理に専念させることも含まれます。

   freeCodeCamp.org はいつも通りこれらを無料で提供することをお約束しますが、最も必要としている人々に優先的にリソースを割り当てる必要があります。 私達が最も避けたいのは、翻訳の活動が停止して内容が古くなってしまい、その言語のサーバーをシャットダウンしなければならなくなることです。

   For translating the curriculum, once a language reaches at least a few certifications we can begin deploying the language live on [`/learn`](https://www.freecodecamp.org/learn), while you continue to translate the remaining certifications.

   例えば、新しい言語を初めて公開するときには、少なくとも全てのフロントエンドの認定講座を揃えてデプロイしたいと考えています。

3. **翻訳プラットフォームのリストにない言語はどうしたらいいですか？**

   私達はユーザー層を調査し、最も広く使われている言語を 30 以上翻訳プラットフォームに追加しました。 中国語、スペイン語などいくつかの言語はすでに **"/learn"** にデプロイされています。

   残念ながら、リストにない言語も多数あります。 コントリビューターの皆さんから、彼らの言語への翻訳を手伝いたいというリクエストが毎日たくさんあります。

   もちろん更に多くの言語をリストに追加したいと思っていますが、ご想像の通り、その言語に十分な勢いがなければ実現できません。

   新しい言語を追加したい場合、あなたの友人を誘って興味を持ってもらうことをお勧めします。

   興味を持ってコミットできる少人数 (最低 4、5 人) のグループが集まったら、電話会議でお話させていただきます。 そこで詳細と、いくつかのツールやプロセスについてご説明します。

## Overview of Crowdin

It's our dream to provide you with the resources to learn, no matter the world language you speak. To help us with this massive effort, we have integrated our open-source code-base & curriculum with [Crowdin](https://crowdin.com/) - A tool to help us localize our code-base.

> [!NOTE] We use a different tool and workflow for translating [news articles](https://www.freecodecamp.org/news). If you are interested in translating articles, read [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/) and reach out to your Language Lead.

The translation workflow is split into two main activities:

- カリキュラム、ドキュメント、UI 要素 (ボタン、ラベル等) の**翻訳**

  [私達の翻訳プラットフォーム](https://translate.freecodecamp.org)にサインアップすると、翻訳者として 30 種類以上の言語の翻訳に貢献することができるようになります。

- 上記全ての翻訳の**校正**

  校正者は、コミュニティによって提供された翻訳のトーンが統一されていること、誤字脱字等の一般的な問題がないことを確認します。 要するに、翻訳が高品質であることを保証します。 理由があって私達は機械翻訳を使用していません。

> [!WARNING] We are no longer using GitHub to translate files directly, if you are a returning contributor head to our [translation platform](https://translate.freecodecamp.org/) instead.

## Getting started

First, make sure you come say "Hi" in our [Discord](https://discord.gg/PRyKn3Vbay). 私達はここでリソースの翻訳に関する最新情報を投稿したり、多くの質問に答えたりしています。

次に、私達の[翻訳プラットフォーム](https://translate.freecodecamp.org/)にアクセスし、ログインしてください (初めての場合、アカウントを作成する必要があります)。

最後に、翻訳ツールとワークフローについて理解するため、以下の詳しい説明をお読みください。

それでは翻訳をお楽しみください！

## Select a Project and File

翻訳プラットフォームにアクセスすると、翻訳可能な「プロジェクト」が複数表示されます。

1. [Contributing documentation](https://translate.freecodecamp.org/contributing-docs) プロジェクトには、このドキュメンテーションサイトのファイルが入っています。
2. [Coding Curriculum](https://translate.freecodecamp.org/curriculum) プロジェクトには、カリキュラムのチャレンジのファイルが入っています。
3. [Learn User Interface](https://translate.freecodecamp.org/learn-ui) プロジェクトには、学習プラットフォームのボタン、ラベル等の UI 要素の文言が入っています。

貢献したいプロジェクトを選択してください。翻訳可能な言語の一覧が表示されます。

![画像 - 選択可能な言語のリスト](https://contribute.freecodecamp.org/images/crowdin/languages.png)

作業したい言語を選択すると、ファイル一覧がツリー状に表示されます。

![画像 - 選択可能なファイルのリスト](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

それぞれのファイル、フォルダに対しプログレスバーが表示されます。 プログレスバーの**青色**はファイルがどれだけ翻訳されたかを示しています。**緑色**は校正チームによってどれだけ承認されたかを示しています。

作業するファイルを選択すると、Crowdin のエディター画面が表示されます。

> [!NOTE] When the editor view opens, you will need to click the settings icon (shown as a gear) and switch the 'HTML tags displaying' setting to 'SHOW'. This will ensure you can see tags such as `<code></code>` instead of `<0></0>`.

## Translate Curriculum

![画像 - 編集画面](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin はドキュメントを翻訳可能な文字列 (通常は文単位) に分割しています。 それぞれの文字列を個別に翻訳します。 上記の画像を参照してください。

1. 緑でハイライトされた文字列は、既に翻訳案が提出されています。
2. 赤でハイライトされた文字列は、まだ翻訳案が _ありません_ 。
3. グレーアウトされている文字列は翻訳することができません。 これはコードブロックなど、翻訳すべきではない内容が該当します。 この文字列はエディター上で選択できません。
4. 既にコントリビューターが翻訳を提案している場合、Crowdin はその翻訳案をこちらに表示します。 あなたは全く同じ翻訳案を保存することはできません。代わりに、翻訳内容が正確であれば `+` アイコンをクリックし、賛成票を投じてください。 不正確な翻訳の場合、`-` アイコンで反対票を投じることができます。
5. Crowdin は Translation Memory (TM) もしくは Machine Translation (MT) に基づいて翻訳案を推薦します。 Translation Memory とは、他のファイルにおいて翻訳・承認された、類似または同一の文字列を指します。 Machine Translation とは、Crowdin の統合ライブラリーによって推薦された翻訳を指します。
6. こちらがエディター領域です。選択した文字列に対する翻訳案を記述することができます。
7. 現在エディター上で選択されている文字列は黄色でハイライトされます。
8. こちらには文字列の状態を表すタグが表示されます。 `Done` は、文字列に対し少なくとも 1 つ翻訳案があることを意味します。 `Todo` は、文字列に対しまだ翻訳案がないことを意味します。
9. こちらはコメントウィンドウです。 もし特定の文字列に対し疑問や懸念があれば、ここにコメントを残して他の翻訳者に見てもらうことができます。
10. この 2 つのボタンで左側 (ドキュメント部分) と右側 (コメント部分) を隠すことができます。

> [!NOTE] If you see a hidden string that includes translations, please notify us in the [Discord](https://discord.gg/PRyKn3Vbay) so we can remove the translation from memory.

文字列の翻訳が終わったら、`Save` ボタンを押して翻訳を Crowdin に保存してください。 これで他のコントリビューターが翻訳内容に対し投票したり、校正者が承認したりできるようになります。

翻訳を行う文字列の数に制限はありません。1 つのファイルをすべて翻訳し終わったあとや、新しい翻訳を提案する際に追加で必要になる手順もありません。 `Save` ボタンをクリックするだけで、翻訳を保存できます。

> [!NOTE] If you see something in the English source file that is inaccurate or incorrect, please do not fix it through the translation flow. Instead, leave a comment on the string to notify us that there is a discrepancy, or create a GitHub issue.

## Translate the Learn Interface

Our `/learn` interface relies on JSON files loaded into an i18n plugin to generate translated text. This translation effort is split across both Crowdin and GitHub.

### On GitHub

The `links.json`, `meta-tags.json`, `motivation.json`, and `trending.json` files contain information that needs to be updated to reflect your language. However, we cannot load these into Crowdin, as the content isn't something that would be a one-to-one translation.

These files will most likely be maintained by your language lead but you are welcome to [read about how to translate them](language-lead-handbook.md).

### On Crowdin

> [!DANGER] Do not edit the following files through a GitHub PR.

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
// HTML の場合
<a href="target-file-name.md#target-section-heading-id">Link text</a>
<a href="#target-section-heading-id">Link text</a>

// Markdown の場合
[Link text](target-file-name.md#target-section-heading-id)
[Link text](#target-section-heading-id)
```

After translation

```
// HTML の場合
<a href="target-file-name.md#翻訳後の-id">翻訳後のリンクテキスト</a>
<a href="#翻訳後の-id">翻訳後のリンクテキスト</a>

// Markdown の場合
[翻訳後のリンクテキスト](target-file-name.md#翻訳後の-id)
[翻訳後のリンクテキスト](#翻訳後の-id)
```

The actual files in docs are written in Markdown, but they will appear as HTML tags on Crowdin.

You can find out how `docsify` converts a string in your language into an id by looking into the translated pages. If the translation is not deployed yet, you can preview it by [running the docs site locally](how-to-work-on-the-docs-theme.md#serving-the-documentation-site-locally).

You can learn more about [internal links in our docs here](how-to-work-on-the-docs-theme.md#how-to-create-an-internal-link).

## Translate the LearnToCode RPG

The LearnToCode RPG runs on Ren'Py, which uses special syntax for translated strings: (See [Ren'Py Text documentation](https://www.renpy.org/doc/html/text.html))

- `""`で囲まれた文章が翻訳対象です。 ダイアログまたはUI (ユーザーインターフェース) 文字列です。 ダイアログの前後に表示されるキーワードは、ゲームエンジンを制御するキーワードです。詳細は後続のルールにて説明します。 このルールは、後続で説明する全ルールの基本であり、最も重要です。
- `new "..."` のように表示される場合、接頭辞 `new` の部分はキーワードなので翻訳しないでください。
- `player`、`annika`、`layla`、`marco` が先頭にて付く用語 (`player happy` や `player @ happy` などの複合形も含む) は、翻訳しないでください。 これらは、ゲーム内のキャラクターのスプライトを正しく表示し制御するためのキーワードです。
- `nointeract` のような接尾辞も翻訳しないでください。
- `[]` と `{}` で囲まれた部分は翻訳しないでください。 これらは補間機能とテキストタグです。 半角の `[]` と `{}` は翻訳文章にも残し、全角の  `【】` や `「」`に置き換えることはしないでください。
- 文末の `nointeract` キーワードは翻訳しないでください。
- 全角括弧 `（）`を使用しようとすると、品質保証に関する警告が表示されます。 品質保証に関する警告を避けるためには、半角括弧 `()` を使用してください。

### Examples

---

#### 翻訳前

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."  <--- こちらが翻訳を必要とする行です。 以下をご参照ください。
```

#### 翻訳後

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]？好巧，我们的VIP队友{a=[vip_profile_url]}[player_name]{/a}会很高兴的。"
```

Note: The `[]` and `{}` tags should be left intact.

---

#### 翻訳前

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Skip" <-- この行を翻訳します。以下をご参照ください。
```

#### 翻訳後

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} 跳过"
```

Note: Again, the `new` prefix and the `{icon=icon-fast-forward}` tag should be left intact.

---

#### 翻訳前

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
```

#### 翻訳後

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "哈哈，[player_name]，你真有趣。我相信你一定会喜欢你的开发者工作的。"
```

Note: `layla @ neutral` and `[player_name]` are left unchanged.

---

#### 翻訳前

```renpy
# player "Maybe this is all a dream?" nointeract
player "Maybe this is all a dream?" nointeract
```

#### 翻訳後

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
# 原文
player @ surprised "{b}Full-stack{/b}
# 訳文。引用符の開始側 `"` はそのままにする
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# 原文
What is that?
# 訳文。引用符はなし
这是什么？
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# 原文
I better take notes so I can learn more about it."
# 訳文。引用符の終了側 `"` はそのままにする
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

- `<code>` タグの中身を翻訳しないでください。 これらのタグはコードの一部であり、英語のまま残しておかなければなりません。
- コンテンツを追加しないで下さい。 チャレンジを翻訳する際、テキスト内容の変更や追加の情報が必要だと感じた場合は、GitHub Issue を通して提案するか、提案内容を反映した英語のファイルをプルリクエストして下さい。
- コンテンツの順番を変えないで下さい。

If you have any questions, feel free to reach out to us in our [Discord](https://discord.gg/PRyKn3Vbay) and we will be happy to assist you.
