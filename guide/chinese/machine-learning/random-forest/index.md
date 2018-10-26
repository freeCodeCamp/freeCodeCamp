---
title: Random Forest
localeTitle: 随机森林
---
## 随机森林

随机森林是一组决策树，它们作为一个整体做出比单独做出更好的决策。

### 问题

决策树本身容易**过度拟合** 。这意味着树变得如此习惯于训练数据，因此很难对之前从未见过的数据做出决策。

### 随机森林的解决方案

随机森林属于**集成学习**算法的范畴。这类算法使用许多估算器来产生更好的结果。这使得随机森林通常比普通决策树**更准确** 。在随机森林中，创建了一堆决策树。每个树都**在数据的随机子集和该数据的特征的随机子集上进行训练** 。这样，估计器习惯于数据（过度拟合）的可能性大大降低，因为**它们中的每一个都在处理与其他数据和特征不同的数据和特征** 。这种创建一组估计器并在随机数据子集上训练它们的方法是_集成学习中的_一种技术，称为**装袋**或_Bootstrap AGGregatING_ 。为了得到预测，每个决策树对正确的预测（分类）进行投票，或者他们得到结果的平均值（回归）。

### Python中Boosting的示例

在本次比赛中，我们会获得一系列碰撞事件及其属性。然后我们将预测在这次碰撞中是否发生τ→3μ衰变。目前科学家们认为τ→3μ不会发生，本次比赛的目的是发现τ→3μ比科学家目前所能理解的更频繁。 这里的挑战是为以前从未观察到的事物设计机器学习问题。欧洲核子研究中心的科学家开发了以下设计来实现这一目标。 https://www.kaggle.com/c/flavours-of-physics/data

```python
#Data Cleaning 
 import pandas as pd 
 data_test = pd.read_csv("test.csv") 
 data_train = pd.read_csv("training.csv") 
 data_train = data_train.drop('min_ANNmuon',1) 
 data_train = data_train.drop('production',1) 
 data_train = data_train.drop('mass',1) 
 
 #Cleaned data 
 Y = data_train['signal'] 
 X = data_train.drop('signal',1) 
 
 #adaboost 
 from sklearn.ensemble import AdaBoostClassifier 
 from sklearn.tree import DecisionTreeClassifier 
 seed = 9001 #this ones over 9000!!! 
 boosted_tree = AdaBoostClassifier(DecisionTreeClassifier(max_depth=1), algorithm="SAMME", 
                                  n_estimators=50, random_state = seed) 
 model = boosted_tree.fit(X, Y) 
 
 predictions = model.predict(data_test) 
 print(predictions) 
 #Note we can't really validate this data since we don't have an array of "right answers" 
 
 #stochastic gradient boosting 
 from sklearn.ensemble import GradientBoostingClassifier 
 gradient_boosted_tree = GradientBoostingClassifier(n_estimators=50, random_state=seed) 
 model2 = gradient_boosted_tree.fit(X,Y) 
 
 predictions2 = model2.predict(data_test) 
 print(predictions2) 
```

#### 更多信息：

*   [随机森林（维基百科）](https://www.wikiwand.com/en/Random_forest)
*   [随机森林简介 - 简化](https://www.analyticsvidhya.com/blog/2014/06/introduction-random-forest-simplified/)
*   [随机森林算法的工作原理（视频）](https://www.youtube.com/watch?v=loNcrMjYh64)