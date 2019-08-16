---
title: Quick Sort
localeTitle: Ordenação rápida
---
## Ordenação rápida

A Ordenação rápida é um eficiente algoritmo de divisão e conquista de classificação. A complexidade média de tempo de caso de ordenação Rápida é O (nlog (n)), com complexidade de tempo de pior caso sendo O (n^2) dependendo da seleção do elemento dinâmico, que divide a matriz atual em duas sub-matrizes. Por exemplo, a complexidade de tempo do Quick Sort é aproximadamente O (nlog (n)) quando a seleção do pivô divide o array original em dois sub-arrays de tamanho quase igual. Por outro lado, se o algoritmo, que seleciona o elemento pivot das matrizes de entrada, gerar consistentemente 2 sub-matrizes com uma grande diferença em termos de tamanhos de matrizes, o algoritmo de ordenação rápida pode alcançar a complexidade de tempo de pior caso de O (n^2).

As etapas envolvidas no Quick Sort são:

*   Escolha um elemento para servir como um pivô; nesse caso, o último elemento da matriz é o pivô.
*   Particionamento: classifica o array de tal maneira que todos os elementos menores que o pivô estão à esquerda, e todos os elementos maiores que o pivô estão à direita.
*   Chame o Quicksort recursivamente, levando em consideração o pivô anterior para subdividir corretamente as matrizes esquerda e direita. (Uma explicação mais detalhada pode ser encontrada nos comentários abaixo)

## Exemplo de implementações em vários linguagens

### Implementação em JavaScript:

```javascript
const arr = [6, 2, 5, 3, 8, 7, 1, 4] 
 
 const quickSort = (arr, start, end) => { 
 
  if(start < end) { 
 
    // You can learn about how the pivot value is derived in the comments below 
    let pivot = partition(arr, start, end) 
 
    // Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used 
    // These are the recursive calls to quickSort 
    quickSort(arr, start, pivot - 1) 
    quickSort(arr, pivot + 1, end) 
  } 
 
 } 
 
 const partition = (arr, start, end) => { 
  let pivot = end 
  // Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot] 
  // Succeeding comments will expound upon the above comment 
  let i = start - 1 
  let j = start 
 
  // Increment j up to the index preceding the pivot 
  while (j < pivot) { 
 
    // If the value is greater than the pivot increment j 
    if (arr[j] > arr[pivot]) { 
      j++ 
    } 
 
    // When the value at arr[j] is less than the pivot: 
    // increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j] 
    else { 
      i++ 
      swap(arr, j, i) 
      j++ 
    } 
 
  } 
 
  //The value at arr[i + 1] will be greater than the value of arr[pivot] 
  swap(arr, i + 1, pivot) 
 
  //You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1] 
  // As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value 
  return i + 1 
 } 
 
 const swap = (arr, firstIndex, secondIndex) => { 
  let temp = arr[firstIndex] 
  arr[firstIndex] = arr[secondIndex] 
  arr[secondIndex] = temp 
 } 
 
 quickSort(arr, 0, arr.length - 1) 
 console.log(arr) 
```

### Implementação em C

```C
#include<stdio.h> 
 void swap(int* a, int* b) 
 { 
    int t = *a; 
    *a = *b; 
    *b = t; 
 } 
 int partition (int arr[], int low, int high) 
 { 
    int pivot = arr[high]; 
    int i = (low - 1); 
 
    for (int j = low; j <= high- 1; j++) 
    { 
        if (arr[j] <= pivot) 
        { 
            i++; 
            swap(&arr[i], &arr[j]); 
        } 
    } 
    swap(&arr[i + 1], &arr[high]); 
    return (i + 1); 
 } 
 void quickSort(int arr[], int low, int high) 
 { 
    if (low < high) 
    { 
        int pi = partition(arr, low, high); 
 
        quickSort(arr, low, pi - 1); 
        quickSort(arr, pi + 1, high); 
    } 
 } 
 
 
 void printArray(int arr[], int size) 
 { 
    int i; 
    for (i=0; i < size; i++) 
        printf("%d ", arr[i]); 
    printf("n"); 
 } 
 
 
 int main() 
 { 
    int arr[] = {10, 7, 8, 9, 1, 5}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
    quickSort(arr, 0, n-1); 
    printf("Sorted array: n"); 
    printArray(arr, n); 
    return 0; 
 } 
```

### Implementação no Python3
```python
import random

z=[random.randint(0,100) for i in range(0,20)]

def quicksort(z):
    if(len(z)>1):        
        piv=int(len(z)/2)
        val=z[piv]
        lft=[i for i in z if i<val]
        mid=[i for i in z if i==val]
        rgt=[i for i in z if i>val]

        res=quicksort(lft)+mid+quicksort(rgt)
        return res
    else:
        return z

ans1=quicksort(z)
print(ans1)

```

### Implementação no MATLAB
```matlab
a = [9,4,7,3,8,5,1,6,2];

sorted = quicksort(a,1,length(a));

function [unsorted] =  quicksort(unsorted, low, high)
    if low < high
        [pInd, unsorted] = partition(unsorted, low, high);
        unsorted = quicksort(unsorted, low, pInd-1);
        unsorted = quicksort(unsorted, pInd+1, high);
    end

end

function [pInd, unsorted] = partition(unsorted, low, high)
    i = low-1;
    for j = low:1:high-1
        if unsorted(j) <= unsorted(high)
            i = i+1;
            unsorted([i,j]) = unsorted([j,i]);

        end
    end
    unsorted([i+1,high]) = unsorted([high,i+1]);
    pInd = i+1;

end

```

### Implementação em Java

```java
public class Quicksort {

  static void quickSort(int[] array, int p, int r) {
      if (p < r) {
          int q = partition(array, p, r);
          quickSort(array, p, q - 1);
          quickSort(array, q + 1, r);
      }
  }

  static int partition(int[] array, int p, int r) {
      // using the last element as the pivot
      int pivot = array[r];
      int i = p - 1;
      for (int j = p; j <= r - 1; j++) {
          if (array[j] <= pivot) {
              i++;
              int temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          }
      }
      int temp = array[i + 1];
      array[i + 1] = array[r];
      array[r] = temp;
      return i + 1;
  }

    public static void main(String[] args) {
      int [] array = {2,8,7,1,3,5,6,4};
      quickSort(array, 0, 7);
      for (int i : array)
          System.out.print(i + " ");  
   }
}

```

A complexidade espacial da ordenação rápida é `O(n)`. Isso é uma melhoria em relação a outros algoritmos de ordenação de divisão e conquista, que ocupam o espaço `O(nlong(n))`. A Ordenação rápida consegue isso alterando a ordem dos elementos dentro da matriz especificada. Compare isso com o algoritmo de [classificação de mesclagem](https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort) que cria 2 matrizes, cada comprimento `n/2`, em cada chamada de função.
No entanto, existe o problema deste algoritmo de ordenação ser do tempo `O(n*n)` se o pivô é sempre mantido no meio. Isso pode ser superado utilizando um pivô aleatório

## Complexity

| Nome                  | Melhor          | Média               | Pior                | Memória   | Estável   | Comentários |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :---------- |
| **Ordenação rápida**  | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | Não       |  A Ordenação rápida geralmente é feito no local com o espaço da pilha O(log(n)) |

A complexidade espacial da ordenação rápida é O(n). Isso é uma melhoria em relação a outros algoritmos de ordenação de divisão e conquista, que ocupam espaço O(n log(n)).

#### Mais Informações:

*   [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/quick-sort)
    
*   [Youtube: Uma explicação visual do Quicksort](https://www.youtube.com/watch?v=MZaf_9IZCrc)
    
*   [Youtube: Gayle Laakmann McDowell (autor de Cracking The Coding Interview) explica os fundamentos do quicksort e mostra algumas implementações](https://www.youtube.com/watch?v=SLauY6PpjW4)

*   [Quick Sort - MyCodeSchool](https://www.youtube.com/watch?v=COk73cpQbFQ)
