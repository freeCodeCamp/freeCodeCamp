---
title: Backpropagation
localeTitle: Backpropagation
---
## Backpropagation

Backprogapation es un subtema de [redes neuronales](../neural-networks/index.md) y es el proceso mediante el cual se calculan los gradientes de cada nodo en la red. Estos gradientes miden el "error" que cada nodo contribuye a la capa de salida, por lo que al entrenar una red neuronal, estos gradientes se minimizan.

Nota: La propagación hacia atrás y el aprendizaje automático en general requirieron una familiaridad significativa con el álgebra lineal y la manipulación de matrices. El trabajo de curso o la lectura sobre este tema es altamente recomendable antes de tratar de entender el contenido de este artículo.

### Cálculo

El proceso de propagación hacia atrás puede explicarse en tres pasos.

Dado lo siguiente

*   m ejemplos de entrenamiento (x, y) en una red neuronal de capas L
*   g = la función sigmoide
*   Theta (i) = la matriz de transición de la i a la capa i + 1
*   a (l) = g (z (l)); una matriz de los valores de los nodos en la capa l basada en un ejemplo de entrenamiento
*   z (l) = Theta (l-1) a (l-1)
*   Delta un conjunto de matrices L que representan transiciones entre las capas ith e i + 1 ª
*   d (l) = la matriz de los gradientes para la capa l para un ejemplo de entrenamiento
*   D un conjunto de L matricias con los gradientes finales para cada nodo
*   lambda el término de regulación para la red

En este caso, para la matriz M, M 'denotará la transposición de la matriz M

1.  Asigne todas las entradas del Delta (i), para i de 1 a L, cero.
2.  Para cada ejemplo de entrenamiento t de 1 a m, realice lo siguiente:

*   realice una propagación hacia adelante en cada ejemplo para calcular a (l) yz (l) para cada capa
*   calcular d (L) = a (L) - y (t)
*   calcular d (l) = (Theta (l) '• d (l + 1)) • g (z (l)) para l de L-1 a 1
*   incrementa Delta (l) por delta (l + 1) • a (l) '

1.  Conecte las matrices delta en nuestras matrices derivadas parciales D (l) = 1 \\ m (Delta (l) + lambda • Theta (l)); si l ≠ 0 D (l) = 1 \\ m • Delta (l); si l = 0

Por supuesto, el simple hecho de ver este artículo parece enormemente complicado y solo debería entenderse en los contextos más amplios de las redes neuronales y el aprendizaje automático. Por favor, mire las referencias completas para una mejor comprensión del tema en su conjunto.

#### Más información:

*   [Clase 4 CS231n Introducción a las redes neuronales](https://youtu.be/d14TUNcbn1k?t=354)
*   [Siraj Raval - Backpropagation en 5 minutos](https://www.youtube.com/watch?v=q555kfIFUCM)
*   [Curso de Andrew Ng's ML](https://www.coursera.org/learn/machine-learning/)
*   [En profundidad, artículo de estilo wiki.](https://brilliant.org/wiki/backpropagation/)
*   [Backprop en Wikipedia](https://en.wikipedia.org/wiki/Backpropagation)
*   [Un ejemplo de propagación hacia atrás paso a paso](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/)