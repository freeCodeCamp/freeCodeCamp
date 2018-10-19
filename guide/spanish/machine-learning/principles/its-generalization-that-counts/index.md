---
title: Its Generalization That Counts
localeTitle: Su generalización que cuenta
---
## Su generalización que cuenta

El poder del aprendizaje automático proviene de no tener que tener un código duro o explícitamente Defina los parámetros que describen sus datos de entrenamiento y datos invisibles. Esto es El objetivo esencial del aprendizaje automático: generalizar los hallazgos de un alumno.

Para probar la generalización de un alumno, querrá tener datos de prueba separados conjunto que no se utiliza de ninguna manera en la formación del alumno. Esto puede ser creado por ya sea dividiendo todo el conjunto de datos de entrenamiento en un conjunto de entrenamiento y prueba, o sólo para recoger más datos. Si el alumno utilizara los datos encontrados en la prueba. conjunto de datos, esto crearía una especie de sesgo en su alumno para hacerlo mejor que en realidad.

Un método para tener una idea de cómo se desempeñará su alumno en un conjunto de datos de prueba es realizar lo que se llama **validación cruzada** . Esto divide al azar su datos de entrenamiento en un número dado de subconjuntos (por ejemplo, diez subconjuntos) y deja un subconjunto mientras el alumno se entrena con el resto. Y luego una vez que el el aprendiz ha sido entrenado, el conjunto de datos omitidos se utiliza para la prueba. Esta entrenamiento, dejando un subconjunto fuera, y la prueba se repite a medida que gira a través de los subconjuntos.

#### Más información:

*   [Algunas cosas útiles para saber sobre el aprendizaje automático](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf)
*   ["¿Cómo se usa el conjunto de datos de prueba después de la validación cruzada?"](https://stats.stackexchange.com/a/153058/132399)