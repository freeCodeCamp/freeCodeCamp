---
title: Passing pointers to funtions
localeTitle: Pasando punteros a funciones
---
# Pasando punteros a funciones

C permite pasar un puntero a una función. Para lograr esto, simplemente declare los parámetros como tipo de puntero. Esta forma de pasar referencias a funciones es útil cuando desea modificar variables que están fuera del alcance de esa función.

```C
// incorrect implementation of swap 
 #include <stdio.h> 
 void swap(int a, int b){ 
    int c; 
    c = a; 
    a = b; 
    b = c; 
 } 
 int main(){ 
    int var1 = 10; 
    int var2 = 20; 
    swap(var1, var2); 
    printf("Value of var1: %d \n", var1); // prints 10 
    printf("Value of var2: %d \n", var2); // prints 20 
 } 
```

En este ejemplo de código, la función de intercambio no funciona según lo previsto, ya que intercambia dos variables que existen solo dentro del alcance de esa función. Para solucionar esto hacemos una modificación como se muestra a continuación.

```C
// correct implementation of swap 
 #include <stdio.h> 
 void swap(int* a, int* b){ 
    int c = *a; 
    *a = *b; 
    *b = c; 
 } 
 int main(){ 
    int var1 = 10; 
    int var2 = 20; 
    swap(&var1, &var2); 
    printf("Value of var1: %d \n", var1); // prints 20 
    printf("Value of var2: %d \n", var2); // prints 10 
 } 
```

En el segundo ejemplo de código, fue posible cambiar los valores de las variables solo porque no estaba haciendo referencia constantemente a un puntero dentro de la función en lugar de intentar cambiar los valores directamente