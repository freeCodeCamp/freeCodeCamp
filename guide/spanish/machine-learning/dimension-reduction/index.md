---
title: Dimension Reduction
localeTitle: Reducción de dimensiones
---
## Reducción de dimensiones

Tratar con muchas dimensiones puede ser doloroso para los algoritmos de aprendizaje automático. La alta dimensionalidad aumentará la complejidad computacional, aumentará el riesgo de sobrealimentación (ya que su algoritmo tiene más grados de libertad) y la escasez de datos aumentará. Por lo tanto, la reducción de la dimensionalidad proyectará los datos en un espacio con menos dimensión para limitar estos fenómenos.

## ¿Por qué es útil la reducción de dimensionalidad?

*   La proyección en dos dimensiones a menudo se usa para facilitar la visualización de conjuntos de datos de alta dimensión.
    
*   Cuando a las dimensiones se les puede dar una interpretación significativa, la proyección a lo largo de esa dimensión se puede usar para explicar ciertos comportamientos.
    
*   En el caso de aprendizaje supervisado, la reducción de la dimensionalidad se puede utilizar para reducir la dimensión de las características, lo que potencialmente conduce a un mejor rendimiento del algoritmo de aprendizaje.
    

## Técnicas de reducción de la dimensionalidad

*   Análisis discriminante lineal [LDA](http://scikit-learn.org/stable/modules/lda_qda.html)
*   Análisis de componentes principales [PCA](http://setosa.io/ev/principal-component-analysis/)
*   Kernel PCA
*   PCA basado en grafos
*   Incrustación de vecinos estocásticos distribuidos [t-SNE](https://lvdmaaten.github.io/tsne/)
*   [Auto codificadores](https://medium.com/towards-data-science/reducing-dimensionality-from-dimensionality-reduction-techniques-f658aec24dfe)
*   Análisis discriminante generalizado (GDA)
*   autoencodificadores

#### Más información:

*   [Un tutorial paso a paso para el análisis de componentes principales](https://plot.ly/ipython-notebooks/principal-component-analysis/#introduction)
*   [Técnicas de reducción de la dimensionalidad](https://medium.com/towards-data-science/reducing-dimensionality-from-dimensionality-reduction-techniques-f658aec24dfe)
*   [Técnicas de reducción de dimensiones: por dónde empezar](https://blog.treasuredata.com/blog/2016/03/25/dimensionality-reduction-techniques-where-to-begin)