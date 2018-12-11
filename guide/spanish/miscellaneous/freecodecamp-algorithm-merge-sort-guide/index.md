---
title: Freecodecamp Algorithm Merge Sort Guide
localeTitle: Freecodecamp Algorithm Merge Sort Guide
---
La mayoría de los idiomas modernos tienen una función de clasificación () incorporada que ordena automáticamente una matriz o lista de entrada. ¿Alguna vez te has preguntado cómo funciona realmente la función de clasificación en el interior? Conocer los algoritmos de clasificación comunes y sus implementaciones es la parte más importante de una entrevista de codificación. En esta serie de artículos, veremos varios algoritmos de clasificación importantes. Cómo se implementan, la complejidad del tiempo y el espacio, etc. Nuestra primera publicación es en Combinar clasificación.

Para obtener información sobre la clasificación de fusión, un requisito básico es un conocimiento básico sobre [Recursión](http://programmers.stackexchange.com/questions/25052/in-plain-english-what-is-recursion) . Merge Sort se basa en el principio de Dividir y Conquistar. Todo el proceso de clasificación de una matriz de N enteros se puede resumir en tres pasos:

*   Divide la matriz en dos mitades.
*   Ordene la mitad izquierda y la derecha utilizando el mismo algoritmo recurrente.
*   Fusionar las mitades ordenadas.

La mayor ventaja de usar la ordenación de mezcla es que la [complejidad](https://www.youtube.com/watch?v=V42FBiohc6c&list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn) del [tiempo](https://www.youtube.com/watch?v=V42FBiohc6c&list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn) es solo n \* log (n) para ordenar una matriz completa. Es mucho mejor que n ^ 2 el tiempo de ejecución de la ordenación por burbuja o la ordenación por inserción.

Antes de escribir código, entendamos cómo funciona la ordenación de combinación con la ayuda de un diagrama.

![Combinar clasificación](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4712ef1a5d856dbb4af393fcc08a820a38787395.png)

*   Inicialmente tenemos una matriz de 6 enteros sin clasificar Arr (5, 8, 3, 9, 1, 2)
*   Dividimos la matriz en dos mitades Arr1 = (5, 8, 3) y Arr2 = (9, 1, 2).
*   Nuevamente, los dividimos en dos mitades: Arr3 = (5, 8) y Arr4 = (3) y Arr5 = (9, 1) y Arr6 = (2)
*   Nuevamente, los dividimos en dos mitades: Arr7 = (5), Arr8 = (8), Arr9 = (9), Arr10 = (1) y Arr6 = (2)
*   Ahora compararemos los elementos de estos arreglos secundarios para fusionarlos.

## Implementación

### Implementación de C ++
```
void merge(int array[], int left, int mid, int right) 
 { 
    int i, j, k; 
 
    // Size of left sublist 
 int size_left = mid - left + 1; 
 
 // Size of right sublist 
 int size_right =  right - mid; 
 
 /* create temp arrays */ 
 int Left[size_left], Right[size_right]; 
 
 /* Copy data to temp arrays L[] and R[] */ 
 for(i = 0; i < size_left; i++) 
 { 
    Left[i] = array[left+i]; 
 } 
 
 for(j = 0; j < size_right; j++) 
 { 
    Right[j] = array[mid+1+j]; 
 } 
 
 // Merge the temp arrays back into arr[left..right] 
 i = 0; // Initial index of left subarray 
 j = 0; // Initial index of right subarray 
 k = left; // Initial index of merged subarray 
 
 while (i < size_left && j < size_right) 
 { 
    if (Left[i] <= Right[j]) 
    { 
        array[k] = Left[i]; 
        i++; 
    } 
    else 
    { 
        array[k] = Right[j]; 
        j++; 
    } 
    k++; 
 } 
 
 // Copy the remaining elements of Left[] 
 while (i < size_left) 
 { 
    array[k] = Left[i]; 
    i++; 
    k++; 
 } 
 
 // Copy the rest elements of R[] 
 while (j < size_right) 
 { 
    array[k] = Right[j]; 
    j++; 
    k++; 
 } 
 } 
 
 void mergeSort(int array[], int left, int right) 
 { 
    if(left < right) 
    { 
        int mid = (left+right)/2; 
 
        // Sort first and second halves 
    mergeSort(array, left, mid); 
    mergeSort(array, mid+1, right); 
 
    // Finally merge them 
    merge(array, left, mid, right); 
 } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CYVc/1)

### Implementación de Javascript

Vamos a escribir MergeSort en JavaScript:
```
function mergeSort (arr) { 
  if (arr.length < 2) return arr; 
  var mid = Math.floor(arr.length /2); 
  var subLeft = mergeSort(arr.slice(0,mid)); 
  var subRight = mergeSort(arr.slice(mid)); 
  return merge(subLeft, subRight); 
 } 
```

Primero comprobamos la longitud de la matriz. Si es 1, simplemente devolvemos la matriz. Este sería nuestro caso base. De lo contrario, descubriremos el valor medio y dividiremos la matriz en dos mitades. Ahora ordenaremos ambas mitades con llamadas recursivas a la función MergeSort.
```
function merge (a,b) { 
    var result = []; 
    while (a.length >0 && b.length >0) 
        result.push(a[0] < b[0]? a.shift() : b.shift()); 
    return result.concat(a.length? a : b); 
 } 
```

Cuando combinamos las dos partes, almacenamos el resultado en una matriz auxiliar. Compararemos el elemento inicial de la matriz izquierda con el elemento inicial de la matriz derecha. Cualquiera que sea menor se insertará en la matriz de resultados y la eliminaremos de las matrices respectivas utilizando el operador \[shift () ”. Si aún terminamos con valores en la matriz izquierda o derecha, simplemente lo concatenaremos al final del resultado. Aquí está el resultado ordenado:
```
var test = [5,6,7,3,1,3,15]; 
 console.log(mergeSort(test)); 
 
 >> [1, 3, 3, 5, 6, 7, 15] 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CYVd)

Si aún tiene problemas para comprender MergeSort, una [explicación en video](https://www.youtube.com/watch?v=TzeBrDU-JaY) lo hará aún más claro.