---
title: Neural Networks
---
## Neural Networks
![Feed-forward neural network](http://ufldl.stanford.edu/tutorial/images/SingleNeuron.png)

An artificial neural network is a computing system. They are like biological neural networks that constitute animal brains. 
To train a neural network, we need an input vector and a corresponding output vector.
The training works by minimizing an error term. This error can be the squared difference between the predicted output and the original output.

The basic principle which underlies the remarkable success of neural networks is 'The Universal Approximation Theorem'. It has been mathematically proven thet the neural networks are universal approximation machines which are capable of approximating any mathematical function between the given input and output.

Neural networks initially became popular in the 1980s, but limitations in computational power prohibited their widespread acceptance until the past decade.
Innovations in CPU size and power allow for neural network implementation at scale, though other machine learning paradigms still outrank neural networks in terms of efficiency.

The most basic element of a neural network is a neuron. It's input is a vector, say `x`, and its output is a real valued variable, say `y`. Thus, we can conclude that the neuron acts as a mapping between the vector `x` and a real number `y`.

Neural networks perform regression iteratively across multiple layers, resulting in a more nuanced prediction model.
A single node in a neural network computes the exact same function as [logistic regression](../logistic-regression/index.md).
All these layers, aside from the input and output, are hidden, that is, the specific traits represented by these layers are not chosen or modified by the programmer.

![Four Layered Neural Network](http://cs231n.github.io/assets/nn1/neural_net2.jpeg)

In any given layer, each node takes all values stored in the previous layer as input and makes predictions on them based on a logistic regression analysis. 
The power of neural networks lies in their ability to "discover" patterns and traits unseen by programmers. 
As mentioned earlier, the middle layers are "hidden," meaning the weights given to the transitions is determined exclusively by the training of the algorithm.

Neural networks are used on a variety of tasks. These include computer vision, speech recognition, translation, social network filtering, playing video games, and medical diagnosis among other things.

### Visualization

There's an awesome tool to help you grasp the idea of neural networks without any hard math: <a href='http://playground.tensorflow.org' target='_blank' rel='nofollow'>TensorFlow Playground</a>, a web app that lets you play with a real neural network running in your browser and click buttons and tweak parameters to see how it works.

### Problems solved using Neural Networks
- Classification
- Clustering
- Regression
- Anomaly detection 
- Association rules 
- Reinforcement learning 
- Structured prediction 
- Feature engineering 
- Feature learning 
- Learning to rank
- Grammar induction
- Weather prediction
- Generating images

### Common Neural Network Systems

The most common Neural Networks used today fall into the [deep learning](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/deep-learning/index.md) category. Deep learning is the process of chaining multiple layers of neurons to allow a network to create increasingly abstract mappings between input and output vectors. Deep neural networks will most commonly use [back propogation](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/backpropagation/index.md) in order to converge upon the most accurate mapping.

The second most common form of neural networks is neuroevolution. In this system multiple neural networks are randomly generated as initial guesses. Then multiple generations of combining the accurate most networks and random permutations are used to converge upon a more accurate mapping. 

### Types of Neural Networks
- Recurrent Neural Network (RNN)
- Long-short Term Memory (LSTM), a type of RNN
- Convolutional Neural Network (CNN)

### More Information:
- [Neural Networks - Wikipedia](https://en.wikipedia.org/wiki/Artificial_neural_network#Components_of_an_artificial_neural_network)
- [Daniel Shiffman's Nature of Code](http://natureofcode.com/book/chapter-10-neural-networks/)
- [Stanford University, Multilayer Neural Networks](http://ufldl.stanford.edu/tutorial/supervised/MultiLayerNeuralNetworks/)
- [3Blue1Brown, Youtube Channel with Neural Network content](https://youtu.be/aircAruvnKk)
- [Siraj Raval, Youtube CHannel with Neural Network content](https://youtu.be/h3l4qz76JhQ)
- [Neuroevolution - Wikipedia](https://en.wikipedia.org/wiki/Neuroevolution)
