---
id: 587d7fa6367417b2b2512bbf
title: 階級区分図でデータを可視化する
challengeType: 3
forumTopicId: 301465
dashedName: visualize-data-with-a-choropleth-map
---

# --description--

**目標:** <https://codepen.io/freeCodeCamp/full/EZKqza> と同様の機能を持つ [CodePen.io](https://codepen.io) アプリを構築します。

以下の[ユーザーストーリー](https://en.wikipedia.org/wiki/User_story)を達成して、すべてのテストに合格してください。 あなたの独自のスタイルにしましょう。

HTML、JavaScript、CSS、および D3 の SVG ベースのビジュアライゼーションライブラリを使用できます。 必要な (非仮想) DOM 要素は、各テストの時にクエリされます。 フロントエンドフレームワーク (例えば Vue など) を使用した場合、動的なコンテンツではテスト結果が不正確になる可能性があります。 最終的には対応したいと考えていますが、現在の D3 プロジェクトではこれらのフレームワークはサポートされていません。

**ユーザーストーリー #1:** 私のコロプレスには、タイトルとそれに対応する `id="title"` が必要です。

**ユーザーストーリー #2:** 私のコロプレスには、説明要素とそれに対応する `id="description"` が必要です。

**ユーザーストーリー #3:** 私のコロプレスには、郡と、それに対応してデータを表す `class="county"` が必要です。

**ユーザーストーリー #4:** 郡の塗りつぶしに使用する色が 4 種類以上必要です。

**ユーザーストーリー #5:** 私の各郡には、対応する `fips` 値を格納している `data-fips` プロパティと、`education` 値を格納している `data-education` プロパティが必要です。

**ユーザーストーリー #6:** 私のコロプレスには、提供された各データポイントに対して 1 つの郡が必要です。

**ユーザーストーリー #7:** 郡には、サンプルデータと一致する `data-fips` 値と `data-education` 値が必要です。

**ユーザーストーリー #8:** 私のコロプレスには、凡例とそれに対応する `id="legend"` が必要です。

**ユーザーストーリー #9:** 凡例を塗りつぶすのに使用する 4 種類以上の色が必要です。

**ユーザーストーリー #10:** ある領域にマウスカーソルを合わせると、その領域の詳細情報を表示するための、対応する `id="tooltip"` を持つツールチップが表示されます。

**ユーザーストーリー #11:** 私のツールチップには、アクティブな領域の `data-education` に対応する `data-education` プロパティが必要です。

このプロジェクトを完了するために必要なデータセットはこちらにあります:

-   **米国の教育データ: **`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
-   **米国の郡データ:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

プロジェクトを構築するには、<a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>こちらの CodePen テンプレート</a>を使用し、`Save` をクリックして独自のペンを作成します。 または、下記の CDN リンクを使用して、使い慣れている環境でテストを実行することもできます:`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

完了したら、すべてのテストに合格した作業プロジェクトの URL を送信してください。

# --solutions--

```js
// solution required
```
