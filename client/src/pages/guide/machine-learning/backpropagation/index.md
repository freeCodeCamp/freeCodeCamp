---
title: Backpropagation
---
## Backpropagation

Backprogapation is a subtopic of [neural networks](../neural-networks/index.md), and is the process by which you calculate the gradients of each node in the network. These gradients measure the "error" each node contributes to the output layer, so in training a neural network, these gradients are minimized.

Note: Backpropagation, and machine learning in general, required significant familiarity with linear algebra and matrix manipulation. Coursework or reading on this topic is highly recommended before trying to understand the contents of this article. 

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
- lambda the regualrization term for the network

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

Of course, just seeing this article looks hugely complicated and should really only be understood in the greater contexts of neural networks and machine learning. Please look at the arrached references for a better understanding of the topic as a whole.

#### More Information:
Lecture 4 CS231n [Introduction to Neural Networks](https://youtu.be/d14TUNcbn1k?t=354)
Siraj Raval - [Backpropagation in 5 Minutes](https://www.youtube.com/watch?v=q555kfIFUCM)
[Andrew Ng's ML Course](https://www.coursera.org/learn/machine-learning/)
[In depth, wiki style article](https://brilliant.org/wiki/backpropagation/)
[Backprop on Wikipedia](https://en.wikipedia.org/wiki/Backpropagation)
[A Step by Step Backpropagation Example](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/)