---
title: Gaussian Process
localeTitle: Proceso gaussiano
---
## Proceso gaussiano

En teoría de probabilidades y estadísticas, un proceso gaussiano es un tipo particular de modelo estadístico donde las observaciones ocurren en un dominio continuo, por ejemplo, tiempo o espacio. En un proceso gaussiano, cada punto en algún espacio de entrada continuo está asociado con una variable aleatoria normalmente distribuida. Además, cada colección finita de esas variables aleatorias tiene una distribución normal multivariada, es decir, cada combinación lineal finita de ellas se distribuye normalmente. La distribución de un proceso gaussiano es la distribución conjunta de todas esas variables (infinitas) aleatorias, y como tal, es una distribución sobre funciones con un dominio continuo, por ejemplo, tiempo o espacio.

Visto como un algoritmo de aprendizaje automático, un proceso gaussiano utiliza el aprendizaje perezoso y una medida de la similitud entre los puntos (la función del núcleo) para predecir el valor de un punto invisible a partir de los datos de entrenamiento. La predicción no es solo una estimación para ese punto, sino que también tiene información de incertidumbre, es una distribución gaussiana unidimensional (que es la distribución marginal en ese punto).

#### Más información:

*   [Procesos gaussianos para los maniquíes](http://katbailey.github.io/post/gaussian-processes-for-dummies/)