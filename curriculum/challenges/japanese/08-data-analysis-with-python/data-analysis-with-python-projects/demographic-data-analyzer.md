---
id: 5e46f7e5ac417301a38fb929
title: 人口統計データ分析プログラム
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用して取り組んでください</a>。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。


Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">「みんなの Python」動画コース</a> (14 時間)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Python Pandas でデータを分析する方法</a> (10 時間)

# --instructions--

このチャレンジでは、Pandas を使用して人口統計データを分析します。 1994 年の国勢調査データベースから抽出された人口統計データのデータセットが与えられます。 データの例を次に示します。

```markdown
|    |   age | workclass        |   fnlwgt | education   |   education-num | marital-status     | occupation        | relationship   | race   | sex    |   capital-gain |   capital-loss |   hours-per-week | native-country   | salary   |
|---:|------:|:-----------------|---------:|:------------|----------------:|:-------------------|:------------------|:---------------|:-------|:-------|---------------:|---------------:|-----------------:|:-----------------|:---------|
|  0 |    39 | State-gov        |    77516 | Bachelors   |              13 | Never-married      | Adm-clerical      | Not-in-family  | White  | Male   |           2174 |              0 |               40 | United-States    | <=50K    |
|  1 |    50 | Self-emp-not-inc |    83311 | Bachelors   |              13 | Married-civ-spouse | Exec-managerial   | Husband        | White  | Male   |              0 |              0 |               13 | United-States    | <=50K    |
|  2 |    38 | Private          |   215646 | HS-grad     |               9 | Divorced           | Handlers-cleaners | Not-in-family  | White  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  3 |    53 | Private          |   234721 | 11th        |               7 | Married-civ-spouse | Handlers-cleaners | Husband        | Black  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  4 |    28 | Private          |   338409 | Bachelors   |              13 | Married-civ-spouse | Prof-specialty    | Wife           | Black  | Female |              0 |              0 |               40 | Cuba             | <=50K    |
```

Pandas を使用して次の問いに答える必要があります。

- このデータセットで表現される各人種の人数は何人ですか？ これは、人種名 (`race` 列) をインデックスラベルに持つ Pandas のシリーズとして表現する必要があります。
- 男性の平均年齢は何歳ですか？
- 学士号を取得した人の割合は何パーセントですか？
- 高等教育 (`Bachelors` (学士)、`Masters` (修士)、または `Doctorate` (博士)) を受けた人のうち給料が 50K を超えているのは何パーセントですか？
- 高等教育を受けていない人のうち給料が 50K を超えているのは何パーセントですか？
- 週間労働時間の最小値は何時間ですか？
- 最小の週間労働時間だけ働いている人のうち給料が 50K を超えているのは何パーセントですか？
- >50K (50K を超える額) を稼いでいる人の割合が最も高い国はどこですか？その割合は何パーセントですか？
- インドで >50K を稼いでいる人に最も人気のある職業を特定してください。

ファイル `demographic_data_analyzer` のスターターコードを使用してください。 "None" に設定されているすべての変数が適切な計算またはコードに設定されるように、コードを更新してください。 小数はすべて最も近い小数点以下 1 桁に丸めてください。

`test_module.py` の下に単体テストが記述してあります。

## 開発

開発には `main.py` を使用して関数をテストすることができます。 「実行」ボタンをクリックすると `main.py` が実行されます。

## テスト

すでに `test_module.py` から `main.py` にテストをインポートしてあります。 「実行」ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

## データセットのソース

Dua, D. and Graff, C. (2019). <a href="http://archive.ics.uci.edu/ml" target="_blank" rel="noopener noreferrer nofollow">UCI Machine Learning Repository</a>. Irvine, CA: University of California, School of Information and Computer Science.

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
