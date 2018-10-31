---
title: Implement Bubble Sort
localeTitle: Implementar Bubble Sort
---
## Implementar Bubble Sort

### Método:

*   Bubble Sort es un algoritmo de clasificación que ordena o _burbujea_ el número más grande como último elemento al final de cada pasada.
*   Comparamos cada elemento con el anterior, si el elemento anterior es más pequeño, intercambiamos sus lugares.
*   La complejidad del tiempo de Bubble Sort es **O (n 2 )** .
*   Es un algoritmo **estable** .
*   ![Tipo burbuja en acción](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

### Solución:

#### Solución 1: Básico

```js
function swap(a, b, arr){ 
  let tmp = arr[a]; 
  arr[a] = arr[b]; 
  arr[b] = tmp; 
 } 
 function bubbleSort(array) { 
  for (let i = 0; i < array.length; i++){ 
    for (let j = 0; j < array.length-1-i; j++){ // -i because the largest element will be bubbled at the end so we don't have to compare. 
      if (array[j] > array[j+1]){ 
        swap(j, j+1, array); 
      } 
    } 
  } 
  return array; 
 } 
```

#### Solución 2: Avanzado

`js function bubbleSort(array) { for (let i = 0; i < array.length; i++){ for (let j = 0; j < array.length-1-i; j++){ if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]]; // Using ES6 array destructuring to swap } } return array; }`

*   [Ejecutar código](https://repl.it/@ezioda004/Bubble-Sort)
    
    ### Referencias:
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/bubble-sort/)
    
*   [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
    
*   Video de [HackerRank](https://www.youtube.com/watch?v=6Gv8vg0kcHc)