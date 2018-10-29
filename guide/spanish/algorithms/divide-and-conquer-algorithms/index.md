---
title: Divide and Conquer Algorithms
localeTitle: Divide y conquista los algoritmos
---
## Divide y conquista los algoritmos

Divide y vencerás | (Introducción) Al igual que Greedy y Dynamic Programming, Divide and Conquer es un paradigma algorítmico. Un algoritmo típico de Dividir y Conquistar resuelve un problema usando los siguientes tres pasos.

1.  Dividir: divide el problema dado en subproblemas del mismo tipo.
2.  Conquista: resuelve recursivamente estos subproblemas
3.  Combinar: Combinar adecuadamente las respuestas.

Los siguientes son algunos algoritmos estándar que son los algoritmos de dividir y conquistar.

1) La búsqueda binaria es un algoritmo de búsqueda. En cada paso, el algoritmo compara el elemento de entrada x con el valor del elemento central en la matriz. Si los valores coinciden, devuelva el índice del medio. De lo contrario, si x es menor que el elemento medio, entonces el algoritmo se repite para el lado izquierdo del elemento medio, de lo contrario se repite para el lado derecho del elemento medio.

2) Quicksort es un algoritmo de clasificación. El algoritmo selecciona un elemento de pivote, reorganiza los elementos de la matriz de tal manera que todos los elementos más pequeños que el elemento de pivote seleccionado se mueven hacia el lado izquierdo del pivote, y todos los elementos mayores se mueven hacia el lado derecho. Finalmente, el algoritmo ordena recursivamente los subgrupos a la izquierda y derecha del elemento de pivote.

3) Merge Sort es también un algoritmo de clasificación. El algoritmo divide la matriz en dos mitades, las ordena de forma recursiva y finalmente fusiona las dos mitades ordenadas.

4) Par de puntos más cercano El problema es encontrar el par de puntos más cercano en un conjunto de puntos en el plano xy. El problema se puede resolver en tiempo O (n ^ 2) calculando distancias de cada par de puntos y comparando las distancias para encontrar el mínimo. El algoritmo Divide and Conquer resuelve el problema en tiempo O (nLogn).

5) El algoritmo de Strassen es un algoritmo eficiente para multiplicar dos matrices. Un método simple para multiplicar dos matrices necesita 3 bucles anidados y es O (n ^ 3). El algoritmo de Strassen multiplica dos matrices en tiempo O (n ^ 2.8974).

6) El algoritmo de transformación de Fourier rápido (FFT) de Cooley-Tukey es el algoritmo más común para FFT. Es un algoritmo de dividir y conquistar que funciona en tiempo O (nlogn).

7) El algoritmo de Karatsuba fue el primer algoritmo de multiplicación asintóticamente más rápido que el algoritmo de "escuela primaria" cuadrática. Reduce la multiplicación de dos números de n dígitos como máximo a n ^ 1.585 (que es una aproximación de log de 3 en base 2) productos de un solo dígito. Por lo tanto, es más rápido que el algoritmo clásico, que requiere n ^ 2 productos de un solo dígito.

### Divide y conquista (D y C) vs Programación dinámica (DP)

Ambos paradigmas (D & C y DP) dividen el problema dado en subproblemas y resuelven subproblemas. ¿Cómo elegir uno de ellos para un problema dado? Divide y Conquer se debe usar cuando los mismos subproblemas no se evalúan muchas veces. De lo contrario, se debe utilizar la programación dinámica o la memorización.

Por ejemplo, la búsqueda binaria es un algoritmo de dividir y conquistar, nunca volvemos a evaluar los mismos subproblemas. Por otro lado, para calcular el número n de Fibonacci, se debe preferir la programación dinámica.