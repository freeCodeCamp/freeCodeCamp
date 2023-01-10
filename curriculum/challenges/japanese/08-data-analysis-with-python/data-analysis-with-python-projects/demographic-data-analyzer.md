---
id: 5e46f7e5ac417301a38fb929
title: 人口統計データ分析プログラム
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

You will be <a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Replit starter code</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

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

- How many people of each race are represented in this dataset? This should be a Pandas series with race names as the index labels. (`race` column)
- What is the average age of men?
- What is the percentage of people who have a Bachelor's degree?
- What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
- What percentage of people without advanced education make more than 50K?
- What is the minimum number of hours a person works per week?
- What percentage of the people who work the minimum number of hours per week have a salary of more than 50K?
- What country has the highest percentage of people that earn >50K and what is that percentage?
- Identify the most popular occupation for those who earn >50K in India.

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
