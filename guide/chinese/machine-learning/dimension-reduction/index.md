---
title: Dimension Reduction
localeTitle: 尺寸减小
---
## 尺寸减小

处理大量维度对于机器学习算法来说可能是痛苦的。高维度会增加计算复杂性，增加过度拟合的风险（因为您的算法具有更多自由度），并且数据的稀疏性将增加。因此，降维将将数据投影到维度较小的空间中以限制这些现象。

## 为什么降维有用？

*   投影到两个维度通常用于促进高维数据集的可视化。
    
*   当维度可以给出有意义的解释时，沿着该维度的投影可以用于解释某些行为。
    
*   在监督学习案例中，降维可用于减少特征的维度，可能导致学习算法的更好性能。
    

## 降维技术

*   线性判别分析[LDA](http://scikit-learn.org/stable/modules/lda_qda.html)
*   主成分分析[PCA](http://setosa.io/ev/principal-component-analysis/)
*   内核PCA
*   基于图形的内核PCA
*   t分布式随机邻域嵌入[t-SNE](https://lvdmaaten.github.io/tsne/)
*   [自动编码器](https://medium.com/towards-data-science/reducing-dimensionality-from-dimensionality-reduction-techniques-f658aec24dfe)
*   广义判别分析（GDA）
*   自动编码

#### 更多信息：

*   [主成分分析的分步教程](https://plot.ly/ipython-notebooks/principal-component-analysis/#introduction)
*   [降维技术](https://medium.com/towards-data-science/reducing-dimensionality-from-dimensionality-reduction-techniques-f658aec24dfe)
*   [降维技术：从哪里开始](https://blog.treasuredata.com/blog/2016/03/25/dimensionality-reduction-techniques-where-to-begin)