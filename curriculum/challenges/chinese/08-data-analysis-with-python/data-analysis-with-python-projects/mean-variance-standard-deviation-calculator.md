---
id: 5e46f7e5ac417301a38fb928
title: 均值-方差-标准差 计算器
challengeType: 10
forumTopicId: 462366
dashedName: mean-variance-standard-deviation-calculator
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-mean-variance-standard-deviation-calculator" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 YouTube 上通过 freeCodeCamp.org 上传的一些视频学习这个项目相关的知识。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

在 `mean_var_std.py` 中创建一个名为 `calculate()` 的函数，该函数使用 Numpy 输出行、列、和 3 x 3 矩阵中的元素。

函数的输入应该是一个包含 9 个数字的列表。 该函数应将列表转换为 3 x 3 Numpy 数组，然后返回一个字典，其中包含沿两个轴和展平矩阵的均值、方差、标准差、最大值、最小值和总和。

返回的字典应遵循以下格式：

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

如果将包含少于 9 个元素的列表传递给函数，它应该引发 `ValueError` 异常并显示消息：“List must contain nine numbers.” 返回的字典中的值应该是列表而不是 Numpy 数组。

例如，`calculate([0,1,2,3,4,5,6,7,8])` 应该返回：

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

此项目的单元测试在 `test_module.py` 中。

## 开发

对于开发，你可以使用 `main.py` 来测试你的 `calculate()` 函数。 单击“运行”按钮，`main.py` 将运行。

## 测试

为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

## 提交

复制项目的 URL 并将其提交给 freeCodeCamp。

# --hints--

它应该通过所有的 Python 测试。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
