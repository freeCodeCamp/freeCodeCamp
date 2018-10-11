---
title: Clustering Algorithms
---
## Clustering Algorithms

Clustering is the process of dividing data into separated groups (clusters), while ensuring that:
- Each cluster contains similar objects
- Objects which do not belong to the same clusters are not similar

The difficulty lies in the definition of a similarity measure that can separate the data in the way we want. For instance, a group of persons can be separated by gender, hair color, weight, race...etc.

Clustering algorithms have the task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar (in some sense or another) to each other than to those in other groups (clusters). It is a main task of exploratory data mining, and a common technique for statistical data analysis, used in many fields, including machine learning, pattern recognition, image analysis, information retrieval, bioinformatics, data compression, and computer graphics.

## Types of Clustering Algorithms:
1. Connectivity-based clustering (hierarchical clustering)
2. Centroid-based clustering (k-means clustering)
3. Distribution-based clustering 
4. Density-based clustering 

## Examples 
1. Alogmerative clustering
2. k-means clustering
3. k-mediods clustering
4. Partition Clustering

### K-Means Clustering

K-means algorithm is a popular clustering algorithm since it is relatively simple and fast, as opposed to other clustering algorithms. The algorithm is defined as the following:

1. Decide input parameter k (number of clusters)
2. Pick k random data points to use as centroids
3. Compute distances for all data points to each k centroids, and assign each data point to a cluster containing the closest centroid
4. Once all data points have been classified, compute the midpoint of all points for each cluster and assign as new centroid
5. Repeat steps 3 and 4 until the centroids converge upon certain k points.


Since we only need to calculate k x n distances (rather than n(n-1) distances for knn algorithm), this algorithm is quite scalable.

Let's cluster on the Iris Dataset https://www.kaggle.com/uciml/iris

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

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [Cluster Analysis](https://en.wikipedia.org/wiki/Cluster_analysis)
* [Introduction to Clustering and related algorithms](https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/)
* https://www.datascience.com/blog/k-means-clustering
* http://fromdatawithlove.thegovans.us/2013/05/clustering-using-scikit-learn.html
* http://datascienceis.life
