---
id: 5e46f8dcac417301a38fb92e
title: 猫狗图像分类器
challengeType: 10
forumTopicId: 462377
dashedName: cat-and-dog-image-classifier
---

# --description--

你将<a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-cat-and-dog-image-classifier/blob/master/fcc_cat_dog.ipynb" target="_blank" rel="noopener noreferrer nofollow">使用 Google Colaboratory 来完成这个项目</a>。

进入该链接后，在你自己的账户或本地创建一个笔记本的副本。 一旦你完成项目并通过测试（包括在该链接），请在下面提交你的项目链接。 如果你提交的是 Google Colaboratory 的链接，请确保打开链接共享时选择 “anyone with the link”。

我们仍在开发机器学习课程的交互式课程部分。 现在，你可以通过这个认证中的视频挑战。 你可能还需要寻找额外的学习资源，类似于你在真实世界项目中的工作。

# --instructions--

在这个挑战中，你将完成代码，对狗和猫的图像进行分类。 你将使用 Tensorflow 2.0 和 Keras 创建一个卷积神经网络，该网络至少 63% 的时间可以正确分类猫和狗的图像。 (如果你能达到 70% 的准确率，可以加分！）

有些代码是给你的，但有些代码你必须填写才能完成这个挑战。 阅读每个文本单元中的指令，你就会知道你在每个代码单元中要做什么。

第一个代码单元导入所需的库。 第二个代码单元下载数据并设置关键变量。 第三个单元格是你要写自己代码的第一个地方。

下载的数据集文件的结构看起来是这样的（你会注意到，测试目录没有子目录，图像也没有标示）。

```py
cats_and_dogs
|__ train:
    |______ cats: [cat.0.jpg, cat.1.jpg ...]
    |______ dogs: [dog.0.jpg, dog.1.jpg ...]
|__ validation:
    |______ cats: [cat.2000.jpg, cat.2001.jpg ...]
    |______ dogs: [dog.2000.jpg, dog.2001.jpg ...]
|__ test: [1.jpg, 2.jpg ...]
```

如果你愿意，你可以调整历时和批次大小，但这不是必须的。

下面的指令对应于特定的单元格编号，在单元格的顶部用注释表示（如 `# 3`）。

## Cell 3

现在轮到你了！ 正确设置此单元格中的每个变量。 （它们不应再等于 `None`。）

为三个图像数据集（训练、验证、测试）中的每一个创建图像生成器。 使用 `ImageDataGenerator` 读取/解码图像并将它们转换为浮点张量。 使用 `rescale` 参数（目前没有其他参数）将张量从 0 到 255 之间的值重新缩放到 0 到 1 之间的值。

对于 `*_data_gen` 变量，使用 `flow_from_directory` 方法。 传入批处理大小、目录、目标大小（`(IMG_HEIGHT, IMG_WIDTH)`）、类模式以及其他所需的内容。 `test_data_gen` 将是最棘手的一个。 对于 `test_data_gen`，确保将 `shuffle=False` 传递给 `flow_from_directory` 方法。 这将确保最终预测保持在我们的测试预期的顺序。 对于 `test_data_gen`，观察目录结构也很有帮助。


运行代码后，输出应如下所示：

```py
Found 2000 images belonging to 2 classes.
Found 1000 images belonging to 2 classes.
Found 50 images belonging to 1 class.
```

## Cell 4

`plotImages` 函数将多次用于绘制图像。 它需要一个图像数组和一个概率列表，尽管概率列表是可选的。 此代码已提供给你。 如果你正确地创建了 `train_data_gen` 变量，那么运行这个单元将绘制五个随机训练图像。

## Cell 5

使用 `ImageDataGenerator` 重新创建 `train_image_generator`。

由于训练样本数量很少，因此存在过度拟合的风险。 解决此问题的一种方法，是通过使用随机变换，从现有训练示例创建更多训练数据。

添加 4-6 个随机变换作为 `ImageDataGenerator` 的参数。 确保重新缩放与以前相同。

## Cell 6

你无需为此单元做任何事情。 `train_data_gen` 与以前一样创建，但使用新的 `train_image_generator`。 然后，使用不同的变化对单个图像进行五次不同的绘制。

## Cell 7

在此单元格中，为输出类别概率的神经网络创建一个模型。 它应该使用 Keras Sequential 模型。 它可能会涉及一堆 Conv2D 和 MaxPooling2D 层，然后是一个由 ReLU 激活函数激活的全连接层。

编译模型并传递参数以设置优化器和损失。 同时传入 `metrics=['accuracy']` 以查看每个训练周期的训练和验证精度。

## Cell 8

使用 `model` 上的 `fit` 方法来训练网络。 确保为 `x`、`steps_per_epoch`、`epochs`、`validation_data` 和 `validation_steps` 传入参数。

## Cell 9

运行这个单元来观察模型的准确性和损失。

## Cell 10

现在是时候使用你的模型，来预测一个全新的图像，是猫还是狗了。

在此单元格中，获取每个测试图像（来自 `test_data_gen`）是狗或猫的概率。 `probabilities` 应该是一个整数列表。

调用 `plotImages` 函数并传入测试图像和每个测试图像对应的概率。

在你运行该单元后，你应该看到所有 50 张测试图像，并有一个标签显示该图像是猫还是狗的“确定”百分比。 准确度将对应于上图中显示的准确度（在运行上一个单元格之后）。 更多的训练图像可能会导致更高的准确性。

## Cell 11

运行这个最后的单元格，看看你是否通过了挑战，或者你是否需要继续努力。

# --hints--

它应该通过所有的 Python 测试。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
