---
title: Random Forest
---
## Random Forest
A Random Forest is a group of decision trees that make better decisions as a whole than individually.

### Problem
Decision trees by themselves are prone to **overfitting**. This means that the tree becomes so used to the training data that it has difficulty making decisions for data it has never seen before.

### Solution with Random Forests
Random Forests belong in the category of **ensemble learning** algorithms. This class of algorithms use many estimators to yield better results. This makes Random Forests usually **more accurate** than plain decision trees. In Random Forests, a bunch of decision trees are created. Each tree is **trained on a random subset of the data and a random subset of the features of that data**. This way the possibility of the estimators getting used to the data (overfitting) is greatly reduced, because **each of them work on the different data and features** than the others. This method of creating a bunch of estimators and training them on random subsets of data is a technique in *ensemble learning* called **bagging** or *Bootstrap AGGregatING*. To get the prediction, the each of the decision trees vote on the correct prediction (classification) or they get the mean of their results (regression).

### Example of Boosting in Python
In this competition, we are given a list of collision events and their properties. We will then predict whether a τ → 3μ decay happened in this collision. This τ → 3μ is currently assumed by scientists not to happen, and the goal of this competition was to discover τ → 3μ happening more frequently than scientists currently can understand.
The challenge here was to design a machine learning problem for something no one has ever observed before. Scientists at CERN developed the following designs to achieve the goal.
https://www.kaggle.com/c/flavours-of-physics/data

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

#### More Information:
- <a href='https://www.wikiwand.com/en/Random_forest' target='_blank' rel='nofollow'>Random Forests (Wikipedia)</a>
- <a href='https://www.analyticsvidhya.com/blog/2014/06/introduction-random-forest-simplified/' target='_blank' rel='nofollow'>Introduction to Random Forests - Simplified</a>
- <a href='https://www.youtube.com/watch?v=loNcrMjYh64' target='_blank' rel='nofollow'>How Random Forest algorithm works (Video)</a>
