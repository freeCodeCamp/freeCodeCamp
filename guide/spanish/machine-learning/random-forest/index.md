---
title: Random Forest
localeTitle: Bosque aleatorio
---
## Bosque aleatorio

Un bosque aleatorio es un grupo de árboles de decisión que toman mejores decisiones en conjunto que individualmente.

### Problema

Los árboles de decisión por sí mismos son propensos a **sobreajuste** . Esto significa que el árbol se acostumbra tanto a los datos de entrenamiento que tiene dificultades para tomar decisiones para datos que nunca antes había visto.

### Solución con Bosques Aleatorios

Los bosques aleatorios pertenecen a la categoría de algoritmos de **aprendizaje conjunto** . Esta clase de algoritmos usa muchos estimadores para producir mejores resultados. Esto hace que los bosques aleatorios usualmente sean **más precisos** que los árboles de decisión simples. En Random Forests, se crean un montón de árboles de decisión. Cada árbol se **entrena en un subconjunto aleatorio de los datos y un subconjunto aleatorio de las características de esos datos** . De esta manera, se reduce considerablemente la posibilidad de que los estimadores se acostumbren a los datos (sobreajuste), ya que **cada uno de ellos trabaja en los diferentes datos y características** que los otros. Este método para crear un grupo de estimadores y entrenarlos en subconjuntos aleatorios de datos es una técnica de _aprendizaje_ en _conjunto_ llamada **empaquetamiento** o _AGGregat de Bootstrap_ . Para obtener la predicción, cada uno de los árboles de decisión vota sobre la predicción correcta (clasificación) o obtiene la media de sus resultados (regresión).

### Ejemplo de Impulso en Python

En esta competencia, nos dan una lista de eventos de colisión y sus propiedades. Luego predeciremos si se produjo una caída de τ → 3μ en esta colisión. Actualmente, los científicos suponen que τ → 3μ no se realizará, y el objetivo de esta competencia fue descubrir que τ → 3μ ocurre con más frecuencia de la que los científicos pueden entender. El desafío aquí fue diseñar un problema de aprendizaje automático para algo que nadie ha observado antes. Los científicos del CERN desarrollaron los siguientes diseños para lograr el objetivo. https://www.kaggle.com/c/flavours-of-physics/data

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

#### Más información:

*   [Bosques Aleatorios (Wikipedia)](https://www.wikiwand.com/en/Random_forest)
*   [Introducción a los bosques aleatorios - simplificado](https://www.analyticsvidhya.com/blog/2014/06/introduction-random-forest-simplified/)
*   [Cómo funciona el algoritmo de bosque aleatorio (Video)](https://www.youtube.com/watch?v=loNcrMjYh64)