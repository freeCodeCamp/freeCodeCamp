---
title: Neural Networks
localeTitle: Redes neurais
---
## Redes neurais

![Rede neural feed-forward](http://ufldl.stanford.edu/tutorial/images/SingleNeuron.png)

Uma rede neural artificial é um sistema de computação. Eles são como redes neurais biológicas que constituem cérebros de animais. Para treinar uma rede neural, precisamos de um vetor de entrada e um vetor de saída correspondente. O treinamento funciona minimizando um termo de erro. Esse erro pode ser a diferença quadrática entre a saída prevista e a saída original.

O princípio básico subjacente ao notável sucesso das redes neurais é "o Teorema da Aproximação Universal". Está matematicamente provado que as redes neurais são máquinas de aproximação universais que são capazes de aproximar qualquer função matemática entre a entrada e a saída dadas.

As redes neurais inicialmente se tornaram populares nos anos 80, mas as limitações no poder computacional proibiram sua ampla aceitação até a última década. As inovações no tamanho e na potência do CPU permitem a implementação da rede neural em escala, embora outros paradigmas de aprendizado de máquina ainda superem as redes neurais em termos de eficiência.

O elemento mais básico de uma rede neural é um neurônio. Sua entrada é um vetor, digamos `x` , e sua saída é uma variável de valor real, digamos `y` . Assim, podemos concluir que o neurônio atua como um mapeamento entre o vetor `x` e um número real `y` .

As redes neurais realizam a regressão iterativamente em várias camadas, resultando em um modelo de previsão com mais nuances. Um único nó em uma rede neural calcula exatamente a mesma função que [a regressão logística](../logistic-regression/index.md) . Todas essas camadas, além da entrada e saída, estão ocultas, ou seja, as características específicas representadas por essas camadas não são escolhidas ou modificadas pelo programador.

![Quatro redes neurais em camadas](http://cs231n.github.io/assets/nn1/neural_net2.jpeg)

Em qualquer camada, cada nó recebe todos os valores armazenados na camada anterior como entrada e faz previsões sobre eles com base em uma análise de regressão logística. O poder das redes neurais reside na sua capacidade de "descobrir" padrões e características não vistas pelos programadores. Como mencionado anteriormente, as camadas intermediárias estão "ocultas", significando que os pesos dados às transições são determinados exclusivamente pelo treinamento do algoritmo.

As redes neurais são usadas em várias tarefas. Estes incluem visão computacional, reconhecimento de voz, tradução, filtragem de redes sociais, jogos de vídeo e diagnóstico médico, entre outras coisas.

### Visualização

Há uma ferramenta incrível para ajudá-lo a entender a ideia de redes neurais sem qualquer [cálculo](http://playground.tensorflow.org) : o [TensorFlow Playground](http://playground.tensorflow.org) , um aplicativo da web que permite que você jogue com uma rede neural real em execução no navegador e clique em botões e parâmetros para ver como funciona.

### Problemas resolvidos usando redes neurais

*   Classificação
*   Clustering
*   Regressão
*   Detecção de anomalia
*   Regras de associação
*   Aprendizagem por reforço
*   Previsão estruturada
*   Engenharia de recursos
*   Aprendizagem de recursos
*   Aprendendo a classificar
*   Indução de gramática
*   Previsão do tempo
*   Gerando imagens

### Sistemas de Rede Neural Comum

As redes neurais mais comuns usadas hoje se enquadram na categoria de [aprendizagem profunda](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/deep-learning/index.md) . A aprendizagem profunda é o processo de encadear múltiplas camadas de neurônios para permitir que uma rede crie mapeamentos cada vez mais abstratos entre vetores de entrada e saída. As redes neurais profundas geralmente usarão a [propogação reversa](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/backpropagation/index.md) para convergir com o mapeamento mais preciso.

A segunda forma mais comum de redes neurais é a nueroevolução. Neste sistema, várias redes neurais são geradas aleatoriamente como estimativas iniciais. Em seguida, várias gerações de combinação das redes mais precisas e permutações aleatórias são usadas para convergir para um mapeamento mais preciso.

### Tipos de redes neurais

*   Rede Neural Recorrente (RNN)
*   Memória de longo e curto prazo (LSTM), um tipo de RNN
*   Rede Neural de Convolução (CNN)

### Mais Informações:

*   [Redes Neurais - Wikipedia](https://en.wikipedia.org/wiki/Artificial_neural_network#Components_of_an_artificial_neural_network)
*   [A natureza do código de Daniel Shiffman](http://natureofcode.com/book/chapter-10-neural-networks/)
*   [Universidade de Stanford, Redes Neurais Multicamadas](http://ufldl.stanford.edu/tutorial/supervised/MultiLayerNeuralNetworks/)
*   [3Blue1Brown, canal do Youtube com conteúdo de rede neural](https://youtu.be/aircAruvnKk)
*   [Siraj Raval, canal do Youtube com conteúdo de rede neural](https://youtu.be/h3l4qz76JhQ)
*   [Neuroevolução - Wikipedia](https://en.wikipedia.org/wiki/Neuroevolution)