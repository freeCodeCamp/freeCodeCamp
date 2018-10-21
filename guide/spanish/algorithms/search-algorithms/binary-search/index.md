---
title: Binary Search
localeTitle: Búsqueda binaria
---
## Búsqueda binaria

Una búsqueda binaria localiza un elemento en una matriz ordenada dividiendo repetidamente el intervalo de búsqueda a la mitad.

¿Cómo buscar un nombre en un directorio telefónico?

Una forma sería comenzar desde la primera página y ver cada nombre en la agenda hasta que encontremos lo que estamos buscando. Pero esa sería una forma extremadamente laboriosa e ineficiente de buscar.

Como sabemos que los nombres en la agenda están ordenados alfabéticamente, probablemente podríamos trabajar en los siguientes pasos:

1.  Abra la página central de la agenda.
2.  Si tiene el nombre que estamos buscando, ¡hemos terminado!
3.  De lo contrario, deseche la mitad de la agenda que no contiene el nombre
4.  Repita hasta que encuentre el nombre o no queden más páginas en la agenda.

Complejidad en el tiempo: a medida que eliminamos una parte del caso de búsqueda durante cada paso de la búsqueda binaria, y realizamos la operación de búsqueda en la otra mitad, esto resulta en una complejidad en el peor de los casos de _O_ ( _registro 2 N_ ).

Complejidad del espacio: la búsqueda binaria toma espacio constante o _O_ ( _1_ ), lo que significa que no hacemos ninguna definición de variable relacionada con el tamaño de entrada.

para conjuntos pequeños, la búsqueda lineal es mejor, pero en los más grandes es mucho más eficiente usar la búsqueda binaria.

En detalle, ¿cuántas veces puedes dividir N por 2 hasta que tengas 1? Esto es esencialmente diciendo: haz una búsqueda binaria (la mitad de los elementos) hasta que la encuentres. En una fórmula esto sería esto:
```
1 = N / 2x 
```

Multiplica por 2x:
```
2x = N 
```

Ahora haz el log2:
```
log2(2x)    = log2 N 
 x * log2(2) = log2 N 
 x * 1       = log2 N 
```

Esto significa que puede dividir log N veces hasta que tenga todo dividido. Lo que significa que tiene que dividir el registro N ("haga el paso de búsqueda binaria") hasta que encuentre su elemento.

_O_ ( _log 2 N_ ) es así porque en cada paso la mitad de los elementos del conjunto de datos se han ido, lo cual está justificado por la base de la función logarítmica.

Este es el algoritmo de búsqueda binario. Es elegante y eficiente, pero para que funcione correctamente, la matriz debe estar **ordenada** .

* * *

Encuentra 5 en la matriz de números dada usando la búsqueda binaria.

![Búsqueda binaria 1](https://i.imgur.com/QAuugOL.jpg)

Marque las posiciones bajas, altas y medias en la matriz.

![Búsqueda binaria 2](https://i.imgur.com/1710fEx.jpg)

Compara el elemento que buscas con el elemento central.

![Búsqueda binaria 3](https://i.imgur.com/jr4icze.jpg)

Tire la mitad izquierda y mire la mitad derecha.

![Búsqueda binaria 4](https://i.imgur.com/W57lGsk.jpg)

Nuevamente se compara con el elemento medio.

![Búsqueda binaria 5](https://i.imgur.com/5Twm8NE.jpg)

Ahora, muévete a la mitad izquierda.

![Búsqueda binaria 6](https://i.imgur.com/01xetay.jpg)

¡El elemento central es el elemento que buscábamos!

El algoritmo de búsqueda binaria adopta un enfoque de dividir y conquistar en el que la matriz se divide continuamente hasta que se encuentra el elemento o hasta que no quedan más elementos para la verificación. Por lo tanto, este algoritmo se puede definir recursivamente para generar una solución elegante.

Los dos casos base para la recursión serían:

*   No quedan más elementos en la matriz.
*   El artículo se encuentra

El poder de la búsqueda binaria en sistemas de datos (árboles B +): Los árboles de búsqueda binarios son muy potentes debido a sus tiempos de búsqueda O (log n), en segundo lugar a la estructura de datos de hashmap que utiliza una clave de hasing para buscar datos en O (1). Es importante comprender cómo el tiempo de ejecución de log n proviene de la altura de un árbol de búsqueda binario. Si cada nodo se divide en dos nodos, (binario), entonces la profundidad del árbol es log n (base 2). Para mejorar esta velocidad en el sistema de datos, usamos árboles B + porque tienen un factor de bifurcación mayor, y por lo tanto más altura. Espero que este breve artículo ayude a expandir su mente acerca de cómo se utiliza la búsqueda binaria en sistemas prácticos.

El código para la búsqueda binaria recursiva se muestra a continuación:

### Implementación de Javascript

```javascript
function binarySearch(arr, item, low, high) { 
    if (low > high) { // No more elements in the array. 
        return null; 
    } 
 
    // Find the middle of the array. 
    var mid = Math.ceil((low + high) / 2); 
 
    if (arr[mid] === item) { // Found the item! 
        return mid; 
    } 
 
    if (item < arr[mid]) { // Item is in the half from low to mid-1. 
        return binarySearch(arr, item, low, mid-1); 
    } 
 
    else { // Item is in the half from mid+1 to high. 
        return binarySearch(arr, item, mid+1, high); 
    } 
 } 
 
 var numbers = [1,2,3,4,5,6,7]; 
 print(binarySearch(numbers, 5, 0, numbers.length-1)); 
```

Aquí hay otra implementación en Javascript:

```Javascript
function binary_search(a, v) { 
    function search(low, high) { 
        if (low === high) { 
            return a[low] === v; 
        } else { 
            var mid = math_floor((low + high) / 2); 
            return (v === a[mid]) 
                   || 
                   (v < a[mid]) 
                   ? search(low, mid - 1) 
                   : search(mid + 1, high); 
        } 
    } 
    return search(0, array_length(a) - 1); 
 } 
```

### Implementacion de ruby

```ruby
def binary_search(target, array) 
  sorted_array = array.sort 
  low = 0 
  high = (sorted_array.length) - 1 
 
  while high >= low 
    middle = (low + high) / 2 
 
    if target > sorted_array[middle] 
      low = middle + 1 
    elsif target < sorted_array[middle] 
      high = middle - 1 
    else 
      return middle 
    end 
  end 
  return nil 
 end 
```

### Ejemplo en C

```C
int binarySearch(int a[], int l, int r, int x) { 
   if (r >= l){ 
        int mid = l + (r - l)/2; 
        if (a[mid] == x) 
            return mid; 
        if (arr[mid] > x) 
            return binarySearch(arr, l, mid-1, x); 
        return binarySearch(arr, mid+1, r, x); 
   } 
   return -1; 
 } 
```

### Implementación C / C ++

```C++
int binary_search(int arr[], int l, int r, int target) 
 { 
   if (r >= l) 
   { 
        int mid = l + (r - l)/2; 
        if (arr[mid] == target) 
            return mid; 
        if (arr[mid] > target) 
            return binary_search(arr, l, mid-1, target); 
        return binary_search(arr, mid+1, r, target); 
   } 
   return -1; 
 } 
```

### Implementacion Python

```Python
def binary_search(arr, l, r, target): 
    if r >= l: 
        mid = l + (r - l)/2 
        if arr[mid] == target: 
            return mid 
        elif arr[mid] > target: 
            return binary_search(arr, l, mid-1, target) 
        else: 
            return binary_search(arr, mid+1, r, target) 
    else: 
        return -1 
```

### Ejemplo en C ++

```c++
// Binary Search using iteration 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    while(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            beg = mid + 1; 
        else 
            end = mid - 1; 
    } 
    return -1; 
 } 
```

```c++
// Binary Search using recursion 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    if(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            return binary_search(arr, mid + 1, end, num); 
        else 
            return binary_search(arr, beg, mid - 1, num); 
    } 
    return -1; 
 } 
```

### Ejemplo en C ++

Enfoque recursivo!

\`\` \`C ++ - enfoque recursivo int binarySearch (int arr \[\], int start, int end, int x) { if (end> = start) { int mid = start + (end - start) / 2; if (arr \[mid\] == x)  
volver a mediados
```
    if (arr[mid] > x) 
        return binarySearch(arr, start, mid-1, x); 
 
    return binarySearch(arr, mid+1, end, x); 
```

} devuelve -1; }
```
Iterative approach! 
```

C ++ - enfoque iterativo int binarySearch (int arr \[\], int start, int end, int x) { while (inicio <= fin) { int mid = start + (end - start) / 2; if (arr \[mid\] == x) volver a mediados if (arr \[mid\] <x) inicio = medio + 1; más end = mid - 1; } devuelve -1; } \`\` \`

### Más información

*   [Búsqueda binaria (video de YouTube)](https://youtu.be/P3YID7liBug)
*   [Búsqueda binaria - CS50](https://www.youtube.com/watch?v=5xlIPT1FRcA)