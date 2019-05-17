---
title: For Loop
localeTitle: En bucle
---
# El bucle for

El bucle `for` ejecuta un bloque de código hasta que una condición especificada es falsa. Use bucles `while` cuando el número de iteraciones es variable, de lo contrario use los bucles `for`. Un uso común de los bucles `for` son iteraciones de matriz. El bucle `for` es también conocido como un "bucle de control al inicio" ya que la condición es verificada antes de la siguiente iteración. Otro ejemplo de un "bucle de control al inicio" son los bucles `while.

## Sintaxis del bucle For 

```c
for ( init; condition; increment ) { 
   statement(s); 
 } 
```

El bucle `for` consta de 3 secciones, la sección de inicialización, una condición específica y la sección de operación incremental o decremental. Estas 3 secciones controlan el bucle `for` .

La sentencia de inicialización se ejecuta una sola vez. Luego, se evalúa la expresión de prueba. Si la expresión de prueba es falsa (0), el bucle finaliza. Pero si la expresión de prueba es verdadera (distinta de cero), se ejecutan los códigos dentro del cuerpo de for loop y se actualiza la expresión de actualización. Este proceso se repite hasta que la expresión de prueba es falsa.

El bucle for se usa comúnmente cuando se conoce el número de iteraciones.

## Ejemplo

```c
#include <stdio.h> 
 
 int main () { 
 
    int array[] = {1, 2, 3, 4, 5}; 
 
    for (int i = 0; i < 5; i++) { 
        printf("Item on index %d is %d\n", i, array[i]); 
    } 
 } 
```

## Salida:

```shell
 > Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
 > Item on index 3 is 4 
 > Item on index 4 is 5
```
