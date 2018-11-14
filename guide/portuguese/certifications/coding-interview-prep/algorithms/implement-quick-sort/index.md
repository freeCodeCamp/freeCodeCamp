---
title: Implement Quick Sort
localeTitle: Implementar classificação rápida
---
## Implementar classificação rápida

### Método:

*   A classificação rápida é um algoritmo de classificação eficiente. É um algoritmo no local, portanto, não ocupa nenhum espaço auxiliar.
*   Primeiro, escolha um ponto de pivot aleatório em torno do qual mova todos os elementos menores para a esquerda e os elementos maiores para a direita.
*   Depois de obter o pivotIndex que é essencialmente a posição fixa desse elemento, encontramos outro pivotIndex chamando esta função de forma discente.
*   O pior caso da classificação rápida é **O (n 2 ),** mas isso pode ser evitado se escolhermos o ponto de **pivotagem** aleatório, de modo que o grande O é **O (nlogn)** .
*   A complexidade do espaço é **O (logn)** .
*   É um algoritmo **instável** .
*   ![Ordenação rápida em ação](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

### Solução:

```js
//Swapping array elements via ES6 array destructuring 
 function swap(arr, x, y){ 
  [arr[x], arr[y]] = [arr[y], arr[x]]; 
 } 
 
 //Pivot function returns the fixed pivot point 
 function pivot(arr, left = 0, right = arr.length-1){ 
  let shift = left; 
  for (let i = left+1; i <= right; i++){ 
 
    //Move all the small elements on the left side 
    if (arr[i] < arr[left]) swap(arr, i, ++shift); 
  } 
 
  //Finally swapping the last element with the left 
  swap(arr, left, shift); 
  return shift; 
 } 
 
 function quickSort(array, left = 0, right = array.length-1) { 
  if (left < right){ 
    let pivotIndex = pivot(array, left, right); 
 
    //Recusrively calling the function to the left of the pivot and to the right of the pivot 
    quickSort(array, left, pivotIndex-1); 
    quickSort(array, pivotIndex+1, right); 
  } 
  return array; 
 } 
```

*   [Executar código](https://repl.it/@ezioda004/Quick-Sort)

### Referência:

*   [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
*   [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)