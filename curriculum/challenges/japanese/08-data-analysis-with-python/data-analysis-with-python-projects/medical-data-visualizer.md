---
id: 5e46f7f8ac417301a38fb92a
title: 医療データの可視化プログラム
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用して取り組んでください</a>。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。


Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">「みんなの Python」動画コース</a> (14 時間)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Python Pandas でデータを分析する方法</a> (10 時間)

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

- データに `overweight` 列を追加します。 overweight (太りすぎ) かどうかを判断するには、まず、体重 (キログラム単位) を身長 (メートル単位) の 2 乗で割って BMI (ボディマス指数) を計算します。 その値が 25 より大きい場合、その人は太りすぎです。 太りすぎではない場合は値 0 を使用し、太りすぎの場合は値 1 を使用します。
- 0 を常に良とし、1 を常に悪としてデータを正規化します。 `cholesterol` または `gluc` の値が 1 の場合は、この値を 0 にします。 値が 1 より大きい場合は、値を 1 とします。
- データをロング形式 (long-form) に変換し、seabornの `catplot()` を使用して、カテゴリ特徴の値の数を示すグラフを作成します。 データセットは 'Cardio' 別に分割し、`cardio` の値ごとに 1 つずつグラフを作成します。 `examples/Figure_1.png` のようなグラフを表示する必要があります。
- データをクリーニングします。 正しくないデータを表す次の患者セグメントを除外します。
  - 最低血圧が最高血圧よりも高い (`(df['ap_lo'] <= df['ap_hi'])`) で正しいデータを保持できます)
  - 身長が 2.5 パーセンタイルを下回る (`(df['height'] >= df['height'].quantile(0.025))` で正しいデータを保持できます)
  - 身長が 97.5 パーセンタイルを上回る
  - 体重が 2.5 パーセンタイルを下回る
  - 体重が 97.5 パーセンタイルを上回る
- データセットを使用して相関行列を作成します。 seabornの `heatmap()` を使用して相関行列をプロットします。 上側の三角形をマスク処理します。 `examples/Figure_2.png` のようなグラフを表示する必要があります。

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
