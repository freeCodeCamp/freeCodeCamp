---
title: Implement Selection Sort
localeTitle: Implementar Selección Ordenar
---
## Implementar Selección Ordenar

### Método:

*   El ordenamiento por selección es uno de los algoritmos de clasificación más fáciles de entender e implementar.
*   Este algoritmo divide la matriz en dos partes:

1.  Ordenados
2.  Sin clasificar

*   La parte ordenada se encuentra al principio de la matriz y la parte sin clasificar después.
*   Cada paso, inicialmente asumimos que el primer elemento es el más pequeño, luego hacemos un ciclo a través de toda la matriz y _seleccionamos_ el elemento más pequeño. Al final del paso, intercambiamos el elemento más pequeño a la matriz ordenada.
*   Tiene **O (n 2 )** complejidad de tiempo.

### Solución:

```js
function swap(a, b, arr){ 
  let tmp = arr[a]; 
  arr[a] = arr[b]; 
  arr[b] = tmp; 
 } 
 function selectionSort(array) { 
  for (let i = 0; i < array.length-1; i++){ 
    let min = i; 
    for (let j = i+1; j < array.length; j++){ 
      if (array[min] > array[j]) min = j; 
    } 
    swap(i, min, array); 
  } 
  return array; 
 } 
```

### Referencias:

*   Lea acerca de la selección de selección en [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)