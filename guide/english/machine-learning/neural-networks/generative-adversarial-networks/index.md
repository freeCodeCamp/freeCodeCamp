---
title: Generative Adversarial Networks
---
## Generative Adversarial Networks  

## Overview
Generative adversarial networks (GANs) are a class of [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence) algorithms used in [unsupervised machine learning](https://en.wikipedia.org/wiki/Unsupervised_machine_learning), implemented by a system of two [neural networks](https://en.wikipedia.org/wiki/Neural_network) contesting with each other in a zero-sum game framework. They were introduced by Ian Goodfellow et al. in 2014. This technique can generate photographs that look at least superficially authentic to human observers, having many realistic characteristics (though in tests people can tell real from generated in many cases).

## Method
One network generates candidates (generative) and the other [evaluates them](https://en.wikipedia.org/wiki/Turing_test)(discriminative). Typically, the generative network learns to map from a [latent space](https://en.wikipedia.org/wiki/Latent_variable) to a particular data distribution of interest, while the discriminative network discriminates between instances from the true data distribution and candidates produced by the generator. The generative network's training objective is to increase the error rate of the discriminative network (i.e., "fool" the discriminator network by producing novel synthesised instances that appear to have come from the true data distribution).

In practice, a known dataset serves as the initial training data for the discriminator. Training the discriminator involves presenting it with samples from the dataset, until it reaches some level of accuracy. Typically the generator is seeded with a randomized input that is sampled from a predefined latent space (e.g. a [multivariate normal distribution](https://en.wikipedia.org/wiki/Multivariate_normal_distribution)). Thereafter, samples synthesized by the generator are evaluated by the discriminator. [Backpropagation](https://en.wikipedia.org/wiki/Backpropagation) is applied in both networks so that the generator produces better images, while the discriminator becomes more skilled at flagging synthetic images. The generator is typically a deconvolutional neural network, and the discriminator is a [convolutional neural network](https://en.wikipedia.org/wiki/Convolutional_neural_network). 

The idea to infer models in a competitive setting (model versus discriminator) was proposed by Li, Gauci and Gross in 2013. Their method is used for behavioral inference. It is termed Turing Learning, as the setting is akin to that of a [Turing test](https://en.wikipedia.org/wiki/Turing_test). Turing Learning is a generalization of GANs. Models other than neural networks can be considered. Moreover, the discriminators are allowed to influence the processes from which the datasets are obtained, making them active interrogators as in the Turing test. The idea of adversarial training can also be found in earlier works, such as Schmidhuber in 1992.

## Application
GANs have been used to produce samples of [photorealistic](https://en.wikipedia.org/wiki/Photorealistic) images for the purposes of visualizing new interior/industrial design, shoes, bags and clothing items or items for computer games' scenes. These networks were reported to be used by Facebook. Recently, GANs have modeled patterns of motion in video. They have also been used to reconstruct 3D models of objects from images and to improve astronomical images. In 2017 a fully convolutional feedforward GAN was used for image enhancement using automated texture synthesis in combination with perceptual loss. The system focused on realistic textures rather than pixel-accuracy. The result was a higher image quality at high magnification.

#### More Information
 - [Generative adversarial networks demystified](https://towardsdatascience.com/demystifying-generative-adversarial-networks-c076d8db8f44)

