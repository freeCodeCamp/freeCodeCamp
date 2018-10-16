---
title: Implement Bubble Sort
localeTitle: Implementar o Bubble Sort
---
## Implementar o Bubble Sort

### Método:

*   O Bubble Sort é um algoritmo de ordenação que classifica ou _borbulha_ o maior número como último elemento no final de cada passagem.
*   Nós comparamos cada elemento com o anterior, se o elemento antes é menor, nós trocamos de lugar.
*   A complexidade do tempo do Bubble Sort é **O (n 2 )** .
*   É um algoritmo **estável** .
*   ![Tipo de bolha em ação](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

### Solução:

#### Solução 1: Básico

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

#### Solução 2: Avançado

`js function bubbleSort(array) { for (let i = 0; i < array.length; i++){ for (let j = 0; j < array.length-1-i; j++){ if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]]; // Using ES6 array destructuring to swap } } return array; }`

*   [Executar código](https://repl.it/@ezioda004/Bubble-Sort)
    
    ### Referências:
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/bubble-sort/)
    
*   [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
    
*   Vídeo por [HackerRank](https://www.youtube.com/watch?v=6Gv8vg0kcHc)