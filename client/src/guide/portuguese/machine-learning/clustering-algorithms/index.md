---
title: Clustering Algorithms
localeTitle: Algoritmos de Cluster
--- # Algoritmos de Cluster

Clustering é o processo de dividir dados em grupos separados (clusters), assegurando que:

*   Cada cluster contém objetos semelhantes
*   Objetos que não pertencem aos mesmos clusters não são semelhantes

Os algoritmos de cluster ajudam a encontrar a estrutura em uma coleção de dados não marcados e se enquadram na categoria de aprendizado não supervisionado.

A dificuldade está na definição de uma medida de similaridade que pode separar os dados da maneira que você deseja. Por exemplo, um grupo de pessoas pode ser separado por sexo, cor do cabelo, peso, raça, etc.

Os algoritmos de clustering têm a tarefa de agrupar um conjunto de objetos de forma que os objetos do mesmo grupo (chamados de cluster) sejam mais semelhantes (em algum sentido ou outro) uns aos outros do que àqueles de outros grupos (clusters). É uma tarefa principal de mineração exploratória de dados e uma técnica comum para análise de dados estatísticos. Ele é usado em muitos campos, incluindo aprendizado de máquina, reconhecimento de padrões, análise de imagens, recuperação de informações, bioinformática, compactação de dados e computação gráfica.

Algumas aplicações de algoritmos de clustering incluem:

*   Agrupando consumidores de acordo com seus padrões de compra
*   Agrupando fotos de animais do mesmo tipo juntos
*   Classificação de diferentes tipos de documentos

## Tipos de Algoritmos de Cluster:

1.  Cluster baseado em conectividade (cluster hierárquico)
2.  Cluster de atribuição de ponto ou centróide (k-means clustering)
3.  Clustering baseado em distribuição
4.  Armazenamento em Cluster Baseado em Densidade

Alguns exemplos de algoritmos de clustering são:

1.  Agrupamento Alogmerative
2.  K-significa agrupamento
3.  Agrupamento K-mediods
4.  Cluster de Partição

### Agrupamento hierárquico

Existem métodos para agrupamento que usam apenas semelhanças de instâncias, sem qualquer outro requisito nos dados; O objetivo é encontrar grupos de modo que as instâncias de um grupo sejam mais semelhantes entre si do que as instâncias em grupos diferentes. Essa é a abordagem adotada pelo clustering hierárquico.

Isso requer o uso de uma similaridade, ou equivalentemente uma medida de distância definida entre instâncias. Geralmente, a distância euclidiana é usada, onde é preciso garantir que todos os atributos tenham a mesma escala.

### Atribuição de ponto

Esse método mantém um conjunto de clusters e coloca pontos nos clusters mais próximos.

## Algoritmos de cluster específicos

### K-significa clusters

O algoritmo K-means é um algoritmo de clustering popular, pois é relativamente simples e rápido, ao contrário de outros algoritmos de clustering. O algoritmo é definido como o seguinte:

1.  Decida o parâmetro de entrada k (número de clusters)
2.  Escolha k pontos de dados aleatórios para usar como centróides
3.  Calcule as distâncias de todos os pontos de dados para cada k centroids e atribua cada ponto de dados a um cluster contendo o centróide mais próximo
4.  Depois que todos os pontos de dados tiverem sido classificados, calcule o ponto médio de todos os pontos para cada cluster e atribua como novo centróide.
5.  Repita os passos 3 e 4 até os centróides convergirem em determinados k pontos.

Como precisamos calcular apenas as distâncias kxn (em vez de n (n-1) para o algoritmo knn), esse algoritmo é bastante escalável.

Aqui está um exemplo de clustering em Python que usa o [conjunto de dados Iris](https://www.kaggle.com/uciml/iris)

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

Como os pontos de dados geralmente pertencem a um espaço de alta dimensão, a medida de similaridade é geralmente definida como uma distância entre dois vetores (Euclidean, Manhathan, Cosine, Mahalanobis ...).

### Densidade da Mistura

Podemos escrever a _densidade da mistura_ como: ![densidade da mistura](https://latex.codecogs.com/gif.latex?p%28x%29%20%3D%20%5Csum_%7Bi%3D1%7D%5E%7Bk%7Dp%28x%7CG_%7Bi%7D%29p%28G_%7Bi%7D%29) onde Gi são os componentes da mistura. Eles também são chamados de grupos ou clusters. p (x | Gi) são as densidades dos componentes e P (Gi) são as proporções da mistura. O número de componentes, k, é um hiperparâmetro e deve ser especificado antecipadamente.

### Expectativa-Maximização (EM)

Nesta abordagem é probabilística e procuramos os parâmetros de densidade do componente que maximizam a probabilidade da amostra.

O algoritmo EM é um procedimento iterativo eficiente para calcular a estimativa de Máxima Verossimilhança (ML) na presença de dados ausentes ou ocultos. Na estimativa de ML, desejamos estimar o (s) parâmetro (s) do modelo para o qual os dados observados são os mais prováveis.

Cada iteração do algoritmo EM consiste em dois processos: o E-step e o M-step.

1.  Na expectativa, ou etapa E, os dados faltantes são estimados dados os dados observados e a estimativa atual dos parâmetros do modelo. Isto é conseguido usando a expectativa condicional, explicando a escolha da terminologia.
2.  Na etapa M, a função de verossimilhança é maximizada sob a suposição de que os dados ausentes são conhecidos. A estimativa dos dados perdidos da etapa E é usada no lugar dos dados perdidos reais.

A convergência é garantida, pois o algoritmo é garantido para aumentar a probabilidade em cada iteração.

## Mais Informações:

*   [Artigo de análise de cluster da Wikipédia](https://en.wikipedia.org/wiki/Cluster_analysis)
*   [Introdução ao Clustering e algoritmos relacionados](https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/)
*   [Algoritmos de agrupamento - Universidade de Stanford](https://web.stanford.edu/class/cs345a/slides/12-clustering.pdf)
*   [Algoritmos de clustering: do início ao estado da arte](https://www.toptal.com/machine-learning/clustering-algorithms)
*   [Análise de Cluster: Conceitos Básicos e Algoritmos](https://www-users.cs.umn.edu/~kumar/dmbook/ch8.pdf)
*   [K-Clustering](https://www.datascience.com/blog/k-means-clustering)
*   [Algoritmo de Maximização de Expectativas](https://www.cs.utah.edu/~piyush/teaching/EM_algorithm.pdf)
*   [Usando o K-Means Clustering com Python](https://code.likeagirl.io/finding-dominant-colour-on-an-image-b4e075f98097)