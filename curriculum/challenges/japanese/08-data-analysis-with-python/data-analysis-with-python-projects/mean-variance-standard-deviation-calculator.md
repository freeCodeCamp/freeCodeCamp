---
id: 5e46f7e5ac417301a38fb928
title: 平均・分散・標準偏差計算プログラム
challengeType: 10
forumTopicId: 462366
dashedName: mean-variance-standard-deviation-calculator
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-mean-variance-standard-deviation-calculator" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用して取り組んでください</a>。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。


Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">「みんなの Python」動画コース</a> (14 時間)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Python Pandas でデータを分析する方法</a> (10 時間)

# --instructions--

`mean_var_std.py` に `calculate()` という名前の関数を作成してください。この関数は Numpy を使用して、3 x 3 行列の行、列、要素について平均、分散、標準偏差、最大値、最小値、合計を出力します。

関数には 9 つの数字からなるリストを入力する必要があります。 関数は、リストを 3 x 3 の Numpy 配列に変換した後、平均、分散、標準偏差、最大値、最小値、合計を含む辞書を返す必要があり、両方の軸と平坦化された行列も返す必要があります。

返される辞書は次の形式に従う必要があります。

```py
{
  'mean': [axis1, axis2, flattened],
  'variance': [axis1, axis2, flattened],
  'standard deviation': [axis1, axis2, flattened],
  'max': [axis1, axis2, flattened],
  'min': [axis1, axis2, flattened],
  'sum': [axis1, axis2, flattened]
}
```

渡されたリストの要素が 9 つに満たない場合、関数は `ValueError` 例外を生成して、"List must contain nine numbers." (リストには 9 つの数値を含めてください。) というメッセージを表示する必要があります。 返される辞書の値は、Numpy 配列ではなくリストである必要があります。

たとえば、`calculate([0,1,2,3,4,5,6,7,8])` は次を返す必要があります。

```py
{
  'mean': [[3.0, 4.0, 5.0], [1.0, 4.0, 7.0], 4.0],
  'variance': [[6.0, 6.0, 6.0], [0.6666666666666666, 0.6666666666666666, 0.6666666666666666], 6.666666666666667],
  'standard deviation': [[2.449489742783178, 2.449489742783178, 2.449489742783178], [0.816496580927726, 0.816496580927726, 0.816496580927726], 2.581988897471611],
  'max': [[6, 7, 8], [2, 5, 8], 8],
  'min': [[0, 1, 2], [0, 3, 6], 0],
  'sum': [[9, 12, 15], [3, 12, 21], 36]
}
```

このプロジェクトの単体テストは `test_module.py` にあります。

## 開発

開発には `main.py` を使用して `calculate()` 関数をテストすることができます。 「実行」ボタンをクリックすると `main.py` が実行されます。

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
