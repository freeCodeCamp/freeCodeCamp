---
title: Random Forest
localeTitle: Floresta Aleatória
---
## Floresta Aleatória

Uma Floresta Aleatória é um grupo de árvores de decisão que toma melhores decisões como um todo do que individualmente.

### Problema

As árvores de decisão, por si só, são propensas a **overfitting** . Isso significa que a árvore se torna tão acostumada com os dados de treinamento que tem dificuldade em tomar decisões para dados que nunca viu antes.

### Solução com Florestas Aleatórias

As Florestas Aleatórias pertencem à categoria de algoritmos de **aprendizagem** de **conjuntos** . Essa classe de algoritmos usa muitos estimadores para produzir melhores resultados. Isso torna as Florestas Aleatórias geralmente **mais precisas do** que as árvores de decisão simples. Em Florestas Aleatórias, um grupo de árvores de decisão é criado. Cada árvore é **treinada em um subconjunto aleatório dos dados e um subconjunto aleatório dos recursos desses dados** . Dessa forma, a possibilidade de os estimadores se acostumarem aos dados (overfitting) é bastante reduzida, pois **cada um deles trabalha com os dados e recursos** diferentes dos outros. Este método de criar um grupo de estimadores e treiná-los em subconjuntos aleatórios de dados é uma técnica em _ensemble learning_ chamada **bagging** ou _Bootstrap AGGregatING_ . Para obter a previsão, cada uma das árvores de decisão votará na predição correta (classificação) ou obterá a média de seus resultados (regressão).

### Exemplo de Boosting em Python

Nesta competição, recebemos uma lista de eventos de colisão e suas propriedades. Nós iremos então prever se um decaimento τ → 3μ aconteceu nesta colisão. Este τ → 3μ é atualmente assumido pelos cientistas para não acontecer, e o objetivo desta competição foi descobrir τ → 3μ acontecendo com mais freqüência do que os cientistas atualmente podem entender. O desafio aqui foi projetar um problema de aprendizado de máquina para algo que ninguém nunca observou antes. Cientistas do CERN desenvolveram os seguintes projetos para atingir o objetivo. https://www.kaggle.com/c/flavours-of-physics/data

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

#### Mais Informações:

*   [Florestas Aleatórias (Wikipedia)](https://www.wikiwand.com/en/Random_forest)
*   [Introdução às Florestas Aleatórias - Simplificado](https://www.analyticsvidhya.com/blog/2014/06/introduction-random-forest-simplified/)
*   [Como o algoritmo Random Forest funciona (vídeo)](https://www.youtube.com/watch?v=loNcrMjYh64)