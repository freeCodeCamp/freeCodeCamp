---
id: bd7188d8c242eddfaeb5bd13
title: ヒートマップでデータを可視化する
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--

**目標:** こちらと似た機能を持つアプリを構築してください: <a href="https://heat-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://heat-map.freecodecamp.rocks</a>

以下のユーザーストーリーを満たし、すべてのテストが成功するようにしてください。 必要に応じて、どのようなライブラリあるいは API を使用してもかまいません。 あなた独自のスタイルを加えましょう。

HTML、JavaScript、CSS、および D3 の SVG ベースのビジュアライゼーションライブラリを使用できます。 Required DOM elements are queried on the moment of each test. フロントエンドフレームワーク (例えば Vue など) を使用した場合、動的なコンテンツではテスト結果が不正確になる可能性があります。 最終的には対応したいと考えていますが、現在の D3 プロジェクトではこれらのフレームワークはサポートされていません。

**ユーザーストーリー #1:** 私のヒートマップには、タイトルとそれに対応する `id="title"` が必要です。

**ユーザーストーリー #2:** 私のヒートマップには、説明とそれに対応する `id="description"` が必要です。

** ユーザーストーリー #3:** 私のヒートマップには、x 軸とそれに対応する `id="x-axis"` が必要です。

**ユーザーストーリー #4:** 私のヒートマップには、y 軸とそれに対応する `id="y-axis"` が必要です。

**ユーザーストーリー #5:** 私のヒートマップには、`rect` 要素と、データを表す `class="cell"` が必要です。

**ユーザーストーリー #6:** セルの塗りつぶしに使用する色が 4種類以上必要です。

**ユーザーストーリー #7:** 各セルには、`month`、 `year`、および `temperature` の値をそれぞれ格納している `data-month` プロパティ、`data-year` プロパティ、 `data-temp` プロパティがあります。

**ユーザーストーリー #8:** 各セルの `data-month` と `data-year` はデータの範囲内に収める必要があります。

**ユーザーストーリー #9:** 私のヒートマップには、y 軸上で対応する月と一致しているセルが必要です。

**ユーザーストーリー #10:** 私のヒートマップには、x 軸上で対応する年と一致しているセルが必要です。

**ユーザーストーリー#11:** 私のヒートマップには、完全な (省略形でない) 月名が記された目盛りのラベルが y 軸上に複数表示されています。

**ユーザーストーリー #12:** 私のヒートマップには、1754 年から 2015 年までの年が記された目盛りのラベルが x 軸上に複数表示されています。

**ユーザーストーリー #13:** 私のヒートマップには、凡例とそれに対応する `id="legend"` が必要です。

**ユーザーストーリー #14:** 私の凡例には `rect` 要素を含める必要があります。

**ユーザーストーリー #15: 凡例の ** `rect` 要素には、4 種類以上の塗りつぶし色を使用する必要があります。

**ユーザーストーリー #16:** ある領域にマウスカーソルを合わせると、その領域の詳細情報を表示するための、対応する `id="tooltip"` を持つツールチップが表示されます。

**ユーザーストーリー #17:** 私のツールチップには、アクティブな領域の `data-year` に対応する `data-year` プロパティが必要です。

このプロジェクトを完了するために必要なデータセットはこちらにあります: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">この CodePen テンプレートを使用して</a> あなたのプロジェクトを構築することができます。`Save` をクリックすると、あなた用の pen を作成することができます。 または、下記の CDN リンクを使用して、使い慣れている環境でテストを実行することもできます:`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

完了したら、すべてのテストが成功する状態の作業プロジェクトの URL を送信してください。

# --solutions--

```js
// solution required
```
