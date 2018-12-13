---
title: scikit-learn
---
## Scikit-learn

Scikit-learn is a popular open-source machine learning library for Python, built off of previous packages like numpy and scipy. There is code available to handle everything from importing data and data cleaning to model preparation and testing. 

The library contains algorithms for both supervised and unsupervised learning, which can be easily integrated into your own code. Furthermore, many other helpful tools are offered which support model selection (e.g. Cross Validation or Grid Search) or data preparation (e.g. normalization, creation of categorical features).

It is completely open source: [scikitlearn on github](https://github.com/scikit-learn/scikit-learn)


## Installation

To install scikit-learn in a conda environment: `conda install scikit-learn` <br>
To install scikit-learn with pip: `pip install scikit-learn`


## Utilization - Example

Suppose a K-mean clustering is to be performed. The data has already been divided into a training and a test data set. Training data is in the variable *train* and test data in the variable *test*.

First the respective algorithm must be imported:
```python
from sklearn.cluster import KMeans
```
Then an instance of the estimator (here the algorithm) must be created:
```python
km = KMeans()
```
Within the brackets it would of course be possible to specify the parameters of the algorithm more precisely and, for example, to adjust the number of clusters to be considered or to specify the maximum number of iterations. If these parameters are not specified, the default will be used.

After that the Estimator must be trained:
```python
km.fit(train)
```
The course data is used for the course. In the documentation of scikitlearn (e.g. [KMeans](http://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html#sklearn.cluster.KMeans)) the methods of all algorithms can be read easily. For example, it would also be possible to directly query the forecast for the training data with:

```python
km.fit_predict(train).
```

The trained algorithm can now be used to calculate the test data labels.


```python
km.predict(test).
```

In case of supervised learning the quality of the results can be determined. scikit-learn offers methods like [r2_score](http://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html) or [accuracy_score](http://scikit-learn.org/stable/modules/generated/sklearn.metrics.accuracy_score.html).


## Popular models provided by scikit-learn
* Clustering
* Ensemble Methods
* Support Vector Machines
* Nearest Neighbors
* Naive Bayes 
* Decision Trees
* Neural Networks

#### More Information

- [Scikit-learn main page](http://scikit-learn.org/stable/)
- [Tutorials](http://scikit-learn.org/stable/tutorial/index.html)
