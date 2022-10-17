---
id: 5e4f5c4b570f7e3a4949899f
title: 海面水位の予測プログラム
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

You will be <a href="https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Replit starter code</a>.

Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

1880 年以降の世界的な平均海面変化のデータセットを分析します。 データを使用して、2050 年までの海面の変化を予測します。

データを使用して、次のタスクを完了してください。

- Pandas を使用して `epa-sea-level.csv` からデータをインポートします。
- Use matplotlib to create a scatter plot using the `Year` column as the x-axis and the `CSIRO Adjusted Sea Level` column as the y-axix.
- `scipy.stats` の `linregress` 関数を使用して、最も良く当てはまる線の傾きと y 切片を得ます。 散布図の上に最良の当てはめ線 (回帰直線) を描きます。 線を 2050 年まで伸ばし、2050 年の海面上昇を予測します。
- データセットにある 2000 年から最新年までのデータを使用し、新しい最良の当てはめ線をプロットします。 線を 2050 年まで伸ばし、2000 年以降の上昇率が続くと仮定した場合の 2050 年の海面上昇を予測します。
- The x label should be `Year`, the y label should be `Sea Level (inches)`, and the title should be `Rise in Sea Level`.

`test_module.py` の下に単体テストが記述してあります。

このボイラープレートには、画像を保存して返すコマンドも含まれています。

## 開発

開発には `main.py` を使用して関数をテストすることができます。 「実行」ボタンをクリックすると `main.py` が実行されます。

## テスト

すでに `test_module.py` から `main.py` にテストをインポートしてあります。 「実行」ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

## データのソース

<a href="https://datahub.io/core/sea-level-rise" target="_blank" rel="noopener noreferrer nofollow">Global Average Absolute Sea Level Change</a>, 1880-2014 from the US Environmental Protection Agency using data from CSIRO, 2015; NOAA, 2015.


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
