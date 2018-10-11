---
title: Support Vector Machine
---
## Support Vector Machine

A Support Vector Machine (SVM) is a discriminative classifier formally defined by a separating hyperplane. In other words, given labeled training data (supervised learning), the algorithm outputs an optimal hyperplane which categorizes new examples. It does this by minimizing the margin between the data points near the hyperplane.

![SVM vs logistic regression](https://i.imgur.com/KUeOSK3.png)

A SVM cost function seeks to approximate the logistic function with a piecewise linear. This ML algorithm is used for classification problems and is part of the subset of supervised learning algorithms.

### The Cost Function

![SVM Cost Function](https://i.imgur.com/SOhv2jZ.png)

The Cost Function is used to train the SVM. By minimizing the value of J(theta), we can ensure that the SVM is as accurate as possible. In the equation, the functions cost1 and cost0 refer to the cost for an example where y=1 and the cost for an example where y=0. Cost, for SVMs, is determined by kernel (similarity) functions.

### Kernels

Polynomial features are possibly computationally expensive and may slow down runtime with large datasets.
Rather than adding more polynomial features, add "landmarks" against which you test the proximity of other datapoints.
Each member of the training set is a landmark.
A kernel is the "similarity function" that measures how close an input is to a certain marker.

### Large Margin Classifier
An SVM will find the line (or hyperplane in the more general case) that splits the data with the largest margin.
While outliers may sway the line to one direction, a small enough C value will enforce regularization. 
This new regularizing works the same with 1/\lambda, as seen in linear and logistic regression, but here we modify the cost component.


#### More Information:
[Andrew Ng's ML Course](https://www.coursera.org/learn/machine-learning/)
[Standalone Video Lecture](https://www.youtube.com/watch?v=1NxnPkZM9bc)
[SVM on Wikipedia](https://en.wikipedia.org/wiki/Support_vector_machine)


The following is the code written for training, predicting and finding accuracy for SVM in python. This is done using Numpy, however, we can also write using scikit-learn in just a function call.

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

        dW = (1/x.shape[0]) * (x.T).dot(ds)
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

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='http://scikit-learn.org/stable/modules/svm.html' target='_blank' rel='nofollow'>Scikit-learn SVM</a>

