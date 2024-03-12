---
id: 5e44414f903586ffb414c950
title: 確率計算プログラム
challengeType: 23
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

帽子があり、その中に青いボールが 5 個、赤いボールが 4 個、緑のボールが 2 個入っているとします。 4 個のボールを無作為に取り出す場合、赤のボールが 1 個以上、緑のボールが 2 個含まれる確率は、いくらになりますか？ 高度な数学を駆使して確率を計算することも可能ですが、試行を多数繰り返しておおよその確率を推定するプログラムを記述する方が簡単です。

このプロジェクトでは、特定のボールを帽子から無作為に取り出す場合のおおよその確率を測定するプログラムを記述します。

First, create a `Hat` class in `main.py`. このクラスは、帽子に入っている各色のボールの数を指定する可変個の引数を受け取る必要があります。 たとえば、次のどの方法でもクラスオブジェクトを作成することができます。

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

帽子は常に、少なくとも 1 個のボールが入った状態で作成されます。 帽子オブジェクトの作成時に渡された引数を、`contents` インスタンス変数に変換する必要があります。 `contents` は、帽子に入っているボールごとに要素を 1 つずつ含む文字列のリストである必要があります。 リスト内の各要素は色の名前であり、その色のボール 1 個を表します。 たとえば、帽子が `{"red": 2, "blue": 1}` で表される場合、`contents` は `["red", "red", "blue"]` となる必要があります。

`Hat` クラスには `draw` メソッドが必要です。このメソッドは、帽子から取り出すボールの個数を示す引数を受け取ります。 draw メソッドは、`contents` からボールを無作為に取り除き、それらのボールを文字列のリストとして返します。 元に戻さないタイプの「壺問題」と同様に、取り出したボールは帽子に戻さないものとします。 取り出すボールの数が取り出せる数を超える場合は、すべてのボールを返してください。

Next, create an `experiment` function in `main.py` (not inside the `Hat` class). この関数は次の引数を受け取る必要があります。

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

The output would be something like this:

```bash
>>> 0.356
```

この方法は無作為抽出に基づいているため、コードが実行されるたびに確率が多少変わります。

_Hint: Consider using the modules that are already imported at the top. Do not initialize random seed within the file._


# --hints--

Creation of `hat` object should add correct contents.

```js
({
  test: () => {
    pyodide.FS.writeFile("/home/pyodide/probability_calculator.py", code);
    pyodide.FS.writeFile(
      "/home/pyodide/test_module.py",
      `
import unittest
import probability_calculator
from importlib import reload

reload(probability_calculator)

probability_calculator.random.seed(95)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_hat_class_contents(self):
        hat = probability_calculator.Hat(red=3,blue=2)
        actual = hat.contents
        expected = ["red","red","red","blue","blue"]
        self.assertEqual(actual, expected, 'Expected creation of hat object to add correct contents.')
        `
    );
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  },
});
```

The `draw` method in `hat` class should reduce number of items in contents.


```js
({
  test: () => {
    pyodide.FS.writeFile("/home/pyodide/probability_calculator.py", code);
    pyodide.FS.writeFile(
      "/home/pyodide/test_module.py",
      `
import unittest
import probability_calculator
from importlib import reload

reload(probability_calculator)

probability_calculator.random.seed(95)
def test_hat_draw(self):
        hat = probability_calculator.Hat(red=5,blue=2)
        actual = hat.draw(2)
        expected = ['blue', 'red']
        self.assertEqual(actual, expected, 'Expected hat draw to return two random items from hat contents.')
        actual = len(hat.contents)
        expected = 5
        self.assertEqual(actual, expected, 'Expected hat draw to reduce number of items in contents.')
        `
    );
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  },
});
```

The `experiment` method should return a different probability.


```js
({
  test: () => {
    pyodide.FS.writeFile("/home/pyodide/probability_calculator.py", code);
    pyodide.FS.writeFile(
      "/home/pyodide/test_module.py",
      `
import unittest
import probability_calculator
from importlib import reload

reload(probability_calculator)

probability_calculator.random.seed(95)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_prob_experiment(self):
        hat = probability_calculator.Hat(blue=3,red=2,green=6)
        probability = probability_calculator.experiment(hat=hat, expected_balls={"blue":2,"green":1}, num_balls_drawn=4, num_experiments=1000)
        actual = probability
        expected = 0.272
        self.assertAlmostEqual(actual, expected, delta = 0.01, msg = 'Expected experiment method to return a different probability.')
        hat = probability_calculator.Hat(yellow=5,red=1,green=3,blue=9,test=1)
        probability = probability_calculator.experiment(hat=hat, expected_balls={"yellow":2,"blue":3,"test":1}, num_balls_drawn=20, num_experiments=100)
        actual = probability
        expected = 1.0
        self.assertAlmostEqual(actual, expected, delta = 0.01, msg = 'Expected experiment method to return a different probability.')
        `
    );
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  },
});
```

# --seed--

## --seed-contents--

```py
import copy
import random

class Hat:
    pass

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    pass
```

# --solutions--

```py
import copy
import random

class Hat:
    def __init__(self, **hat):
        self.hat = hat
        contents = []
        for i in hat:
            for j in range(hat[i]):
                contents.append(i)           
        self.contents = contents


    def draw(self, number): 
        drawn = []
        if number >= len(self.contents):
            return self.contents
        else:
            for i in range(number):
                drawn.append(
                    self.contents.pop(random.randrange(len(self.contents)))
                )                
        return drawn

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):

    expected_balls_list = []
    drawn_list = []
    success = 0
    for i in expected_balls:
        for j in range(expected_balls[i]):
            expected_balls_list.append(i)
    for j in range(num_experiments):
        hat_copy = copy.deepcopy(hat)
        drawn_list.append(hat_copy.draw(num_balls_drawn))        
        exp_ball_list_copy = expected_balls_list[:]
        for k in range(len(drawn_list[j])):
            try:
                ind = exp_ball_list_copy.index(drawn_list[j][k])
                exp_ball_list_copy.pop(ind)
            except:
                continue
        if len(exp_ball_list_copy) == 0:
            success += 1




    probability = success/num_experiments

    return probability
```
