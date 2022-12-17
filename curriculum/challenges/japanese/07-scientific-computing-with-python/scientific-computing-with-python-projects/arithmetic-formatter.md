---
id: 5e44412c903586ffb414c94c
title: 計算の縦書き整形プログラム
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用します</a>。

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

小学校の算数では計算問題を解きやすくするために縦書きにすることが多くあります。 たとえば「235 + 52」を次のように記述します。

```py
  235
+  52
-----
```

計算問題を表す文字列のリストを受け取り、問題を縦書きに整形して返す関数を作成してください。 この関数はオプションで第 2 引数を受け取れるようにしてください。 第 2 引数が `True` に設定されている場合は、解答を表示する必要があります。

## 例

関数呼び出し:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

出力:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

関数呼び出し:

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

出力:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## ルール

入力された問題が正しく整形されている場合、この関数は正しい変換結果を返します。それ以外の場合は、ユーザーにとって意味のあるエラーを記述した**文字列****を返します**。


- Situations that will return an error:
  - If there are **too many problems** supplied to the function. The limit is **five**, anything more will return: `Error: Too many problems.`
  - The appropriate operators the function will accept are **addition** and **subtraction**. Multiplication and division will return an error. Other operators not mentioned in this bullet point will not need to be tested. The error returned will be: `Error: Operator must be '+' or '-'.`
  - Each number (operand) should only contain digits. Otherwise, the function will return: `Error: Numbers must only contain digits.`
  - Each operand (aka number on each side of the operator) has a max of four digits in width. Otherwise, the error string returned will be: `Error: Numbers cannot be more than four digits.`
- If the user supplied the correct format of problems, the conversion you return will follow these rules:
  - There should be a single space between the operator and the longest of the two operands, the operator will be on the same line as the second operand, both operands will be in the same order as provided (the first will be the top one and the second will be the bottom).
  - Numbers should be right-aligned.
  - There should be four spaces between each problem.
  - There should be dashes at the bottom of each problem. The dashes should run along the entire length of each problem individually. (The example above shows what this should look like.)

## 開発

`arithmetic_arranger.py` にコードを記述してください。 開発時には `main.py` を使用して `arithmetic_arranger()` 関数をテストできます。 「Run」ボタンをクリックすると `main.py` が実行されます。

## テスト

このプロジェクトの単体テストは `test_module.py` にあります。 `test_module.py` のテストを `main.py` で実行できるようになっています。 「Run」ボタンを押すと自動的にテストが実行されます。 または、コンソールに `pytest` と入力してテストを実行することもできます。

## 提出

プロジェクトの URL をコピーし、下記に提出してください。

# --hints--

計算問題を正しく整形し、すべてのテストを成功させる必要があります。

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
