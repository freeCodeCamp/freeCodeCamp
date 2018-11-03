---
title: Selection Sort
localeTitle: Selección de selección
---
## Selección de selección

El ordenamiento por selección es uno de los algoritmos de clasificación más simples. Funciona de la siguiente manera,

1.  Encuentra el elemento más pequeño. Intercambia con el primer elemento.
2.  Encuentra el segundo elemento más pequeño. Intercambia con el segundo elemento.
3.  Encuentra el tercer elemento más pequeño. Intercambiala con el tercer elemento.
4.  Repita la búsqueda del siguiente elemento más pequeño y colóquelo en la posición correcta correspondiente hasta que se clasifique la matriz.

Como puede adivinar, este algoritmo se denomina Selección de selección porque selecciona repetidamente el siguiente elemento más pequeño y lo intercambia en su lugar.

Pero, ¿cómo escribiría el código para encontrar el índice del segundo valor más pequeño en una matriz?

*   Una forma fácil es notar que el valor más pequeño ya se ha cambiado al índice 0, por lo que el problema se reduce a encontrar el elemento más pequeño en la matriz que comienza en el índice 1.

### Implementación en C / C ++

```C
for(int i = 0; i < n; i++) 
 { 
    int min_index = i; 
    int min_element = a[i]; 
 
    for(int j = i +1; j < n; j++) 
    { 
        if(a[j] < min_element) 
        { 
            min_element = a[j]; 
            min_index = j; 
        } 
    } 
 
    swap(&a[i], &a[min_index]); 
 } 
```

### Implementación en Javascript

\`\` \`Javascript selección de función _ordenar (A) { var len =_ longitud de la _matriz_ (A); para (var i = 0; i <len - 1; i = i + 1) { var j _min = i; para (var j = i + 1; j <len; j = j + 1) { si (A \[j\] <A \[j_ min\]) { j _min = j; } else {} } si (j_ min! == i) { swap (A, i, j\_min); } else {} } }

función de intercambio (A, x, y) { temp temp = A \[x\]; A \[x\] = A \[y\]; A \[y\] = temp; }
```
### Implementation in Python 
```

pitón orden de selección _(arr): si no arr volver arr para i en rango (len (arr)): min_ i = i para j en rango (i + 1, len (arr)): si arr \[j\] <arr \[min _i\]: min_ i = j arr \[i\], arr \[min _i\] = arr \[min_ i\], arr \[i\] \`\` \`

### Propiedades

*   Complejidad del espacio: **O (n)**
*   Complejidad del tiempo: **O (n 2 )**
*   Clasificación en el lugar: **Sí**
*   Estable: **no**

### Visualización

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

### Referencias

*   [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
*   [Academia Khan](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)