---
title: Freecodecamp Algorithm Bubble Sort Guide
localeTitle: Guia de classificação de bolhas do algoritmo Freecodecamp
---
A classificação de bolhas é um algoritmo de classificação simples. Este algoritmo de ordenação é um algoritmo baseado em comparação, no qual cada par de elementos adjacentes é  
comparados e os elementos são trocados se não estiverem em ordem. Este algoritmo faz a classificação no local, ou seja, ele não cria uma nova matriz enquanto  
realizando o processo de triagem.

#### Exemplo

[Animação do BubbleSort](http://www.sorting-algorithms.com/bubble-sort)
```
array = <a href='https://repl.it/CXif' target='_blank' rel='nofollow'>5, 1, 4, 2, 8] 
 
 First Pass: 
 ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. 
 ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 
 ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 
 ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them. 
 
 Second Pass: 
 ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
 ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
 Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any 
 swap to know it is sorted. 
 
 Third Pass: 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
```

#### Implementação de C ++
```
// Function to implement bubble sort 
 void bubble_sort(int array[], int n) 
 { 
    // Here n is the number of elements in array 
    int temp; 
 
    for(int i = 0; i < n-1; i++) 
 { 
    // Last i elements are already in place 
    for(int j = 0; j < ni-1; j++) 
    { 
        if (array[j] > array[j+1]) 
        { 
            // swap elements at index j and j+1 
            temp = array[j]; 
            array[j] = array[j+1]; 
            array[j+1] = temp; 
        } 
    } 
 } 
 } 
```

: rocket: \[código de execução #### implementação de Python
```
def bubble_sort(arr): 
    exchanges = True # A check to see if the array is already sorted so that no further steps gets executed 
    i = len(arr)-1 
    while i > 0 and exchanges: 
       exchanges = False 
       for j in range(i): 
           if arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>j]>arr[j+1]: 
               exchanges = True 
               arr[j], arr[j+1] = arr[j+1], arr[j] 
       i -= 1 
 
 arr = [5,3,23,1,43,2,54] 
 bubble_sort(arr) 
 print(arr) # Prints [1, 2, 3, 5, 23, 43, 54] 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CW0M/1)

#### [Complexidade do Algoritmo](https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care)

**Pior e Média Complexidade de Tempo de Caso:** O (n \* n). O pior caso ocorre quando o array é classificado em ordem reversa, ou seja, os elementos estão em ordem decrescente

**Melhor complexidade do tempo de caso:** O (n). Melhor caso ocorre quando a matriz já está classificada.