---
title: Gradient Descent
---
## Gradient Descent

Gradient descent is an optimization algorithm for finding the minimum of a function. In deep learning this optimization algorithm is very useful when the parameters cannot be calculated analytically.

![Gradient Descent](https://upload.wikimedia.org/wikipedia/commons/6/68/Gradient_descent.jpg)
What you want to do is to repeatedly update the value of the parameter theta until you minimize the value of the Cost Function J(θ) close to 0;

### Learning Rate
The size of a step is called the learning rate. A larger learning rate make iterating faster but it might overshoot the global minimum, the value that we are looking for. On the other hand we could prevent this overshooting by decreasing the learning rate; but beware that the smaller you make the learning rate, the more computationally intensive it gets. This could either prolong the computation unnecessarily, or you may not arrive at the global minimum altogether. 

### Feature Scaling
A deep learning problem would require you to use multiple features for generating a predictive model. If for example if you are building a predictive model for house pricing, you would have to deal with features like the price itself, number of rooms, lot area, etc. And these features might extremely differ in range, like for example while the lot area might be between 0 and 2000 square feet, the other features like the number of rooms would be between 1 and 9.

This is where feature scaling, also called normalization, comes in handy, to make sure that your machine learning algorithm works properly. 

### Stochastic Gradient Descent 

Machine learning problems usually requires computations over a sample size in the millions, and that could be very computationally intensive. 

In stochastic gradient descent you update the parameter for the cost gradient of each example rather that the sum of the cost gradient of all the examples. You could arrive at a set of good parameters faster after only a few passes through the training examples, thus the learning is faster as well. 

### Further Reading

* [A guide to Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)
* [Gradient Descent For Machine Learning](https://machinelearningmastery.com/gradient-descent-for-machine-learning/) 
* [Difference between Batch Gradient Descent and Stochastic Gradient Descent](https://towardsdatascience.com/difference-between-batch-gradient-descent-and-stochastic-gradient-descent-1187f1291aa1)
