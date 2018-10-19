---
title: Deep Learning
localeTitle: Aprendizagem Profunda
---
## Aprendizagem Profunda

Deep Learning refere-se a uma técnica em Aprendizado de Máquina, na qual você tem muitas redes neurais artificiais empilhadas em alguma arquitetura.

Para os não iniciados, um neurônio artificial é basicamente uma função matemática de algum tipo. E as redes neurais são neurônios conectados uns aos outros. Então, em aprendizado profundo, você tem muitas funções matemáticas empilhadas em cima (ou ao lado) umas das outras em alguma arquitetura. Cada uma das funções matemáticas pode ter seus próprios parâmetros (por exemplo, uma equação de uma linha `y = mx + c` tem 2 parâmetros `m` e `c` ) que precisam ser aprendidos (durante o treinamento). Uma vez aprendida para uma dada tarefa (digamos, para classificar gatos e cães), esta pilha de funções matemáticas (neurônios) está pronta para fazer seu trabalho de classificar imagens de gatos e cães.

![Gato ou cachorro?](https://image.slidesharecdn.com/deeplearningfromanoviceperspective-150811155203-lva1-app6891/95/deep-learning-from-a-novice-perspective-3-638.jpg?cb=1439308391)

### Por que isso é um grande negócio?

Chegando com o conjunto de regras manualmente para algumas das tarefas pode ser muito complicado (embora teoricamente possível). Por exemplo, se você tentar escrever um conjunto manual de regras para classificar uma imagem (basicamente um monte de valores de pixel) de se ela pertence a um gato ou cachorro, você verá por que é complicado. Acrescente a isso o fato de que cães e gatos vêm em uma variedade de formas, tamanhos e cores, e, para não mencionar, as imagens podem ter origens diferentes. Você pode entender rapidamente porque codificar um problema tão simples pode ser problemático.

Deep Learning ajuda a resolver este problema de descobrir o conjunto de regras que podem classificar uma imagem como a de um gato ou um cachorro, automaticamente! Tudo o que é preciso é um monte de imagens que já estão corretamente classificadas como de um gato ou de um cachorro e que poderão aprender o conjunto de regras necessário. Magia!

Acontece que há muitos problemas por aí que não são relacionados à imagem (como o reconhecimento de voz), em que encontrar o conjunto de regras é muito complicado. Deep Learning pode ajudar com isso desde que haja muitos dados rotulados já presentes.

### Como treinar um modelo de aprendizagem profunda?

Treinar uma rede neural profunda (também conhecida como nossa pilha de funções matemáticas organizadas em alguma arquitetura) é basicamente uma arte com muitos hiper-parâmetros. Os hiper-parâmetros são basicamente coisas semelhantes às utilizadas em funções matemáticas, ou qual arquitetura usar, que você precisa calcular manualmente até que sua rede seja capaz de classificar com sucesso cães e gatos. Para treinar, você precisa de muitos dados rotulados (neste caso, muitas imagens já catalogadas como cães ou gatos) e muito poder de computação e paciência!

Para treinar, você fornece uma rede neural com uma função de perda que basicamente diz quão diferentes são os resultados da rede neural versus as respostas corretas. Dependendo do valor da função loss, você altera os parâmetros da função matemática de tal forma que na próxima vez que sua rede tentar classificar a mesma imagem, o valor da função loss será menor. Você continua encontrando o valor da função de perda e atualizando os parâmetros repetidamente em todo o conjunto de dados de treinamento até que os valores da função de perda estejam dentro de margens razoáveis. Sua enorme rede neural está pronta agora!

### Algumas arquiteturas de rede neural padrão

Nos últimos anos, alguns dos modelos (isto é, a combinação das funções matemáticas, a arquitetura e os parâmetros) tornaram-se padrão para determinadas tarefas. Por exemplo, um modelo chamado Resnet-152 ganhou o Imagenet Challenge em 2015, que envolve a tentativa de classificar imagens em 1000 categorias (incluindo cães e gatos). Se você estiver planejando fazer tarefas semelhantes, a recomendação é começar com esses modelos padrão e ajustá-los se eles não atenderem aos seus requisitos.

Um modelo resnet-152 se parece com isso (não se preocupe se você não entender isso. É apenas um monte de funções matemáticas empilhadas umas sobre as outras de uma maneira interessante):

![Modelo Resnet-152](https://adeshpande3.github.io/assets/ResNet.gif)

O Google tinha sua própria arquitetura de rede neural que ganhou a Imagenet desafiada em 2014. Que pode ser vista em um [gif aqui com mais detalhes](https://adeshpande3.github.io/assets/GoogleNet.gif) .

### Como implementar o seu próprio?

Atualmente, há uma variedade de estruturas de aprendizagem profunda que permitem especificar qual função matemática você deseja usar, qual arquitetura para suas funções e qual função de perda usar para o treinamento. Como o treinamento de tal modelo é muito intensivo em termos computacionais, a maioria desses frameworks gera código otimizado para qualquer hardware que você possa ter. Alguns dos famosos quadros são:

*   [Apache MXNet](https://mxnet.incubator.apache.org/)
*   [Tensorflow do Google](https://www.tensorflow.org/)
*   [Pytorch](http://pytorch.org//)
*   [Keras](https://keras.io/)
*   [Caffe2](https://caffe2.ai/)
*   [Gluon](https://github.com/gluon-api/gluon-api/)
*   [Theano](http://deeplearning.net/software/theano/)

### Mais Informações:

*   [Livro de Aprendizagem Profunda](http://www.deeplearningbook.org)
*   [Aprendizagem Profunda](https://en.wikipedia.org/wiki/Deep_learning)
*   [Guia FreeCodeCamp para redes neurais](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/neural-networks/index.md)
*   [Imagenet](http://image-net.org/)
*   [Um Guia para Principiantes do Entendimento de Redes Neurais Convolucionais](https://adeshpande3.github.io/adeshpande3.github.io/A-Beginner's-Guide-To-Understanding-Convolutional-Neural-Networks/)
*   [Aprendizado Profundo SIMPLIFICADO - DeepLearning.TV](https://www.youtube.com/playlist?list=PLjJh1vlSEYgvGod9wWiydumYl8hOXixNu)
*   [Redes Neurais e Aprendizagem Profunda](http://neuralnetworksanddeeplearning.com)
