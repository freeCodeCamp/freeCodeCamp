# freeCodeCamp のリソースを翻訳する方法

## コントリビューションの心構え

> freeCodeCamp ローカリゼーションのロードマップ – 進められるだけ進めてください。

> [!TIP] まず[こちらのお知らせ](https://www.freecodecamp.org/japanese/news/help-translate-freecodecamp-language/)をお読みください。 [freeCodeCamp コミュニティのフォーラム](https://forum.freecodecamp.org/c/contributors/3)や [Discord チャットサーバー](https://discord.gg/PRyKn3Vbay) にも参加することをおすすめします。

あなたはいつでも好きな時に、好きなだけ翻訳することができます。 あなたがボランティアの翻訳者として使える時間と労力がどれだけあるかだけの問題です。

以下のことをご了承ください:

1. **翻訳はチームでの活動です。**

   freeCodeCamp のリソースの翻訳は、コントリビューターとして最も楽しくやりがいのある経験の一つであり、あなたと同じ言語を話す友人や同僚を巻き込むとよりうまくいくでしょう。

   まず[こちらのお知らせ](https://www.freecodecamp.org/japanese/news/help-translate-freecodecamp-language/)をお読みください。 実際の翻訳作業に入る前に、[freeCodeCamp コミュニティのフォーラム](https://forum.freecodecamp.org/c/contributors/3)や [Discord チャットサーバー](https://discord.gg/PRyKn3Vbay)に参加して、翻訳に参加したいことを仲間の翻訳者たちに伝えることを推奨します。 Crowdin などのツールによって貢献しやすくなっていますが、それでも翻訳は大変な作業です。

   私達はあなたが楽しんで貢献できること、燃え尽きたり興味を失ったりしないことを望んでいます。

   ある言語の翻訳を始めるには 4、5 人の小さなグループで始めるのが良いでしょう。 その後、さらに多くの仲間を募集することもできます。

2. **各言語ごとのサーバーを運用するには多くのコストがかかります。**

   表面的には複雑な技術スタックに見えないかもしれませんが、エンジンを動かし続けるにはかなりのコストがかかります。 これには追加のサーバーを準備することやスタッフをその管理に専念させることも含まれます。

   freeCodeCamp.org はいつも通りこれらを無料で提供することをお約束しますが、最も必要としている人々に優先的にリソースを割り当てる必要があります。 私達が最も避けたいのは、翻訳の活動が停止して内容が古くなってしまい、その言語のサーバーをシャットダウンしなければならなくなることです。

   カリキュラムの翻訳の場合、ある言語について少なくとも 2、3 の認定講座の翻訳が完了すれば、その言語を [`/learn`](https://www.freecodecamp.org/learn) にデプロイし始めることができます。残りの認定講座の翻訳はそのまま続けられます。

   例えば、新しい言語を初めて公開するときには、少なくとも全てのフロントエンドの認定講座を揃えてデプロイしたいと考えています。

3. **翻訳プラットフォームのリストにない言語はどうしたらいいですか？**

   私達はユーザー層を調査し、最も広く使われている言語を 30 以上翻訳プラットフォームに追加しました。 中国語、スペイン語などいくつかの言語はすでに **"/learn"** にデプロイされています。

   残念ながら、リストにない言語も多数あります。 コントリビューターの皆さんから、彼らの言語への翻訳を手伝いたいというリクエストが毎日たくさんあります。

   もちろん更に多くの言語をリストに追加したいと思っていますが、ご想像の通り、その言語に十分な勢いがなければ実現できません。

   新しい言語を追加したい場合、あなたの友人を誘って興味を持ってもらうことをお勧めします。

   興味を持ってコミットできる少人数 (最低 4、5 人) のグループが集まったら、電話会議でお話させていただきます。 そこで詳細と、いくつかのツールやプロセスについてご説明します。

## Crowdin の概要

あなたが何語を話すかに関わらず、学習リソースを提供することが私達の夢です。 この大規模な取り組みのため、私達のオープンソースコードベースとカリキュラムをローカライズ支援ツール [Crowdin](https://crowdin.com/) と接続しました。

> [!NOTE] [ニュース記事](https://www.freecodecamp.org/news) の翻訳には別のツールとワークフローを使用します。 記事の翻訳に関心がある場合には、[こちらのお知らせ](https://www.freecodecamp.org/japanese/news/help-translate-freecodecamp-language/)をお読みいただき、各言語の担当者 (ランゲージリード) までご連絡ください。

翻訳のワークフローは大きく二つに分かれています。

- カリキュラム、ドキュメント、UI 要素 (ボタン、ラベル等) の**翻訳**

  [私達の翻訳プラットフォーム](https://translate.freecodecamp.org)にサインアップすると、翻訳者として 30 種類以上の言語の翻訳に貢献することができるようになります。

- 上記全ての翻訳の**校正**

  校正者は、コミュニティによって提供された翻訳のトーンが統一されていること、誤字脱字等の一般的な問題がないことを確認します。 要するに、翻訳が高品質であることを保証します。 理由があって私達は機械翻訳を使用していません。

> [!WARNING] 現在、GitHub を使用してファイルを直接翻訳することはなくなりました。以前コントリビューターだった方は、代わりに[翻訳プラットフォーム](https://translate.freecodecamp.org/)を使用してください。

## 翻訳を始めるには

まず、[Discord](https://discord.gg/PRyKn3Vbay)で挨拶をしましょう。 私達はここでリソースの翻訳に関する最新情報を投稿したり、多くの質問に答えたりしています。

次に、私達の[翻訳プラットフォーム](https://translate.freecodecamp.org/)にアクセスし、ログインしてください (初めての場合、アカウントを作成する必要があります)。

最後に、翻訳ツールとワークフローについて理解するため、以下の詳しい説明をお読みください。

それでは翻訳をお楽しみください！

## プロジェクトとファイルを選択する

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

> [!NOTE] エディター画面を開いた後、設定アイコン (歯車のアイコン) をクリックし、「HTML tags displaying」の設定を「SHOW」に変更する必要があります。 この設定により、`<0></0>` ではなく `<code></code>` のようにタグが表示されます。

## カリキュラムを翻訳する

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

> [!NOTE] もし隠し文字列に翻訳が含まれているのを見つけたら、[Discord](https://discord.gg/PRyKn3Vbay) にてお知らせください。翻訳をメモリーから削除します。

文字列の翻訳が終わったら、`Save` ボタンを押して翻訳を Crowdin に保存してください。 これで他のコントリビューターが翻訳内容に対し投票したり、校正者が承認したりできるようになります。

翻訳を行う文字列の数に制限はありません。1 つのファイルをすべて翻訳し終わったあとや、新しい翻訳を提案する際に追加で必要になる手順もありません。 `Save` ボタンをクリックするだけで、翻訳を保存できます。

> [!NOTE] もし英語の原文ファイルの中に不正確な内容を見つけた場合、それを翻訳で修正することはお控えください。 代わりに、不正確な点があることをその文字列に対するコメントでお知らせいただくか、GitHub issue を作成してください。

## 学習プラットフォームの UI を翻訳する

私達のサイト内 `/learn` の UI は、元となる JSON ファイルを i18n (多言語化) プラグインに読み込むことで翻訳されたテキストを生成しています。 この翻訳作業は Crowdin と GitHub に分かれています。

### GitHub 上の作業

`links.json`、`meta-tags.json`、`motivation.json`、`trending.json` のファイルには、言語に応じて変更されるべき内容が含まれます。 しかし、これらのファイルは Crowdin にアップロードすることができません。内容が翻訳と一対一で対応するようなものではないためです。

これらのファイルは通常、各言語のランゲージリードが管理しますが、[翻訳方法の詳細を知りたい場合こちらでお読みいただけます](language-lead-handbook.md)。

### Crowdin 上の作業

> [!ATTENTION] Do not edit the following files through a GitHub PR.

`intro.json` と `translations.json` のファイルはどちらもCrowdin 上の Learn User Interface プロジェクトで翻訳します。 この作業では JSON の個々の値がその部分だけで文字列として表示され、文脈が分からないことが多いため、翻訳が難しい場合があります。

しかし、Crowdin 上で `Context` として表示される情報を手掛かりに、その文字列がより大きな構造のどこに含まれるかを理解することができます。

![矢印が Crowdin のコンテキスト情報を指している画像](https://contribute.freecodecamp.org/images/crowdin/context.png)

翻訳対象の文字列がどこで使われるかについて質問があれば、[コントリビューターチャット](https://discord.gg/PRyKn3Vbay)にてお尋ねください。

## ドキュメントを翻訳する

コントリビューションドキュメントの翻訳も、カリキュラムのファイルの翻訳と同じような流れです。

> [!NOTE] コントリビューションドキュメントは `docsify` によって提供されており、このようなメッセージボックス用に特別な構文解析機能があります。 `[!NOTE]`、`[!WARNING]` または `[!TIP]` などで始まる文字列を見かけたら、これらの単語は翻訳しないようにしてください。

### 内部リンクのあるドキュメントの翻訳方法

コントリビューションドキュメントを翻訳する際には、ドキュメント内の別のセクションをリンク先とする内部リンクに注意してください。

必ず、リンク先セクションの id (`#` 以降の部分) を翻訳後のドキュメントの id に置き換えてください。 例えば、日本語の場合は以下のようになります。

翻訳前

```
// HTML の場合
<a href="target-file-name.md#target-section-heading-id">Link text</a>
<a href="#target-section-heading-id">Link text</a>

// Markdown の場合
[Link text](target-file-name.md#target-section-heading-id)
[Link text](#target-section-heading-id)
```

翻訳後

```
// HTML の場合
<a href="target-file-name.md#翻訳後の-id">翻訳後のリンクテキスト</a>
<a href="#翻訳後の-id">翻訳後のリンクテキスト</a>

// Markdown の場合
[翻訳後のリンクテキスト](target-file-name.md#翻訳後の-id)
[翻訳後のリンクテキスト](#翻訳後の-id)
```

ドキュメント内の実際のファイルは Markdown で書かれていますが、Crowdin では HTML タグとして表示されます。

`docsify` があなたの言語の文字列をどのような id へと変換するかは、翻訳後のページを見て確認してください。 翻訳がまだデプロイされていない場合は、[ドキュメントサイトをローカルで実行](how-to-work-on-the-docs-theme.md#ローカルでドキュメントサイトを提供する)してプレビューできます。

[ドキュメントの内部リンクについて詳しくはこちら](how-to-work-on-the-docs-theme.md#内部リンクを作成する)を参照してください。

## LearnToCode RPG を翻訳する

LearnToCode RPG は Ren'Py 上で動作します。Ren'Py では翻訳の際に独自の構文が使用されます ([Ren'Py の Text のドキュメント](https://www.renpy.org/doc/html/text.html) を参照してください)。

- `""`で囲まれた文章が翻訳対象です。 ダイアログまたはUI (ユーザーインターフェース) 文字列です。 ダイアログの前後に表示されるキーワードは、ゲームエンジンを制御するキーワードです。詳細は後続のルールにて説明します。 このルールは、後続で説明する全ルールの基本であり、最も重要です。
- `new "..."` のように表示される場合、接頭辞 `new` の部分はキーワードなので翻訳しないでください。
- `player`、`annika`、`layla`、`marco` が先頭にて付く用語 (`player happy` や `player @ happy` などの複合形も含む) は、翻訳しないでください。 これらは、ゲーム内のキャラクターのスプライトを正しく表示し制御するためのキーワードです。
- `nointeract` のような接尾辞も翻訳しないでください。
- `[]` と `{}` で囲まれた部分は翻訳しないでください。 これらは補間機能とテキストタグです。 半角の `[]` と `{}` は翻訳文章にも残し、全角の  `【】` や `「」`に置き換えることはしないでください。
- 文末の `nointeract` キーワードは翻訳しないでください。
- 全角括弧 `（）`を使用しようとすると、品質保証に関する警告が表示されます。 品質保証に関する警告を避けるためには、半角括弧 `()` を使用してください。

### 例

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

注: `[]` と `{}` のタグは半角のまま残す必要があります。

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

注: 接頭辞 `new` と `{icon=icon-fast}` タグはそのまま残す必要があります。

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

注: `layla @ neutral` と `[player_name]` はそのまま残します。

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

### Crowdin による文章の分割についての注意点

Crowdin は引用符 (`""`) で囲まれたダイアログ行を分割することがあるため注意してください。 ダイアログを翻訳する際は、引用符の開始・終了が変更されていないことを確認する必要があります。引用符が別のセグメントに表示されたとしてもです。

このような翻訳対象の行があったとします。

```renpy
player @ surprised "{b}Full-stack{/b}... What is that? I better take notes so I can learn more about it."
```

Crowdin は以下のような 3 つのセグメントに分割します。

<img width="836" alt="スクリーンショット 2022-01-23 (10 36 43)" src="https://user-images.githubusercontent.com/35674052/150693962-d3b091e5-2432-44d0-9d24-195ea7d7aeda.png" />

```renpy
# 原文
player @ surprised "{b}Full-stack{/b}
# 訳文。引用符の開始側 `"` はそのままにする
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="スクリーンショット 2022-01-23 (10 36 49)" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# 原文
What is that?
# 訳文。引用符はなし
这是什么？
```

<img width="857" alt="スクリーンショット 2022-01-23 (10 36 54)" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# 原文
I better take notes so I can learn more about it."
# 訳文。引用符の終了側 `"` はそのままにする
我最好做笔记，这样我可以学习更多东西。"
```

## 翻訳を評価する

Crowdin では投稿済みの翻訳案を評価することができます。 翻訳内容を保存しようとした際、同じ翻訳は保存できないというメッセージが表示されることがあります。これは、すでに他のコントリビューターが全く同じ翻訳を提案していることを意味しています。 既存の翻訳に賛成であれば `+` ボタンをクリックして賛成票を投じてください。

もし、翻訳が不正確であったり、原文の意味が正しく翻訳されていない翻訳を発見した場合は、`-` ボタンをクリックして反対票を投じて下さい。

Crowdin はそれらの投票結果を元に各翻訳案の点数を算出します。この点数は校正チームが最適な翻訳文を選ぶための判断材料となります。

## 品質保証チェック

翻訳内容が可能な限り正確であることを確認し、校正チームによる翻訳文レビューに役立てるため、品質保証ステップを設けています。

翻訳内容を保存しようとする際、翻訳内容に対する警告文が表示されることがあります。

![画像 - 品質保証に関する警告メッセージ](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

このメッセージは、Crowdin の品質保証システムが投稿内容に間違いが含まれている可能性があると判断した場合に表示されます。 上の例では `<code>` タグ内のテキストが変更されており、Crowdin がそれを検出しました。

> [!WARNING] エラーが検出されても翻訳内容を保存することは可能です。 「Save Anyway」をクリックして保存できますが、その場合は校正者かプロジェクトマネージャー宛てにコメントし、なぜ品質保証メッセージを無視する必要があったかを説明するようにしてください。

## 翻訳のベストプラクティス

翻訳をできる限り正確なものとするため、以下のガイドラインに従って下さい。

- `<code>` タグの中身を翻訳しないでください。 これらのタグはコードの一部であり、英語のまま残しておかなければなりません。
- コンテンツを追加しないで下さい。 チャレンジを翻訳する際、テキスト内容の変更や追加の情報が必要だと感じた場合は、GitHub Issue を通して提案するか、提案内容を反映した英語のファイルをプルリクエストして下さい。
- コンテンツの順番を変えないで下さい。

質問があれば、[Discord](https://discord.gg/PRyKn3Vbay) にてお気軽にお尋ねください。喜んでサポートいたします。
