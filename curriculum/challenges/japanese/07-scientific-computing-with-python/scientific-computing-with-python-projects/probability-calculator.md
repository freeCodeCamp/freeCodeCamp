---
id: 5e44414f903586ffb414c950
title: 確率計算プログラム
challengeType: 10
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-probability-calculator" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用します</a>。

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

Suppose there is a hat containing 5 blue balls, 4 red balls, and 2 green balls. What is the probability that a random draw of 4 balls will contain at least 1 red ball and 2 green balls? While it would be possible to calculate the probability using advanced mathematics, an easier way is to write a program to perform a large number of experiments to estimate an approximate probability.

For this project, you will write a program to determine the approximate probability of drawing certain balls randomly from a hat.

First, create a `Hat` class in `prob_calculator.py`. The class should take a variable number of arguments that specify the number of balls of each color that are in the hat. For example, a class object could be created in any of these ways:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

A hat will always be created with at least one ball. The arguments passed into the hat object upon creation should be converted to a `contents` instance variable. `contents` should be a list of strings containing one item for each ball in the hat. Each item in the list should be a color name representing a single ball of that color. For example, if your hat is `{"red": 2, "blue": 1}`, `contents` should be `["red", "red", "blue"]`.

The `Hat` class should have a `draw` method that accepts an argument indicating the number of balls to draw from the hat. This method should remove balls at random from `contents` and return those balls as a list of strings. The balls should not go back into the hat during the draw, similar to an urn experiment without replacement. If the number of balls to draw exceeds the available quantity, return all the balls.

次に、(`Hat` クラスの中ではなく) `prob_calculator.py` で `experiment` 関数を作成してください。 この関数は次の引数を受け取る必要があります。

- `hat`: A hat object containing balls that should be copied inside the function.
- `expected_balls`: An object indicating the exact group of balls to attempt to draw from the hat for the experiment. For example, to determine the probability of drawing 2 blue balls and 1 red ball from the hat, set `expected_balls` to `{"blue":2, "red":1}`.
- `num_balls_drawn`: The number of balls to draw out of the hat in each experiment.
- `num_experiments`: The number of experiments to perform. (The more experiments performed, the more accurate the approximate probability will be.)

`experiment` 関数は、確率を返す必要があります。

For example, if you want to determine the probability of getting at least two red balls and one green ball when you draw five balls from a hat containing six black, four red, and three green. To do this, you will perform `N` experiments, count how many times `M` you get at least two red balls and one green ball, and estimate the probability as `M/N`. Each experiment consists of starting with a hat containing the specified balls, drawing several balls, and checking if you got the balls you were attempting to draw.

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

`prob_calculator.py` でコードを記述してください。 開発には `main.py` を使用してコードをテストすることができます。 Click the "run" button and `main.py` will run.

ボイラープレートには `copy` モジュールと `random` モジュール用の `import` ステートメントが含まれています。 これらをプロジェクトで使用することを検討してください。

## テスト

このプロジェクトの単体テストは `test_module.py` にあります。 We imported the tests from `test_module.py` to `main.py` for your convenience. The tests will run automatically whenever you hit the "run" button.

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
