---
id: 5e46f7f8ac417301a38fb92a
title: 医疗数据可视化工具
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 YouTube 上通过 freeCodeCamp.org 上传的一些视频学习这个项目相关的知识。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

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

- Add an `overweight` column to the data. To determine if a person is overweight, first calculate their BMI by dividing their weight in kilograms by the square of their height in meters. If that value is > 25 then the person is overweight. Use the value 0 for NOT overweight and the value 1 for overweight.
- Normalize the data by making 0 always good and 1 always bad. If the value of `cholesterol` or `gluc` is 1, make the value 0. If the value is more than 1, make the value 1.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using seaborn's `catplot()`. The dataset should be split by 'Cardio' so there is one chart for each `cardio` value. The chart should look like `examples/Figure_1.png`.
- Clean the data. Filter out the following patient segments that represent incorrect data:
  - diastolic pressure is higher than systolic (Keep the correct data with `(df['ap_lo'] <= df['ap_hi'])`)
  - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
  - height is more than the 97.5th percentile
  - weight is less than the 2.5th percentile
  - weight is more than the 97.5th percentile
- Create a correlation matrix using the dataset. Plot the correlation matrix using seaborn's `heatmap()`. Mask the upper triangle. The chart should look like `examples/Figure_2.png`.

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
