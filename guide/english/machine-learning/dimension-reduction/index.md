---
title: Dimension Reduction
---
## Dimension Reduction
Dealing with a lot of dimensions can be painful for machine learning algorithms. High dimensionality will increase the computational complexity, increase the risk of overfitting (as your algorithm has more degrees of freedom) and the sparsity of the data will grow. Hence, dimensionality reduction will project the data in a space with less dimension to limit these phenomena.

## Why is dimensionality reduction useful?

- Projection into two dimensions is often used to facilitate the visualization of high dimensional data sets.

- When the dimensions can be given a meaningful interpretation, projection along that dimension can be used to explain certain behaviors.

- In the supervised learning case, dimensionality reduction can be used to reduce the dimension of the features, potentially leading to better performance for the learning algorithm.

## Dimensionality Reduction Techniques

- Linear Discriminant Analysis [LDA](http://scikit-learn.org/stable/modules/lda_qda.html)
- Principal Components Analysis [PCA](http://setosa.io/ev/principal-component-analysis/)
- Kernel PCA
- Graph-based kernel PCA
- t-Distributed Stochastic Neighbor Embedding [t-SNE](https://lvdmaaten.github.io/tsne/)
- [Auto Encoders](https://medium.com/towards-data-science/reducing-dimensionality-from-dimensionality-reduction-techniques-f658aec24dfe)
- Generalized discriminant analysis (GDA)
- autoencoders



#### More Information:

* [A step by step tutorial to Principal Component Analysis](https://plot.ly/ipython-notebooks/principal-component-analysis/#introduction)
* [Dimensionality Reduction Techniques](https://medium.com/towards-data-science/reducing-dimensionality-from-dimensionality-reduction-techniques-f658aec24dfe)
* [Dimensionality Reduction Techniques: Where to Begin](https://blog.treasuredata.com/blog/2016/03/25/dimensionality-reduction-techniques-where-to-begin)

