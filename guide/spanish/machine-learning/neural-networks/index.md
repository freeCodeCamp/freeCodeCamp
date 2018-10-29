---
title: Neural Networks
localeTitle: Redes neuronales
---
## Redes neuronales

![Red neuronal feed-forward](http://ufldl.stanford.edu/tutorial/images/SingleNeuron.png)

Una red neuronal artificial es un sistema informático. Son como redes neuronales biológicas que constituyen cerebros animales. Para entrenar una red neuronal, necesitamos un vector de entrada y un vector de salida correspondiente. El entrenamiento funciona minimizando un término de error. Este error puede ser la diferencia cuadrada entre la salida predicha y la salida original.

El principio básico que subyace en el notable éxito de las redes neuronales es "El teorema de aproximación universal". Se ha comprobado matemáticamente que las redes neuronales son máquinas de aproximación universales que son capaces de aproximar cualquier función matemática entre la entrada y la salida dadas.

Las redes neuronales inicialmente se hicieron populares en la década de 1980, pero las limitaciones en el poder computacional prohibieron su amplia aceptación hasta la década pasada. Las innovaciones en el tamaño y la potencia de la CPU permiten la implementación de redes neuronales a escala, aunque otros paradigmas de aprendizaje automático aún superan a las redes neuronales en términos de eficiencia.

El elemento más básico de una red neuronal es una neurona. Su entrada es un vector, digamos `x` , y su salida es una variable de valor real, digamos `y` . Por lo tanto, podemos concluir que la neurona actúa como un mapeo entre el vector `x` y un número real `y` .

Las redes neuronales realizan la regresión de forma iterativa en múltiples capas, lo que resulta en un modelo de predicción más matizado. Un solo nodo en una red neuronal calcula exactamente la misma función que [la regresión logística](../logistic-regression/index.md) . Todas estas capas, aparte de la entrada y la salida, están ocultas, es decir, los rasgos específicos representados por estas capas no son elegidos ni modificados por el programador.

![Red neuronal de cuatro capas](http://cs231n.github.io/assets/nn1/neural_net2.jpeg)

En cualquier capa dada, cada nodo toma todos los valores almacenados en la capa anterior como entrada y hace predicciones en ellos basándose en un análisis de regresión logística. El poder de las redes neuronales radica en su capacidad para "descubrir" patrones y rasgos que no ven los programadores. Como se mencionó anteriormente, las capas medias están "ocultas", lo que significa que los pesos dados a las transiciones se determinan exclusivamente por el entrenamiento del algoritmo.

Las redes neuronales se utilizan en una variedad de tareas. Estos incluyen visión por computadora, reconocimiento de voz, traducción, filtrado de redes sociales, juegos de video y diagnóstico médico, entre otras cosas.

### Visualización

Hay una herramienta increíble para ayudarlo a comprender la idea de las redes neuronales sin ningún problema: [TensorFlow Playground](http://playground.tensorflow.org) , una aplicación web que le permite jugar con una red neuronal real que se ejecuta en su navegador y hacer clic en los botones y modificar los parámetros para ver cómo funciona.

### Problemas resueltos utilizando redes neuronales.

*   Clasificación
*   Agrupación
*   Regresión
*   Detección de anomalías
*   reglas de asociación
*   Aprendizaje reforzado
*   Predicción estructurada
*   Ingeniería de características
*   Aprendizaje de características
*   Aprendiendo a clasificar
*   Inducción gramatical
*   Predicción del tiempo
*   Generando imagenes

### Sistemas de redes neuronales comunes

Las redes neuronales más comunes que se usan en la actualidad se encuentran en la categoría de [aprendizaje profundo](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/deep-learning/index.md) . El aprendizaje profundo es el proceso de encadenar múltiples capas de neuronas para permitir que una red cree mapeos cada vez más abstractos entre los vectores de entrada y salida. Las redes neuronales profundas con más frecuencia utilizarán [la propagación](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/backpropagation/index.md) en [retroceso](https://github.com/freeCodeCamp/guides/blob/master/src/pages/machine-learning/backpropagation/index.md) para converger en el mapeo más preciso.

La segunda forma más común de redes neuronales es la nueroevolución. En este sistema se generan aleatoriamente múltiples redes neuronales como conjeturas iniciales. Luego, varias generaciones de combinar la mayoría precisa de redes y permutaciones aleatorias se utilizan para converger en un mapeo más preciso.

### Tipos de redes neuronales

*   Red neuronal recurrente (RNN)
*   Memoria a largo y corto plazo (LSTM), un tipo de RNN
*   Red neuronal convolucional (CNN)

### Más información:

*   [Redes neuronales - Wikipedia](https://en.wikipedia.org/wiki/Artificial_neural_network#Components_of_an_artificial_neural_network)
*   [La naturaleza del código de Daniel Shiffman](http://natureofcode.com/book/chapter-10-neural-networks/)
*   [Universidad de Stanford, redes neuronales multicapa](http://ufldl.stanford.edu/tutorial/supervised/MultiLayerNeuralNetworks/)
*   [3Blue1Brown, canal de Youtube con contenido de red neuronal](https://youtu.be/aircAruvnKk)
*   [Siraj Raval, canal de Youtube con contenido de red neuronal](https://youtu.be/h3l4qz76JhQ)
*   [Neuroevolución - Wikipedia](https://en.wikipedia.org/wiki/Neuroevolution)