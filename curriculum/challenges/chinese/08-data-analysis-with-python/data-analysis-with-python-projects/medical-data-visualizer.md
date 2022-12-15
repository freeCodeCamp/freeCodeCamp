---
id: 5e46f7f8ac417301a38fb92a
title: 医疗数据可视化工具
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。


我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 YouTube 上通过 freeCodeCamp.org 上传的一些视频学习这个项目相关的知识。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">给所有人的 Python 课程</a>（14 小时）

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">如何使用 Python Pandas 分析数据</a>（10 小时）

# --instructions--

在本项目中，您将使用 matplotlib、seaborn 和 pandas 来对体检数据进行可视化和计算。 数据集的数值是从体检中收集的。

## 数据说明

数据集中的行代表患者，列代表身体测量、各种血液检查的结果和生活方式等信息。 您将使用该数据集来探索心脏病、身体测量数据、血液标志物和对生活方式的选择之间的关系。

文件名：medical_examination.csv

|    项目    | 变量类型 |      变量名      |         变量值类型         |
|:--------:|:----:|:-------------:|:---------------------:|
|    年龄    | 客观特征 |     `age`     |      int (days)       |
|    身高    | 客观特征 |   `height`    |       int (cm)        |
|    体重    | 客观特征 |   `weight`    |      float (kg)       |
|    性别    | 客观特征 |   `gender`    |         分类编码          |
|   收缩压    | 检测特征 |    `ap_hi`    |          int          |
|   舒张压    | 检测特征 |    `ap_lo`    |          int          |
|   胆固醇    | 检测特征 | `cholesterol` | 1：正常，2：高于正常，3：远远高于正常值 |
|   血糖值    | 检测特征 |    `gluc`     | 1：正常，2：高于正常，3：远远高于正常值 |
|   吸烟问题   | 主观特征 |    `smoke`    |        binary         |
|   饮酒量    | 主观特征 |    `alco`     |        binary         |
|   体育活动   | 主观特征 |   `active`    |        binary         |
| 是否有心血管疾病 | 目标变量 |   `cardio`    |        binary         |

## 任务

创建一个类似于 `examples/Figure_1.png` 的图表，其中我们显示 `cholesterol`、`gluc`、`alco`、`active` 和 `smoke` 变量，用于不同面板中 heart=1 和 heart=0 的患者。

在 `medical_data_visualizer.py` 中使用数据完成以下任务：

- 给数据添加一列 `overweight`。 要确定一个人是否超重，首先通过将他们的体重（公斤）除以他们的身高（米）的平方来计算他们的 BMI。 如果该值是 > 25，则此人超重。 使用值 0 表示不超重，使用值 1 表示超重。
- 使用 0 表示好的和 1 表示坏，来规范化数据。 如果 `cholesterol` 或 `gluc` 的值为 1，则将值设为 0。 如果值大于 1，则将值设为 1。
- 将数据转换为长格式并使用 seaborn 的 `catplot()` 创建一个显示分类特征值计数的图表。 数据集应按 “Cardio” 拆分，因此每个 `cardio` 值都有一个图表。 该图表应该看起来像 `examples/Figure_1.png`。
- 清理数据。 过滤掉以下代表不正确数据的患者段：
  - 舒张压高于收缩压（使用 `(df['ap_lo'] <= df['ap_hi'])` 保留正确的数据）
  - 高度小于第 2.5 个百分位数（使用 `(df['height'] >= df['height'].quantile(0.025))` 保留正确的数据）
  - 身高超过第 97.5 个百分位
  - 体重小于第 2.5 个百分位
  - 体重超过第 97.5 个百分位
- 使用数据集创建相关矩阵。 使用 seaborn 的 `heatmap()` 绘制相关矩阵。 遮罩上三角。 该图表应类似于 `examples/Figure_2.png`。

每当变量设置为 `None` 时，请确保将其设置为正确的代码。

单元测试是在 `test_module.py` 下为你编写的。

## 开发

对于开发，你可以使用 `main.py` 来测试你的函数。 单击“运行”按钮，`main.py` 将运行。

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
