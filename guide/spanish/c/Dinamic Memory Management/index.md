---
title: Dinamic Memory Management
localeTitle: Gestión de memoria dinámica
---
# Gestión de memoria dinámica

A veces tendrá que asignar espacios de memoria en el montón, también conocido como memoria dinámica. Esto es particularmente útil cuando no sabes, durante el tiempo de compilación, cuán grande será la estructura de datos (como una matriz).

## Un ejemplo

Este es un ejemplo sencillo en el que asignamos una matriz que solicita al usuario que elija la dimensión

```C
#include <stdio.h> 
 #include <stdlib.h> 
 
 int main(void) { 
    int arrayDimension,i; 
    int* arrayPointer; 
 
    scanf("Please insert the array dimension:%d",arrayDimension); 
    arrayPointer = (int*)malloc(sizeof(int)*arrayDimension); 
 
    if(arrayPointer == NULL){ 
      printf("Error allocating memory!"); 
      return -1; 
     } 
 
     for(i=0;i<arrayDimension;i++){ 
        printf("Insert the %d value of the array:",i+1); 
        scanf("%d\n",arrayPointer[i]); 
     } 
 
    free(arrayPointer); 
    return 0; 
 } 
```

Como puede ver, para asignar un espacio en la memoria dinámica, necesita saber cómo funcionan los punteros en C. La función mágica aquí es el `malloc` que devolverá como salida un puntero vacío (es un puntero a una región de tipo de datos desconocido) al nuevo espacio de memoria que acabamos de asignar. Veamos cómo usar esta función paso a paso:

## Asignar una matriz durante el tiempo de ejecución

```C
sizeof(int) 
```

Vamos a empezar desde `sizeof` . El `malloc` necesita saber cuánto espacio se asigna para sus datos. De hecho, una variable `int` utilizará menos espacio de almacenamiento que uno `double` . En general, no es seguro asumir el tamaño de ningún tipo de datos. Por ejemplo, aunque la mayoría de las implementaciones de C y C ++ en sistemas de 32 bits definen el tipo int en cuatro octetos, este tamaño puede cambiar cuando el código se traslada a un sistema diferente, rompiendo el código. `sizeof` como su nombre sugiere genera el tamaño de una variable o tipo de datos.

```C
arrayPointer = (int*) malloc(sizeof(int) * arrayDimension); 
```

En este ejemplo, malloc asigna memoria y devuelve un puntero al bloque de memoria. El tamaño del bloque asignado es igual al número de bytes para un solo objeto de tipo int multiplicado por `arrayDimension` , siempre que el sistema tenga suficiente espacio disponible. Pero, ¿qué pasa si no tiene suficiente espacio o `malloc` no puede asignarlo por alguna otra razón?

## Comprobando la salida de malloc.

Esto no ocurre comúnmente, pero es una muy buena práctica verificar el valor de su variable de puntero después de asignar un nuevo espacio de memoria.

```C
    if(arrayPointer == NULL) 
      printf("Error allocating memory!"); 
```

Esto también será muy útil durante la fase de depuración y evitará algunos errores posibles utilizando la última función utilizada en el ejemplo.

## Una palabra en free ()

Por lo general, las variables se desasignan automáticamente cuando se destruye su alcance, liberando la memoria que estaban usando. Este simple no sucede cuando asignas memoria manualmente usando el `malloc` . Para evitar pérdidas de memoria en programas más complejos y para no crear basura en el sistema, debe liberar el área de memoria utilizada recientemente antes de terminar su ejecución de código.

```C
  free(arrayPointer); 
```

Al final, comprenderá con seguridad que fue necesario comprobar el valor de `arrayPointer` para evitar un error al utilizar la función `free` . Si el valor de `arrayPointer` fuera igual a `NULL` , podría haber caducado algún tipo de error.

## Otras funciones similares a malloc

A veces, no solo debe reservar una nueva área de memoria para sus operaciones, sino que también debe inicializar todos los bytes a cero. Para esto se usa el `calloc` . En otros casos, desea cambiar el tamaño de la memoria a la que apunta un puntero. Por ejemplo, si tiene un puntero que actúa como una matriz de tamaño `n` y desea cambiarlo a una matriz de tamaño `m` , puede usar `realloc` .

```C
  int *arr = malloc(2 * sizeof(int)); 
  arr[0] = 1; 
  arr[1] = 2; 
  arr = realloc(arr, 3 * sizeof(int)); 
  arr[2] = 3; 
```

## Errores comunes

El uso incorrecto de la asignación de memoria dinámica con frecuencia puede ser una fuente de errores como se ha visto anteriormente. Los errores más comunes son:

*   No revisar fallas en la asignación No se garantiza que la asignación de memoria tenga éxito y, en cambio, puede devolver un puntero nulo. El uso del valor devuelto, sin verificar si la asignación es exitosa, invoca un comportamiento indefinido. Por lo general, esto provoca una falla (debido a la falla de segmentación resultante en la falta de referencia del puntero nulo), pero no hay garantía de que se produzca una falla, por lo que depender de eso también puede ocasionar problemas.
*   Pérdidas de memoria No se puede desasignar la memoria usando cables `free` para la acumulación de memoria no reutilizable, que ya no es utilizada por el programa.
*   Errores logicos Todas las asignaciones deben seguir el mismo patrón: asignación mediante `malloc` , uso para almacenar datos, desasignación mediante `free` . Si no sigue este patrón, generalmente se indicará error de segmentación y el programa fallará. Estos errores pueden ser transitorios y difíciles de depurar; por ejemplo, el sistema generalmente no recupera inmediatamente la memoria liberada y los punteros colgantes pueden persistir por un tiempo y parecer que funcionan.