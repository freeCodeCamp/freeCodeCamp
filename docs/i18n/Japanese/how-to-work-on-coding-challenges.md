# コーディングの課題に取り組む方法

私たちの目標は、楽しく明確なインタラクティブな学習体験を開発することです。

インタラクティブなコーディング課題の設計は困難です。 長い説明を書いたり、ビデオチュートリアルを作成したりする方がはるかに簡単です。 ミディアムとYouTubeの人々のための場所があります。 しかし、私たちのコアカリキュラムでは、ほとんどの人にとって最適なものに固執しています。 完全にインタラクティブでビデオゲームのような体験です。

私たちはキャンパーにフロー状態を実現させたいのです。 私たちは、彼らができるだけ少ない緊張で私たちのカリキュラムを通して勢いを築き上げてほしいと思っています。 私たちは彼らが自信を持ってプロジェクトに参加し、プログラミングの概念に広く触れてほしいと考えています。

これらの課題を生み出すには、莫大な創造性と細部への注意が必要です。 利用可能な助けがたくさんあります。 アイデアを跳ね返り、チャレンジをデモできる貢献者のチーム全体からサポートがあります。 [コントリビュータールーム](https://gitter.im/freecodecamp/contributors) で活発に活動し、たくさんの質問をしてください。

あなたの助けを借りて、何百万人もの人々が今後のコーディングを学ぶのに役立つインタラクティブなコーディングカリキュラムを設計することができます。

各チャレンジのコンテンツは、独自のマークダウンファイルに保存されます。 このマークダウンファイルは、インタラクティブなWebページを作成するためのツールを使用して、後でHTMLに変換されます。

[`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges) ディレクトリに、freeCodeCamp.orgのカリキュラムコンテンツのすべてがあります。

## カリキュラムのツールを設定する

カリキュラムを作成する前に、変更をテストするためのツールを設定する必要があります。 以下から任意のオプションを使用できます。

- [freeCodeCampをローカルで](how-to-setup-freecodecamp-locally.md)設定できます。 これは **定期的/繰り返しの貢献には** を強くお勧めします。 このセットアップでは、作業と変更のテストができます。
- 無料のオンライン開発環境であるGitpodを使用してください。 下のボタンをクリックすると、ブラウザでfreeCodeCamp用のコード対応開発環境が開始されます。 数分しかかかりません。

  [![Gitpod で開く](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- GitHubのインターフェイスでファイルを編集するには、該当するファイルの鉛筆アイコンをクリックします。 これが最も速い方法ですが、GitHub上で変更をテストすることができないため、 **はお勧めできません**。 もし私たちのメンテナーが、あなたが行った変更をローカルでテストする必要があると結論づけるならば、あなたは再び上記の方法に従う必要があるでしょう。

## チャレンジテンプレート

以下は、現在のチャレンジマークダウンファイルの外観のテンプレートです。  合理化されたテンプレートを確認するには、 [](#upcoming-challenge-template) を参照してください。

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 0
videoUrl: 'url of video explanation'
---

## Description

<section id='description'>
A Description of the challenge and what is required to pass
</section>

## Instructions

<section id='instructions'>
Instructions about what exactly needs to be done.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: "foo"
    testString: 'Chai asserts' を使用して文字列化された関数
````

</section>

## チャレンジの種

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
デフォルトでエディタに表示されるコード。

これはチャレンジに必要なセクションです。
```

</div>

### テスト前に

<div id='{ext}-setup'>

```{ext}
オプションのテストセットアップコード。
```
```

</div>

### テストの後

<div id='{ext}-teardown' mark="crwd-mark">

```{ext}
オプションのテスト コードを破棄します。
```
```

</div>

</section>

## 解決策

<section id='solution' mark="crwd-mark">

```{ext}
// solution required
```

</section>

````

> [!NOTE]
>
> 1. In the above sections, examples of `{ext}` are:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. 上記の `Tests` セクションでは、 `text` と `testString` は有効な YAML 文字列である必要があります。 `testString` は文字列化された関数や、Chai assertを使用する式にすることができます。

## チャレンジの番号付け

すべてのチャレンジには `id` が必要です。 指定しない場合、MongoDBはデータを保存するときに新しいランダムなものを作成します。 しかしそれは望んでいません 挑戦idを 異なる環境で一貫性のあるものにしたいのですから たくさんの開発者などです

シェル内で新しいものを生成するには (MongoDB が別々に実行されていると仮定する):

1. `mongo` コマンドを実行します。
2.
2. `ObjectId()`コマンドを実行します。

例:

```bash
$ mongo
MongoDB シェルバージョン v3.6.1
接続先: mongodb://127.0.0.1:27017
MongoDB サーバーバージョン: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

その結果、上記の `5a474d78df58bafeb3535d34` などの新しい id が得られます。

あなたのIDを取得したら、上部の `id` フィールドとしてマークダウンファイルに入れてください。

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## 名前付けのチャレンジ

命名するのは難しい。 いくつかの制約を課すことで簡単になりました。

すべてのチャレンジタイトルは明示的であり、このパターンに従う必要があります:

\[verb\]\[object 節\]

以下にチャレンジ名の例を示します。

- 時計回りの表記を使用して、要素のパディングを指定します
- .reduce を使用したCondense 配列
- 文字列内の最初の文字を検索するには、かっこ表記を使用します。

## チャレンジの説明/説明

文章は最小限の専門用語で明確かつ簡潔にする必要があります。 使用される場合、専門用語は直ちに平易な英語で定義されるべきです。

短い段落を維持します(約1-4文)。 人々はテキストの壁よりもいくつかの短い段落を読む可能性が高いです。

チャレンジテキストは、会話的な口調を与えるために2番目の人(「あなた」)を使用する必要があります。 このように、テキストと指示は、チャレンジを通じて働くキャンピングカーに直接話すように見えます。 最初の人(「私」、「私」、「私」、「let」、および「私たち」)を使用しないようにしてください。

アウトバウンドリンクを使用しないでください。 これらは流れを邪魔します。 キャンパーはこれらの課題の間、Googleで検索する必要はありません。 キャンパーが利益をもたらすと思われるリソースがある場合は、チャレンジのガイド関連記事に追加してください。

必要に応じてダイアグラムを追加できます。

チャレンジに絵文字や絵文字を使用しないでください。 freeCodeCampはグローバルなコミュニティを持っており、絵文字や絵文字の文化的意味は世界中で異なるかもしれません。 また、絵文字は異なるシステムで異なる表示をすることができます。

適切な名詞は、可能な限り正しい大文字化を使用する必要があります。 以下は、チャレンジに表示される単語のリストです。

- JavaScript（「J」と「S」の大文字と省略形なし）
- Node.js
- フロントエンド開発(ダッシュ付き形容詞形)は、フロントエンド(ダッシュなし名詞形)で作業しているときです。 同じことは、"バックエンド"、"フルスタック"、および他の多くの複合用語となります。

### 2分のルール

各チャレンジは、120秒以内にネイティブスピーカーによって解決される必要があります。 これには、シードされたコードを理解する方向/命令を読み取るのにかかる時間が含まれます。 自分のコードを書いて全てのテストに合格する

チャレンジを完了するのに2分以上かかる場合は、2つの選択肢があります。

- チャレンジを簡素化する、または
- チャレンジを二つのチャレンジに分けます。

2分間のルールにより、指示を簡潔に、シードコードを明確にし、テストを簡潔にすることが、チャレンジデザイナーに強制されます。

キャンピングカーが変更を解決するまでにかかる時間を追跡し、この情報を使用して簡略化や分割が必要な課題を特定します。

### モジュール化

チャレンジごとに一つのコンセプトを教える必要があり、そのコンセプトはチャレンジの名前から明らかにされるべきです。

例えば、繰り返しやバリエーションを通じて、以前にカバーされた概念を強化することができます。 1つのチャレンジにh1要素を導入し、その後いくつかのチャレンジにh3要素を導入します。

私たちの目標は、何千もの2分間のチャレンジを持つことです。 これらは一緒に流れ、以前にカバーされた概念を繰り返すことができます。

### チャレンジテキストの書式設定

チャレンジのテキストと例の具体的なフォーマットガイドラインは次のとおりです。

- 言語キーワードは `<code>` タグになります。 例えば HTML タグ名や CSS プロパティ名
- キーワードが定義されているときの最初のインスタンス、または一般的なキーワード (例えば "object" や "immutable") は `<dfn>` タグに入ります
- コード部品(すなわち関数、メソッド、変数名)への参照は、 `<code>` タグでラップする必要があります。 下記の例を参照してください。
- 変数 <code>realNumber</code> を整数に変換するには <code>parseInt</code> を使用します。
- 複数行コードブロック **の前に空行** がなければなりません。 次の行は、3つのバックティックに続いて [対応言語](https://prismjs.com/#supported-languages)のうちの1つで始まる必要があります。 コードブロックを完了するには、3つのバックティックと **別の空行**を持つ改行を開始する必要があります。 **Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

下記の例を参照してください。

````md
以下はコードの例です:

```{language}

[Your CODE HERE]

````
````

- Additional information in the form of a note should be formatted `<strong>Note:</strong> Rest of note text...`
- If multiple notes are needed, then list all of the notes in separate sentences using the format `<strong>Notes:</strong> First note text. 2番目のメモテキスト`。
- 該当する場合はダブルクォートを使用してください

## Writing tests

Challengesは、キャンパーがコンセプトを理解していることを確認するために必要な最小限のテスト数を持つ必要があります。

私たちの目標は、挑戦が教えようとしている単一のポイントを伝え、そのポイントを理解していることをテストすることです。

チャレンジテストでは、Node.js と Chai.js アサーションライブラリを使用できます。 また、必要に応じて、 `code` 変数からユーザーが生成したコードにアクセスすることもできます。

また、必要に応じて、 `code` 変数からユーザーが生成したコードにアクセスすることもできます。

## シードコードの書式設定

以下はチャレンジシードコードの具体的な書式設定ガイドラインです:

- 2つのスペースを使用してインデントする
- JavaScript文はセミコロンで終了する
- 該当する場合はダブルクォートを使用する
- コメントはコメント文字とコメント自体の間にスペースを持つ必要があります

  `// この行を修正`

## ヒントとソリューション

各チャレンジには`Get a Hint`ボタンがあります。 カリキュラムヒント/ソリューションのトピックは、format@@0(https://forum.freecodecamp.org/c/ガイド)の「ガイド」カテゴリにあります。

カリキュラムヒント/ソリューションのトピックは、format@@0(https://forum.freecodecamp.org/c/ガイド)の「ガイド」カテゴリにあります。

既存のチャレンジのヒント/ソリューションのトピックに問題がある場合は、フォーラムの format@@0(https://forum.freecodecamp.org/c/contributors) で提案を行うことができます。 信頼レベル3のモデレータとユーザーは、コメントをレビューし、対応するヒント/ソリューションのトピックに変更を含めるかどうかを決定します。

### 新しいチャレンジヒント/ソリューションの追加 トピックス

チャレンジヒント/ソリューション関連トピックを追加する場合は、以下の手順に従ってください。

1.

### 新しいチャレンジヒント/ソリューションの追加 トピックス

チャレンジヒント/ソリューション関連トピックを追加する場合は、以下の手順に従ってください。

1. 新しいトピックを作成するための同じステップに従うことから始めますが、タイトルを作成するために次を確認してください。
2.
2. トピックのタイトルは、カリキュラムチャレンジの実際のタイトルと連結された`freeCodeCampチャレンジガイド: `から始める必要があります。 例えば、チャレンジに `Chunky Monkey` という名前が付けられている場合、トピックのタイトルは "`freeCodeCamp チャレンジガイド: Chunky Monkey`" になります。
3.
3. `camperbot` はこれらのトピック/投稿の所有者である必要があります。 ですから、メイン投稿の所有権を `camperbot` に変更するには、管理者にリクエストする必要があります。
4.
4. 新しいトピックを作成すると、フォーラムのトピックIDが作成されます。 フォーラムのトピックURLの末尾にあります。 このIDは、トピックにリンクするための「ヒントを入手」ボタンの通常のプルリクエストプロセスを介してカリキュラムチャレンジファイルのフロントマターに追加する必要があります。

### ヒントの内容と解のトピックに関するガイドライン

カリキュラムチャレンジ関連の解決策を提案する場合 ガイドのトピック.

### ヒントの内容と解のトピックに関するガイドライン

カリキュラムチャレンジ関連の解決策を提案する場合 ガイドのトピック. 完全なコードを追加しなければならない 完全なコードを追加しなければならない これには、すべての元のシードコードと、すべてのチャレンジテストに合格するために必要な変更が含まれます。 次のテンプレートは、新しいヒント/ソリューションのトピックを作成するときに使用する必要があります:

````md
# チャレンジ名がここに来ます

--

## Problem 説明

これはチャレンジの説明や指示を再表示することなく行うべきことをまとめます。 This is an optional section

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Hints

### Hint 1

Hint goes here

### Hint 2

Hint goes here

---

## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
````

#### コードの説明

- コードの説明はこちら
- コードの説明はこちら

#### 関連リンク

- [リンクテキスト](link_url_goes_here)
- [リンクテキスト](link_url_goes_here)

</details>
````

## チャレンジのテスト

[create a pull request](how-to-open-a-pull-request) d)あなたの変更のために、あなたが行った変更が誤ってチャレンジに問題を引き起こさないことを確認する必要があります。 

1. すべての課題をテストするには、ルートディレクトリから以下のコマンドを実行してください

````
npm run test:カリキュラムの
``` 

2. 次のコマンドでブロックやチャレンジのスーパーブロックをテストすることもできます。

```
npm run test:カリキュラム--block='Basic HTML and HTML5'
```

```
npm run test:カリキュラム--superblock=responsive-web-design
```

次のステップを実行することで、1つのチャレンジを個別にテストすることもできます:

1. 「カリキュラム」ディレクトリに切り替えます。

   ```
   CDのカリキュラムは
   ```

2. 変更したチャレンジファイルごとに以下を実行します。

   ```
   npm run test -- -g 'full English title of the challenge'
   ```

それぞれのチャレンジがテストを通過することを確認したら、format@@0(https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md)を作成してください。

> [!TIP]
> `.env`の環境変数`LOCALE`を、テストする必要があるチャレンジの言語に設定できます。
> 
> 現在受け入れられている値は `english` と `chinese` です。

> [!TIP]
> `.env`の環境変数`LOCALE`を、テストする必要があるチャレンジの言語に設定できます。
> 
> 現在受け入れられている値は `english` と `chinese` です。デフォルトでは `english` が設定されています。

## 今後のチャレンジテンプレート

チャレンジテンプレートは、よりクリーンでネストされた構造に更新されます。  This has not been completely finalized, but the following should close to the final structure:

````mdx

---
id: Unique identifier (alphanumerical, MongoDB_id)
title: 'Challenge Title'
challengeType: Integer, defined in `client/utils/challengeTypes.js`
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

import Script from './script.mdx';

## --step-description--

Description text, in markdown

```html
<div> 
  example code
</div>
```

## --step-hints--

![test-id-1]

id の任意の数の命令(マークダウン)とコードブロックがあります。

```js
テスト 1 のコード
```

![test-id-2]

マークダウン構文の詳細な説明

```js
その他のコード
```

## --step-seed--

### --before-user-code--

```lang
ユーザーの前に評価されたコード
```

### --after-user-code--

```lang
ユーザーの後とテスト直前に評価されたコード
```

### --seed-content--

![index-html]

```html
Some html
```

```css
Some css
```

```js
Some js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solut-marker--
</h1>



<p spaces-before="0">
  シードセクションと全く同じ
</p>

<h2 spaces-before="0">
  --次のソリューションマーカー
</h2>



<p spaces-before="0">
  再び同じ
</p>

<h1 spaces-before="0">
  --question-marker--
</h1>

<h2 spaces-before="0">
  --text-marker--
</h2>



<p spaces-before="0">
  質問はここにあります（ビデオチャレンジのみに使用されます）
</p>

<h2 spaces-before="0">
  --answers-marker--
</h2>



<p spaces-before="0">
  答え 1
</p>

<hr />

<p spaces-before="0">
  答え 2
</p>

<hr />

<p spaces-before="0">
  答え 2
</p>

<h2 spaces-before="0">
  --solut-marker--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  有用なリンク
</h3>



<p spaces-before="0">
  チャレンジの作成と編集:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">チャレンジタイプ</a> - 数値チャレンジ型の値が何を意味するか (列挙)。
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">FreeCodeCampへの貢献 - ES6 Challenge Tests</a> - カリキュラムの古いバージョンに貢献している <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> のビデオ。
    </p>
  </li>

</ol>
