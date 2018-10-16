---
title: Linear Regression
localeTitle: Regresión lineal
---
## Regresión lineal

La regresión lineal nos ayuda a predecir la puntuación de una variable X a partir de las puntuaciones de otras variables Y. Cuando se grafican las variables Y, la regresión lineal encuentra la línea recta que mejor se adapta a los puntos. La línea de mejor ajuste se llama línea de regresión.

[Simulador de regresión lineal en línea](https://www.mladdict.com/linear-regression-simulator)

En Python:

```py
#Price of wheat/kg and the average price of bread 
 wheat_and_bread = [[0.5,5],[0.6,5.5],[0.8,6],[1.1,6.8],[1.4,7]] 
 
 def step_gradient(b_current, m_current, points, learningRate): 
    b_gradient = 0 
    m_gradient = 0 
    N = float(len(points)) 
    for i in range(0, len(points)): 
        x = points[i][0] 
        y = points[i][1] 
        b_gradient += -(2/N) * (y - ((m_current * x) + b_current)) 
        m_gradient += -(2/N) * x * (y - ((m_current * x) + b_current)) 
    new_b = b_current - (learningRate * b_gradient) 
    new_m = m_current - (learningRate * m_gradient) 
    return [new_b, new_m] 
 
 def gradient_descent_runner(points, starting_b, starting_m, learning_rate, num_iterations): 
    b = starting_b 
    m = starting_m 
    for i in range(num_iterations): 
        b, m = step_gradient(b, m, points, learning_rate) 
    return [b, m] 
 
 gradient_descent_runner(wheat_and_bread, 1, 1, 0.01, 100) 
```

Código de ejemplo es de [este artículo](http://blog.floydhub.com/coding-the-history-of-deep-learning/) . También explica el descenso de gradiente y otros conceptos esenciales para el aprendizaje profundo.

Es importante tener en cuenta que no toda la regresión lineal se realiza con pendiente de gradiente. La ecuación normal también se puede usar para encontrar los coeficientes de regresión lineal, sin embargo, esto utiliza la multiplicación de matrices y, por lo tanto, puede consumir mucho tiempo para usar por más de 100,000 o 1,000,000 de instancias.

En Python: Aplique directamente usando la biblioteca de scikit, haciendo que la regresión lineal sea fácil de usar incluso en conjuntos de datos grandes.

```py
import pandas as pd 
 from sklearn.cross_validation import train_test_split 
 from sklearn.linear_model import LinearRegression as lr 
 train = pd.read_csv('../input/train.csv') 
 test = pd.read_csv('../input/test.csv') 
 X = train.iloc[:, 0:4].values 
 y = train.iloc[:, 4].values 
 X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0) 
 X_train 
 model = lr() 
 model.fit(X_train, y_train) 
 print(model.score(X_train,y_train)) 
 y_pred_class = model.predict(X_test) 
 model.score(X_train,y_train) 
 print(model.coef_) 
 print(model.intercept_) 
 # calculate accuracy 
 from sklearn import metrics 
 print(metrics.accuracy_score(y_test, y_pred_class)) 

```