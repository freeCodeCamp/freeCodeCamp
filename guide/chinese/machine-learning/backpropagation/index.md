---
title: Backpropagation
localeTitle: 反向传播
---
## 反向传播

Backprogapation是[神经网络](../neural-networks/index.md)的子主题，是计算网络中每个节点的梯度的过程。这些梯度测量每个节点对输出层有贡献的“误差”，因此在训练神经网络时，这些梯度被最小化。

注意：反向传播和机器学习一般需要非常熟悉线性代数和矩阵操作。在尝试理解本文的内容之前，强烈建议您阅读或阅读此主题。

### 计算

反向传播的过程可以分三个步骤来解释。

鉴于以下内容

*   m个L层神经网络的训练样例（x，y）
*   g = sigmoid函数
*   Theta（i）=从第i层到第i + 1层的过渡矩阵
*   a（l）= g（z（l））;基于一个训练示例的层l中的节点的值的数组
*   z（l）= Theta（l-1）a（l-1）
*   Delta一组L矩阵表示第i层和第i + 1层之间的过渡
*   d（l）=一个训练示例的层l的梯度阵列
*   D一组L矩阵，每个节点具有最终梯度
*   lambda网络的规范化术语

在这种情况下，对于矩阵M，M'将表示矩阵M的转置

1.  分配Delta（i）的所有条目，对于i，从1到L，为零。
2.  对于从1到m的每个训练示例t，执行以下操作：

*   在每个示例上执行前向传播以计算每个层的（1）和z（l）
*   计算d（L）= a（L） - y（t）
*   计算d（l）=（Theta（l）'•d（l + 1））•g（z（l））表示l从L-1到1
*   增量Delta（l）乘以delta（l + 1）•a（l）'

1.  将Delta matricies插入我们的偏导数矩阵中 D（l）= 1 \\ m（Delta（1）+ lambda·Theta（l））;如果l≠0 D（l）= 1 \\ m•Delta（l）;如果l = 0

当然，只是看到这篇文章看起来非常复杂，应该只在神经网络和机器学习的更大背景下理解。请查看加密的参考资料，以便更好地理解整个主题。

#### 更多信息：

*   [第4讲CS231n神经网络简介](https://youtu.be/d14TUNcbn1k?t=354)
*   [Siraj Raval - 5分钟内的反向传播](https://www.youtube.com/watch?v=q555kfIFUCM)
*   [Andrew Ng的ML课程](https://www.coursera.org/learn/machine-learning/)
*   [深入，维基风格的文章](https://brilliant.org/wiki/backpropagation/)
*   [维基百科上的Backprop](https://en.wikipedia.org/wiki/Backpropagation)
*   [逐步反向传播示例](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/)