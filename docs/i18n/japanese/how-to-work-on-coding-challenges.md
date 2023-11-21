# コーディングチャレンジに貢献する方法

私たちの目標は、楽しく明確なインタラクティブ学習体験を開発することです。

インタラクティブなコーディングチャレンジの設計は難しいです。 長い説明を書いたり、ビデオチュートリアルを作成したりする方がはるかに簡単です。 しかし、私たちのコアカリキュラムは、多くの人にとって最適なものに固執しています。完全にインタラクティブでビデオゲームのような体験です。

私たちはキャンパーにフロー状態を体験してほしいのです。 勢いをつけて大きな支障なくカリキュラムを突破してほしいと思っています。 We want them to go into the projects with confidence and gain wide exposure to programming concepts.

freeCodeCamp カリキュラムのバージョン 7.0 では、[多くの繰り返しを伴うプロジェクトに焦点を当てたモデル](https://www.freecodecamp.org/news/python-curriculum-is-live/) に移行しています。

これらのチャレンジを生み出すには、大きな創造性と細部へのこだわりが必要です。 たくさんの助けを得ることができます。 アイデアを出し合ったりチャレンジを実演したりできる貢献者チーム全体がサポートしてくれます。

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).

皆さんのご支援により、今後何百万もの人々がコーディングを学ぶのに役立つインタラクティブなコーディングカリキュラムを設計することができます。

各チャレンジのコンテンツは、マークダウンファイルに保存されます。 このマークダウンファイルは、インタラクティブな Web ページを作成するためのツールを使用して、後で HTML に変換されます。

[`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges) ディレクトリに、freeCodeCamp.org のカリキュラムコンテンツのすべてがあります。

## カリキュラムのツールを設定する

カリキュラムを作成する前に、変更をテストするためのツールを設定する必要があります。 以下から任意のオプションを使用できます。

- [freeCodeCampをローカル設定](how-to-setup-freecodecamp-locally.md) することができます。 これは定期的 / 繰り返しの貢献に **強く推奨** します。 このセットアップで、作業と変更テストができます。
- 無料のオンライン開発環境であるGitpodを使用します。 下のボタンをクリックすると、ブラウザで freeCodeCamp のコーディング開発準備ができている環境が起動されます。 かかる時間はほんの数分です。

  [![Gitpod で開く](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)


### プラクティスプロジェクトに貢献する方法

プラクティスプロジェクトには、新しいプロジェクトやステップの作成に役立つ追加ツールがあります。 詳細については、[これらのドキュメント](how-to-work-on-practice-projects.md) をご参照ください。

## チャレンジテンプレート

````md
---
id: ユニーク ID (アルファベットと数字の MongoDB_id)
title: 'チャレンジのタイトル'
challengeType: `client/utils/challenge-types.js` に定義されている整数
videoUrl: '説明動画のURL'
forumTopicId: 12345
---

# --description--

チャレンジの説明 (マークダウンで記入)

```html
<div>example code</div>
````

# --instructions--

チャレンジの指示内容 (マークダウンで記入)

# --hints--

ユーザコードに対して実行するテスト。マークダウンテキストと、テストコードのコードブロックをペアにして記入。

```js
Code for test one
```

ユーザーのコードに基づいて動的な出力が必要な場合、--fcc-expected-- と --fcc-actual-- は、テストのアサーションの期待値と実際の値に置き換えられます。 最初のアサーションの失敗により --fcc-expected-- と --fcc-actual-- の値が決まるので、複数のアサーションがある場合は注意してください。

```js
assert.equal(
  'this will replace --fcc-actual--',
  'this will replace --fcc-expected--'
);
```

# --notes--

チャレンジの追加情報 (マークダウンで記入)

# --seed--

## --before-user-code--

```lang
ユーザーコードの前に評価されるコード。
```

## --after-user-code--

```lang
ユーザーコードの後およびテスト直前に評価されるコード。
```

## --seed-contents--

エディターにレンダリングするボイラープレートコード。 このセクションには、以下のようなバックティック内のコードのみを含める必要があります。

```html
<body>
  <p class="main-text">Hello world!</p>
</body>
```

```css
body {
  margin: 0;
  background-color: #3a3240;
}

.main-text {
  color: #aea8d3;
}
```

```js
console.log('freeCodeCamp is awesome!');
```

# --solutions--

ソリューションは、ヒントの変更が意図した通りに合格するようにするために CI テストに使用されます。

```js
// 最初のソリューション - 言語はシードに一致する必要があります。
```

---

```js
// 2 番目のソリューション - シードが HTML で書かれている場合...
```

---

```js
// 3番目のソリューション等 - ソリューションは HTML でなければなりません。
```

# --assignments--

This will show a checkbox that campers have to check before completing a challenge

---

This will show another checkbox that campers have to check before completing a challenge

# --question--

These fields are currently used for the multiple-choice Python challenges.

## --text--

The question text goes here.

## --answers--

Answer 1

### --feedback--

This will be shown as feedback when campers guess this answer

---

Answer 2

---

More answers

## --video-solution--

The number for the correct answer goes here.
````

> [!NOTE]
>
> 1. 上記セクションで、`lang` の例は、次のとおりです。
>
> - `html` - HTML/CSS
> - `js` - JavaScript
> - `jsx` - JSX

## チャレンジの採番

すべてのチャレンジには `id` が必要です。 指定されていない場合、MongoDB はデータを保存する際に新しいランダムな id を作成します。しかしながら、チャレンジ id を異なる環境 (ステージング、本番環境、多くの様々な開発者など) において一貫性のあるものにしたいので、ランダムなものは作成したくありません。

シェル内で新しい id を生成するには、次のとおり実行します (MongoDB は別途実行されていると仮定)。

1. `mongo` コマンドを実行します。
2. `ObjectId()` コマンドを実行します。

例: 

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

The result is a new id, for example, `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## チャレンジ名の決定

Naming things is hard. We've made it easier by imposing some constraints.

All challenge titles should be explicit and should follow this pattern:

\[verb\]\[object clause\]

Here are some example challenge names:

- Use Clockwise Notation to Specify the Padding of an Element
- Condense arrays with .reduce
- Use Bracket Notation to Find the First Character in a String

## チャレンジの説明 / 指示

Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs than a wall of text.

Use american english, e.g., use `labeled` instead of `labelled`.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. Campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (「J」と「S」が大文字、省略形なし)
- Node.js
- 不正確な場合もありますが、より広く使われているため、ハイフンなしの 'back end' と 'front end' を使用します。

### The 2-minute rule

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions/instructions understand the seeded code, write their code and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:

- チャレンジを簡素化する
- チャレンジを 2 つのチャレンジに分ける

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straightforward.

We track how long it takes for campers to solve challenges and use this information to identify challenges that need to be simplified or split.

### Modularity

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

### Formatting challenge text

Here are specific formatting guidelines for challenge text and examples:

- 言語キーワードは `` \` `` のバックティックに入ります。 例えば、HTML タグ名や CSS プロパティ名です。
- コード部品 (すなわち、関数、メソッド、変数名) への参照は、`` \` `` バックティックで囲みます。 下記の例を参照してください。

```md
変数 `realNumber` を整数に変換するには、`parseInt` を使用します。
```

- ファイル名とパスディレクトリへの参照 (例: `package.json`、`src/components`) は `` \` `` バックティックで囲みます。
- 複数行コードブロック **の前に空行** が必要です。 次の行は、3つのバックティックに続いて [対応言語](https://prismjs.com/#supported-languages) の1つで始まります。 To complete the code block, you must start a new line that only has three backticks and **another empty line**. 下記の例を参照してください。
- 空白はマークダウンでも重要ですので、エディターで表示させることをお勧めします。

**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

The following is an example of code:

````md
```{language}

[ここに、コードを記述してください]

````
````

- 注意書き形式の追加情報は空白行で囲みます。例: `**Note:** Rest of note text...`
- 複数の注意書きが必要な場合は、すべての注意書きを別々の文章でリスト化します。例: `**Notes:** First note text. Second note text.`
- Use single quotes where applicable

**Note:** The equivalent _Markdown_ should be used in place of _HTML_ tags.

## テストの記述

チャレンジには、キャンパーがコンセプトを理解していることを確認するために最小限のテストが必要です。

私たちの目標は、チャレンジが教えようとしている単一のポイントを伝え、そのポイントを理解していることをテストすることです。

チャレンジテストでは、Node.js と Chai.js アサーションライブラリを使用できます。 また、必要に応じて、`code` 変数からユーザーが生成したコードにアクセスすることもできます。 さらに、 `__helpers` オブジェクトは、テストを記述するプロセスを簡略化するいくつかの関数を公開します。 The available functions are defined in the [curriculum-helpers](https://github.com/freeCodeCamp/curriculum-helpers/blob/main/lib/index.ts) repo.

## Formatting Seed Code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable

### Seed Code Comments

We have a [comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) that contains the only comments that can be used within the seed code. 辞書のコメントに記載されている正確な大文字と小文字の区別および語間を使用します。 コメント辞書は、開発チームとの事前議論なしに増やしてはいけません。

使用するコメントは、コメント文字とコメントそのものの間にスペースを入れる必要があります。 一般的に、コメントは控えめに使用します。 シードコードコメントの使用を避けられるのであれば、チャレンジの説明や指示を書き換えることを常に検討してください。

Example of a valid single-line JavaScript comment:

```js
// Only change code below this line
````

Example of a valid CSS comment:

```css
/* Only change code above this line */
```

If a challenge only has a single place where code changes are needed, please use the comments in the following example to instruct the user where changes should be made.

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

If a challenge has multiple places where the user is expected to change code (i.e. the React challenges)

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello'
    };
    // この行より下にあるコードを変更してください。

    // この行より上にあるコードを変更してください。
  }
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <button>Click Me</button>
        {/* Change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

### Translation of Seed Code Comments

There are separate comment dictionaries for each language. The [English version of the comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.json`. Each dictionary consists of an array of objects with a unique `id` property and a `text` property. Only the `text` should be modified to encompass the translation of the corresponding English comment.

Some comments may contain a word/phrase that should not be translated. For example, variable names or proper library names like "React" should not be translated. See the comment below as an example. The word `myGlobal` should not be translated.

```text
この行の下に myGlobal 変数を宣言してください。
```

> [!NOTE]
> 
> 現在、コメント辞書の i18n 作業ができるようにするためのインテグレーションに取り組んでいます。

## ヒントとソリューション

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://forum.freecodecamp.org/c/contributors) on the forum. Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Adding new Challenge hints/solutions Topics

Take the following steps when adding a new challenge hints/solutions-related topic.

1. 新しいトピックの作成と同じ手順からスタートします。タイトルを作成するために以下を確認します。
2. トピックのタイトルは、`freeCodeCamp チャレンジガイド:` にカリキュラムチャレンジの実際のタイトルを連結します。 例えば、チャレンジに「`Chunky Monkey`」という名前が付けられている場合、トピックのタイトルは、「`freeCodeCamp Challenge Guide: Chunky Monkey`」になります。
3. `camperbot` はトピック / 投稿のオーナーである必要があるので、管理者に、メイン投稿のオーナーを `camperbot` に変更するようにリクエストします。
4. 新しいトピックを作成すると、フォーラムのトピック id が作成されます。 これは、フォーラムのトピック URL の末尾にあります。 この id は、トピックにリンクするために、`ヒントを入手` ボタン用の標準プルリクエストプロセスを介して、カリキュラムチャレンジファイルのフロントマターに追加する必要があります。

### Guidelines for Content of Hints and Solutions Topics

When proposing a solution for a curriculum challenge-related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests. The following template should be used when creating new hints/solutions topics:

````md
# ここにチャレンジ名を記述します。

---

## 問題説明

チャレンジの説明や指示を再記述するのではなく、実行すべきことを要約します。 ここは任意のセクションです。

#### 関連リンク

- [リンクテキスト](link_url_goes_here)
- [リンクテキスト](link_url_goes_here)

---

## ヒント

### ヒント 1

ヒントを記述

### ヒント 2

ヒントを記述

---

## ソリューション

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
````

#### コードの説明

- コードの説明を記述
- コードの説明を記述

#### 関連リンク

- [リンクテキスト](link_url_goes_here)
- [リンクテキスト](link_url_goes_here)

</details>
````

## チャレンジのテスト

変更のために [プルリクエストを作成する](how-to-open-a-pull-request.md) 前に、行った変更が誤ってチャレンジに問題を引き起こさないことを確認する必要があります。

1. すべてのチャレンジをテストするには、ルートディレクトリから以下のコマンドを実行してください。

````
pnpm run test:curriculum
```

2. To test single challenge, you can use it challenge id with following command

```
FCC_CHALLENGE_ID=646cf6cbca98e258da65c979 pnpm run test:curriculum
```

3. You can also test a block or a superblock of challenges with these commands

```
FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum
```

```
FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum
```

You are also able to test challenges by title by performing the following steps:

1. Switch to the `curriculum` directory:

   ```
   cd curriculum
   ```

2. Run the following for each challenge file for which you have changed (replacing `challenge-title-goes-here` with the full title of the challenge):

   ```
   pnpm run test -- -g challenge-title-goes-here
   ```

> [!TIP]
> You can set the environment variable `LOCALE` in the `.env` to the language of the challenge(s) you need to test.
>
> The currently accepted values are `english` and `chinese`, with `english` being set by default.

## Proposing a Pull Request (PR)

After you've committed your changes, check here for [how to open a Pull Request](how-to-open-a-pull-request.md).

## Useful Links

Creating and Editing Challenges:

1. [Challenge types](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - what the numeric challenge type values mean (enum).

2. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the old version of the curriculum.

## Helper Scripts

> [!NOTE]
> If you are working with the step-based challenges, refer to the [Work on Practice Projects](how-to-work-on-practice-projects.md) section.

There are a few helper scripts that can be used to manage the challenges in a block. Note that these commands should all be run in the block directory. For example:

```bash
cd curriculum/challenges/english/02-javascript-algorithms-and-data-structures/basic-algorithm-scripting
```

### Add New Challenge

To add a new challenge at the end of a block, call the script:

```bash
pnpm run create-next-challenge
```

This will prompt you for the challenge information and create the challenge file, updating the `meta.json` file with the new challenge information.

### Delete a Challenge

To delete a challenge, call the script:

```bash
pnpm run delete-challenge
```

This will prompt you to select which challenge should be deleted, then delete the file and update the `meta.json` file to remove the challenge from the order.

### Insert a Challenge

To insert a challenge before an existing challenge, call the script:

```bash
pnpm run insert-challenge
```

This will prompt you for the challenge information, then for the challenge to insert before. For example, if your choices are:

```bash
a
b
c
```

If you choose `b`, your new order will be:

```bash
a
new challenge
b
c
```

### Update Challenge Order

If you need to manually re-order the challenges, call the script:

```bash
pnpm run update-challenge-order
```

This will take you through an interactive process to select the order of the challenges.

## Troubleshooting

### Infinite Loop Detected

If you see the following error in the console while previewing a challenge:

```text
Potential infinite loop detected on line <number>...
```

This means that the loop-protect plugin has found a long-running loop or recursive function. If your challenge needs to do that (e.g. it contains an event loop that is supposed to run indefinitely), then you can prevent the plugin from being used in the preview. To do so, add `disableLoopProtectPreview: true` to the block's `meta.json` file.

If your tests are computationally intensive, then you may see this error when they run. If this happens then you can add `disableLoopProtectTests: true` to the block's `meta.json` file.

It's not typically necessary to have both set to true, so only set them as needed.
