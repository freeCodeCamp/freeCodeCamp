---
title: Support Vector Machine
localeTitle: 支持向量机
---
## 支持向量机

支持向量机（SVM）是由分离超平面正式定义的判别分类器。换句话说，给定标记的训练数据（监督学习），算法输出最佳超平面，其对新示例进行分类。它通过最小化超平面附近的数据点之间的边距来实现这一点。

![SVM与逻辑回归](https://cdn-media-1.freecodecamp.org/imgr/KUeOSK3.png)

SVM成本函数试图用分段线性逼近逻辑函数。该ML算法用于分类问题，并且是监督学习算法子集的一部分。

### 成本函数

![SVM成本函数](https://cdn-media-1.freecodecamp.org/imgr/SOhv2jZ.png)

成本函数用于训练SVM。通过最小化J（theta）的值，我们可以确保SVM尽可能准确。在等式中，函数cost1和cost0指的是y = 1的示例的成本和y = 0的示例的成本。 SVM的成本由内核（相似性）函数决定。

### 仁

多项式特征可能在计算上很昂贵，并且可能会减慢大型数据集的运行时间。 不要添加更多的多项式特征，而是添加“地标”，用它来测试其他数据点的接近程度。 训练集的每个成员都是一个里程碑。 内核是“相似度函数”，用于衡量输入与特定标记的接近程度。

### 大边距分类器

SVM将找到以最大边距分割数据的线（或更一般情况下的超平面）。 虽然异常值可能会使线条向一个方向摆动，但足够小的C值将强制执行正则化。 这个新的正则化与1 / \\ lambda的作用相同，如线性和逻辑回归中所见，但在这里我们修改成本组件。

#### 更多信息：

[Andrew Ng的ML课程](https://www.coursera.org/learn/machine-learning/) [独立视频讲座](https://www.youtube.com/watch?v=1NxnPkZM9bc) [维基百科上的SVM](https://en.wikipedia.org/wiki/Support_vector_machine)

以下是为python中的SVM训练，预测和查找准确性而编写的代码。这是使用Numpy完成的，但是，我们也可以在函数调用中使用scikit-learn编写。

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

#### 更多信息：

[Scikit-learn SVM](http://scikit-learn.org/stable/modules/svm.html)