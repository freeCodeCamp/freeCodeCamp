---
id: 5e44414f903586ffb414c950
title: 概率計算器
challengeType: 23
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

假設有一頂帽子，裏面有 5 個藍球、4 個紅球和 2 個綠球。 隨機抽取的 4 個球中至少包含 1 個紅球和 2 個綠球的概率是多少？ 雖然可以使用高等數學來計算概率，但更簡單的方法是編寫一個程序來執行大量實驗來估計近似概率。

對於這個項目，你將編寫一個程序來確定從帽子中隨機抽取某些球的大致概率。

First, create a `Hat` class in `main.py`. 該類應該採用可變數量的參數來指定帽子中每種顏色的球數。 例如，可以通過以下任何一種方式創建類對象：

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

一頂帽子總是至少有一個球。 創建時傳遞給 hat 對象的參數應轉換爲 `contents` 實例變量。 `contents` 應該是一個字符串列表，其中包含帽子中每個球的一個項目。 列表中的每一項都應該是一個顏色名稱，代表該顏色的單個球。 例如，如果你的帽子是 `{"red": 2, "blue": 1}`，`contents` 應該是 `["red", "red", "blue"]`。

`Hat` 類應該有一個 `draw` 方法，該方法接受一個參數，該參數指示要從帽子中抽取的球數。 此方法應該從 `contents` 中隨機刪除球，並將這些球作爲字符串列表返回。 在抽取過程中球不應回到帽子中，類似於沒有放回的黑盒實驗。 如果要抽的球數量超過可用數量，則返回所有球。

Next, create an `experiment` function in `main.py` (not inside the `Hat` class). 此函數應接受以下參數：

- `hat`：一個包含球的帽子對象，應該在函數內複製。
- `expected_balls`：一個對象，指示嘗試從帽子中抽取的確切球組以進行實驗。 例如，要確定從帽子中抽取 2 個藍球和 1 個紅球的概率，將 `expected_balls` 設置爲 `{"blue":2, "red":1}`。
- `num_balls_drawn`：每次實驗中從帽子中抽出的球數。
- `num_experiments`：要執行的實驗數量。 （進行的實驗越多，近似概率就越準確。）

`experiment` 函數應該返回一個概率。

例如，如果你想確定當你從一個包含 6 個黑球、4 個紅球和 3 個綠球的帽子中抽出 5 個球時，至少得到 2 個紅球和 1 個綠球的概率， 你將進行 `N` 次實驗，記錄其中你至少得到 2 個紅球和 1 個綠球的次數 `M`，並估計概率爲 `M/N`。 每個實驗都包括從一個裝有指定球的帽子開始，抽出幾個球，並檢查你是否抽到了你試圖抽出的球。

以下是基於上面的示例調用 `experiment` 函數的方法，其中包含 2000 個實驗：

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

由於這是基於隨機抽取的，因此每次運行代碼時概率會略有不同。

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
