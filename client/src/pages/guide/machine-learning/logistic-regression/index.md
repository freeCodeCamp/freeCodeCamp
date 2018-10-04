---
title: Logistic Regression
---
## Logistic Regression

Logistic regression is very similar to linear regression in that it attempts to predict a response variable Y given a set of X input variables. It's a form of supervised learning, which tries to predict the responses of unlabeled, unseen data by first training with labeled data, a set of observations of both independent (X) and dependent (Y) variables. But while <a href='https://guide.freecodecamp.org/machine-learning/linear-regression' target='_blank'>Linear Regression</a> assumes that the response variable (Y) is quantitative or continuous, Logistic Regression is used specifically when the response variable is qualititative, or discrete.

#### How it Works 
Logistic regression models the probability that Y, the response variable, belongs to a certain category. In many cases, the response variable will be a binary one, so logistic regression will want to model a function y = f(x) that outputs a normalized value that ranges  from, say, 0 to 1 for all values of X, corresponding to the two possible values of Y. It does this by using the logistic function: 
Logistic regression is the appropriate regression analysis to conduct when the dependent variable is dichotomous (binary).  Like all regression analyses, the logistic regression is a predictive analysis.  Logistic regression is used to describe data and to explain the relationship between one dependent binary variable and one or more nominal, ordinal, interval or ratio-level independent variables.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Logistic regression is used to solve classification problems, where the output is of the form y∈{0,1}. Here, 0 is a negative class and 1 is a positive class. Let's say we have a hypothesis hθ(x), where x is our dataset(a matrix) of length m. θ is the parameteric matrix. We have : 0 < hθ(x) < 1

In Logistic regression, hθ(x) is a sigmoid function, thus hθ(x) = g(θ'x).
g(θ'x) = 1/ 1 + e^(-θ'x) 

Note: θ' is θ transpose.
            
###### Cost function

The cost function used for Logistic regression is :

J(θ)=(1/m)∑Cost(hθ(x(i)),y(i)) , where summation is from i=1 to m.

Cost(hθ(x),y)=−log(hθ(x))           if y = 1
Cost(hθ(x),y)=−log(1−hθ(x))         if y = 0

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For further reading to build logistic regression step by step :

- Click <a href="https://medium.com/towards-data-science/building-a-logistic-regression-in-python-step-by-step-becd4d56c9c8"  target='_blank' rel='nofollow'>here</a> for an article about building a Logistic Regression in Python.
- Click <a href="http://nbviewer.jupyter.org/gist/justmarkham/6d5c061ca5aee67c4316471f8c2ae976" target='_blank' rel='nofollow'>here</a> for another article on building a Logical Regression.
