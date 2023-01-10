---
id: 5e46f7f8ac417301a38fb92a
title: 医療データの可視化プログラム
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

You will be <a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Replit starter code</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

このプロジェクトでは、Matplotlib、Seaborn、Pandas を使用して診察データを可視化し、計算を行います。 データセットの値は診察時に収集されたものです。

## データの説明

データセットの行は患者を表し、列は身体の測定値、さまざまな血液検査の結果、生活習慣の選択などの情報を表します。 このデータセットを使用して、心臓疾患、身体測定値、血液指標値、生活習慣の選択について、それらの間の関係を調べます。

ファイル名: medical_examination.csv

|                            特徴                            | 変数のタイプ |      変数       |             値のタイプ              |
|:--------------------------------------------------------:|:------:|:-------------:|:------------------------------:|
|                         Age (年齢)                         | 客観的特徴  |     `age`     |            int (日数)            |
|                       Height (身長)                        | 客観的特徴  |   `height`    |            int (cm)            |
|                       Weight (体重)                        | 客観的特徴  |   `weight`    |           float (kg)           |
|                       Gender (性別)                        | 客観的特徴  |   `gender`    |            カテゴリコード             |
|              Systolic blood pressure (最高血圧)              | 検査の特徴  |    `ap_hi`    |              int               |
|             Diastolic blood pressure (最低血圧)              | 検査の特徴  |    `ap_lo`    |              int               |
|                  Cholesterol (コレステロール値)                  | 検査の特徴  | `cholesterol` | 1: 正常値、2: 正常値より高い、3: 正常値を優に超える |
|                      Glucose (血糖値)                       | 検査の特徴  |    `gluc`     | 1: 正常値、2: 正常値より高い、3: 正常値を優に超える |
|                       Smoking (喫煙)                       | 主観的特徴  |    `smoke`    |             binary             |
|                 Alcohol intake (アルコール摂取)                 | 主観的特徴  |    `alco`     |             binary             |
|                Physical activity (身体活動状況)                | 主観的特徴  |   `active`    |             binary             |
| Presence or absence of cardiovascular disease (心血管疾患の有無) | 目的の変数  |   `cardio`    |             binary             |

## タスク

`examples/Figure_1.png` のようなグラフを作成してください。この例では、患者の `cholesterol`、`gluc`、`alco`、`active`、`smoke` について良い結果と悪い結果の数を示し、cardio=1 の場合と cardio=0 の場合を別々のパネルに表示しています。

`medical_data_visualizer.py` で、データを使用して次のタスクを完了してください。

- Add an `overweight` column to the data. To determine if a person is overweight, first calculate their BMI by dividing their weight in kilograms by the square of their height in meters. If that value is > 25 then the person is overweight. Use the value 0 for NOT overweight and the value 1 for overweight.
- Normalize the data by making 0 always good and 1 always bad. If the value of `cholesterol` or `gluc` is 1, make the value 0. If the value is more than 1, make the value 1.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using seaborn's `catplot()`. The dataset should be split by 'Cardio' so there is one chart for each `cardio` value. The chart should look like `examples/Figure_1.png`.
- Clean the data. Filter out the following patient segments that represent incorrect data:
  - diastolic pressure is higher than systolic (Keep the correct data with `(df['ap_lo'] <= df['ap_hi'])`)
  - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
  - height is more than the 97.5th percentile
  - weight is less than the 2.5th percentile
  - weight is more than the 97.5th percentile
- Create a correlation matrix using the dataset. Plot the correlation matrix using seaborn's `heatmap()`. Mask the upper triangle. The chart should look like `examples/Figure_2.png`.

変数が `None`に設定された場合は、必ず正しいコードに設定してください。

`test_module.py` の下に単体テストが記述してあります。

## 開発

開発には `main.py` を使用して関数をテストすることができます。 「実行」ボタンをクリックすると `main.py` が実行されます。

## テスト

すでに `test_module.py` から `main.py` にテストをインポートしてあります。 「実行」ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

# --hints--

すべての Python テストが成功する必要があります。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
