---
title: Recurrent Neural Networks
---
## Recurrent Neural Networks

RNNs work with sequential data, where each neuron receives an input vector (x_t) as well as the output vector (O_t) of the previous time step. Graphically, they're either presented where the neurons are "stacked" on top of each other, or "unfolded" where the sequential time steps are shown explicitly. In RNNs, there are two sets of weights, one for the input vector and one for the output vector. 

RNNs make use of the contextual information embedded in sequences. This is thematically similar to CNNs and how they are advantaged in learning images (by picking up contextual information of nearby pixels) over a normal feedforward neural network that might evaluate each pigment individually. To make this more concrete, if you had a sentence "the fox jumps over the ..." and were asked to predict the next word, the preceding five words strongly suggest that the next word should be a noun instead of a verb. That's the power of context! 

![Unfolded RNN](https://upload.wikimedia.org/wikipedia/commons/b/b5/Recurrent_neural_network_unfold.svg)

In this diagram, x_t is the input vector at "time" step t. U_x is the learned weighting vector for input vecotr x_t. Similarly, O_t is the output vector at "time" step t, and W_o is its learned weighting vector. The h_t denotes the hidden state of the neuron, which is a function of its preceding hidden state (h_{t-1}) and the x_t. Generically, this means that h_t = function(h_{t-1}, x_t). 

#### More Information:
- [Princeton Zhirong Wu, 2015 Slides](http://3dvision.princeton.edu/courses/COS598/2015sp/slides/RNN/RNN.pdf)
- [Princeton COS 495, Instructor Yingyu Liang](https://www.cs.princeton.edu/courses/archive/spring16/cos495/slides/DL_lecture9_RNN.pdf)
- [Edward Chen on LSTM](http://blog.echen.me/2017/05/30/exploring-lstms/)
