---
id: 5e4f5c4b570f7e3a4949899f
title: 海平面预报器
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 YouTube 上通过 freeCodeCamp.org 上传的一些视频学习这个项目相关的知识。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

你将分析自 1880 年以来全球平均海平面变化的数据集。 你将使用这些数据来预测到 2050 年的海平面变化。

使用数据完成以下任务：

- Use Pandas to import the data from `epa-sea-level.csv`.
- Use matplotlib to create a scatter plot using the `Year` column as the x-axis and the `CSIRO Adjusted Sea Level` column as the y-axix.
- Use the `linregress` function from `scipy.stats` to get the slope and y-intercept of the line of best fit. Plot the line of best fit over the top of the scatter plot. Make the line go through the year 2050 to predict the sea level rise in 2050.
- Plot a new line of best fit just using the data from year 2000 through the most recent year in the dataset. Make the line also go through the year 2050 to predict the sea level rise in 2050 if the rate of rise continues as it has since the year 2000.
- The x label should be `Year`, the y label should be `Sea Level (inches)`, and the title should be `Rise in Sea Level`.

单元测试是在 `test_module.py` 下为你编写的。

样板文件还包括保存和返回图像的命令。

## 开发

对于开发，你可以使用 `main.py` 来测试你的函数。 单击“运行”按钮，`main.py` 将运行。

## 测试

为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

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
