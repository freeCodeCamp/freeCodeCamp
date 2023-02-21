---
id: bd7178d8c242eddfaeb5bd13
title: 散布図でデータを可視化する
challengeType: 3
forumTopicId: 301467
dashedName: visualize-data-with-a-scatterplot-graph
---

# --description--

**目標:** こちらと似た機能を持つアプリを構築してください: <a href="https://scatterplot-graph.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://scatterplot-graph.freecodecamp.rocks</a>

以下のユーザーストーリーを満たし、すべてのテストが成功するようにしてください。 必要に応じて、どのようなライブラリあるいは API を使用してもかまいません。 あなた独自のスタイルを加えましょう。

HTML、JavaScript、CSS、および D3 の SVG ベースのビジュアライゼーションライブラリを使用できます。 テストでは、軸に沿って自動的に目盛りを生成する D3 軸プロパティを使用して軸を生成する必要があります。 グラフ化された要素の配置を調べるために目盛りの位置が使用されるので、D3 テストを成功させるためにはこの目盛りが必要です。 軸の生成については <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> を参照してください。 Required DOM elements are queried on the moment of each test. フロントエンドフレームワーク (例えば Vue など) を使用した場合、動的なコンテンツではテスト結果が不正確になる可能性があります。 最終的には対応したいと考えていますが、現在の D3 プロジェクトではこれらのフレームワークはサポートされていません。

**ユーザーストーリー #1:** 対応する `id="title"` を持つタイトル要素が表示されています。

**ユーザーストーリー #2:** 対応する `id="x-axis"` を持つ x 軸が表示されています。

**ユーザーストーリー #3:** 対応する `id="y-axis"` を持つ y 軸が表示されています。

**ユーザーストーリー #4:** プロットされるデータを表すドット (それぞれが `dot` クラスを持つ) が表示されています。

**ユーザーストーリー #5:** 各ドットには、対応する `x` を格納している`data-xvalue` プロパティと、対応する `y` の値を格納している `data-yvalue` プロパティが必要です。

**ユーザー ストーリー #6:** 各ドットの `data-xvalue` と `data-yvalue` は、実データの範囲内にあり、正しい形式で指定される必要があります。 `data-xvalue` については、整数 (通年) または `Date` オブジェクトがテスト評価において許容されます。 `data-yvalue` (分) については、 `Date` オブジェクトを使用します。

**ユーザーストーリー #7:** `data-xvalue` とそれに対応するドットは、x 軸上の対応する点または値と一致している必要があります。

**ユーザーストーリー #8:** `data-yvalue` とそれに対応するドットは、y 軸上の対応する点または値と一致している必要があります。

**ユーザーストーリー #9:** y 軸上に、複数のテイックラベルが `%M:%S` 時間フォーマットで表示されています。

**ユーザーストーリー #10:** x 軸上に、年を示す目盛りのラベルが複数表示されています。

**ユーザーストーリー#11:** x 軸ラベルの範囲が実際の x 軸データの範囲内にあることが分かります。

**ユーザーストーリー#12:** y 軸ラベルの範囲が実際の y 軸データの範囲内にあることが分かります。

** ユーザーストーリー #13:** `id="legend"` を持つ説明テキストが含まれている凡例が表示されています。

**ユーザーストーリー #14:** ある領域にマウスカーソルを合わせると、その領域の詳細情報を表示するための、対応する `id="tooltip"` を持つツールチップが表示されます。

**ユーザーストーリー #15:** 私のツールチップには、アクティブな領域の `data-xvalue` に対応する `data-year` プロパティが必要です。

このプロジェクトを完了するために必要なデータセットはこちらにあります: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`

<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">この CodePen テンプレートを使用して</a> あなたのプロジェクトを構築することができます。`Save` をクリックすると、あなた用の pen を作成することができます。 または、下記の CDN リンクを使用して、使い慣れている環境でテストを実行することもできます: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

完了したら、すべてのテストが成功する状態の作業プロジェクトの URL を送信してください。

# --solutions--

```js
// solution required
```
