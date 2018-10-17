---
title: Implement Selection Sort
localeTitle: Implementar o tipo de seleção
---
## Implementar o tipo de seleção

### Método:

*   A seleção de classificação é um dos algoritmos de classificação mais fáceis de entender e implementar.
*   Este algoritmo divide o array em duas partes:

1.  Ordenado
2.  não triados

*   A parte classificada está no início da matriz e parte não classificada depois.
*   A cada passo, inicialmente assumimos que o primeiro elemento é o menor, então percorremos toda a matriz e _selecionamos_ o menor elemento. No final do passe, nós trocamos o menor elemento para o array ordenado.
*   Tem complexidade de tempo **O (n 2 )** .

### Solução:

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

### Referências:

*   Leia sobre o Sort Selection na [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)