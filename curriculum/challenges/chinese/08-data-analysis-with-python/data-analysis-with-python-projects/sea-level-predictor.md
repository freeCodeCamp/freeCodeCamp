---
id: 5e4f5c4b570f7e3a4949899f
title: 海平面预报器
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

你将通过使用我们的[Replit 入门代码](https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor)来完成本项目。

我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 YouTube 上通过 freeCodeCamp.org 上传的一些视频学习这个项目相关的知识。

- [Python for Everybody 视频课程](https://www.freecodecamp.org/news/python-for-everybody/)（14 小时）
- [Learn Python 视频课程](https://www.freecodecamp.org/news/learn-python-video-course/)（10 小时）

# --instructions--

你将分析自 1880 年以来全球平均海平面变化的数据集。 你将使用这些数据来预测到 2050 年的海平面变化。

使用数据完成以下任务：

- 使用 Pandas 从 `epa-sea-level.csv` 导入数据。
- 使用 matplotlib 创建散点图，使用“Year”列作为 x 轴，将“CSIRO Adjusted Sea Level”列作为 y 轴。
- 使用 `scipy.stats` 中的 `linregress` 函数来获得最佳拟合线的斜率和 y 截距。 在散点图的顶部绘制最佳拟合线。 使线穿过 2050 年以预测 2050 年的海平面上升。
- 仅使用数据集中从 2000 年到最近一年的数据绘制一条新的最佳拟合线。 如果上升速度继续与 2000 年一样，则使该线也经过 2050 年以预测 2050 年的海平面上升。
- x 标签应为 “Year”，y 标签应为 “Sea Level (inches)”，标题应为 “Rise in Sea Level”。

单元测试是在 `test_module.py` 下为你编写的。

样板文件还包括保存和返回图像的命令。

## 开发

对于开发，你可以使用 `main.py` 来测试你的函数。 单击“运行”按钮，`main.py` 将运行。

## 测试

为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

## 提交

复制项目的 URL 并将其提交给 freeCodeCamp。

## 数据源
[Global Average Absolute Sea Level Change](https://datahub.io/core/sea-level-rise), 1880-2014 from the US Environmental Protection Agency using data from CSIRO, 2015; NOAA, 2015.


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
