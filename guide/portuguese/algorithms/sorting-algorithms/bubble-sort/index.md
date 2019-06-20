---
title: Bubble Sort
localeTitle: Tipo de bolha
---
## Tipo de bolha

O Bubble Sort é o algoritmo de ordenação mais simples que funciona trocando repetidamente os elementos adjacentes se eles estiverem na ordem errada.

Este é um algoritmo de ordenação muito lento em comparação com algoritmos como o quicksort, com a complexidade do pior caso O (n ^ 2). No entanto, a desvantagem é que o bubble sort é um dos algoritmos de ordenação mais fáceis de implementar do zero.

### Exemplo:

#### Primeiro passe:

(5 1 4 2 8) -> (1 5 4 2 8), Aqui, o algoritmo compara os dois primeiros elementos e troca desde 5> 1.

(1 5 4 2 8) -> (1 4 5 2 8), Trocar desde 5> 4

(1 4 5 2 8) -> (1 4 2 5 8), Trocar desde 5> 2

(1 4 2 5 8) -> (1 4 2 5 8), Agora, como esses elementos já estão em ordem (8> 5), o algoritmo não os troca.

#### Segundo Passe:

(1 4 2 5 8) -> (1 4 2 5 8)

(1 4 2 5 8) -> (1 2 4 5 8), Troca desde 4> 2

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

Agora, a matriz já está classificada, mas nosso algoritmo não sabe se está concluído. O algoritmo precisa de um passe inteiro sem qualquer troca para saber se está classificado.

#### Terceira passagem:

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

#### Propriedades

*   Complexidade do espaço: O (1)
*   Melhor desempenho do case: O (n)
*   Desempenho médio do caso: O (n \* n)
*   Desempenho pior caso: O (n \* n)
*   Estável: sim

### Explicação de vídeo

[Tipo de bolha de maneira fácil](https://www.youtube.com/watch?v=Jdtq5uKz-w4)

Este código usará bubble sort para classificar o array.

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

### Propriedades:

*   Complexidade Espacial: O (1)
*   Complexidade do Tempo: O (n), O (n \* n), O (n \* n) para os casos Melhor, Médio e Pior, respectivamente.
*   No lugar: sim
*   Estável: sim

\======= Aqui está o algoritmo escrito em Java.

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

\=======

### A implementação recursiva do Bubble Sort.

```cpp
void bubblesort(int arr[], int n) 
 { 
    if(n==1)    //Initial Case 
        return; 
 
    for(int i=0;i<n-1;i++)  //After this pass the largest element will move to its desired location. 
    { 
        if(arr[i]>arr[i+1]) 
        { 
            temp=arr[i]; 
            arr[i]=arr[i+1]; 
            arr[i+1]=temp; 
        } 
    } 
 
    bubblesort(arr,n-1);    //Recursion for remaining array 
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