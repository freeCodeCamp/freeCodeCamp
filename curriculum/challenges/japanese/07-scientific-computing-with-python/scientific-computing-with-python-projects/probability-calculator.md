---
id: 5e44414f903586ffb414c950
title: 確率計算プログラム
challengeType: 10
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-probability-calculator" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用します</a>。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。


# --instructions--

帽子があり、その中に青いボールが 5 個、赤いボールが 4 個、緑のボールが 2 個入っているとします。 4 個のボールを無作為に取り出す場合、赤のボールが 1 個以上、緑のボールが 2 個含まれる確率は、いくらになりますか？ 高度な数学を駆使して確率を計算することも可能ですが、試行を多数繰り返しておおよその確率を推定するプログラムを記述する方が簡単です。

このプロジェクトでは、特定のボールを帽子から無作為に取り出す場合のおおよその確率を測定するプログラムを記述します。

まず、`prob_calculator.py` で `Hat` クラスを作成してください。 このクラスは、帽子に入っている各色のボールの数を指定する可変個の引数を受け取る必要があります。 たとえば、次のどの方法でもクラスオブジェクトを作成することができます。

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

帽子は常に、少なくとも 1 個のボールが入った状態で作成されます。 帽子オブジェクトの作成時に渡された引数を、`contents` インスタンス変数に変換する必要があります。 `contents` は、帽子に入っているボールごとに要素を 1 つずつ含む文字列のリストである必要があります。 リスト内の各要素は色の名前であり、その色のボール 1 個を表します。 たとえば、帽子が `{"red": 2, "blue": 1}` で表される場合、`contents` は `["red", "red", "blue"]` となる必要があります。

`Hat` クラスには `draw` メソッドが必要です。このメソッドは、帽子から取り出すボールの個数を示す引数を受け取ります。 draw メソッドは、`contents` からボールを無作為に取り除き、それらのボールを文字列のリストとして返します。 元に戻さないタイプの「壺問題」と同様に、取り出したボールは帽子に戻さないものとします。 取り出すボールの数が取り出せる数を超える場合は、すべてのボールを返してください。

次に、(`Hat` クラスの中ではなく) `prob_calculator.py` で `experiment` 関数を作成してください。 この関数は次の引数を受け取る必要があります。

- `hat`: 関数内でコピーする必要のあるボールを含む帽子オブジェクト。
- `expected_balls`: 試行で帽子から取り出そうとするボールの正確なグループを示すオブジェクト。 たとえば、青のボール 2 個と赤のボール 1 個を帽子から取り出す確率を調べるには、`expected_balls` を `{"blue":2, "red":1}` に設定します。
- `num_balls_drawn`: 各試行で帽子から取り出すボールの数。
- `num_experiments`: 実行する試行の回数 (試行の回数が多いほど、おおよその確率の正確性が高まります)。

`experiment` 関数は、確率を返す必要があります。

たとえば、黒を 6 個、赤を 4 個、緑を 3 個含む帽子から 5 個のボールを取り出す場合に、赤のボールが少なくとも 2 個、緑のボールが少なくとも 1 個含まれる確率を求めたいとしましょう。 それには、試行を `N` 回行い、赤のボールが少なくとも 2 個、緑のボールが少なくとも 1 個になった回数 `M` を数え、確率を `M/N` として推定します。 各回の試行ではそれぞれ、指定されたボールの入った帽子の状態から始め、いくつかのボールを取り出し、期待されるボールを取り出したかどうかを確認します。

上記の例で 2000 回の実験を行う場合は、`experiment` 関数を次のように呼び出します。

```py
hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={"red":2,"green":1},
                  num_balls_drawn=5,
                  num_experiments=2000)
```

この方法は無作為抽出に基づいているため、コードが実行されるたびに確率が多少変わります。

*ヒント: `prob_calculator.py` の先頭ですでにインポートされているモジュールを使用することを検討してください。 `prob_calculator.py` の中で乱数シードを初期化しないでください。*

## 開発

`prob_calculator.py` でコードを記述してください。 開発には `main.py` を使用してコードをテストすることができます。 「Run」ボタンをクリックすると `main.py` が実行されます。

ボイラープレートには `copy` モジュールと `random` モジュール用の `import` ステートメントが含まれています。 これらをプロジェクトで使用することを検討してください。

## テスト

このプロジェクトの単体テストは `test_module.py` にあります。 すでに `test_module.py` から `main.py` にテストをインポートしてあります。 「Run」ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

# --hints--

確率を正しく計算し、すべてのテストを成功させる必要があります。

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
