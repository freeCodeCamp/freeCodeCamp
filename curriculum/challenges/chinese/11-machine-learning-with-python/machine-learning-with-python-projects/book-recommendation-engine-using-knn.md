---
id: 5e46f8e3ac417301a38fb92f
title: 基于 KNN 的图书推荐引擎
challengeType: 10
forumTopicId: 462378
dashedName: book-recommendation-engine-using-knn
---

# --description--

你将<a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-book-recommendation-engine/blob/master/fcc_book_recommendation_knn.ipynb" target="_blank" rel="noopener noreferrer nofollow">使用 Google Colaboratory 来完成这个项目</a>。

进入该链接后，在你自己的账户或本地创建一个笔记本的副本。 一旦你完成项目并通过测试（包括在该链接），请在下面提交你的项目链接。 如果你提交的是 Google Colaboratory 的链接，请确保打开链接共享时选择 “anyone with the link”。

我们仍在开发机器学习课程的交互式课程部分。 现在，你可以通过这个认证中的视频挑战。 你可能还需要寻找额外的学习资源，类似于你在真实世界项目中的工作。

# --instructions--

在这个挑战中，你将使用 **K-Nearest Neighbors** 创建一个图书推荐算法。

你将使用 <a href="http://www2.informatik.uni-freiburg.de/~cziegler/BX/" target="_blank" rel="noopener noreferrer nofollow">Book-Crossings 数据集</a>。 该数据集包括 90,000 名用户对 270,000 册书籍的 110 万份评分（评分从 1 至 10）。

导入并清理数据后，使用 `sklearn.neighbors` 中的 `NearestNeighbors` 开发一个模型，显示与给定书籍相似的书籍。 最近邻算法测量距离以确定实例的“接近度”。

创建一个名为 `get_recommends` 的函数，它将书名（来自数据集）作为参数，并返回 5 本书的列表以及它们与书参数的距离。

这个代码：

```py
get_recommends("The Queen of the Damned (Vampire Chronicles (Paperback))")
```

应该返回：

```py
[
  'The Queen of the Damned (Vampire Chronicles (Paperback))',
  [
    ['Catch 22', 0.793983519077301], 
    ['The Witching Hour (Lives of the Mayfair Witches)', 0.7448656558990479], 
    ['Interview with the Vampire', 0.7345068454742432],
    ['The Tale of the Body Thief (Vampire Chronicles (Paperback))', 0.5376338362693787],
    ['The Vampire Lestat (Vampire Chronicles, Book II)', 0.5178412199020386]
  ]
]
```

请注意，从 `get_recommends()` 返回的数据是一个列表。 列表中的第一个元素是传递给函数的书名。 列表中的第二个元素是另外五个列表的列表。 五个列表中的每一个都包含一本推荐书以及从推荐书到传递给函数的书的距离。

如果你绘制数据集的图表（可选），你会注意到大多数书籍的评价并不频繁。 为了确保统计学上的显著性，从数据集中删除评分低于 200 的用户和评分低于 100 的书籍。

前三个单元格导入你可能需要的库和要使用的数据。 最后一个单元用于测试。 在这些单元格之间写下所有代码。

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
