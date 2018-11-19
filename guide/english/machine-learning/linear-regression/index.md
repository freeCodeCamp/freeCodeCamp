---
title: Linear Regression
---
## Linear Regression

[Linear Regression](https://masmlblog.wordpress.com/2017/10/31/the-linear-regression-algorithm/) is a **discriminative** machine learning algorithm to relate the dependent variable, i.e ‘Y’ on the independent variables i.e ‘Xi‘. Unlike generative models, it does not allow the user to generate samples from the distribution of X and Y. Linear regression is a **supervised** learning algorithm, i.e labelled dataset is needed to train it for the model to be able to make predictions on its own.

Linear regression is a type of regression, or one of the several regression techniques which are used to find the best fitting line for the given set of points in the given dataset.
Linear regression helps us predict score of a variable X from the scores on other variables Y. When the variables Y are plotted, linear regression finds the best-fitting straight line through the points. The best-fitting line is called a regression line.
This is done by taking a line equation and comparing it with the points and the required result and then calibrated in such a way that the difference/distance between the points and the line, or simply error, is kept to the minimum. This way of calibrating is called Least Squared Error method.

[Online linear regression simulator](https://www.mladdict.com/linear-regression-simulator)

In Python:
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

Code example is from <a href='http://blog.floydhub.com/coding-the-history-of-deep-learning/' target='_blank' rel='nofollow'>this article</a>. It also explains gradient descent and other essential concepts for deep learning.

It is important to note that not all linear regression is done with gradient descent. The normal equation can also be used for finding the linear regression coefficients, however, this uses matrix multiplication, and therefore can be very time consuming to use for more than 100,000 or 1,000,000 instances.

In Python:
Apply directly by using scikit library, thus making linear regression easy to use even on large datasets.
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


You can refer to this article for deeper insight into regression  
https://www.analyticsvidhya.com/blog/2017/06/a-comprehensive-guide-for-linear-ridge-and-lasso-regression/
