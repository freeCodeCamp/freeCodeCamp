---
title: Overfitting Has Many Faces
localeTitle: El exceso de equipamiento tiene muchas caras
---
## El exceso de equipamiento tiene muchas caras

Si un algoritmo de aprendizaje se ajusta bien a un conjunto de entrenamiento dado, esto no simplemente indica una buena hipótesis. El ajuste excesivo se produce cuando la función de hipótesis J () se ajusta demasiado a su conjunto de entrenamiento, ya que tiene una alta varianza y un bajo error en el conjunto de entrenamiento y un alto error de prueba en cualquier otro dato.

En otras palabras, el ajuste excesivo de los hechizos si el error de la hipótesis medido en el conjunto de datos que se utilizó para entrenar los parámetros resulta ser menor que el error en cualquier otro conjunto de datos.

### Elegir un grado polinomial óptimo

Elegir el grado correcto de polinomio para la función de hipótesis es importante para evitar el sobreajuste. Esto se puede lograr probando cada grado de polinomio y observando el efecto sobre el resultado del error en varias partes del conjunto de datos. Por lo tanto, podemos dividir nuestro conjunto de datos en 3 partes que pueden utilizarse para optimizar el grado theta y polinomial de la hipótesis.

Una buena relación de desglose del conjunto de datos es:

*   Set de entrenamiento: 60%
*   Validación cruzada: 20%
*   Set de prueba: 20%

Los tres valores de error se pueden calcular por el siguiente método: 1

1.  Utilice el conjunto de entrenamiento para cada grado del polinomio con el fin de optimizar los parámetros de `Θ`
2.  Utilice el conjunto de validación cruzada para encontrar el grado polinomial con el error más bajo
3.  Utilice el conjunto de prueba para estimar el error de generalización.

### Maneras de arreglar el sobreajuste

Estas son algunas de las formas de abordar el sobreajuste:

1.  Obteniendo más ejemplos de entrenamiento
2.  Probando un conjunto más pequeño de características.
3.  Aumentando el parámetro `λ lambda`

#### Más información:

[Curso de aprendizaje automático de Coursera](https://www.coursera.org/learn/machine-learning)

### Fuentes

1.  [Ng, Andrew. "Aprendizaje automático". _Coursera_ Consultado el 29 de enero de 2018.](https://www.coursera.org/learn/machine-learning)