# コーディングチャレンジに貢献する方法

私たちの目標は、楽しく明確なインタラクティブ学習体験を開発することです。

インタラクティブなコーディングチャレンジの設計は難しいです。 長い説明を書いたり、ビデオチュートリアルを作成したりする方がはるかに簡単です。 しかし、私たちのコアカリキュラムは、多くの人にとって最適なものに固執しています。完全にインタラクティブでビデオゲームのような体験です。

私たちはキャンパーにフロー状態を体験してほしいのです。 勢いをつけて大きな支障なくカリキュラムを突破してほしいと思っています。 自信を持ってプロジェクトに参加し、プログラミングの概念に広く触れてほしいと考えています。

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

- GitHub のインターフェースでファイルを編集するには、該当するファイルの鉛筆アイコンをクリックします。 これが最も速い方法ですが、GitHub 上で変更をテストすることができないため、**お勧めできません**。 もしメンテナーが、行った変更をローカルでテストする必要があると結論づけた場合は、上記の方法で行う必要があります。

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

# --question--

現在、このフィールドは多肢選択式 Python チャレンジ用に使用されています。

## --text--

質問のテキストをここに記述します。

## --answers--

回答 1

---

回答 2

---

他の回答

## --video-solution--

正解の番号をここに記述します。
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

その結果、例えば上記の場合 `5a474d78df58bafeb3535d34` という新しい id が得られます。

id を取得したら、上部の `id` フィールドとしてマークダウンファイルに入れてください。例えば、次のようになります。

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## チャレンジ名の決定

チャレンジ名を決めるのは難しいです。 しかし、いくつかの制約を課すことで簡単になります。

すべてのチャレンジタイトルは明示的でなければなりません。そして、以下のパターンに従う必要があります。

\[動詞\]\[目的語 (節)\]

チャレンジ名の例を以下に示します。

- Use Clockwise Notation to Specify the Padding of an Element
- Condense arrays with .reduce
- Use Bracket Notation to Find the First Character in a String

## チャレンジの説明 / 指示

文章は最小限の専門用語で明確かつ簡潔にする必要があります。 専門用語を使用する場合、平易な英語で定義する必要があります。

段落は短くしてください (1-4 文程度)。 多くの人にとって、長文よりもいくつかの短い段落のほうが読みやすいです。

チャレンジテキストでは、会話調にするために二人称 ("you") を使用する必要があります。 これにより、チャレンジで作業しているキャンパーは、テキストと指示を通して直接話しかけられているように感じます。 一人称 ("I", "we", "let's", and "us") をできるだけ使用しないようにしてください。

外部のサイトへのリンクは使用しないでください。 フローの妨げとなります。 チャレンジの間、キャンパーが Google で検索を行う必要がないようにしてください。 キャンパーが恩恵を受けると思われるリソースがある場合は、それらをチャレンジガイド関連記事に追加します。

必要に応じてダイアグラムを追加できます。

チャレンジに絵文字や顔文字を使用しないでください。 freeCodeCamp は、グローバルコミュニティを持っており、絵文字や顔文字の文化的意味は世界中で異なる場合があります。 また、絵文字は異なるシステムでは異なるレンダリングをします。

固有名詞は、極力正しい大文字表記を使用することが適切です。 以下は、チャレンジで表示される単語のリストです。

- JavaScript (「J」と「S」が大文字、省略形なし)
- Node.js
- 不正確な場合もありますが、より広く使われているため、ハイフンなしの 'back end' と 'front end' を使用します。

### 2 分ルール

各チャレンジは、そこまでのチャレンジを完了した英語のネイティブスピーカーによって 120 秒以内に解決されるべきです。 これには、命令 / 指示を読み、シードされたコードを理解し、コードを書き、すべてのテストに合格するのにかかる時間が含まれます。

チャレンジを完了するのに 2 分以上かかる場合は、2 つの選択肢があります。

- チャレンジを簡素化する
- チャレンジを 2 つのチャレンジに分ける

2 分ルールにより、命令を簡潔にし、シードコードを明確にし、テストを容易にすることが、チャレンジ設計者に求められます。

We track how long it takes for campers to solve challenges and use this information to identify challenges that need to be simplified or split.

### モジュール化

チャレンジごとに、1 つのコンセプトを教えるべきであり、そのコンセプトはチャレンジ名から明らかであるべきです。

繰り返しやバリエーションにより、以前学んだコンセプトを強化することができます。例えば、1 つのチャレンジに h1 要素を導入し、いくつかのチャレンジの後に h3 要素を導入します。

私たちの目標は、数千個の 2 分間チャレンジを行うことです。 これらは同じフローであり、以前に網羅されたコンセプトを繰り返すことができます。

### チャレンジテキストのフォーマット

チャレンジテキストと例の具体的なフォーマットガイドラインは次のとおりです。

- 言語キーワードは `` \` `` のバックティックに入ります。 例えば、HTML タグ名や CSS プロパティ名です。
- コード部品 (すなわち、関数、メソッド、変数名) への参照は、`` \` `` バックティックで囲みます。 下記の例を参照してください。

```md
変数 `realNumber` を整数に変換するには、`parseInt` を使用します。
```

- ファイル名とパスディレクトリへの参照 (例: `package.json`、`src/components`) は `` \` `` バックティックで囲みます。
- 複数行コードブロック **の前に空行** が必要です。 次の行は、3つのバックティックに続いて [対応言語](https://prismjs.com/#supported-languages) の1つで始まります。 コードブロックを完了するには、3 つのバックティックのみの新しい行と **別の空行** が必要です。 下記の例を参照してください。
- 空白はマークダウンでも重要ですので、エディターで表示させることをお勧めします。

**注:** YMAL のコード例を使用する場合、バックティックの右側に記載する言語は、 `yml` ではなく `yaml` を使用してください。

以下はコードの例です。

````md
```{language}

[ここに、コードを記述してください]

````
````

- 注意書き形式の追加情報は空白行で囲みます。例: `**Note:** Rest of note text...`
- 複数の注意書きが必要な場合は、すべての注意書きを別々の文章でリスト化します。例: `**Notes:** First note text. Second note text.`
- 可能であれば、一重引用符を使用します。

**注:** _HTML_ タグの代わりに同等の _マークダウン_ を使用してください。

## テストの記述

チャレンジには、キャンパーがコンセプトを理解していることを確認するために最小限のテストが必要です。

私たちの目標は、チャレンジが教えようとしている単一のポイントを伝え、そのポイントを理解していることをテストすることです。

チャレンジテストでは、Node.js と Chai.js アサーションライブラリを使用できます。 また、必要に応じて、`code` 変数からユーザーが生成したコードにアクセスすることもできます。 さらに、 `__helpers` オブジェクトは、テストを記述するプロセスを簡略化するいくつかの関数を公開します。 利用可能な関数は、_client/src/utils/curriculum-helpers.ts_ に定義されています。

## Formatting seed code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable

### Seed code comments

We have a [comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) that contains the only comments that can be used within the seed code. 辞書のコメントに記載されている正確な大文字と小文字の区別および語間を使用します。 コメント辞書は、開発チームとの事前議論なしに増やしてはいけません。

使用するコメントは、コメント文字とコメントそのものの間にスペースを入れる必要があります。 一般的に、コメントは控えめに使用します。 シードコードコメントの使用を避けられるのであれば、チャレンジの説明や指示を書き換えることを常に検討してください。

有効な単一行 JavaScript コメントの例は以下のとおりです。

```js
// この行の下のコードのみ変更する
````

有効な CSS コメントの例は次のとおりです。

```css
/* Only change code above this line */
```

チャレンジに、コード変更が必要な場所が 1 つしかない場合、以下の例のコメントを使用してユーザーに変更を行うべき場所を指示してください。

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

チャレンジに、ユーザがコード変更を行うべき場所が複数存在する場合 (例: React のチャレンジ) は、次のようになります。

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

### シードコードコメントの翻訳

各言語には、個別のコメント辞書があります。 The [English version of the comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.json`. それぞれの辞書は一意の `id` プロパティと `text` プロパティを持つオブジェクトの配列で構成されています。 `text` のみ、対応する英語のコメントの翻訳を含むように変更する必要があります。

一部のコメントには、翻訳してはいけない単語 / フレーズが含まれています。 例えば、変数名や「React」のような固有ライブラリ名は翻訳しません。 例として以下のコメントをご覧ください。 `myGlobal` という単語は翻訳しません。

```text
この行の下に myGlobal 変数を宣言してください。
```

> [!NOTE]
> 
> 現在、コメント辞書の i18n 作業ができるようにするためのインテグレーションに取り組んでいます。

## ヒントとソリューション

各チャレンジには `Get a Hing` ボタンがあり、ユーザーはチャレンジ用に作成されたヒント / ソリューションにアクセスできます。 カリキュラムヒント / ソリューショントピックは、`Guide` カテゴリの下の [フォーラム](https://forum.freecodecamp.org/c/guide) にあります。

既存のチャレンジのヒント / ソリューショントピックに関わる問題がある場合は、フォーラムの [contributors カテゴリ](https://forum.freecodecamp.org/c/contributors) で提案を行うことができます。 信頼レベル 3 のモデレーターとユーザーは、コメントをレビューし、対応するヒント / ソリューションのトピックに変更を含めるかどうかを決定します。

### 新しいチャレンジのヒント / ソリューションの追加

新しいチャレンジのヒント / ソリューション関連トピックを追加する場合は、次の手順を実行します。

1. 新しいトピックの作成と同じ手順からスタートします。タイトルを作成するために以下を確認します。
2. トピックのタイトルは、`freeCodeCamp チャレンジガイド:` にカリキュラムチャレンジの実際のタイトルを連結します。 例えば、チャレンジに「`Chunky Monkey`」という名前が付けられている場合、トピックのタイトルは、「`freeCodeCamp Challenge Guide: Chunky Monkey`」になります。
3. `camperbot` はトピック / 投稿のオーナーである必要があるので、管理者に、メイン投稿のオーナーを `camperbot` に変更するようにリクエストします。
4. 新しいトピックを作成すると、フォーラムのトピック id が作成されます。 これは、フォーラムのトピック URL の末尾にあります。 この id は、トピックにリンクするために、`ヒントを入手` ボタン用の標準プルリクエストプロセスを介して、カリキュラムチャレンジファイルのフロントマターに追加する必要があります。

### ヒントとソリューショントピックの内容に関するガイドライン

カリキュラムチャレンジに関連するガイドトピックのソリューションを提案する場合は、完全なコードを追加する必要があります。 これには、すべての元のシードコードと、すべてのチャレンジテストに合格するために必要な変更が含まれています。 次のテンプレートは、新しいヒント / ソリューションのトピックを作成する際に使用する必要があります。

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

2. 次のコマンドでチャレンジのブロックやスーパーブロックをテストすることもできます。

```
FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum
```

```
FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum
```

次の手順を実行することで、1 つのチャレンジを個別にテストすることもできます。

1. `curriculum` ディレクトリに切り替えてください。

   ```
   cd curriculum
   ```

2. 変更したチャレンジファイルごとに以下を実行します ( `challenge-title-goes-here` を正式なチャレンジのタイトルに置き換えてください)。

   ```
   pnpm run test -- -g challenge-title-goes-here ```

各チャレンジがテストに合格したことを確認したら、[プルリクエストを作成](how-to-open-a-pull-request.md) してください。

> [!TIP] `.env` にある環境変数 `LOCALE` で、テストするチャレンジの言語を設定できます。
> 
> 現在受け入れられている値は、`english` と `chinese`で、デフォルトは `english` です。

### 役立つリンク

チャレンジの作成および編集

1. [チャレンジタイプ](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - チャレンジタイプの値の、どの数値が何を意味するか (enum)

2. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - 古いバージョンのカリキュラムに貢献している [Ethan Arrowood](https://twitter.com/ArrowoodTech) の動画
