---
title: Clustering Algorithms
localeTitle: 聚类算法
--- # 聚类算法

群集是将数据划分为单独的组（群集）的过程，同时确保：

*   每个群集包含类似的对象
*   不属于相同群集的对象不相似

聚类算法有助于在未标记数据集合中查找结构，并属于无监督学习的范畴。

难点在于定义可以按照您想要的方式分离数据的相似性度量。例如，一群人可以按性别，头发颜色，体重，种族等分开。

聚类算法的任务是对一组对象进行分组，使得同一组（称为集群）中的对象（在某种意义上或某种意义上）彼此之间的对象比对其他组（集群）中的对象更相似。它是探索性数据挖掘的主要任务，也是统计数据分析的常用技术。它被用于许多领域，包括机器学习，模式识别，图像分析，信息检索，生物信息学，数据压缩和计算机图形学。

聚类算法的一些应用包括：

*   根据消费者的购买模式对消费者进行分组
*   将同类动物的照片分组在一起
*   不同类型文件的分类

## 聚类算法的类型：

1.  基于连接的聚类（层次聚类）
2.  基于质心或点分配聚类（k均值聚类）
3.  基于分布的群集
4.  基于密度的聚类

聚类算法的一些示例是：

1.  Alogmerative聚类
2.  K均值聚类
3.  K-mediods聚类
4.  分区聚类

### 分层聚类

有一些聚类方法只使用实例的相似性，而对数据没有任何其他要求;目的是找到组，使得组中的实例彼此更相似，而不是不同组中的实例。这是分层聚类所采用的方法。

这需要使用在实例之间定义的相似性或等效距离度量。通常使用欧几里德距离，其中必须确保所有属性具有相同的比例。

### 点分配

此方法维护一组聚类，并将点放置到最近的聚类。

## 特定的聚类算法

### K-Means聚类

K-means算法是一种流行的聚类算法，因为它相对简单和快速，与其他聚类算法相反。算法定义如下：

1.  决定输入参数k（簇数）
2.  选择k个随机数据点作为质心
3.  计算每个k质心的所有数据点的距离，并将每个数据点分配给包含最近质心的簇
4.  对所有数据点进行分类后，计算每个聚类的所有点的中点并指定为新的质心
5.  重复步骤3和4，直到质心收敛到某些k点。

由于我们只需要计算kxn距离（而不是knn算法的n（n-1）距离），因此该算法具有很强的可扩展性。

这是Python中使用[Iris数据集](https://www.kaggle.com/uciml/iris)的聚类示例

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

由于数据点通常属于高维空间，因此相似性度量通常被定义为两个向量之间的距离（Euclidean，Manhathan，Cosine，Mahalanobis ......）

### 混合密度

我们可以写_混合密度_为： ![混合密度](https://latex.codecogs.com/gif.latex?p%28x%29%20%3D%20%5Csum_%7Bi%3D1%7D%5E%7Bk%7Dp%28x%7CG_%7Bi%7D%29p%28G_%7Bi%7D%29) 其中Gi是混合物成分。它们也被称为组或集群。 p（x | Gi）是组分密度，P（Gi）是混合比例。组件数k是超参数，应事先指定。

### 期望最大化（EM）

在这种方法中是概率性的，我们寻找最大化样品可能性的组分密度参数。

EM算法是在存在丢失或隐藏数据的情况下计算最大似然（ML）估计的有效迭代过程。在ML估计中，我们希望估计观测数据最可能的模型参数。

EM算法的每次迭代都包括两个过程：E步和M步。

1.  在期望或E步骤中，在给定观察数据和模型参数的当前估计的情况下估计缺失数据。这是使用条件期望来实现的，解释了术语的选择。
2.  在M步骤中，在假设缺失数据已知的情况下，似然函数最大化。使用来自E步骤的丢失数据的估计来代替实际丢失的数据。

由于保证算法在每次迭代时增加可能性，因此确保了收敛。

## 更多信息：

*   [维基百科集群分析文章](https://en.wikipedia.org/wiki/Cluster_analysis)
*   [集群和相关算法简介](https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/)
*   [聚类算法 - 斯坦福大学幻灯片](https://web.stanford.edu/class/cs345a/slides/12-clustering.pdf)
*   [聚类算法：从开始到现有技术](https://www.toptal.com/machine-learning/clustering-algorithms)
*   [聚类分析：基本概念和算法](https://www-users.cs.umn.edu/~kumar/dmbook/ch8.pdf)
*   [K均值聚类](https://www.datascience.com/blog/k-means-clustering)
*   [期望最大化算法](https://www.cs.utah.edu/~piyush/teaching/EM_algorithm.pdf)
*   [在Python中使用K-Means聚类](https://code.likeagirl.io/finding-dominant-colour-on-an-image-b4e075f98097)