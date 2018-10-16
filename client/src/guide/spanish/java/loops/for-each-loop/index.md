---
title: For Each Loop
localeTitle: Para cada bucle
---
# Para cada bucle

También llamado el bucle `for` mejorado, es una forma extremadamente útil y simple de iterar sobre cada elemento en una colección, matriz o cualquier objeto que implemente la interfaz de `Iterable` .

```java
for (object : iterable) 
 { 
    // Statements 
 } 
```

El bucle se lee como "para cada elemento en el `iterable` (podría ser una matriz, coleccionable, etc.)". El tipo de `object` debe coincidir con el tipo de elemento del `iterable` .

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 
 for (int numbers : number_list) 
 { 
    System.out.print(numbers + " "); 
    // Iterated 10 times, numbers 0,1,2...9 
 } 
```

Salida:
```
    0 1 2 3 4 5 6 7 8 9 
```

: cohete: [Ejecutar código](https://repl.it/CJYs/0)

Comparando esto con lo tradicional `for` loops:

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 
 for(int i=0;i < number_list.length;i++) 
 { 
  System.out.print(number_list[i]+" "); 
      // Iterated 10 times, numbers 0,1,2...9 
 
 } 
```

Salida:
```
    0 1 2 3 4 5 6 7 8 9 
```

: cohete: [Ejecutar código](https://repl.it/NJfG/0)

Sin embargo, ambos fragmentos de código anteriores hacen el mismo trabajo, sin embargo, claramente, para cada uno de los bucles ofrecen ventajas para facilitar la iteración y el acceso a los elementos de una colección (matriz, en nuestro caso).

Con los bucles mejorados para, ya no necesitamos mencionar los puntos de inicio y finalización del bucle, lo que reduce los errores de OutofBounds. La necesidad de contadores de bucle y la indexación manual se eliminan, y se mejora la legibilidad del código.

Es importante tener en cuenta que realizar cambios en la variable de iteración para mejorar los bucles dentro del bucle no causa cambios en los elementos de la colección original.

Mejorado para bucles también se puede utilizar con matrices multidimensionales u otras colecciones de Java. A continuación se muestra un ejemplo de su uso con matrices multidimensionales:

```java
int number_list_new[][]={  {  0,  1, 2}, 
                  {  3, 4, 5}, 
                  { 6, 7, 8} }; 
 
 // Because 2d arrays are implemented as "arrays of arrays",the first iteration variable iterates 
 // through 3 such arrays(that is, the 3 rows of testarr[][]) 
 for(int i[] : number_list_new) 
 { 
  for(int j : i){ 
    System.out.print(j+" "); 
  } 
 } 
```

Salida:
```
0 1 2 3 4 5 6 7 8 
```

: cohete: [Ejecutar código](https://repl.it/NJhP/0)

En los fragmentos de código anteriores, `number_list` es una matriz. Si no sabes qué es esto, no te preocupes por eso. Una matriz es un objeto contenedor que contiene un número fijo de valores de un solo tipo, pero más sobre esto más adelante.