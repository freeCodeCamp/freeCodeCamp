---
id: 5e4f5c4b570f7e3a4949899f
title: 海平面预报器
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-sea-level-predictor/" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 YouTube 上通过 freeCodeCamp.org 上传的一些视频学习这个项目相关的知识。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">每个人视频课程的 Python</a> (14小时)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">如何使用 Python Pandas 分析数据</a>（10 小时）

# --instructions--

你将分析自 1880 年以来全球平均海平面变化的数据集。 你将使用这些数据来预测到 2050 年的海平面变化。

使用数据完成以下任务：

- 使用 Pandas 从 `epa-sea-level.csv` 导入数据。
- 使用 matplotlib 创建散点图，将 `Year` 列作为 x 轴，将 `CSIRO Adjusted Sea Level` 列作为 y 轴。
- 使用 `scipy.stats` 中的 `linregress` 函数来获得最佳拟合线的斜率和 y 截距。 在散点图的顶部绘制最佳拟合线。 使线穿过 2050 年以预测 2050 年的海平面上升。
- 仅使用数据集中从 2000 年到最近一年的数据绘制一条新的最佳拟合线。 如果上升速度继续与 2000 年一样，则使该线也经过 2050 年以预测 2050 年的海平面上升。
- x 标签应为 `Year`，y 标签应为 `Sea Level (inches)`，标题应为 `Rise in Sea Level`。

样板文件还包括保存和返回图像的命令。

## 开发

Write your code in `sea_level_predictor.py`. For development, you can use `main.py` to test your code.

## 测试

The unit tests for this project are in `test_module.py`. 为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。

## 提交

复制项目的 URL 并将其提交给 freeCodeCamp。

## 数据源

<a href="https://datahub.io/core/sea-level-rise" target="_blank" rel="noopener noreferrer nofollow">全球平均绝对海平面变化</a>，1880 - 2014 年，来自美国环境保护局，数据来源：CSIRO, 2015; NOAA, 2015。


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
