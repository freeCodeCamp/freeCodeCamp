---
title: If
localeTitle: Si
---
# Si

La instrucción if ejecuta diferentes bloques de código según las condiciones.
```
if (condition) { 
    // Do something when `condition` is true 
 } 
 else { 
    // Do something when `condition` is false 
 } 
```

Cuando la `condition` es verdadera, el código dentro de la sección `if` se ejecuta, de lo `else` ejecuta. A veces necesitarías agregar una segunda condición. Para facilitar la lectura, debe usar un `else if` lugar de anidar `if` enunciados.
```
if (condition) { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) { 
    // Do something if `anotherCondition` is ture 
 } 
 else { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
```

Tenga en cuenta que las `else` y " `else if` no son necesarias, mientras que `if` es obligatorio.

## Ejemplo
```
#include <stdio.h> 
 
 int main () { 
 
   // Local variable definition 
   int a = 10; 
 
   // Check the boolean condition 
   if(a < 5) { 
      // If condition is true then print the following 
      printf("a is less than 5!\n" ); 
   } 
   else { 
      // If condition is false then print the following 
      printf("a is not less than 5!\n" ); 
   } 
 
   printf("Value of a is : %d\n", a); 
 
   return 0; 
 } 
```

## Salida
```
-> a is not less than 5! 
 -> Value of a is : 100 

```