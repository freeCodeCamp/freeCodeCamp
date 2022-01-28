---
id: 5e46f802ac417301a38fb92b
title: ページビュー時系列の可視化プログラム
challengeType: 10
forumTopicId: 462369
dashedName: page-view-time-series-visualizer
---

# --description--

このプロジェクトは [Replit スターターコード](https://replit.com/github/freeCodeCamp/boilerplate-page-view-time-series-visualizer)を使用して作業を行います。

Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- [「みんなで Python」ビデオコース](https://www.freecodecamp.org/news/python-for-everybody/) (14 時間)
- [「Python を学ぶ」ビデオコース](https://www.freecodecamp.org/news/learn-python-video-course/) (10 時間)

# --instructions--

このプロジェクトでは、折れ線グラフ、棒グラフ、ボックスプロットを使用して時系列データを可視化します。 Pandas、Matplotlib、Seabornを使用して、2016 年 5 月 9 日から 2019 年 12 月 3 日までの各日に freeCodeCamp.org フォーラムで発生したページビュー数を含むデータセットを視覚化します。 データを可視化することで、アクセスのパターンを把握し、年ごとおよび月ごとの増加を明らかにすることができます。

データを使用して、次のタスクを完了してください。

- Pandas を使用して "fcc-forum-pageviews.csv" からデータをインポートします。 インデックスとして "date" 列を設定します。
- データをクリーニングするため、ページビュー数がデータセットの上位 2.5% または下位 2.5% となった日を除外します。
- `draw_line_plot` 関数を作成します。この関数は、Matplotlib を使用して "examples/Figure_1.png" に示すような折れ線グラフを描きます。 タイトルは "Daily freeCodeCamp Forum Page Views 5/2016-12/2019" とします。 x 軸のラベルを "Date"、y 軸のラベルを "Page Views" とします。
- `draw_bar_plot` 関数を作成します。この関数は "examples/Figure_2.png" に示すような棒グラフを描きます。 月ごとの 1 日の平均ページビュー数を表示し、年ごとにグループ化する必要があります。 凡例には月のラベルを表示し、タイトルを "Months" とします。 グラフの x 軸のラベルを "Years"、y 軸のラベルを "Average Page Views" とします。
- Create a `draw_box_plot` function that uses Seaborn to draw two adjacent box plots similar to "examples/Figure_3.png". これらのボックスプロットでは、特定の年または月の中で値がどのように分布しているかを示し、経時的に比較できるようにする必要があります。 最初のグラフのタイトルを "Year-wise Box Plot (Trend)"、2 つ目のグラフのタイトルを "Month-wise Box Plot (Seasonality)" とします。 一番下の月ラベルの始まりを "Jan" とし、x および x 軸のラベルを正しく設定する必要があります。 ボイラープレートには、データを準備するコマンドが含まれています。

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
