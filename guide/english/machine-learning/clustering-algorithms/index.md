---
title: Clustering Algorithms
--- 
# Clustering Algorithms
Clustering is the process of dividing data into separated groups (clusters), while ensuring that:
- Each cluster contains similar objects
- Objects which do not belong to the same clusters are not similar

Clustering algorithms help find structure in a collection of unlabelled data and fall in the category of unsupervised learning. 

The difficulty lies in the definition of a similarity measure that can separate the data in the way you want. For instance, a group of persons can be separated by gender, hair color, weight, race, etc.

Clustering algorithms have the task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar (in some sense or another) to each other than to those in other groups (clusters). It is a main task of exploratory data mining, and a common technique for statistical data analysis. It's used in many fields, including machine learning, pattern recognition, image analysis, information retrieval, bioinformatics, data compression, and computer graphics.

Some applications of clustering algorithms include:
* Grouping consumers according to their purchase patterns
* Grouping photos of animals of the same kind together
* Classification of different types of documents 

## Types of Clustering Algorithms:
1. Connectivity-based clustering (hierarchical clustering)
2. Centroid-based or point assignment clustering (k-means clustering)
3. Distribution-based clustering 
4. Density-based clustering 

Some examples of clustering algorithms are:
1. Agglomerative clustering
2. K-means clustering
3. K-mediods clustering
4. Partition Clustering

### Hierarchical Clustering
There are methods for clustering that only use similarities of instances, without any other requirement on the data; the aim is to find groups such that instances in a group are more similar to each other than instances in different groups. This is the approach taken by hierarchical clustering.

This needs the use of a similarity, or equivalently a distance, measure defined between instances.  Generally Euclidean distance is used, where one has to make sure that all attributes have the same scale.

There are two main types of Hierarchical clustering which are used:
1. Agglomerative Clustering - This algorithm starts with a bunch of individual clusters and a proximity matrix. Here, the individual clusters are basically individual points, and the matrix is for the distance between each point with each other points. The algorithm tries to find the closest pair of clusters and then combines them into one cluster, and then update the proximity matrix with the new cluster and removes the two combined clusters. This step is repeated until a single cluster is left. The most important part of this algorithm is the proximity matrix and its updatation.
2. Divisive Clustering - This algorithm can be called an opposite of Agglomerative in terms of how it approachs clustering. It starts with a single cluster and then starts dividing it into multiple clusters. It has a similarity matrix between each point, similarity here being how close the clusters are with each other. This algorithm tries to divide the cluster into two clusters based on how dissimilar a cluster or a point is from the rest. This is continued until there are multiple individual clusters.

### Point Assignment
This method maintains a set of clusters, and it places points to nearest clusters.

## Specific Clustering Algorithms

### K-Means Clustering

K-means algorithm is a popular clustering algorithm since it is relatively simple and fast, as opposed to other clustering algorithms. The algorithm is defined as the following:

1. Decide input parameter k (number of clusters)
2. Pick k random data points to use as centroids
3. Compute distances for all data points to each k centroids, and assign each data point to a cluster containing the closest centroid
4. Once all data points have been classified, compute the midpoint of all points for each cluster and assign as new centroid
5. Repeat steps 3 and 4 until the centroids converge upon certain k points.

Since we only need to calculate k x n distances (rather than n(n-1) distances for knn algorithm), this algorithm is quite scalable.

Here's a clustering example in Python that uses the [Iris Dataset](https://www.kaggle.com/uciml/iris)

```python
import pandas as pd
import numpy as np
iris = pd.read_csv('Iris.csv')
del iris['Id']
del iris['SepalLengthCm']
del iris['SepalWidthCm']

from matplotlib import pyplot as plt
# k is the input parameter set to the number of species
k = len(iris['Species'].unique())
for i in iris['Species'].unique():
    # select only the applicable rows
    ds = iris[iris['Species'] == i]
    # plot the points
    plt.plot(ds[['PetalLengthCm']],ds[['PetalWidthCm']],'o')
plt.title("Original Iris by Species")
plt.show()

from sklearn import cluster
del iris['Species']
kmeans = cluster.KMeans(n_clusters=k, n_init=10, max_iter=300, algorithm='auto')
kmeans.fit(iris)
labels = kmeans.labels_
centroids = kmeans.cluster_centers_

for i in range(k):
    # select only data observations from the applicable cluster
    ds = iris.iloc[np.where(labels==i)]
    # plot the data observations
    plt.plot(ds['PetalLengthCm'],ds['PetalWidthCm'],'o')
    # plot the centroids
    lines = plt.plot(centroids[i,0],centroids[i,1],'kx')
    # make the centroid x's bigger
    plt.setp(lines,ms=15.0)
    plt.setp(lines,mew=2.0)
plt.title("Iris by K-Means Clustering")
plt.show()
```

Since the data points belong usually to a high-dimensional space, the similarity measure is often defined as a distance between two vectors (Euclidean, Manhathan, Cosine, Mahalanobis...)

### Mixture Density
We can write *mixture density* as:
![mixture density](https://latex.codecogs.com/gif.latex?p%28x%29%20%3D%20%5Csum_%7Bi%3D1%7D%5E%7Bk%7Dp%28x%7CG_%7Bi%7D%29p%28G_%7Bi%7D%29)
where Gi are the mixture components. They are also called group or clusters. p(x|Gi) are the component densities and P(Gi) are the mixture proportions. The number of components, k, is a hyperparameter and should be specified beforehand.

### Expectation-Maximization (EM)
In this approach is probabilistic and we look for the component density parameters that maximize the likelihood of the sample.

The EM algorithm is an efficient iterative procedure to compute the Maximum Likelihood (ML) estimate in the presence of missing or hidden data. In ML estimation, we wish to estimate the model parameter(s) for which the observed data are the most likely. 

Each iteration of the EM algorithm consists of two processes: The E-step, and the M-step. 
1. In the expectation, or E-step, the missing data are estimated given the observed data and current estimate of the model parameters. This is achieved using the conditional expectation, explaining the choice of terminology.
2. In the M-step, the likelihood function is maximized under the assumption that the missing data are known. The estimate of the missing data from the E-step are used in lieu of the actual missing data. 

Convergence is assured since the algorithm is guaranteed to increase the likelihood at each iteration.

## More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [Wikipedia Cluster Analysis article](https://en.wikipedia.org/wiki/Cluster_analysis)
* [Introduction to Clustering and related algorithms](https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/)
* [Clustering Algorithms-Stanford University Slides](https://web.stanford.edu/class/cs345a/slides/12-clustering.pdf)
* [Clustering Algorithms: From Start To State Of The Art](https://www.toptal.com/machine-learning/clustering-algorithms)
* [Cluster Analysis: Basic Concepts and Algorithms](https://www-users.cs.umn.edu/~kumar/dmbook/ch8.pdf)
* [K-means Clustering](https://www.datascience.com/blog/k-means-clustering)
* [Expectation-Maximization Algorithm](https://www.cs.utah.edu/~piyush/teaching/EM_algorithm.pdf)
* [Using K-Means Clustering with Python](https://code.likeagirl.io/finding-dominant-colour-on-an-image-b4e075f98097)
