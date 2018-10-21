---
title: Quick Sort
localeTitle: Ordenação rápida
---
## Ordenação rápida

A classificação rápida é um eficiente algoritmo de divisão e conquista de classificação. A complexidade média de tempo de caso de Classificação Rápida é O (nlog (n)), com complexidade de tempo de pior caso sendo O (n ^ 2).

As etapas envolvidas no Quick Sort são:

*   Escolha um elemento para servir como um pivô; nesse caso, o último elemento da matriz é o pivô.
*   Particionamento: classifica o array de tal maneira que todos os elementos menores que o pivô estão à esquerda, e todos os elementos maiores que o pivô estão à direita.
*   Chame o Quicksort recursivamente, levando em consideração o pivô anterior para subdividir corretamente as matrizes esquerda e direita. (Uma explicação mais detalhada pode ser encontrada nos comentários abaixo)

Uma implementação rápida em JavaScript:

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

Uma implementação de classificação rápida em C

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

A complexidade espacial da ordenação rápida é O (n). Isso é uma melhoria em relação a outros algoritmos de ordenação de divisão e conquista, que ocupam o espaço O (nlong (n)). A classificação rápida consegue isso alterando a ordem dos elementos dentro da matriz especificada. Compare isso com o algoritmo de [classificação de mesclagem](https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort) que cria 2 matrizes, cada comprimento n / 2, em cada chamada de função.

#### Mais Informações:

*   [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/quick-sort)
    
*   [Youtube: Uma explicação visual do Quicksort](https://www.youtube.com/watch?v=MZaf_9IZCrc)
    
*   [Youtube: Gayle Laakmann McDowell (autor de Cracking The Coding Interview) explica os fundamentos do quicksort e mostra algumas implementações](https://www.youtube.com/watch?v=SLauY6PpjW4)