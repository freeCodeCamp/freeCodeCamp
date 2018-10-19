---
title: Implement Merge Sort
localeTitle: Implementar Merge Sort
---
## Implementar Merge Sort

### Método:

*   Merge Sort es un problema clásico de dividir y vencer.
*   Los siguientes pasos están involucrados:
*   Dividir: Rompemos la matriz desde el medio usando recusión hasta que quedemos con 1 elemento.
*   Conquistar: Entonces ordenamos estas pequeñas matrices.
*   Combine: Finalmente, fusionamos estas pequeñas matrices en una matriz ordenada y seguimos haciéndolo hasta que combinemos todas las matrices.
*   La complejidad del tiempo de Merge Sort es **O (nlogn)** .
*   La complejidad de espacio de Merge Sort es **O (n)** .
*   Es un algoritmo **estable** .
*   ![Combinar Ordenar en acción](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

### Solución:

```js
//Merger function, which merges 2 sorted array into 1 sorted array 
 function merger(arr1, arr2){ 
  let i = 0, j = 0, mergedArr = []; 
  while (i < arr1.length && j < arr2.length){ 
    if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]); 
    else mergedArr.push(arr1[i++]); 
  } 
  while (i < arr1.length){ 
    mergedArr.push(arr1[i++]); 
  } 
  while (j < arr2.length){ 
    mergedArr.push(arr2[j++]); 
  } 
  return mergedArr; 
 } 
 function mergeSort(array) { 
  //Array of length 1 is sorted so we return the same array back 
  if (array.length == 1) return array; 
 
  //Break down the array to half from middle into left and right 
  let middle = Math.floor(array.length/2); 
  let left = mergeSort(array.slice(0, middle)); 
  let right = mergeSort(array.slice(middle)); 
 
  //Return the merged sorted array 
  return merger(left, right); 
 } 
```

*   [Ejecutar código](https://repl.it/@ezioda004/Merge-Sort)

### Referencias:

*   [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
*   Video de [Hackerrank](https://www.youtube.com/watch?v=KF2j-9iSf4Q)