---
title: Freecodecamp Algorithm Bubble Sort Guide
localeTitle: Guía de ordenación de burbujas de algoritmo de Freecodecamp
---
La clasificación de burbujas es un algoritmo de clasificación simple. Este algoritmo de clasificación es un algoritmo basado en comparación en el que cada par de elementos adyacentes es  
Comparado y los elementos son intercambiados si no están en orden. Este algoritmo realiza la clasificación en el lugar, es decir, no crea una nueva matriz mientras  
Realizando el proceso de clasificación.

#### Ejemplo

[Animación de BubbleSort](http://www.sorting-algorithms.com/bubble-sort)
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

#### Implementación de C ++
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

: rocket: \[Ejecutar código #### Implementación de Python
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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CW0M/1)

#### [Complejidad del algoritmo](https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care)

**Peor y la media de complejidad del tiempo del caso:** O (n \* n). El peor caso ocurre cuando la matriz se ordena en orden inverso, es decir, los elementos están en orden decreciente

**Mejor complejidad de tiempo de caso:** O (n). El mejor caso ocurre cuando la matriz ya está ordenada.