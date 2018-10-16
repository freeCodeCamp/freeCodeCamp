---
title: Principal Component Analysis
localeTitle: Análisis de componentes principales
---
## Análisis de componentes principales (PCA)

### ¿Qué es?

El análisis de componentes principales (PCA) es un algoritmo utilizado en el aprendizaje automático para reducir las dimensiones de un conjunto de datos. Puede reducir un conjunto de datos que contiene cientos de características diferentes a un nuevo conjunto de datos que contiene solo dos.

Por ejemplo, imagina que quieres medir la habilidad de un piloto. Hay muchos factores diferentes involucrados en esto. Dos características relevantes a tener en cuenta podrían ser la habilidad del piloto y su disfrute. Esto sería un conjunto de datos bidimensional, ya que contiene dos características. PCA podría reducir estas características en una sola fusionándolas. Podrías llamar a esta nueva característica "aptitud piloto". Esta nueva función le brinda una métrica más simple para medir la capacidad de un piloto.

Si traza la habilidad del piloto contra el disfrute del piloto, podría obtener algo como esto:

![Trazado de habilidad piloto versus disfrute piloto](https://github.com/DHDaniel/guides/blob/master/src/pages/machine-learning/principal-component-analysis/plot-skill-vs-enjoyment.png?raw=true)

Intuitivamente, lo que hace la PCA es encontrar la mejor línea recta (o plano, en situaciones de dimensiones más altas) en la que proyectar estas dos características. La proyección se realiza dibujando una línea perpendicular entre el punto y la línea. Puedes ver una ilustración de esto a continuación:

![Proyección en linea](https://github.com/DHDaniel/guides/blob/master/src/pages/machine-learning/principal-component-analysis/projection.png?raw=true)

Puede pensar en PCA como encontrar la mejor línea para el conjunto de datos para que la información de cada punto se conserve mejor. Lo hace minimizando la suma de los errores de proyección al cuadrado de cada punto. El error de proyección es la longitud de las líneas perpendiculares que proyectan cada punto en la línea. Al minimizar esto, se asegura de que la línea recta elegida sea la mejor combinación de estas dos características.

A continuación se muestran ejemplos de una buena línea en la que se proyectan los datos y una mala. Las proyecciones resultantes de la buena línea son más representativas de los datos originales y tienen errores más pequeños. Las proyecciones resultantes de la mala línea son claramente una representación peor, y los errores de proyección son mucho más grandes.

![Proyección buena contra mala de puntos.](https://github.com/DHDaniel/guides/blob/master/src/pages/machine-learning/principal-component-analysis/good-vs-bad-projection.png?raw=true)

**Importante** : vale la pena señalar que la PCA es diferente de [la regresión lineal](https://en.wikipedia.org/wiki/Linear_regression) . Sus objetivos de optimización (lo que pretenden minimizar) son diferentes.

Si ejecuta PCA en el conjunto de datos piloto, puede obtener una nueva función, "aptitud piloto", que se parece a esto:

![Transformando el conjunto de datos piloto utilizando PCA](https://github.com/DHDaniel/guides/blob/master/src/pages/machine-learning/principal-component-analysis/PCA-on-dataset.png?raw=true)

Las matemáticas detrás de PCA son algo complicadas, pero no tienes que ser un experto para poder usarlas. Aunque hay mucho álgebra lineal detrás, usarlo es relativamente fácil. Esto se debe a que hay muchas bibliotecas de código con implementaciones de PCA listas para usar. Algunos ejemplos incluyen:

*   [Una implementación de PCA de JavaScript](https://github.com/mljs/pca) .
*   [Python scikit-learn implementacion](http://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html) .
*   [Implementación de MATLAB](https://www.mathworks.com/help/stats/pca.html) .

### ¿Por qué usarlo?

Hay muchas razones para usar el algoritmo PCA. Una muy importante es visualizar datos. Es fácil visualizar datos 1-D, 2-D e incluso 3D, pero más allá de eso, se vuelve difícil. En el aprendizaje automático, a menudo es muy útil visualizar los datos antes de comenzar a trabajar en ellos. Pero un conjunto de datos de alta dimensión es muy difícil de visualizar. Al usar PCA, un conjunto de datos de cien dimensiones puede reducirse a uno bidimensional.

Esto es especialmente útil en situaciones del mundo real, donde los conjuntos de datos suelen ser de alta dimensión. Por ejemplo, puede combinar indicadores de rendimiento económico como GDP, HDI, etc., en una sola función. Esto le permite hacer mejores comparaciones entre países, y también le permite visualizar los datos utilizando un gráfico.

Otra razón para usar el algoritmo PCA es hacer que su conjunto de datos sea más pequeño. Para problemas que involucran cientos de miles de funciones (como el procesamiento de imágenes), los algoritmos de aprendizaje automático pueden tardar mucho tiempo en ejecutarse. Al reducir la cantidad de funciones, puede mejorar la velocidad de estos algoritmos sin sacrificar la precisión. También puede ahorrar mucho espacio en el disco, especialmente si está trabajando con grandes conjuntos de datos.

### Limitaciones

Como básicamente está simplificando un conjunto de datos cuando ejecuta PCA, es posible que se pierdan algunos detalles en el proceso. Este es especialmente el caso de los puntos de datos que están muy dispersos y no tienen una correlación muy fuerte.

#### Lectura sugerida:

*   https://www.reddit.com/r/datascience/comments/668pp1
*   https://en.wikipedia.org/wiki/Principal análisis de _componentes_
*   http://www.cs.otago.ac.nz/cosc453/student _tutorials / principal_ components.pdf
*   http://setosa.io/ev/principal-component-analysis/ (interactivo)

Wikipedia dice: "El análisis de componentes principales (PCA) es un procedimiento estadístico que utiliza una transformación ortogonal para convertir un conjunto de observaciones de variables posiblemente correlacionadas en un conjunto de valores de variables no correlacionadas linealmente llamadas componentes principales (o, a veces, modos principales de variación) . "

El análisis de componentes principales (PCA) es una técnica estadística utilizada para examinar las interrelaciones entre un conjunto de variables con el fin de identificar la estructura subyacente de esas variables. PCA generalmente reduce la cantidad de funciones de N-Dimensional a K-Dimensional donde k <N

PCA tiene las siguientes aplicaciones: 1) Compresión: aumenta la velocidad de cálculo y también para reducir el espacio de almacenamiento 2) Visualización: PCA puede reducir los datos a datos bidimensionales o tridimensionales para fines de visualización