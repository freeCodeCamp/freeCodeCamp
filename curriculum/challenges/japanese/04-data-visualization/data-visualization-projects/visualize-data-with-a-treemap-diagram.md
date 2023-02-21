---
id: 587d7fa6367417b2b2512bc0
title: ツリーマップ図でデータを可視化する
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**目標:** こちらと似た機能を持つアプリを構築してください: <a href="https://treemap-diagram.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://treemap-diagram.freecodecamp.rocks</a>

以下のユーザーストーリーを満たし、すべてのテストが成功するようにしてください。 必要に応じて、どのようなライブラリあるいは API を使用してもかまいません。 あなた独自のスタイルを加えましょう。

HTML、JavaScript、CSS、および D3 の SVG ベースのビジュアライゼーションライブラリを使用できます。 テストでは、軸に沿って自動的に目盛りを生成する D3 軸プロパティを使用して軸を生成する必要があります。 グラフ化された要素の配置を調べるために目盛りの位置が使用されるので、D3 テストを成功させるためにはこの目盛りが必要です。 軸の生成については <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> を参照してください。 Required DOM elements are queried on the moment of each test. フロントエンドフレームワーク (例えば Vue など) を使用した場合、動的なコンテンツではテスト結果が不正確になる可能性があります。 最終的には対応したいと考えていますが、現在の D3 プロジェクトではこれらのフレームワークはサポートされていません。

**ユーザーストーリー #1:** 私のツリーマップには、タイトルとそれに対応する `id="title"` が必要です。

**ユーザーストーリー #2:** 私のツリーマップには、説明とそれに対応する `id="description"` が必要です。

**ユーザーストーリー #3:** 私のツリーマップには、`rect` 要素と、それに対応してデータを表す `class="tile"` が必要です。

**ユーザーストーリー #4:** タイルの塗りつぶしに使用する色が 2 種類以上必要です。

**ユーザーストーリー #5:** 各タイルには、対応する `name`、`category`、`value` をそれぞれ格納している `data-name` プロパティ、`data-category` プロパティ、および `data-value` プロパティが必要です。

**ユーザーストーリー #6:** 各タイルの面積は `data-value` の量に対応していなければなりません。タイルの `data-value` が大きいほど面積も大きくなっている必要があります。

**ユーザーストーリー #7:** 私のツリーマップには、凡例とそれに対応する `id="legend"` が必要です。

**ユーザーストーリー #8:** 私の凡例には、`rect` 要素とそれに対応する `class="legend-item"` が必要です。

**ユーザーストーリー #9: 凡例の ** `rect` 要素には、2 種類以上の塗りつぶし色を使用する必要があります。

**ユーザーストーリー #10:** ある領域にマウスカーソルを合わせると、その領域の詳細情報を表示するための、対応する `id="tooltip"` を持つツールチップが表示されます。

**ユーザーストーリー #11:** 私のツールチップには、アクティブな領域の `data-value` に対応する `data-value` プロパティが必要です。

このプロジェクトでは、以下のいずれかのデータセットを使用できます。

-   **キックスタータープレッジ:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **ムービーセールス:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **ビデオゲームセールス:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">この CodePen テンプレートを使用して</a> あなたのプロジェクトを構築することができます。`Save` をクリックすると、あなた用の pen を作成することができます。 または、下記の CDN リンクを使用して、使い慣れている環境でテストを実行することもできます: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

完了したら、すべてのテストが成功する状態の作業プロジェクトの URL を送信してください。

# --solutions--

```js
// solution required
```
