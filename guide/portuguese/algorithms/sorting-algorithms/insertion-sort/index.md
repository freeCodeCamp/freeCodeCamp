---
title: Insertion Sort
localeTitle: Tipo de Inserção
---
## Tipo de Inserção

A ordenação de inserção é o algoritmo de ordenação mais simples e eficiente para um pequeno número de elementos.

### Exemplo:

Na ordenação de inserção, você compara o elemento- `key` com os elementos anteriores. Se os elementos anteriores forem maiores que o elemento- `key` , você moverá o elemento anterior para a próxima posição.

Comece do índice 1 ao tamanho da matriz de entrada.

\[8 3 5 1 4 2\]

Passo 1 :

! [\[8 3 5 1 4 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/1.png?raw=true)
```
      key = 3 //starting from 1st index. 
 
      Here `key` will be compared with the previous elements. 
 
      In this case, `key` is compared with 8. since 8 > 3, move the element 8 
      to the next position and insert `key` to the previous position. 
 
      Result: [ 3 8 5 1 4 2 ] 
```

Passo 2 :

! [\[3 8 5 1 4 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/2.png?raw=true)
```
      key = 5 //2nd index 
 
      8 > 5 //move 8 to 2nd index and insert 5 to the 1st index. 
 
      Result: [ 3 5 8 1 4 2 ] 
```

Etapa 3 :

! [\[3 5 8 1 4 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/3.png?raw=true)
```
      key = 1 //3rd index 
 
      8 > 1     => [ 3 5 1 8 4 2 ] 
 
      5 > 1     => [ 3 1 5 8 4 2 ] 
 
      3 > 1     => [ 1 3 5 8 4 2 ] 
 
      Result: [ 1 3 5 8 4 2 ] 
```

Passo 4 :

! [\[1 3 5 8 4 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/4.png?raw=true)
```
      key = 4 //4th index 
 
      8 > 4   => [ 1 3 5 4 8 2 ] 
 
      5 > 4   => [ 1 3 4 5 8 2 ] 
 
      3 > 4   ≠>  stop 
 
      Result: [ 1 3 4 5 8 2 ] 
```

Passo 5:

! [\[1 3 4 5 8 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/5.png?raw=true)
```
      key = 2 //5th index 
 
      8 > 2   => [ 1 3 4 5 2 8 ] 
 
      5 > 2   => [ 1 3 4 2 5 8 ] 
 
      4 > 2   => [ 1 3 2 4 5 8 ] 
 
      3 > 2   => [ 1 2 3 4 5 8 ] 
 
      1 > 2   ≠> stop 
 
      Result: [1 2 3 4 5 8] 
```

! [\[1 2 3 4 5 8\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/6.png?raw=true)

O algoritmo abaixo é uma versão ligeiramente otimizada para evitar a troca do elemento- `key` em cada iteração. Aqui, o elemento- `key` será trocado no final da iteração (etapa).

```
    InsertionSort(arr[]) 
      for j = 1 to arr.length 
         key = arr[j] 
         i = j - 1 
         while i > 0 and arr[i] > key 
            arr[i+1] = arr[i] 
            i = i - 1 
         arr[i+1] = key 
```

Aqui está uma implementação detaied em Javascript:
```
function insertion_sort(A) { 
    var len = array_length(A); 
    var i = 1; 
    while (i < len) { 
        var x = A[i]; 
        var j = i - 1; 
        while (j >= 0 && A[j] > x) { 
            A[j + 1] = A[j]; 
            j = j - 1; 
        } 
        A[j+1] = x; 
        i = i + 1; 
    } 
 } 
```

Uma implementação rápida no Swift é mostrada abaixo:

```swift
  var array = [8, 3, 5, 1, 4, 2] 
 
  func insertionSort(array:inout Array<Int>) -> Array<Int>{ 
      for j in 0..<array.count { 
          let key = array[j] 
          var i = j-1 
 
          while (i > 0 && array[i] > key){ 
              array[i+1] = array[i] 
              i = i-1 
          } 
          array[i+1] = key 
      } 
      return array 
  } 
```

O exemplo de Java é mostrado abaixo:
```
public int[] insertionSort(int[] arr) 
      for (j = 1; j < arr.length; j++) { 
         int key = arr[j] 
         int i = j - 1 
         while (i > 0 and arr[i] > key) { 
            arr[i+1] = arr[i] 
            i -= 1 
         } 
         arr[i+1] = key 
      } 
      return arr; 
```

### tipo de inserção em c….

```C
void insertionSort(int arr[], int n) 
 { 
   int i, key, j; 
   for (i = 1; i < n; i++) 
   { 
       key = arr[i]; 
       j = i-1; 
       while (j >= 0 && arr[j] > key) 
       { 
           arr[j+1] = arr[j]; 
           j = j-1; 
       } 
       arr[j+1] = key; 
   } 
 } 
```

### Propriedades:

*   Complexidade Espacial: O (1)
*   Complexidade do Tempo: O (n), O (n \* n), O (n \* n) para Melhor, Média, Piores Casos respectivamente
*   Classificação no local: sim
*   Estável: sim

#### Outros recursos:

*   [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
*   [CS50 - YouTube](https://youtu.be/TwGb6ohsvUU)
*   [SortInsertion - GeeksforGeeks, YouTube](https://www.youtube.com/watch?v=wObxd4Kx8sE)
*   [Visualização de ordenação de inserção](https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/)