---
id: bd7168d8c242eddfaeb5bd13
title: 棒グラフでデータを可視化する
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**目標:** こちらと似た機能を持つアプリを構築してください: <a href="https://bar-chart.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://bar-chart.freecodecamp.rocks</a>

下記のユーザーストーリーを満たして、すべてのテストに合格してください。 必要に応じて、どのようなライブラリあるいは API を使用してもかまいません。 あなた独自のスタイルを加えましょう。

HTML、JavaScript、CSS、および D3 の SVG ベースのビジュアライゼーションライブラリを使用できます。 テストでは、軸に沿って自動的に目盛り (tick) を生成する D3 軸プロパティを使用して軸を生成する必要があります。 これらの目盛りは、グラフ化された要素の配置を決定するために使用されるので、D3 テストに合格するために必要です。 軸の生成については、<https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> を参照してください。 必要な (非仮想) DOM 要素は、各テストの時にクエリされます。 フロントエンドフレームワーク (例えば Vue など) を使用した場合、動的なコンテンツではテスト結果が不正確になる可能性があります。 最終的には対応したいと考えていますが、現在の D3 プロジェクトではこれらのフレームワークはサポートされていません。

**ユーザーストーリー #1:** 私のチャートには、タイトルとそれに対応する `id="title"` が必要です。

**ユーザーストーリー #2:** 私のチャートには、`g` 要素の x 軸とそれに対応する `id="x-axis"` が必要です。

**ユーザーストーリー #3:** 私のチャートには、`g` 要素の y 軸とそれに対応する `id="y-axis"` が必要です。

**ユーザー ストーリー#4:** 両軸には、複数の目盛りラベルと、それぞれに対応する `class="tick"` が含まれている必要があります。

**ユーザーストーリー #5:** 私のチャートには、各データポイントに対して、`rect` 要素と、それに対応してデータを表示する `class="bar"` が必要です。

**ユーザーストーリー #6:** 各バーには、`date` 値を格納している `data-date` プロパティと、`GDP` 値を格納している `data-gdp` プロパティが必要です。

**ユーザーストーリー #7:** バー要素の `data-date` プロパティは、提供されたデータの順序と一致する必要があります。

**ユーザーストーリー #8:** バー要素の `data-gdp` プロパティは、提供されたデータの順序と一致する必要があります。

**ユーザーストーリー #9:** 各バーの要素の高さは、そのデータに対応する `GDP` を正確に表す必要があります。

**ユーザーストーリー #10:** `data-date` 属性とそれに対応するバー要素は、x 軸上の対応する値と一致している必要があります。

**ユーザーストーリー #11:** `data-gdp` 属性とそれに対応する bar 要素は、y 軸上の対応する値と一致している必要があります。

**ユーザーストーリー #12:** ある領域にマウスカーソルを合わせると、その領域の詳細情報を表示するための、対応する `id="tooltip"` を持つツールチップが表示されます。

**ユーザーストーリー #13:** 私のツールチップには、アクティブな領域の `data-date` に対応する `data-date` プロパティが必要です。

このプロジェクトを完了するために必要なデータセットはこちらにあります: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">この CodePen テンプレートを使用して</a> あなたのプロジェクトを構築することができます。`Save` をクリックすると、あなた用の pen を作成することができます。 または、下記の CDN リンクを使用して、使い慣れている環境でテストを実行することもできます:`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

完了したら、すべてのテストに合格した作業プロジェクトの URL を送信してください。

# --solutions--

```js
// solution required
```
