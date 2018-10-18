---
title: Do...While Loop
localeTitle: Do ... While Loop
---
# Hacer ... mientras bucle

El `do while` es similar al `while` de bucle, pero el grupo de instrucciones es garantizado para funcionar al menos una vez antes de comprobar si una condición dada. Una cosa importante a tener en cuenta es que el bucle 'while' es un bucle de control de salida. mientras que (no necesariamente se ejecutará), 'hacer mientras' es un bucle controlado de entrada (se ejecutará al menos una vez, incluso si la condición no es verdadera).

```java
do 
 { 
    // Statements 
 } 
 while (condition); 
```

## Ejemplo

```java
int iter_DoWhile = 20; 
 do 
 { 
    System.out.print (iter_DoWhile + " "); 
 
    // Increment the counter 
    iter_DoWhile++; 
 } 
 while (iter_DoWhile < 10); 
 System.out.println("iter_DoWhile Value: " + iter_DoWhile); 
```

Salida:
```
    20 
    iter_DoWhile Value: 21 
```

**Recuerde** : la condición de un bucle `do-while` while se comprueba después de que el cuerpo del código se ejecute una vez.

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJYl/0)

## Ejercicio

¿Puedes adivinar la salida del siguiente fragmento de código?

```java
int i = 10; 
 do 
 { 
    System.out.println("The value of i is " + i); 
    i--; 
 } 
 while (i >= 10); 

```
