---
title: Freecodecamp Algorithm Binary Search Guide
localeTitle: Freecodecamp Algorithm Binary Search Guide
---
La búsqueda binaria es un algoritmo de búsqueda que encuentra la posición de un valor objetivo dentro de una matriz ordenada.

## Ejemplo

![Búsqueda binaria](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3cb9e4cc59081e1b0a19b716dbcfb6df97ac2b52.png)

La ilustración anterior muestra el funcionamiento del algoritmo de búsqueda binario en una matriz ordenada cuando el valor objetivo es **4** .

## Algoritmo

La búsqueda binaria funciona en arreglos ordenados. Una búsqueda binaria comienza comparando el elemento central de la matriz con el valor objetivo. Si el valor objetivo coincide con el elemento central, se devuelve su posición en la matriz. Si el valor objetivo es menor o mayor que el elemento central, la búsqueda continúa la mitad inferior o superior de la matriz, respectivamente, con un nuevo elemento intermedio, eliminando la consideración de la otra mitad.

El pseudocódigo para el algoritmo de búsqueda binario es el siguiente:
```
BinarySearch(A<a href='https://repl.it/CWZq/158' target='_blank' rel='nofollow'>0..N-1], value) { 
  low = 0 
  high = N - 1 
  while (low <= high) { 
    // invariants: value > A[i] for all i < low 
                   value < A[i] for all i > high 
    mid = (low + high) / 2 
    if (A[mid] > value) 
      high = mid - 1 
    else if (A[mid] < value) 
      low = mid + 1 
    else 
      return mid 
  } 
  return not_found // value would be inserted at index "low" 
 } 
```

## Complejidad

*   El peor desempeño de caso: **O (log n)**
*   Mejor rendimiento de caso: **O (1)**
*   Rendimiento promedio del caso: **O (log n)**
*   Peor complejidad de espacio de caso: **O (1)** para iterativo; **O (log n)** para recursivo.

## Implementación de C ++
```
int binarySearch(int arr[], int value, int left, int right) { 
  int middle; 
  while (left <= right) { 
    middle = (left + right) / 2; 
    if (arr[middle] == value) 
      return middle; 
    else if (arr[middle] > value) 
      right = middle - 1; 
    else 
      left = middle + 1; 
  } 
  return -1; 
 } 
```

: cohete: \[Ejecutar código ## Implementación de Python
```
def binary_search(l, value): 
    low = 0 
    high = len(l)-1 
    while low <= high: 
        mid = (low+high)//2 
        if l<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>mid] > value: high = mid-1 
        elif l[mid] < value: low = mid+1 
        else: return mid 
    return -1 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CWZi/2)