---
title: Backpropagation
---
## Backpropagation


Backprogapation is a subtopic of [neural networks](../neural-networks/index.md).

**Purpose:** It is an algorithm/process with the aim of minimizing the cost function (in other words, the error) of parameters in a neural network. 

**Method:** This is done by calculating the gradients of each node in the network. These gradients measure the "error" each node contributes to the output layer, so in training a neural network, these gradients are minimized.

Backpropogation can be thought of as using the chain rule to compute gradients with respect to different parameters in a neural network in order to perform iterative updates to those parameters. 

Note: Backpropagation, and machine learning in general, requires significant familiarity with linear algebra and matrix manipulation. Coursework or reading on this topic is highly recommended before trying to understand the contents of this article. 

### Computation

The process of backpropagation can be explained in three steps.

Given the following

- m training examples (x,y) on a neural network of L layers
- g = the sigmoid function
- Theta(i) = the transition matrix from the ith to the i+1th layer
- a(l) = g(z(l)); an array of the values of the nodes in layer l based on one training example
- z(l) = Theta(l-1)a(l-1)
- Delta a set of L matricies representing transitions between the ith and i+1th layer
- d(l) = the array of the gradients for layer l for one training example
- D a set of L matricies with the final gradients for each node
- lambda the regularization term for the network

In this case, for matrix M, M' will denote the transpose of matrix M

1. Assign all entries of the Delta(i), for i from 1 to L, zero.
2. For each training example t from 1 to m, perform the following:

  - perform forward propagation on each example to compute a(l) and z(l) for each layer
  - compute d(L) = a(L) - y(t)
  - compute d(l) = (Theta(l)' • d(l+1)) • g(z(l)) for l from L-1 to 1
  - increment Delta(l) by delta(l+1) • a(l)'

3. Plug the Delta matricies into our partial derivative matricies
   D(l) = 1\m(Delta(l) + lambda • Theta(l)); if l≠0
   D(l) = 1\m • Delta(l); if l=0
   
### Algorithm explained (from wikipedia)
  Phase 1: propagation
  Each propagation involves the following steps:

    1.  Propagation forward through the network to generate the output value(s)
    2.  Calculation of the cost (error term)
    3.  Propagation of the output activations back through the network using the training pattern target to generate the deltas (the difference between the targeted and actual output values) of all output and hidden neurons.
  Phase 2: weight update
  For each weight, the following steps must be followed:

    1.  The weight's output delta and input activation are multiplied to find the gradient of the weight.
    2.  A ratio (percentage) of the weight's gradient is subtracted from the weight.
This ratio (percentage) influences the speed and quality of learning; it is called the learning rate. The greater the ratio, the faster the neuron trains, but the lower the ratio, the more accurate the training is. The sign of the gradient of a weight indicates whether the error varies directly with, or inversely to, the weight. Therefore, the weight must be updated in the opposite direction, "descending" the gradient.

Learning is repeated (on new batches) until the network performs adequately.
  

This article should only be understood in the greater contexts of neural networks and machine learning. Please read the attached references for a better understanding of the topic as a whole.

### More Information

**High-Level:**
* Siraj Raval - [Backpropagation in 5 Minutes](https://www.youtube.com/watch?v=q555kfIFUCM)
* [Backprop on Wikipedia](https://en.wikipedia.org/wiki/Backpropagation)

**In-depth:**
* Lecture 4 CS231n [Introduction to Neural Networks](https://youtu.be/d14TUNcbn1k?t=354)
* [Free Code Camps Introduction to Machine Learning] (https://guide.freecodecamp.org/machine-learning/)
* [In depth, wiki style article](https://brilliant.org/wiki/backpropagation/)
* [Article on computation graphs](http://colah.github.io/posts/2015-08-Backprop/)
* [A Step by Step Backpropagation Example](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/)
* [Andrew Ng's ML Course](https://www.coursera.org/learn/machine-learning/)

If you'd like to learn how to implement a full-blown single (hidden) layer neural network in Python, whilst learning more about the math behind the algorithms used, you can register for [Andrew Ng's Deep Learning Specialization] (https://www.coursera.org/specializations/deep-learning)
