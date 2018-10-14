---
title: Dataset Splitting
localeTitle: Dividir Dataset
---
## Dividir Dataset

La división en conjuntos de entrenamiento, validación cruzada y pruebas son las mejores prácticas comunes. Esto le permite ajustar varios parámetros del algoritmo sin hacer juicios que se ajusten específicamente a los datos de entrenamiento.

### Motivación

La división de conjuntos de datos surge como una necesidad para eliminar el sesgo de los datos de entrenamiento en algoritmos ML. La modificación de los parámetros de un algoritmo ML para adaptarse mejor a los datos de entrenamiento generalmente resulta en un algoritmo overfit que se desempeña pobremente en los datos de prueba reales. Por este motivo, dividimos el conjunto de datos en múltiples subconjuntos discretos en los que entrenamos diferentes parámetros.

#### El conjunto de entrenamiento

El conjunto de entrenamiento se utiliza para calcular el modelo real que utilizará su algoritmo cuando se exponga a nuevos datos. Este conjunto de datos suele ser el 60% -80% de todos sus datos disponibles (dependiendo de si utiliza o no un conjunto de validación cruzada).

#### El conjunto de validación cruzada

Los conjuntos de validación cruzada son para la selección del modelo (por lo general, aproximadamente el 20% de sus datos). Utilice este conjunto de datos para probar diferentes parámetros para el algoritmo entrenado en el conjunto de entrenamiento. Por ejemplo, puede evaluar diferentes parámetros del modelo (grado polinomial o lambda, el parámetro de regularización) en el conjunto de validación cruzada para ver cuál puede ser más preciso.

#### El conjunto de prueba

El conjunto de pruebas es el conjunto de datos final que toca (normalmente, aproximadamente el 20% de sus datos). Es la fuente de la verdad. Su precisión para predecir el conjunto de pruebas es la precisión de su algoritmo ML.

#### Más información:

*   [AWS ML Doc](http://docs.aws.amazon.com/machine-learning/latest/dg/splitting-the-data-into-training-and-evaluation-data.html)
*   [Un buen post de stackoverflow.](https://stackoverflow.com/questions/13610074/is-there-a-rule-of-thumb-for-how-to-divide-a-dataset-into-training-and-validatio)
*   [Artículo académico](https://www.mff.cuni.cz/veda/konference/wds/proc/pdf10/WDS10_105_i1_Reitermanova.pdf)