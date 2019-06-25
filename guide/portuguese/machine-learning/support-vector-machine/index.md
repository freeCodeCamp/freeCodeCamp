---
title: Support Vector Machine
localeTitle: Máquina de vetores de suporte
---
## Máquina de vetores de suporte

Uma Máquina de Vetor de Suporte (SVM) é um classificador discriminativo formalmente definido por um hiperplano de separação. Em outras palavras, dados de treinamento rotulados (aprendizado supervisionado), o algoritmo gera um hiperplano ideal que categoriza novos exemplos. Isso é feito minimizando a margem entre os pontos de dados próximos ao hiperplano.

![SVM vs regressão logística](https://cdn-media-1.freecodecamp.org/imgr/KUeOSK3.png)

Uma função de custo SVM procura aproximar a função logística com um linear por partes. Este algoritmo ML é usado para problemas de classificação e faz parte do subconjunto de algoritmos de aprendizado supervisionado.

### A função de custo

![Função de Custo SVM](https://cdn-media-1.freecodecamp.org/imgr/SOhv2jZ.png)

A função custo é usada para treinar o SVM. Minimizando o valor de J (theta), podemos garantir que o SVM seja o mais preciso possível. Na equação, as funções custo1 e custo0 referem-se ao custo para um exemplo onde y = 1 e o custo para um exemplo onde y = 0. O custo, para SVMs, é determinado pelas funções do kernel (similaridade).

### Kernels

Recursos polinomiais são possivelmente computacionalmente caros e podem retardar o tempo de execução com grandes conjuntos de dados. Em vez de adicionar mais recursos polinomiais, adicione "pontos de referência" com os quais você testa a proximidade de outros pontos de dados. Cada membro do conjunto de treinamento é um marco. Um kernel é a "função de similaridade" que mede a proximidade de uma entrada a um determinado marcador.

### Classificador de Grandes Margens

Um SVM encontrará a linha (ou hiperplano no caso mais geral) que divide os dados com a maior margem. Enquanto outliers podem influenciar a linha em uma direção, um valor C pequeno o suficiente para garantir a regularização. Essa nova regularização funciona da mesma forma com 1 / lambda, como visto na regressão linear e logística, mas aqui modificamos o componente de custo.

#### Mais Informações:

[Curso de ML de Andrew Ng](https://www.coursera.org/learn/machine-learning/) [Palestra de Vídeo Independente](https://www.youtube.com/watch?v=1NxnPkZM9bc) [SVM na Wikipédia](https://en.wikipedia.org/wiki/Support_vector_machine)

A seguir, o código escrito para treinamento, previsão e precisão do SVM em Python. Isso é feito usando o Numpy, mas também podemos escrever usando o scikit-learn em apenas uma chamada de função.

```Python
import numpy as np 
 
 
 class Svm (object): 
    """" Svm classifier """ 
 
    def __init__ (self, inputDim, outputDim): 
        self.W = None 
 
        # - Generate a random svm weight matrix to compute loss                 # 
        #   with standard normal distribution and Standard deviation = 0.01.    # 
 
        sigma =0.01 
        self.W = sigma * np.random.randn(inputDim,outputDim) 
 
 
 
    def calLoss (self, x, y, reg): 
        """ 
        Svm loss function 
        D: Input dimension. 
        C: Number of Classes. 
        N: Number of example. 
        Inputs: 
        - x: A numpy array of shape (batchSize, D). 
        - y: A numpy array of shape (N,) where value < C. 
        - reg: (float) regularization strength. 
        Returns a tuple of: 
        - loss as single float. 
        - gradient with respect to weights self.W (dW) with the same shape of self.W. 
        """ 
        loss = 0.0 
        dW = np.zeros_like(self.W) 
 
        # - Compute the svm loss and store to loss variable.                        # 
        # - Compute gradient and store to dW variable.                              # 
        # - Use L2 regularization                                                  # 
 
        #Calculating score matrix 
        s = x.dot(self.W) 
        #Score with yi 
        s_yi = s[np.arange(x.shape[0]),y] 
        #finding the delta 
        delta = s- s_yi[:,np.newaxis]+1 
        #loss for samples 
        loss_i = np.maximum(0,delta) 
        loss_i[np.arange(x.shape[0]),y]=0 
        loss = np.sum(loss_i)/x.shape[0] 
        #Loss with regularization 
        loss += reg*np.sum(self.W*self.W) 
        #Calculating ds 
        ds = np.zeros_like(delta) 
        ds[delta > 0] = 1 
        ds[np.arange(x.shape[0]),y] = 0 
        ds[np.arange(x.shape[0]),y] = -np.sum(ds, axis=1) 
 
        dW = (1/x.shape[0]) * (xT).dot(ds) 
        dW = dW + (2* reg* self.W) 
 
 
        return loss, dW 
 
    def train (self, x, y, lr=1e-3, reg=1e-5, iter=100, batchSize=200, verbose=False): 
        """ 
        Train this Svm classifier using stochastic gradient descent. 
        D: Input dimension. 
        C: Number of Classes. 
        N: Number of example. 
        Inputs: 
        - x: training data of shape (N, D) 
        - y: output data of shape (N, ) where value < C 
        - lr: (float) learning rate for optimization. 
        - reg: (float) regularization strength. 
        - iter: (integer) total number of iterations. 
        - batchSize: (integer) number of example in each batch running. 
        - verbose: (boolean) Print log of loss and training accuracy. 
        Outputs: 
        A list containing the value of the loss at each training iteration. 
        """ 
 
        # Run stochastic gradient descent to optimize W. 
        lossHistory = [] 
        for i in range(iter): 
            xBatch = None 
            yBatch = None 
 
            # - Sample batchSize from training data and save to xBatch and yBatch   # 
            # - After sampling xBatch should have shape (batchSize, D)              # 
            #                  yBatch (batchSize, )                                 # 
            # - Use that sample for gradient decent optimization.                   # 
            # - Update the weights using the gradient and the learning rate.        # 
 
            #creating batch 
            num_train = np.random.choice(x.shape[0], batchSize) 
            xBatch = x[num_train] 
            yBatch = y[num_train] 
            loss, dW = self.calLoss(xBatch,yBatch,reg) 
            self.W= self.W - lr * dW 
            lossHistory.append(loss) 
 
            # Print loss for every 100 iterations 
            if verbose and i % 100 == 0 and len(lossHistory) is not 0: 
                print ('Loop {0} loss {1}'.format(i, lossHistory[i])) 
 
        return lossHistory 
 
    def predict (self, x,): 
        """ 
        Predict the y output. 
        Inputs: 
        - x: training data of shape (N, D) 
        Returns: 
        - yPred: output data of shape (N, ) where value < C 
        """ 
        yPred = np.zeros(x.shape[0]) 
 
        # -  Store the predict output in yPred                                    # 
 
        s = x.dot(self.W) 
        yPred = np.argmax(s, axis=1) 
        return yPred 
 
 
    def calAccuracy (self, x, y): 
        acc = 0 
 
        # -  Calculate accuracy of the predict value and store to acc variable 
        yPred = self.predict(x) 
        acc = np.mean(y == yPred)*100 
        return acc 
```

#### Mais Informações:

[Scikit-learn SVM](http://scikit-learn.org/stable/modules/svm.html)