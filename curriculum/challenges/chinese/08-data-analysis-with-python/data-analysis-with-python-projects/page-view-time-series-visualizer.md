---
id: 5e46f802ac417301a38fb92b
title: 页面访问量的时间序列可视化工具
challengeType: 10
forumTopicId: 462369
dashedName: page-view-time-series-visualizer
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-page-view-time-series-visualizer" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 freeCodeCamp.org 的 YouTube 频道中通过视频学习到这个项目相关的所有知识

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">每个人视频课程的 Python</a> (14小时)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">如何使用 Python Pandas 分析数据</a>（10 小时）

# --instructions--

对于这个项目，你将使用线图、条形图和箱形图对时间序列数据进行可视化。 你将使用 Pandas、Matplotlib 和 Seaborn 可视化包含 2016 年 5 月 9 日至 2019 年 12 月 3 日期间 freeCodeCamp.org 论坛上每天的页面浏览量的数据集。 这个数据可视化将帮助你了解访问的模式，并且显示年增长和月增长情况。

使用数据完成以下任务：

- 使用 Pandas 从 “fcc-forum-pageviews.csv” 导入数据。 将索引设置为 `date` 列。
- 通过过滤掉页面浏览量位于数据集前 2.5% 或数据集后 2.5% 的日期来清理数据。
- 创建一个 `draw_line_plot` 函数，该函数使用 Matplotlib 绘制类似于 “examples/Figure_1.png” 的折线图。 标题应为 `Daily freeCodeCamp Forum Page Views 5/2016-12/2019`。 x 轴上的标签应为 `Date`，y 轴上的标签应为 `Page Views`。
- 创建一个 `draw_bar_plot` 函数，用于绘制类似于 “examples/Figure_2.png” 的条形图。 它应该显示按年份分组的每个月的平均每日页面浏览量。 图例应显示月份标签并具有 `Months` 标题。 在图表上，x 轴上的标签应为 `Years`，y 轴上的标签应为 `Average Page Views`。
- 创建一个 `draw_box_plot` 函数，该函数使用 Seaborn 绘制两个相邻的箱形图，类似于 “examples/Figure_3.png”。 这些箱线图应显示值在给定年份或月份内的分布情况以及随时间推移的比较情况。 第一个图表的标题应为 `Year-wise Box Plot (Trend)`，第二个图表的标题应为 `Month-wise Box Plot (Seasonality)`。 确保底部的月份标签从 `Jan` 开始，并且 x 和 y 轴标记正确。 样板文件包括准备数据的命令。

对于每个图表，请确保使用数据框的副本。

样板文件还包括保存和返回图像的命令。

## 开发

Write your code in `time_series_visualizer.py`. For development, you can use `main.py` to test your code.

## 测试

The unit tests for this project are in `test_module.py`. 为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。

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
