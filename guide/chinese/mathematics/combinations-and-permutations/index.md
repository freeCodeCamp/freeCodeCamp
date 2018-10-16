---
title: Combinations and Permutations
localeTitle: 组合和排列
---
## 组合和排列

假设你有9个人参加高尔夫锦标赛的前三名。锦标赛前三名有多少种不同的可能性？ 好吧，如果我们先选择第一名，我们有9个人可供选择。之后，我们将有8个选择第二名，7个选择第三名。要计算总数，我们只需要将它们相乘：

9x8x7 = 505

这是排列的一个例子。置换是在给定情况下可能发生的不同有序可能性的数量。排列可以有或没有重复，也可以是组合。如果我们说n个具有r可能性的东西的排列，公式将是：

\##### **重复：** ñ^ R

\##### **没有重复：** N！/（NR）！

回到顶部的问题，如果他们坐在三把相同的椅子而不是排名怎么办？这是组合的一个例子。在组合中，顺序无关紧要。因此，必须消除相同组合的每个排列。这会创建另外两个公式：

\##### **重复：** （R + N-1）！/（R 1（N-1）！）

\##### **没有重复：** N！/（R！（NR）！）

### 来源

“组合和排列。”数学很有趣，www.mathsisfun.com / combinatorics / combinations -permutations.html。

[帮助我们的社区扩展这篇文章](https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/combinations-and-permutations/index.md) 。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。

#### 更多信息：