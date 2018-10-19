---
title: Random Forest
localeTitle: Случайный лес
---
## Случайный лес

Случайный лес - это группа деревьев решений, которые принимают лучшие решения в целом, чем индивидуально.

### проблема

Деревья принятия решений сами по себе подвержены **переобучению** . Это означает, что дерево становится настолько привычным к данным обучения, что ему трудно принимать решения за данные, которые он никогда не видел раньше.

### Решение со случайными лесами

Случайные леса относятся к категории алгоритмов **обучения ансамбля** . Этот класс алгоритмов использует множество оценок для получения лучших результатов. Это делает случайные леса обычно **более точными,** чем простые деревья решений. В Random Forests создается куча деревьев решений. Каждое дерево **обучается на случайном подмножестве данных и случайном подмножестве признаков этих данных** . Таким образом, вероятность того, что оценки, привыкшие к данным (переобучение), значительно сокращаются, поскольку **каждый из них работает с разными данными и функциями,** чем другие. Этот метод создания кучу оценок и их обучение на случайных подмножеств данных представляет собой метод в _учебный ансамбль_ под названием **расфасовки** или _Bootstrap агрегирования._ Чтобы получить прогноз, каждый из деревьев принятия решений голосует за правильное предсказание (классификация) или получает среднее из их результатов (регрессии).

### Пример увеличения в Python

В этом соревновании нам дается список событий столкновения и их свойств. Затем мы предскажем, произошел ли при этом столкновении τ → 3μ. Этот τ → 3μ в настоящее время предполагается учеными, которых не должно было случиться, и целью этого конкурса было выявить τ → 3μ, происходящее чаще, чем ученые в настоящее время могут понять. Задача здесь заключалась в том, чтобы спроектировать проблему машинного обучения для чего-то, чего никто никогда не наблюдал раньше. Ученые из ЦЕРН разработали следующие проекты для достижения цели. https://www.kaggle.com/c/flavours-of-physics/data

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

#### Дополнительная информация:

*   [Случайные леса (Википедия)](https://www.wikiwand.com/en/Random_forest)
*   [Введение в случайные леса - упрощенное](https://www.analyticsvidhya.com/blog/2014/06/introduction-random-forest-simplified/)
*   [Как работает алгоритм Random Forest (видео)](https://www.youtube.com/watch?v=loNcrMjYh64)