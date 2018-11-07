---
title: Deep Learning
---
## Deep Learning
Deep Learning refers to a technique in Machine Learning where you have a lots of artificial neural networks stacked together in some architecture.

To the uninitiated, an artificial neuron is basically a mathematical function of some sort. And neural nets are neurons connected to each other.  So in deep learning, you have lots of mathematical functions stacked on top (or on the side) of each other in some architecture. Each of the mathematical functions may have its own parameters (for an instance, an equation of a line `y = mx + c` has 2 parameters `m` and `c`) which need to be learned (during training). Once learned for a given task (say for classifying cats and dogs), this stack of mathematical functions (neurons) is ready to do its work of classifying images of cats and dogs.

![Cat or a dog?](https://image.slidesharecdn.com/deeplearningfromanoviceperspective-150811155203-lva1-app6891/95/deep-learning-from-a-novice-perspective-3-638.jpg?cb=1439308391)

### Why is it a big deal?
Coming up with set of rules manually for some of the tasks can very tricky (though theoretically possible). For instance, if you try to write a manual set of rules in order to classify an image (basically bunch of pixel values) of whether it belongs to a cat or dog, you'll see why it is tricky. Add to that the fact that dogs and cats come in variety of shapes, sizes and colors, and, not to mention, the images can have different backgrounds. You can quickly understand why coding such a simple problem can be problematic.

Deep Learning helps tackle this problem of figuring out the set of rules that can classify an image as that of a cat or a dog, automatically! All it needs is bunch of images that are already correctly classified as that of a cat or a dog and it'll be able to learn the required set of rules. Magic!

Turns out that there are a lot of problems out there which are not image-related (like voice recognition), where finding the set of rules is very tricky. Deep Learning can help with that provided there is lot of labelled data already present.

### How to train a deep learning model?
Training a deep neural network (a.k.a. our stack of mathematical functions arranged in some architecture) is basically an art with lot of hyper-parameters. Hyper-parameters are basically things such as which mathematical function to use, or which architecture to use, that you need to manually figure until your network is able to successfully classify cats and dogs. In order to train, you need lots of labelled data (in this case lots of images already classified as cats or dogs) and lots computing power and patience!

In order to train, you provide a neural network with a loss function which basically says how different are the results of the neural network vs the correct answers. Depending on the value of the loss function, you change the parameters of the mathematical function in such a way that the next time your network tries to classify the same image, the value of loss function is lower. You keep on finding the value of the loss function and updating the parameters again and again across the entire training data set until the loss function values are within reasonable margins. Your massive neural network is now ready!

### Some standard Neural Network architectures
Over the past few years, some of the models (i.e. the combination of the mathematical functions, the architecture, and the parameters) have become standard for certain tasks. For instance, a model called Resnet-152 won the Imagenet Challenge in 2015 which involves trying to classify images into 1000 categories (cats and dogs included). If you are planning to do similar tasks, then the recommendation is to start with such standard models and tweak them if they don't meet your requirements.

A resnet-152 model looks like this (Don't worry if you don't understand it. It's just bunch of mathematical functions stacked on top of each other in some interesting fashion):

![Resnet-152 Model](https://adeshpande3.github.io/assets/ResNet.gif)


Google had its own neural network architecture that won the Imagenet challenged in 2014. Which can be seen in a <a href="https://adeshpande3.github.io/assets/GoogleNet.gif">gif here in more detail</a>.


### How to implement your own?
These days there are a variety of deep learning frameworks that allow you specify which mathematical function you want to use, which architecture for your functions, and which loss function to use for training. Since the training of such a model is very computationally intensive, most of these frameworks generate code optimized for whatever hardware you may have. Some of the famous frameworks are:

* <a href="https://mxnet.incubator.apache.org/">Apache MXNet</a>
* <a href="https://www.tensorflow.org/">Google's Tensorflow</a>
* <a href="http://pytorch.org//">Pytorch</a>
* <a href="https://keras.io/">Keras</a>
* <a href="https://caffe2.ai/">Caffe2</a>
* <a href="https://github.com/gluon-api/gluon-api/">Gluon</a>
* <a href="http://deeplearning.net/software/theano/">Theano</a>

### More Information:
* <a href="http://www.deeplearningbook.org">Deep Learning Textbook</a>
* <a href="https://en.wikipedia.org/wiki/Deep_learning">Deep Learning</a>
* <a href="https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/neural-networks/index.md">FreeCodeCamp Guide to Neural Networks</a>
* <a href="http://image-net.org/">Imagenet</a>
* <a href="https://adeshpande3.github.io/adeshpande3.github.io/A-Beginner's-Guide-To-Understanding-Convolutional-Neural-Networks/">A Beginner's Guide To Understanding Convolutional Neural Networks</a>
* <a href="https://www.youtube.com/playlist?list=PLjJh1vlSEYgvGod9wWiydumYl8hOXixNu">Deep Learning SIMPLIFIED - DeepLearning.TV</a>
* <a href="http://neuralnetworksanddeeplearning.com"> Neural Networks and Deep Learning</a>
