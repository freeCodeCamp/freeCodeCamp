---
id: 5e44414f903586ffb414c950
title: 概率计算器
challengeType: 10
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-probability-calculator" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。


# --instructions--

假设有一顶帽子，里面有 5 个蓝球、4 个红球和 2 个绿球。 随机抽取的 4 个球中至少包含 1 个红球和 2 个绿球的概率是多少？ 虽然可以使用高等数学来计算概率，但更简单的方法是编写一个程序来执行大量实验来估计近似概率。

对于这个项目，你将编写一个程序来确定从帽子中随机抽取某些球的大致概率。

首先，在`prob_calculator.py` 中创建一个`Hat` 类。 该类应该采用可变数量的参数来指定帽子中每种颜色的球数。 例如，可以通过以下任何一种方式创建类对象：

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

一顶帽子总是至少有一个球。 创建时传递给 hat 对象的参数应转换为 `contents` 实例变量。 `contents` 应该是一个字符串列表，其中包含帽子中每个球的一个项目。 列表中的每一项都应该是一个颜色名称，代表该颜色的单个球。 例如，如果你的帽子是 `{"red": 2, "blue": 1}`，`contents` 应该是 `["red", "red", "blue"]`。

`Hat` 类应该有一个 `draw` 方法，该方法接受一个参数，该参数指示要从帽子中抽取的球数。 此方法应该从 `contents` 中随机删除球，并将这些球作为字符串列表返回。 在抽取过程中球不应回到帽子中，类似于没有放回的黑盒实验。 如果要抽的球数量超过可用数量，则返回所有球。

接下来，在 `prob_calculator.py`（不是在 `Hat` 类中）创建一个 `experiment` 函数。 此函数应接受以下参数：

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

由于这是基于随机抽取的，因此每次运行代码时概率会略有不同。

*提示：考虑使用已经在 `prob_calculator.py` 顶部导入的模块。 不要在 `prob_calculator.py` 中初始化随机种子。*

## 开发

在 `prob_calculator.py` 中编写你的代码。 对于开发，你可以使用 `main.py` 来测试你的代码。 单击“运行”按钮，`main.py` 将运行。

样板文件包括 `copy` 和 `random` 模块的 `import` 语句。 考虑在你的项目中使用它们。

## 测试

这个项目的单元测试在 `test_module.py` 中。 为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

## 提交

复制项目的 URL 并将其提交给 freeCodeCamp。

# --hints--

它应该能正确地计算概率，并通过所有测试。

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
