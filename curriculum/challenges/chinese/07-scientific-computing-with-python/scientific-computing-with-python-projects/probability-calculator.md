---
id: 5e44414f903586ffb414c950
title: 概率计算器
challengeType: 23
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

假设有一顶帽子，里面有 5 个蓝球、4 个红球和 2 个绿球。 随机抽取的 4 个球中至少包含 1 个红球和 2 个绿球的概率是多少？ 虽然可以使用高等数学来计算概率，但更简单的方法是编写一个程序来执行大量实验来估计近似概率。

对于这个项目，你将编写一个程序来确定从帽子中随机抽取某些球的大致概率。

First, create a `Hat` class in `main.py`. 该类应该采用可变数量的参数来指定帽子中每种颜色的球数。 例如，可以通过以下任何一种方式创建类对象：

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

一顶帽子总是至少有一个球。 创建时传递给 hat 对象的参数应转换为 `contents` 实例变量。 `contents` 应该是一个字符串列表，其中包含帽子中每个球的一个项目。 列表中的每一项都应该是一个颜色名称，代表该颜色的单个球。 例如，如果你的帽子是 `{"red": 2, "blue": 1}`，`contents` 应该是 `["red", "red", "blue"]`。

`Hat` 类应该有一个 `draw` 方法，该方法接受一个参数，该参数指示要从帽子中抽取的球数。 此方法应该从 `contents` 中随机删除球，并将这些球作为字符串列表返回。 在抽取过程中球不应回到帽子中，类似于没有放回的黑盒实验。 如果要抽的球数量超过可用数量，则返回所有球。

Next, create an `experiment` function in `main.py` (not inside the `Hat` class). 此函数应接受以下参数：

- `hat`：一个包含球的帽子对象，应该在函数内复制。
- `expected_balls`：一个对象，指示尝试从帽子中抽取的确切球组以进行实验。 例如，要确定从帽子中抽取 2 个蓝球和 1 个红球的概率，将 `expected_balls` 设置为 `{"blue":2, "red":1}`。
- `num_balls_drawn`：每次实验中从帽子中抽出的球数。
- `num_experiments`：要执行的实验数量。 （进行的实验越多，近似概率就越准确。）

`experiment` 函数应该返回一个概率。

例如，如果你想确定当你从一个包含 6 个黑球、4 个红球和 3 个绿球的帽子中抽出 5 个球时，至少得到 2 个红球和 1 个绿球的概率， 你将进行 `N` 次实验，记录其中你至少得到 2 个红球和 1 个绿球的次数 `M`，并估计概率为 `M/N`。 每个实验都包括从一个装有指定球的帽子开始，抽出几个球，并检查你是否抽到了你试图抽出的球。

以下是基于上面的示例调用 `experiment` 函数的方法，其中包含 2000 个实验：

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

由于这是基于随机抽取的，因此每次运行代码时概率会略有不同。

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
