---
title: Implement Insertion Sort
localeTitle: Implemente a ordem de inserção
---
## Implemente a ordem de inserção

### Método:

*   A classificação de inserção pressupõe que a matriz é dividida em duas partes:

1.  Classificado (inicialmente o primeiro elemento)
2.  não triados

*   Em cada passagem, selecionamos um elemento e verificamos o array ordenado.
*   Se o elemento selecionado for menor que o último elemento da matriz classificada, então nós mudamos a matriz classificada por 1 até encontrarmos o local para _inserir_ o elemento selecionado.
*   ![Tipo de inserção em ação](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif) - [fonte](https://en.wikipedia.org/wiki/Insertion_sort)
*   A comple- xidade de tempo da ordenação por Inserção é de **O (n 2 )** .
*   É um algoritmo **estável** .

### Solução:

```js
function insertionSort(array) { 
  for (let i = 1; i < array.length; i++){ 
    let curr = array[i]; 
    for (var j = i-1; j >= 0 && array[j] > curr; j--){ 
      array[j+1] = array[j]; 
    } 
    array[j+1] = curr; 
  } 
  return array; 
 } 
```

*   [Executar código](https://repl.it/@ezioda004/Insertion-Sort)

### Referências:

*   [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
*   [Khan Academy](https://www.youtube.com/watch?v=lCzQvQr8Utw)