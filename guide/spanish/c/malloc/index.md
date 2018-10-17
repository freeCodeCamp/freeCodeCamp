---
title: malloc
localeTitle: malloc
---
# malloc en c

malloc () es una función de biblioteca que permite a C asignar memoria dinámicamente desde el montón. El montón es un área de memoria donde algo se almacena.

malloc () es parte de stdlib.h y para poder usarlo necesitas usar `#include <stdlib.h>` .

## Utilizando malloc

malloc () asigna memoria de un tamaño solicitado y devuelve un puntero al principio del bloque asignado. Para mantener este puntero devuelto, debemos crear una variable. El puntero debe ser del mismo tipo utilizado en la instrucción malloc.  
Aquí haremos un puntero a una serie de ints pronto a ser

```C
int* arrayPtr; 
```

A diferencia de otros idiomas, C no conoce el tipo de datos para el que está asignando memoria; hay que decirlo. Afortunadamente, C tiene una función llamada `sizeof()` que podemos usar.

```C
arrayPtr = (int *)malloc(10 * sizeof(int)); 
```

Esta declaración utilizó malloc para reservar memoria para una matriz de 10 enteros. Como los tamaños pueden cambiar entre computadoras, es importante usar la función sizeof () para calcular el tamaño en la computadora actual.

Cualquier memoria asignada durante la ejecución del programa deberá liberarse antes de que se cierre el programa. Para `free` memoria, podemos usar la función free ()

```C
free( arrayPtr ); 
```

Esta declaración desasignará la memoria asignada previamente. C no viene con un `garbage collector` como otros lenguajes, como Java. Como resultado, la memoria no liberada correctamente seguirá asignándose después de que se cierre el programa.

# Antes de continuar ...

## Una revisión

*   Malloc se utiliza para la asignación de memoria dinámica y es útil cuando no conoce la cantidad de memoria necesaria durante el tiempo de compilación.
*   La asignación de memoria permite que los objetos existan más allá del alcance del bloque actual.
*   C pasa por valor en lugar de referencia. Usar malloc para asignar memoria, y luego pasar el puntero a otra función, es más eficiente que hacer que la función vuelva a crear la estructura.