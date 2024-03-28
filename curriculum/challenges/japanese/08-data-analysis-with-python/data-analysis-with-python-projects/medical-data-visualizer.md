---
id: 5e46f7f8ac417301a38fb92a
title: 医療データの可視化プログラム
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-medical-data-visualizer/" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">「みんなの Python」ビデオコース</a> (14 時間)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Python Pandas でデータを分析する方法</a> (10 時間)

# --instructions--

In this project, you will visualize and make calculations from medical examination data using `matplotlib`, `seaborn`, and `pandas`. データセットの値は診察時に収集されたものです。

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

Create a chart similar to `examples/Figure_1.png`, where we show the counts of good and bad outcomes for the `cholesterol`, `gluc`, `alco`, `active`, and `smoke` variables for patients with `cardio=1` and `cardio=0` in different panels.

`medical_data_visualizer.py` で、データを使用して次のタスクを完了してください。

- データに `overweight` 列を追加します。 overweight (太りすぎ) かどうかを判断するには、まず、体重 (キログラム単位) を身長 (メートル単位) の 2 乗で割って BMI (ボディマス指数) を計算します。 その値が 25 より大きい場合、その人は太りすぎです。 Use the value `0` for NOT overweight and the value `1` for overweight.
- Normalize the data by making `0` always good and `1` always bad. If the value of `cholesterol` or `gluc` is `1`, make the value `0`. If the value is more than `1`, make the value `1`.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using `seaborn`'s `catplot()`. The dataset should be split by `Cardio` so there is one chart for each `cardio` value. `examples/Figure_1.png` のようなグラフを表示する必要があります。
- データをクリーニングします。 正しくないデータを表す次の患者セグメントを除外します。
  - 最低血圧が最高血圧よりも高い (`(df['ap_lo'] <= df['ap_hi'])`) で正しいデータを保持できます)
  - 身長が 2.5 パーセンタイルを下回る (`(df['height'] >= df['height'].quantile(0.025))` で正しいデータを保持できます)
  - 身長が 97.5 パーセンタイルを上回る
  - 体重が 2.5 パーセンタイルを下回る
  - 体重が 97.5 パーセンタイルを上回る
- データセットを使用して相関行列を作成します。 Plot the correlation matrix using `seaborn`'s `heatmap()`. 上側の三角形をマスク処理します。 `examples/Figure_2.png` のようなグラフを表示する必要があります。

変数が `None`に設定された場合は、必ず正しいコードに設定してください。

Unit tests are written for you under `test_module.py`.

## Instructions
By each number in the `medical_data_visualizer.py` file, add the code from the associated instruction number below.

1. Import the data from `medical_examination.csv` and assign it to the `df` variable
2. Create the `overweight` column in the `df` variable
3. Normalize data by making `0` always good and `1` always bad. If the value of `cholesterol` or `gluc` is 1, set the value to `0`. If the value is more than `1`, set the value to `1`.
4. Draw the Categorical Plot in the `draw_cat_plot` function
5. Create a DataFrame for the cat plot using `pd.melt` with values from `cholesterol`, `gluc`, `smoke`, `alco`, `active`, and `overweight` in the `df_cat` variable.
6. Group and reformat the data in `df_cat` to split it by `cardio`. Show the counts of each feature. You will have to rename one of the columns for the `catplot` to work correctly.
7. Convert the data into `long` format and create a chart that shows the value counts of the categorical features using the following method provided by the seaborn library import : `sns.catplot()`
8. Get the figure for the output and store it in the `fig` variable
9. Do not modify the next two lines
10. Draw the Heat Map in the `draw_heat_map` function
11. Clean the data in the `df_heat` variable by filtering out the following patient segments that represent incorrect data:
    - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
    - height is more than the 97.5th percentile
    - weight is less than the 2.5th percentile
    - weight is more than the 97.5th percentile
12. Calculate the correlation matrix and store it in the `corr` variable
13. Generate a mask for the upper triangle and store it in the `mask` variable
14. Set up the `matplotlib` figure
15. Plot the correlation matrix using the method provided by the `seaborn` library import: `sns.heatmap()`
16. Do not modify the next two lines

## 開発

Write your code in `medical_data_visualizer.py`. For development, you can use `main.py` to test your code.

## テスト

The unit tests for this project are in `test_module.py`. すでに `test_module.py` から `main.py` にテストをインポートしてあります。

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
