---
title: Bubble Sort
localeTitle: Tipo de bolha
---
## Tipo de bolha

O Bubble Sort é o algoritmo de ordenação mais simples que funciona trocando repetidamente os elementos adjacentes se eles estiverem na ordem errada.

Este é um algoritmo de ordenação muito lento em comparação com algoritmos como o quicksort, com a complexidade do pior caso O (n^2). No entanto, a desvantagem é que o bubble sort é um dos algoritmos de ordenação mais fáceis de implementar do zero. Como resultado, o algoritmo de classificação de bolhas é comumente ensinado como o primeiro algoritmo de ordenação em classes de estrutura de dados e algoritmos. Do ponto de vista técnico, o Bubble Sort é razoável para classificar matrizes de pequeno porte ou especialmente ao executar algoritmos de ordenação em computadores com recursos de memória extremamente limitados.

### Exemplo:

#### Primeiro passe:

( **5 1** 4 2 8 ) –> ( 1 5 4 2 8 ), Aqui, o algoritmo compara os dois primeiros elementos e troca desde 5> 1.

( 1 **5 4** 2 8 ) –> ( 1 4 5 2 8 ), Trocar desde 5> 4

( 1 4 **5 2** 8 ) –> ( 1 4 2 5 8 ), Trocar desde 5> 2

( 1 4 2 **5 8** ) –> ( 1 4 2 5 8 ), Agora, como esses elementos já estão em ordem (8> 5), o algoritmo não os troca.

#### Segundo Passe:

( **1 4** 2 5 8 ) –> ( 1 4 2 5 8 )

( 1 **4 2** 5 8 ) –> ( 1 2 4 5 8 ), Troca desde 4> 2

( 1 2 **4 5** 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 **5 8** ) –> ( 1 2 4 5 8 )

Agora, a matriz já está classificada, mas nosso algoritmo não sabe se está concluído. O algoritmo precisa de um passe inteiro sem qualquer troca para saber se está classificado.

#### Terceira passagem:

( **1 2** 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 **2 4** 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 **4 5** 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 **5 8** ) –> ( 1 2 4 5 8 )

#### Propriedades

*   Complexidade do espaço: O (1)
*   Melhor desempenho do case: O (n)
*   Desempenho médio do caso: O (n \* n)
*   Desempenho pior caso: O (n \* n)
*   Estável: sim

### Explicação de vídeo

[Tipo de bolha de maneira fácil](https://www.youtube.com/watch?v=Jdtq5uKz-w4)

### Exemplo em Java.
```java
public int[] bubSort(int []ar)
{
  int i, j, temp;
  for (i = 0; i < n; i++)
  {
    for (j = 0; j < n - 1 - i; j++)
    {
      if (ar[j] > ar[j+1])
      {
        temp = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = temp;
      }
    }
  }
  return ar[];
}
```
### Exemplo em C++
```cpp
#include <iostream>
using namespace std;
int BubbleSort[] (int arr[], int n)
{
  int i, j, temp;
  for (i = 0; i < n; ++i)
  {
    for (j = 0; j < n-i-1; ++j)
    {
      if (arr[j] > arr[j+1])
      {
        temp = arr[j]
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
```
### Exemplo em Swift
```swift
func bubbleSort(_ inputArray: [Int]) -> [Int] {
  guard inputArray.count > 1 else { return inputArray } // make sure our input array has more than 1 element
  var numbers = inputArray // function arguments are constant by default in Swift, so we make a copy
  for i in 0..<(numbers.count - 1) {
    for j in 0..<(numbers.count - i - 1) {
      if numbers[j] > numbers[j + 1] {
        numbers.swapAt(j, j + 1)
      }
    }
  }
  return numbers // return the sorted array
}
```
### Exemplo em Python
```python
def bubblesort( A ):
  for i in range( len( A ) ):
    for k in range( len( A ) - 1, i, -1 ):
      if ( A[k] < A[k - 1] ):
        swap( A, k, k - 1 )
 
def swap( A, x, y ):
  tmp = A[x]
  A[x] = A[y]
  A[y] = tmp
```

### Bubble Sort modificada

Agora sabemos que o Bubble Sort tem uma complexidade geral de O (n^2) para todos os casos de entrada. Como esse é um tipo muito lento, uma das otimizações comumente sugeridas e bastante fáceis pode ser feita para incluir o melhor caso (onde a lista / array fornecida como entrada já está classificada). Se conseguirmos verificar essa condição (fazendo N comparações), poderemos terminar a execução imediatamente após validar o fato de que a matriz está classificada.

Isso significa que, no melhor dos casos, nosso Algoritmo de classificação de bolhas modificado teria uma complexidade de O (n). Isso não muda a média ou o pior caso, é claro, mas pode mostrar um aumento decente na velocidade se você pretende classificar um número de instâncias, algumas das quais provavelmente já serão classificadas.

Este código usará bubble sort para classificar o array.

### Exemplo em JavaScript

```js
let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9];
let sorted = false
 
while(!sorted) {
  sorted = true
  for(var i=0; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      let temp = arr[i];
      arr[i] = arr[i-1]; 
      arr[i-1] = temp;
      sorted = false;
    }
  }
}
```
### Exemplo em Java

Exemplo 1:

```java
public int[] bubSortModified(int []ar)
{
  int i, j, temp;
  boolean sorted;
  for (i = 0; i < n; i++)
  {
    sorted = true;
    for (j = 0; j < n - 1 - i; j++)
    {
      if (ar[j] > ar[j+1])
      {
        sorted = false; //implying array was not sorted already, swaps are needed
        temp = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = temp;       
      }
    }
    if (sorted == true)
      break; //if array is sorted, stop iterating
  }
  return ar[];
}
```

Exemplo 2:

```java
public class bubble-sort {
  static void sort(int[] arr) {
    int n = arr.length;
    int temp = 0;
    for(int i=0; i < n; i++){
      for(int x=1; x < (ni); x++){
        if(arr[x-1] > arr[x]){
          temp = arr[x-1];
          arr[x-1] = arr[x];
          arr[x] = temp;
        }
      }
    }
  }
  
  public static void main(String[] args) {
    for(int i=0; i < 15; i++){
      int arr[i] = (int)(Math.random() * 100 + 1);
    }
 
    System.out.println("array before sorting\n");
    for(int i=0; i < arr.length; i++){
      System.out.print(arr[i] + " ");
    }
    bubbleSort(arr);
    System.out.println("\n array after sorting\n");
    for(int i=0; i < arr.length; i++){
      System.out.print(arr[i] + " ");
    }
  }
 }
```

### Exemplo em C++

Exemplo 1:

```cpp
// Implementação Recursiva
void bubblesort(int arr[], int n)
{
  if(n==1) //Initial Case
    return;
  bool swap_flag = false;
  for(int i=0;i<n-1;i++) //After this pass the largest element will move to its desired location.
  {
    if(arr[i]>arr[i+1])
    {
      int temp=arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=temp;
      swap_flag = true;
    }
  }
// IF no two elements were swapped in the loop, then return, as array is sorted 
  if(swap_flag == false)
    return;
  bubblesort(arr,n-1); //Recursion for remaining array
}
```

Exemplo 2:

```cpp
void bubblesort(int arr[], int n) 
{
  if(n==1) //Initial Case 
    return; 
  for(int i=0;i<n-1;i++) //After this pass the largest element will move to its desired location. 
  { 
    if(arr[i]>arr[i+1]) 
    { 
      temp=arr[i]; 
      arr[i]=arr[i+1]; 
      arr[i+1]=temp; 
    } 
  } 
  bubblesort(arr,n-1); //Recursion for remaining array
}
```

### Exemplo em Ruby
```ruby
def bubble_sort(arr)
  sorted = false
  until sorted
    sorted = true
    (arr.count-1).times do|i|
      if arr[i] > arr[i + 1]
        arr[i], arr[i +1] = arr[i +1], arr[i]
	    sorted = false
	  end
    end
  end
arr end
```

### Exemplo em PHP
```php
function bubble_sort($arr) {
  $size = count($arr)-1;
  for ($i=0; $i<$size; $i++) {
    for ($j=0; $j<$size-$i; $j++) {
      $k = $j+1;
      if ($arr[$k] < $arr[$j]) {
        // Swap elements at indices: $j, $k
        list($arr[$j], $arr[$k]) = array($arr[$k], $arr[$j]);
      }
    }
  }
  return $arr;// return the sorted array
}

$arr = array(1,3,2,8,5,7,4,0);
print("Before sorting");
print_r($arr);

$arr = bubble_sort($arr);
print("After sorting by using bubble sort");
print_r($arr);
```

### Exemplo em C
```c
#include <stdio.h>

int BubbleSort(int array[], int n);

int main(void) {
  int arr[] = {10, 2, 3, 1, 4, 5, 8, 9, 7, 6};
  BubbleSort(arr, 10);

  for (int i = 0; i < 10; i++) {
    printf("%d", arr[i]);
  }
  return 0;
}

int BubbleSort(int array[], n)
{
for (int i = 0 ; i < n - 1; i++)
  {
    for (int j = 0 ; j < n - i - 1; j++)     //n is length of array
    {
      if (array[j] > array[j+1])      // For decreasing order use 
      {
        int swap   = array[j];
        array[j]   = array[j+1];
        array[j+1] = swap;
      }
    }
  }
}
```

### Mais Informações

*   [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
*   [Algoritmo de classificação de bolhas - CS50](https://youtu.be/Ui97-_n5xjo)
*   [Algoritmo de classificação de bolhas - GeeksForGeeks (artigo)](http://www.geeksforgeeks.org/bubble-sort)
*   [Algoritmo de Classificação de Bolhas - MyCodeSchool (video)](https://www.youtube.com/watch?v=Jdtq5uKz-w4)
*   [Algoritmos: Bubble Sort - HackerRank (vídeo)](https://www.youtube.com/watch?v=6Gv8vg0kcHc)
*   [Algoritmo de classificação de bolhas - GeeksForGeeks (vídeo)](https://www.youtube.com/watch?v=nmhjrI-aW5o)
*   [Visualização de classificação de bolhas](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)
