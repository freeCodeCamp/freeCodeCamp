---
title: Dataset Splitting
localeTitle: 数据集拆分
---
## 数据集拆分

分为培训，交叉验证和测试集是常见的最佳实践。 这允许您调整算法的各种参数，而无需做出特别符合训练数据的判断。

### 动机

数据集拆分成为消除ML算法中训练数据偏差的必要条件。 修改ML算法的参数以最佳地拟合训练数据通常导致过度拟合算法在实际测试数据上表现不佳。 出于这个原因，我们将数据集拆分为多个离散子集，我们在其上训练不同的参数。

#### 训练集

训练集用于计算算法在暴露于新数据时将使用的实际模型。 此数据集通常占整个可用数据的60％-80％（取决于您是否使用交叉验证集）。

#### 交叉验证集

交叉验证集用于模型选择（通常约为数据的20％）。 使用此数据集尝试在训练集上训练的算法的不同参数。 例如，您可以在交叉验证集上评估不同的模型参数（多项式度或lambda，正则化参数），以查看哪些参数最准确。

#### 测试集

测试集是您触摸的最终数据集（通常约占数据的20％）。 这是事实的来源。 预测测试集的准确性是ML算法的准确性。

#### 更多信息：

*   [AWS ML Doc](http://docs.aws.amazon.com/machine-learning/latest/dg/splitting-the-data-into-training-and-evaluation-data.html)
*   [一个很好的stackoverflow帖子](https://stackoverflow.com/questions/13610074/is-there-a-rule-of-thumb-for-how-to-divide-a-dataset-into-training-and-validatio)
*   [学术论文](https://www.mff.cuni.cz/veda/konference/wds/proc/pdf10/WDS10_105_i1_Reitermanova.pdf)