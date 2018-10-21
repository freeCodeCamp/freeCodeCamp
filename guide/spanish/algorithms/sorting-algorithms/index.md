---
title: Sorting Algorithms
localeTitle: Clasificación de los algoritmos
---
## Clasificación de los algoritmos

Los algoritmos de clasificación son un conjunto de instrucciones que toman una matriz o lista como entrada y organizan los elementos en un orden particular.

Las clasificaciones son más comúnmente en orden numérico o alfabético (llamado lexicográfico), y pueden ser en orden ascendente (AZ, 0-9) o descendente (ZA, 9-0).

### Por qué los algoritmos de clasificación son importantes

Dado que la clasificación a menudo puede reducir la complejidad de un problema, es un algoritmo importante en Ciencias de la Computación. Estos algoritmos tienen aplicaciones directas en algoritmos de búsqueda, algoritmos de bases de datos, métodos de dividir y conquistar, algoritmos de estructura de datos y muchos más.

### Algunos algoritmos de clasificación comunes

Algunos de los algoritmos de clasificación más comunes son:

*   Selección de selección
*   Ordenamiento de burbuja
*   Tipo de inserción
*   Combinar clasificación
*   Ordenación rápida
*   Heap Sort
*   Orden de conteo
*   Radix Sort
*   Tipo de cubo

### Clasificación del algoritmo de clasificación

Los algoritmos de clasificación se pueden clasificar en función de los siguientes parámetros:

1.  Basado en el número de swaps o inversión Este es el número de veces que el algoritmo intercambia elementos para ordenar la entrada. `Selection Sort` requiere el número mínimo de swaps.
    
2.  Basado en el número de comparaciones Este es el número de veces que el algoritmo compara elementos para ordenar la entrada. Usando la [notación Big-O](https://guide.freecodecamp.org/computer-science/notation/big-o-notation/) , los ejemplos de algoritmo de clasificación mencionados anteriormente requieren al menos `O(nlogn)` comparaciones en el mejor de los casos y `O(n^2)` comparaciones en el peor de los casos para la mayoría de los resultados.
    
3.  Basado en Recursión o No Recursión Algunos algoritmos de clasificación, como la `Quick Sort` , utilizan técnicas recursivas para ordenar la entrada. Otros algoritmos de clasificación, como la `Selection Sort` por `Selection Sort` o la `Insertion Sort` , utilizan técnicas no recursivas. Por último, algunos algoritmos de clasificación, como la `Merge Sort` , hacen uso de técnicas recursivas y no recursivas para ordenar la entrada.
    
4.  Basado en la estabilidad Se dice que los algoritmos de clasificación son `stable` si el algoritmo mantiene el orden relativo de los elementos con claves iguales. En otras palabras, dos elementos equivalentes permanecen en el mismo orden en la salida ordenada que en la entrada.
    

*   `Insertion sort` , el orden de `Merge Sort` y el `Insertion sort` `Bubble Sort` son estables
*   `Heap Sort` y `Quick Sort` no son estables

1.  Basado en el requisito de espacio adicional Se dice que los algoritmos de clasificación están `in place` si requieren un espacio adicional constante de `O(1)` para la clasificación.

*   `Insertion sort` y la `Insertion sort` `Quick-sort` están `Quick-sort` `in place` medida que movemos los elementos sobre el pivote y no usamos una matriz separada, lo que NO es el caso en la ordenación por fusión, donde el tamaño de la entrada debe asignarse de antemano para almacenar la salida durante el ordenar.
    
*   `Merge Sort` es un ejemplo de clasificación de `out place` ya que requiere espacio de memoria adicional para sus operaciones.
    

### La mejor complejidad de tiempo posible para cualquier clasificación basada en comparación

Cualquier algoritmo de ordenación basado en comparaciones debe realizar al menos comparaciones de nLog2n para ordenar la matriz de entrada, y Heapsort y merge sort son clasificaciones asintóticamente óptimas de comparación. Esto se puede demostrar fácilmente dibujando el diagrama del árbol de decisión.