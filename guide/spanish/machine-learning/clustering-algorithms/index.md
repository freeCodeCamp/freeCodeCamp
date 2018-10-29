---
title: Clustering Algorithms
localeTitle: Algoritmos de agrupamiento
--- # Algoritmos de agrupamiento

La agrupación en clúster es el proceso de dividir los datos en grupos separados (agrupaciones), mientras se asegura que:

*   Cada grupo contiene objetos similares
*   Los objetos que no pertenecen a los mismos grupos no son similares

Los algoritmos de agrupamiento en clústeres ayudan a encontrar la estructura en una recopilación de datos sin etiquetar y entran en la categoría de aprendizaje no supervisado.

La dificultad radica en la definición de una medida de similitud que puede separar los datos de la forma que desee. Por ejemplo, un grupo de personas puede estar separado por género, color de cabello, peso, raza, etc.

Los algoritmos de agrupación en clústeres tienen la tarea de agrupar un conjunto de objetos de tal manera que los objetos en el mismo grupo (llamado agrupación) sean más similares (en un sentido u otro) entre sí que a los de otros grupos (agrupaciones). Es una tarea principal de la minería de datos exploratoria y una técnica común para el análisis de datos estadísticos. Se utiliza en muchos campos, incluido el aprendizaje automático, el reconocimiento de patrones, el análisis de imágenes, la recuperación de información, la bioinformática, la compresión de datos y los gráficos de computadora.

Algunas aplicaciones de algoritmos de agrupamiento incluyen:

*   Agrupación de consumidores según sus patrones de compra.
*   Agrupando fotos de animales del mismo tipo.
*   Clasificación de los diferentes tipos de documentos.

## Tipos de algoritmos de agrupamiento:

1.  Clúster basado en conectividad (clustering jerárquico)
2.  Agrupación de puntos o basada en centroide (agrupación de medios K)
3.  Agrupación basada en distribución
4.  Agrupación basada en densidad

Algunos ejemplos de algoritmos de agrupamiento son:

1.  Agrupamiento altogativo
2.  K-significa agrupamiento
3.  Agrupamiento de mediodos K
4.  Agrupación de particiones

### Agrupación jerárquica

Existen métodos para agrupar en clústeres que solo usan similitudes de instancias, sin ningún otro requisito en los datos; el objetivo es encontrar grupos tales que las instancias de un grupo sean más similares entre sí que las instancias de diferentes grupos. Este es el enfoque adoptado por la agrupación jerárquica.

Esto requiere el uso de una medida de similitud, o equivalente a una distancia, definida entre instancias. Generalmente se usa la distancia euclidiana, donde uno tiene que asegurarse de que todos los atributos tengan la misma escala.

### Asignación de puntos

Este método mantiene un conjunto de clústeres y coloca puntos en los clústeres más cercanos.

## Algoritmos específicos de agrupamiento

### K-medios de agrupación

El algoritmo K-means es un algoritmo popular de agrupación en clúster, ya que es relativamente simple y rápido, a diferencia de otros algoritmos de agrupación en clúster. El algoritmo se define como el siguiente:

1.  Decidir el parámetro de entrada k (número de grupos)
2.  Elija k puntos de datos aleatorios para usar como centroides
3.  Calcule distancias para todos los puntos de datos a cada centroides k, y asigne cada punto de datos a un grupo que contenga el centroide más cercano
4.  Una vez que se hayan clasificado todos los puntos de datos, calcule el punto medio de todos los puntos para cada grupo y asigne como nuevo centroide
5.  Repita los pasos 3 y 4 hasta que los centroides converjan en ciertos k puntos.

Dado que solo necesitamos calcular distancias kxn (en lugar de n (n-1) distancias para el algoritmo knn), este algoritmo es bastante escalable.

Aquí hay un ejemplo de clustering en Python que usa el [conjunto de datos Iris.](https://www.kaggle.com/uciml/iris)

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

Dado que los puntos de datos pertenecen generalmente a un espacio de alta dimensión, la medida de similitud a menudo se define como una distancia entre dos vectores (Euclides, Manhathan, Cosine, Mahalanobis ...)

### Densidad de la mezcla

Podemos escribir _densidad de mezcla_ como: ![densidad de la mezcla](https://latex.codecogs.com/gif.latex?p%28x%29%20%3D%20%5Csum_%7Bi%3D1%7D%5E%7Bk%7Dp%28x%7CG_%7Bi%7D%29p%28G_%7Bi%7D%29) donde Gi son los componentes de la mezcla. También se les llama grupo o clusters. p (x | Gi) son las densidades de los componentes y P (Gi) son las proporciones de la mezcla. El número de componentes, k, es un hiperparámetro y se debe especificar de antemano.

### Expectativa-Maximización (EM)

En este enfoque es probabilístico y buscamos los parámetros de densidad de componentes que maximizan la probabilidad de la muestra.

El algoritmo EM es un procedimiento iterativo eficiente para calcular la estimación de probabilidad máxima (ML) en presencia de datos perdidos u ocultos. En la estimación de NM, deseamos estimar los parámetros del modelo para los cuales los datos observados son los más probables.

Cada iteración del algoritmo EM consta de dos procesos: el paso E y el paso M

1.  En la expectativa, o E-step, los datos faltantes se estiman dados los datos observados y la estimación actual de los parámetros del modelo. Esto se logra utilizando la expectativa condicional, explicando la elección de la terminología.
2.  En el paso M, la función de probabilidad se maximiza bajo el supuesto de que los datos faltantes son conocidos. La estimación de los datos faltantes del E-step se utiliza en lugar de los datos faltantes reales.

La convergencia está asegurada, ya que se garantiza que el algoritmo aumentará la probabilidad en cada iteración.

## Más información:

*   [Artículo de Wikipedia Cluster Analysis](https://en.wikipedia.org/wiki/Cluster_analysis)
*   [Introducción al Clustering y algoritmos relacionados.](https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/)
*   [Algoritmos de agrupamiento-Stanford University Diapositivas](https://web.stanford.edu/class/cs345a/slides/12-clustering.pdf)
*   [Algoritmos de agrupamiento: desde el principio hasta el estado del arte](https://www.toptal.com/machine-learning/clustering-algorithms)
*   [Análisis de cluster: conceptos básicos y algoritmos](https://www-users.cs.umn.edu/~kumar/dmbook/ch8.pdf)
*   [K-significa agrupación](https://www.datascience.com/blog/k-means-clustering)
*   [Algoritmo de Expectativa-Maximización](https://www.cs.utah.edu/~piyush/teaching/EM_algorithm.pdf)
*   [Usando K-Means Clustering con Python](https://code.likeagirl.io/finding-dominant-colour-on-an-image-b4e075f98097)