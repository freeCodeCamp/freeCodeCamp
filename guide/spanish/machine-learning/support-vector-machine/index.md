---
title: Support Vector Machine
localeTitle: Máquinas de vectores soporte
---
## Máquinas de vectores soporte

Una Máquina de vectores de soporte (SVM) es un clasificador discriminativo definido formalmente por un hiperplano separador. En otras palabras, dados los datos de entrenamiento etiquetados (aprendizaje supervisado), el algoritmo genera un hiperplano óptimo que categoriza nuevos ejemplos. Para ello, minimiza el margen entre los puntos de datos cerca del hiperplano.

![SVM vs regresión logística](https://cdn-media-1.freecodecamp.org/imgr/KUeOSK3.png)

Una función de costo SVM busca aproximar la función logística con un lineal por tramos. Este algoritmo ML se usa para problemas de clasificación y es parte del subconjunto de algoritmos de aprendizaje supervisado.

### La función de costo

![Función de costo SVM](https://cdn-media-1.freecodecamp.org/imgr/SOhv2jZ.png)

La función de costo se utiliza para entrenar a la SVM. Al minimizar el valor de J (theta), podemos garantizar que el SVM sea lo más preciso posible. En la ecuación, las funciones cost1 y cost0 se refieren al costo de un ejemplo donde y = 1 y el costo de un ejemplo donde y = 0. El costo, para los SVM, está determinado por las funciones del kernel (similitud).

### Kernels

Las características polinomiales son posiblemente computacionales caras y pueden ralentizar el tiempo de ejecución con grandes conjuntos de datos. En lugar de agregar más características polinomiales, agregue "puntos de referencia" contra los cuales se prueba la proximidad de otros puntos de datos. Cada miembro del conjunto de entrenamiento es un hito. Un kernel es la "función de similitud" que mide qué tan cerca está una entrada de un determinado marcador.

### Clasificador de margen grande

Un SVM encontrará la línea (o hiperplano en el caso más general) que divide los datos con el margen más grande. Mientras que los valores atípicos pueden desviar la línea en una dirección, un valor C suficientemente pequeño impondrá la regularización. Esta nueva regularización funciona de la misma manera con 1 / \\ lambda, como se ve en la regresión lineal y logística, pero aquí modificamos el componente del costo.

#### Más información:

[Curso de Andrew Ng's ML](https://www.coursera.org/learn/machine-learning/) [Video conferencia independiente](https://www.youtube.com/watch?v=1NxnPkZM9bc) [SVM en Wikipedia](https://en.wikipedia.org/wiki/Support_vector_machine)

El siguiente es el código escrito para entrenamiento, predicción y precisión de SVM en python. Esto se hace usando Numpy, sin embargo, también podemos escribir usando scikit-learn en solo una llamada de función.

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

#### Más información:

[Scikit-learn SVM](http://scikit-learn.org/stable/modules/svm.html)