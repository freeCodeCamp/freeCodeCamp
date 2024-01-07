---
id: 5e46f7e5ac417301a38fb929
title: 人口统计数据分析器
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。


我们仍在开发 Python 课程的交互式教学部分。 目前，你可以在 YouTube 上通过 freeCodeCamp.org 上传的一些视频学习这个项目相关的知识。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">给所有人的 Python 课程</a>（14 小时）

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">如何使用 Python Pandas 分析数据</a>（10 小时）

# --instructions--

在这个挑战中，你必须使用 Pandas 对人口统计进行分析。 你将获得从 1994 年人口普查数据库中提取的人口统计数据数据集。 以下是数据的示例：

```markdown
|    |   age | workclass        |   fnlwgt | education   |   education-num | marital-status     | occupation        | relationship   | race   | sex    |   capital-gain |   capital-loss |   hours-per-week | native-country   | salary   |
|---:|------:|:-----------------|---------:|:------------|----------------:|:-------------------|:------------------|:---------------|:-------|:-------|---------------:|---------------:|-----------------:|:-----------------|:---------|
|  0 |    39 | State-gov        |    77516 | Bachelors   |              13 | Never-married      | Adm-clerical      | Not-in-family  | White  | Male   |           2174 |              0 |               40 | United-States    | <=50K    |
|  1 |    50 | Self-emp-not-inc |    83311 | Bachelors   |              13 | Married-civ-spouse | Exec-managerial   | Husband        | White  | Male   |              0 |              0 |               13 | United-States    | <=50K    |
|  2 |    38 | Private          |   215646 | HS-grad     |               9 | Divorced           | Handlers-cleaners | Not-in-family  | White  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  3 |    53 | Private          |   234721 | 11th        |               7 | Married-civ-spouse | Handlers-cleaners | Husband        | Black  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  4 |    28 | Private          |   338409 | Bachelors   |              13 | Married-civ-spouse | Prof-specialty    | Wife           | Black  | Female |              0 |              0 |               40 | Cuba             | <=50K    |
```

你必须使用 Pandas 来回答以下问题：

- 这个数据集中每个种族有多少人？ 这应该是一个以种族名称作为索引标签的 Pandas 系列。 （`race` 栏）
- 男性的平均年龄是多少？
- 拥有学士学位的人的百分比是多少？
- 受过高等教育（`Bachelors`、`Masters` 或 `Doctorate`）且收入超过 50K 的人占多大比例？
- 没有受过高等教育且收入超过 50K 的人的比例是多少？
- 一个人每周最少工作多少小时？
- 每周工作最少小时数的人中有多少人的工资超过 50K？
- 哪个国家/地区的收入 >50K 的人口比例最高，该比例是多少？
- 找出印度收入 >50K 的人最受欢迎的职业。

使用文件 `demographic_data_analyzer` 中的启动代码。 更新代码，以便将所有设置为“None”的变量设置为适当的计算或代码。 将所有小数四舍五入到最接近的十分之一。

单元测试是在 `test_module.py` 下为你编写的。

## 开发

对于开发，你可以使用 `main.py` 来测试你的函数。 单击“运行”按钮，`main.py` 将运行。

## 测试

为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

## 提交

复制项目的 URL 并将其提交给 freeCodeCamp。

## 数据集源

Dua, D. and Graff, C. (2019). <a href="http://archive.ics.uci.edu/ml" target="_blank" rel="noopener noreferrer nofollow">UCI Machine Learning Repository</a>. Irvine, CA: University of California, School of Information and Computer Science.

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
