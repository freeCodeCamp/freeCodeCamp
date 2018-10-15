---
title: Generative Adversarial Networks
localeTitle: 生成性对抗网络
---
## 生成性对抗网络

## 概观

生成对抗网络（GAN）是一类用于[无监督机器学习的](https://en.wikipedia.org/wiki/Unsupervised_machine_learning) [人工智能](https://en.wikipedia.org/wiki/Artificial_intelligence)算法，由在零和游戏框架中相互竞争的两个[神经网络](https://en.wikipedia.org/wiki/Neural_network)系统实现。他们是由Ian Goodfellow等人介绍的。这种技术可以生成至少对人类观察者来说表面上看起来真实的照片，具有许多现实特征（尽管在测试中人们可以从许多情况下的生成中看出真实的）。

## 方法

一个网络生成候选（生成），另一个网络[评估它们](https://en.wikipedia.org/wiki/Turing_test) （判别）。通常，生成网络学习从[潜在空间](https://en.wikipedia.org/wiki/Latent_variable)映射到感兴趣的特定数据分布，而判别网络区分真实数据分布的实例和生成器产生的候选。生成网络的训练目标是增加判别网络的错误率（即，通过产生似乎来自真实数据分布的新颖合成实例来“欺骗”鉴别器网络）。

实际上，已知数据集用作鉴别器的初始训练数据。训练鉴别器涉及向数据集提供样本，直到达到某种程度的准确性。通常，发生器接种有随机输入，该随机输入从预定义的潜在空间（例如， [多变量正态分布](https://en.wikipedia.org/wiki/Multivariate_normal_distribution) ）采样。此后，由鉴别器评估由发生器合成的样品。在两个网络中应用[反向传播](https://en.wikipedia.org/wiki/Backpropagation) ，使得生成器产生更好的图像，而鉴别器在标记合成图像方面变得更加熟练。生成器通常是反卷积神经网络，鉴别器是[卷积神经网络](https://en.wikipedia.org/wiki/Convolutional_neural_network) 。

2013年，Li，Gauci和Gross提出了在竞争环境中推断模型（模型与鉴别器）的想法。他们的方法用于行为推理。它被称为图灵学习，因为设置类似于[图灵测试](https://en.wikipedia.org/wiki/Turing_test) 。图灵学习是GAN的概括。可以考虑除神经网络之外的模型。此外，允许鉴别器影响获得数据集的过程，使其成为图灵测试中的主动询问器。对抗训练的想法也可以在早期的作品中找到，例如1992年的Schmidhuber。

## 应用

GAN已经被用于生成[照片级真实感](https://en.wikipedia.org/wiki/Photorealistic)图像的样本，以便可视化新的内部/工业设计，鞋子，包和服装项目或用于计算机游戏场景的物品。据报道，这些网络将被Facebook使用。最近，GAN已经模拟了视频中的运动模式。它们还被用于从图像重建物体的3D模型并改善天文图像。 2017年，使用完全卷积前馈GAN，使用自动纹理合成和感知损失进行图像增强。该系统专注于逼真的纹理，而不是像素精度。结果是在高放大率下具有更高的图像质量。