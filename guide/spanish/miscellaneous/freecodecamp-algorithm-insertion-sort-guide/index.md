---
title: Freecodecamp Algorithm Insertion Sort Guide
localeTitle: Guía de clasificación de inserción de algoritmo de Freecodecamp
---
La ordenación por inserción es una [ordenación basada en _comparación_](https://en.wikipedia.org/wiki/Comparison_sort) . Un algoritmo de clasificación se basa en la comparación, si utiliza operadores de comparación (como `less than` y `greated than` ) para encontrar el orden entre dos números.

En esta técnica de clasificación, siempre mantenemos una lista secundaria ordenada en la posición inferior de la lista y luego tomamos un elemento del resto de la lista y lo insertamos en su lugar correcto. Lo hacemos hasta que todos los elementos se insertan en la lista secundaria. Por ejemplo, mientras jugamos a las cartas, ordenamos las cartas en nuestra mano. Comenzando desde la izquierda y moviéndonos hacia la derecha, seguimos insertando la tarjeta en su lugar correcto hasta el final.

## Ejemplo

![Tipo de inserción](//discourse-user-assets.s3.amazonaws.com/original/2X/2/289cddf207e54981a05b56d9c267d078ed827c8b.png)

En el ejemplo anterior, la lista secundaria `grey shaded` siempre se ordena. Tenga en cuenta que al principio, la lista secundaria contiene solo un elemento y está ordenada de forma _trivial_ . Luego, en cada paso, estamos insertando el elemento más a la izquierda de la sublista `white shaded` en su posición correcta.

Por lo tanto, hemos ordenado la lista completa de esta manera.

## Algoritmo
```
Loop for i=0 to N-1: 
 * Pick element array<a href='https://repl.it/CWZq' target='_blank' rel='nofollow'>i] and insert it into sorted sublist array[0...i-1] 
```

## Complejidad
```
Space complexity: O(1)      // Auxillary/temporary space is used. 
 
 Time complexity: O(n*n)     // Two nested for loops are used. 
```

## Implementación de C ++
```
// Function to sort an array using insertion sort 
 void insertionSort(int arr[], int n) 
 { 
   int i, key, j; 
   for (i = 1; i < n; i++) 
   { 
       key = arr[i]; 
       j = i-1; 
 
       /* Move elements of arr[0..i-1], that are greater than key, 
      to one position ahead of their current position */ 
   while (j >= 0 && arr[j] > key) 
   { 
       arr[j+1] = arr[j]; 
       j = j-1; 
   } 
   arr[j+1] = key; // place element key at it's correct place 
   } 
 } 
 
 int main() 
 { 
    // array to be sorted 
    int arr[5] = {12, 11, 13, 5, 6}; 
 
    // call the insertion sort 
 insertionSort(arr, 5); 
 
 // prints sorted array ie 5 6 11 12 13 
 for(int i=0; i<5; i++) 
    std::cout << arr[i] << " "; 
 return 0; 
 } 
```

: cohete: \[Ejecutar código ## Implementación de Python
```
# Function to perform insertion sort 
 def insertionSort(arr): 
    # Traverse through array 
    for i in range(1, len(arr)): 
        key = arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>i] 
        # Move elements of arr[0..i-1], that are greater than key, 
        # to one position ahead of their current position 
        j = i-1 
        while j>=0 and key < arr[j] : 
                arr[j+1] = arr[j] 
                j -= 1 
        arr[j+1] = key # place element key at it's correct place 
 
 # array to be sorted 
 arr = [12, 11, 13, 5, 6] 
 # call the insertion sort 
 insertionSort(arr) 
 # prints sorted array ie 5 6 11 12 13 
 for i in range(len(arr)): 
    print(arr[i],end = ' ') 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CWZi)

## Ventajas

1.  Eficiente para pequeños conjuntos de datos y conjuntos de datos que están casi ordenados.
2.  Simplemente implementado.
3.  Principalmente mejor que la clasificación por burbujas y la selección por selección y generalmente se usa con la clasificación por fusión.

## Desventajas

1.  Es menos eficiente en un gran conjunto de datos que la clasificación por combinación, la clasificación por almacenamiento dinámico y la clasificación rápida.