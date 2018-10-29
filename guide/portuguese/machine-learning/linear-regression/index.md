---
title: Linear Regression
localeTitle: Regressão linear
---
## Regressão linear

A regressão linear nos ajuda a prever a pontuação de uma variável X a partir dos escores de outras variáveis ​​Y. Quando as variáveis ​​Y são plotadas, a regressão linear encontra a linha reta mais adequada através dos pontos. A linha mais adequada é chamada de linha de regressão.

[Simulador de regressão linear on-line](https://www.mladdict.com/linear-regression-simulator)

Em Python:

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

Exemplo de código é [deste artigo](http://blog.floydhub.com/coding-the-history-of-deep-learning/) . Também explica a descida de gradiente e outros conceitos essenciais para a aprendizagem profunda.

É importante notar que nem toda regressão linear é feita com gradiente descendente. A equação normal também pode ser usada para encontrar os coeficientes de regressão linear, no entanto, isso usa multiplicação de matriz e, portanto, pode ser muito demorado usar para mais de 100.000 ou 1.000.000 instâncias.

Em Python: Aplique diretamente usando a biblioteca scikit, tornando a regressão linear fácil de usar, mesmo em grandes conjuntos de dados.

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