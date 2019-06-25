---
title: Support Vector Machine
localeTitle: Машина опорных векторов
---
## Машина опорных векторов

Поддержка векторной машины (SVM) является дискриминационным классификатором, формально определяемым разделительной гиперплоскостью. Другими словами, с учетом помеченных данных обучения (контролируемое обучение) алгоритм выводит оптимальную гиперплоскость, которая классифицирует новые примеры. Он делает это, сводя к минимуму разницу между точками данных вблизи гиперплоскости.

![SVM против логистической регрессии](https://cdn-media-1.freecodecamp.org/imgr/KUeOSK3.png)

Функция стоимости SVM стремится аппроксимировать логистическую функцию кусочно-линейной. Этот алгоритм ML используется для задач классификации и является частью поднабора контролируемых алгоритмов обучения.

### Функция затрат

![Функция стоимости SVM](https://cdn-media-1.freecodecamp.org/imgr/SOhv2jZ.png)

Функция затрат используется для обучения SVM. Минимизируя значение J (theta), мы можем гарантировать, что SVM является настолько точным, насколько это возможно. В уравнении функции cost1 и cost0 относятся к стоимости для примера, где y = 1, и стоимости для примера, где y = 0. Стоимость для SVM определяется функциями ядра (подобия).

### Ядра

Полиномиальные функции, возможно, дорогостоящие вычисления и могут замедлить время работы с большими наборами данных. Вместо добавления более многочленных функций добавьте «ориентиры», против которых вы проверяете близость других точек данных. Каждый член учебного набора является ориентиром. Ядро - это «функция подобия», которая измеряет, насколько близко вход к определенному маркеру.

### Большой классификатор маржи

SVM найдет линию (или гиперплоскость в более общем случае), которая разбивает данные с наибольшим запасом. Хотя выбросы могут влиять на линию в одном направлении, достаточно небольшое значение C будет обеспечивать регуляризацию. Эта новая регуляризация работает одинаково с 1 / \\ lambda, как видно из линейной и логистической регрессии, но здесь мы модифицируем компонент затрат.

#### Дополнительная информация:

[Курс Эндрю Нг](https://www.coursera.org/learn/machine-learning/) [Автономная лекция](https://www.youtube.com/watch?v=1NxnPkZM9bc) [SVM в Википедии](https://en.wikipedia.org/wiki/Support_vector_machine)

Ниже приведен код, написанный для обучения, прогнозирования и нахождения точности для SVM в python. Это делается с помощью Numpy, однако мы также можем писать с помощью scikit-learn только в вызове функции.

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

#### Дополнительная информация:

[Scikit-learn SVM](http://scikit-learn.org/stable/modules/svm.html)