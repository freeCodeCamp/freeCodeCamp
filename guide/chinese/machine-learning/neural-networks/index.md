---
title: Neural Networks
localeTitle: 神经网络
---
## 神经网络

![前馈神经网络](http://ufldl.stanford.edu/tutorial/images/SingleNeuron.png)

人工神经网络是计算系统。它们就像构成动物大脑的生物神经网络。 为了训练神经网络，我们需要一个输入向量和一个相应的输出向量。 培训通过最小化错误术语来进行。该误差可以是预测输出和原始输出之间的平方差。

神经网络取得巨大成功的基本原则是“通用逼近定理”。已经在数学上证明了神经网络是通用逼近机器，其能够近似给定输入和输出之间的任何数学函数。

神经网络最初在20世纪80年代开始流行，但计算能力的限制使得它们在过去十年中被广泛接受。 CPU大小和功率的创新允许大规模实现神经网络，尽管其他机器学习范例在效率方面仍然超过神经网络。

神经网络的最基本元素是神经元。它的输入是一个向量，比如`x` ，它的输出是一个实值变量，比如`y` 。因此，我们可以得出结论，神经元充当向量`x`和实数`y`之间的映射。

神经网络跨多个层迭代地执行回归，从而产生更细微的预测模型。 神经网络中的单个节点计算与[逻辑回归](../logistic-regression/index.md)完全相同的函数。 除了输入和输出之外，所有这些层都是隐藏的，也就是说，程序员不会选择或修改这些层所代表的特定特征。

![四层神经网络](http://cs231n.github.io/assets/nn1/neural_net2.jpeg)

在任何给定层中，每个节点将存储在前一层中的所有值作为输入，并基于逻辑回归分析对它们进行预测。 神经网络的力量在于它们“发现”程序员看不到的模式和特征的能力。 如前所述，中间层是“隐藏的”，意味着给予转换的权重仅由算法的训练确定。

神经网络用于各种任务。这些包括计算机视觉，语音识别，翻译，社交网络过滤，玩视频游戏和医学诊断等。

### 可视化

有一个很棒的工具可以帮助你掌握神经网络的概念，而无需任何硬数学： [TensorFlow Playground](http://playground.tensorflow.org) ，一个网络应用程序，让你玩浏览器中运行的真实神经网络，点击按钮，调整参数，看看它是如何工作的。

### 使用神经网络解决问题

*   分类
*   聚类
*   回归
*   异常检测
*   关联规则
*   强化学习
*   结构化预测
*   特征工程
*   特色学习
*   学习排名
*   语法归纳
*   天气预报
*   生成图像

### 常见的神经网络系统

今天使用的最常见的神经网络属于[深度学习](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/deep-learning/index.md)类别。深度学习是将多层神经元链接起来以允许网络在输入和输出向量之间创建越来越抽象的映射的过程。深度神经网络最常使用[反向传播](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/backpropagation/index.md) ，以便汇聚最精确的映射。

第二种最常见的神经网络形式是nueroevolution。在该系统中，随机生成多个神经网络作为初始猜测。然后，使用多代合并精确的大多数网络和随机排列来收敛更准确的映射。

### 神经网络的类型

*   递归神经网络（RNN）
*   长短期记忆（LSTM），一种RNN
*   卷积神经网络（CNN）

### 更多信息：

*   [神经网络 - 维基百科](https://en.wikipedia.org/wiki/Artificial_neural_network#Components_of_an_artificial_neural_network)
*   [丹尼尔希夫曼的代码本质](http://natureofcode.com/book/chapter-10-neural-networks/)
*   [斯坦福大学，多层神经网络](http://ufldl.stanford.edu/tutorial/supervised/MultiLayerNeuralNetworks/)
*   [3Blue1Brown，具有神经网络内容的Youtube频道](https://youtu.be/aircAruvnKk)
*   [Siraj Raval，Youtube CHannel与神经网络内容](https://youtu.be/h3l4qz76JhQ)
*   [神经进化 - 维基百科](https://en.wikipedia.org/wiki/Neuroevolution)