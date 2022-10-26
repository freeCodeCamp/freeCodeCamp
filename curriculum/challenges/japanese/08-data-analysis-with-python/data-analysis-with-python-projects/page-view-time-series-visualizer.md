---
id: 5e46f802ac417301a38fb92b
title: ページビュー時系列の可視化プログラム
challengeType: 10
forumTopicId: 462369
dashedName: page-view-time-series-visualizer
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-page-view-time-series-visualizer" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用して取り組んでください</a>。

Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">「みんなで Python」ビデオコース</a> (14 時間)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Python Pandas でデータを分析する方法</a> (10 時間)

# --instructions--

このプロジェクトでは、折れ線グラフ、棒グラフ、ボックスプロットを使用して時系列データを可視化します。 Pandas、Matplotlib、Seabornを使用して、2016 年 5 月 9 日から 2019 年 12 月 3 日までの各日に freeCodeCamp.org フォーラムで発生したページビュー数を含むデータセットを視覚化します。 データを可視化することで、アクセスのパターンを把握し、年ごとおよび月ごとの増加を明らかにすることができます。

データを使用して、次のタスクを完了してください。

- Pandas を使用して "fcc-forum-pageviews.csv" からデータをインポートします。 Set the index to the `date` column.
- データをクリーニングするため、ページビュー数がデータセットの上位 2.5% または下位 2.5% となった日を除外します。
- `draw_line_plot` 関数を作成します。この関数は、Matplotlib を使用して "examples/Figure_1.png" に示すような折れ線グラフを描きます。 The title should be `Daily freeCodeCamp Forum Page Views 5/2016-12/2019`. The label on the x axis should be `Date` and the label on the y axis should be `Page Views`.
- `draw_bar_plot` 関数を作成します。この関数は "examples/Figure_2.png" に示すような棒グラフを描きます。 月ごとの 1 日の平均ページビュー数を表示し、年ごとにグループ化する必要があります。 The legend should show month labels and have a title of `Months`. On the chart, the label on the x axis should be `Years` and the label on the y axis should be `Average Page Views`.
- `draw_box_plot` 関数を作成します。この関数は、Seaborn を使用して "examples/Figure_3.png" に示すような 2 つの隣接するボックスプロットを描きます。 これらのボックスプロットでは、特定の年または月の中で値がどのように分布しているかを示し、経時的に比較できるようにする必要があります。 The title of the first chart should be `Year-wise Box Plot (Trend)` and the title of the second chart should be `Month-wise Box Plot (Seasonality)`. Make sure the month labels on bottom start at `Jan` and the x and y axis are labeled correctly. ボイラープレートには、データを準備するコマンドが含まれています。

グラフごとに、必ずデータフレームのコピーを使用してください。 `test_module.py` の下に単体テストが記述してあります。

このボイラープレートには、画像を保存して返すコマンドも含まれています。

## 開発

開発には `main.py` を使用して関数をテストすることができます。 「実行」ボタンをクリックすると `main.py` が実行されます。

## テスト

すでに `test_module.py` から `main.py` にテストをインポートしてあります。 「実行」ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

# --hints--

すべての Python テストに合格する必要があります。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
