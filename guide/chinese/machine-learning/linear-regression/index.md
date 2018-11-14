---
title: Linear Regression
localeTitle: 线性回归
---
## 线性回归

线性回归有助于我们根据其他变量Y的得分预测变量X的得分。当绘制变量Y时，线性回归找到通过点的最佳拟合直线。最合适的线称为回归线。

[在线线性回归模拟器](https://www.mladdict.com/linear-regression-simulator)

在Python中：

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

代码示例来自[本文](http://blog.floydhub.com/coding-the-history-of-deep-learning/) 。它还解释了梯度下降和深度学习的其他基本概念。

值得注意的是，并非所有线性回归都是通过梯度下降完成的。正规方程也可以用于找到线性回归系数，但是，这使用矩阵乘法，因此使用超过100,000或1,000,000个实例可能非常耗时。

在Python中： 使用scikit库直接应用，因此即使在大型数据集上也可以轻松使用线性回归。

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