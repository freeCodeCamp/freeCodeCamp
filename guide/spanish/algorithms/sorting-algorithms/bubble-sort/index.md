---
title: Bubble Sort
localeTitle: Ordenamiento de burbuja
---
## Ordenamiento de burbuja

Bubble Sort es el algoritmo de clasificación más simple que funciona intercambiando repetidamente los elementos adyacentes si están en el orden incorrecto.

Este es un algoritmo de clasificación muy lento en comparación con algoritmos como quicksort, con la peor complejidad O (n ^ 2). Sin embargo, la desventaja es que la clasificación por burbuja es uno de los algoritmos de clasificación más fáciles de implementar desde cero.

### Ejemplo:

#### Primer pase:

(5 1 4 2 8) -> (1 5 4 2 8), Aquí, el algoritmo compara los dos primeros elementos, y cambia desde 5> 1.

(1 5 4 2 8) -> (1 4 5 2 8), Swap desde 5> 4

(1 4 5 2 8) -> (1 4 2 5 8), Swap desde 5> 2

(1 4 2 5 8) -> (1 4 2 5 8), Ahora, como estos elementos ya están en orden (8> 5), el algoritmo no los intercambia.

#### Segundo paso:

(1 4 2 5 8) -> (1 4 2 5 8)

(1 4 2 5 8) -> (1 2 4 5 8), Swap desde 4> 2

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

Ahora, la matriz ya está ordenada, pero nuestro algoritmo no sabe si está completado. El algoritmo necesita un pase completo sin ningún tipo de cambio para saber que está ordenado.

#### Tercer paso:

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

#### Propiedades

*   Complejidad del espacio: O (1)
*   Mejor rendimiento de caso: O (n)
*   Rendimiento promedio del caso: O (n \* n)
*   El peor desempeño de caso: O (n \* n)
*   Estable: si

### Explicación del video

[Burbuja de manera fácil.](https://www.youtube.com/watch?v=Jdtq5uKz-w4)

Este código utilizará la ordenación de burbujas para ordenar la matriz.

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

### Propiedades:

*   Complejidad del espacio: O (1)
*   Complejidad de tiempo: O (n), O (n \* n), O (n \* n) para los casos Best, Average y Worst respectivamente.
*   En el lugar: si
*   Estable: si

\======= Aquí está el algoritmo escrito en Java.

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

### La implementación recursiva del Bubble Sort.

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

### Más información

*   [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
*   [Algoritmo de clasificación de burbuja - CS50](https://youtu.be/Ui97-_n5xjo)
*   [Bubble Sort Algorithm - GeeksForGeeks (artículo)](http://www.geeksforgeeks.org/bubble-sort)
*   [Algoritmo de ordenamiento de burbujas - MyCodeSchool (video)](https://www.youtube.com/watch?v=Jdtq5uKz-w4)
*   [Algoritmos: Bubble Sort - HackerRank (video)](https://www.youtube.com/watch?v=6Gv8vg0kcHc)
*   [Bubble Sort Algorithm - GeeksForGeeks (video)](https://www.youtube.com/watch?v=nmhjrI-aW5o)
*   [Visualización del orden de burbuja](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)