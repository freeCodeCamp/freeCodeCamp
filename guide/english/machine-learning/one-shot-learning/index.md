---
title: One-Shot Learning
---

# One-Shot Learning

Humans learn new concepts with very little need for repetition – e.g. a child can generalize the concept
of a “monkey” from a single picture in a book, yet our best deep learning systems need hundreds or
thousands of examples to grasp any object even upto a point of decent accuracy. This motivates the setting we are interested in: “one-shot” learning, which
consists of learning a class from a single (or very few) labelled example.

There are various approaches to One-Shot learning such as [similarity functions](https://www.coursera.org/lecture/convolutional-neural-networks/one-shot-learning-gjckG), 
[Bayes' probability theorem](https://www.youtube.com/watch?v=FIjy3lV_KJU), DeepMind has come up with it's own version of Neural Networks using the One-Shot learning approach!

In particular, when presented with stimuli, people seem to be able to understand new concepts quickly and then recognize variations on these concepts in future percepts. Machine learning as a field has been highly successful at a variety of tasks such as classification, web search, image and speech recognition. Often times however, these models do not do very well in the regime of low data. ‘

This is the primary motivation behind One Shot Learning; to train a model with fewer examples but generalize to unfamiliar categories without extensive retraining.

One-shot learning can be used for object categorization problem in computer vision. Whereas most machine learning based object categorization algorithms require training on hundreds or thousands of images and very large datasets, one-shot learning aims to learn information about object categories from one, or only a few, training images.

One way of addressing problems in One Shot learning is to develop specific features relevant to the domain of the problem; features that possess discriminative properties particular to a given target task. However, the problem with this approach is the lack of generalization that comes along with making assumptions about the structure of the input data. In this project, we make use of an approach similar to while simultaneously evaluating different activation functions[KAFNETS] that may be better suited to this task. The overall strategy we apply is two fold; train a discriminative deep learning model on a collection of data with similar/dissimilar pairs. Then, using the learned feature mappings, we can evaluate new categories.

Since One Shot Learning focuses on models which have a nonparametric approach of evaluation, we came across Kafnets(kernel based non-parametric activation functions) that have shown initial promise in this domain of training neural networks using different forms of activation functions; so as to increase non-linearity, therefore decreasing the number of layers, and increasing the accuracy in a lot of cases. 


### More information:
* [Siraj Raval on YouTube](https://www.youtube.com/watch?v=FIjy3lV_KJU&feature=youtu.be)
* [Andrew Ng (Deeplearning.ai)](https://www.coursera.org/lecture/convolutional-neural-networks/one-shot-learning-gjckG)
* [Scholarly article](http://web.mit.edu/cocosci/Papers/Science-2015-Lake-1332-8.pdf)
* [Wikipedia](https://en.wikipedia.org/wiki/One-shot_learning)
* [One shot Learning using Siamese Network](https://medium.com/@shrutijadon10104776/why-i-feel-sad-being-woman-in-tech-3de052ba4fa1)
