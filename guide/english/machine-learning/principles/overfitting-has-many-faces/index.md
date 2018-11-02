---
title: Overfitting Has Many Faces
---
## Overfitting Has Many Faces

If a learning algorithm fits a given training set well, this does not simply indicate a good hypothesis. Overfitting occurs when the hypothesis function J(Θ) fits your training set too closely having a high variance and low error on the training set while having a high test error on any other data. 

In other words, overfitting occrus if the error of the hypothesis as measured on the data set that was used to train the parameters happens to be lower than the error on any other data set.

### Choosing an Optimal Polynomial Degree

Choosing the right degree of polynomial for the hypothesis function is important in avoiding overfitting. This can be achieved by testing each degree of polynomial and observing the effect on the error result over various parts of the data set. Hence, we can break down our data set into 3 parts that can be used in optimizing the hypothesis' theta and polynomial degree. 

A good break-down ratio of the data set is: 
- Training set: 60%
- Cross validation: 20%
- Test set: 20%

The three error values can thus be calculatted by the following method:<sup>1</sup>
1. Use the training set for each polynomial degree in order to optimize the parameters in `Θ`
2. Use the cross validation set to find the polynomial degree with the lowest error
3. Use the test set to estimate the generalization error 

### Ways to Fix Overfitting

These are some of the ways to address overfitting:
1. Getting more training examples
2. Trying a smaller set of features
3. Increasing the parameter `λ lambda`


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[Coursera's Machine Learning Course](https://www.coursera.org/learn/machine-learning)

### Sources
1. [Ng, Andrew. "Machine Learning". *Coursera* Accessed January 29, 2018](https://www.coursera.org/learn/machine-learning)

