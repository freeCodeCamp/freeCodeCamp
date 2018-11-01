---
title: Do...While Loop
localeTitle: Do ... While Loop
---
# Hacer ... mientras bucle

El `do while` es similar al bucle `while`, pero el grupo de instrucciones siempre es usado al menos una vez antes de verificar una condición. Una cosa importante a tener en cuenta es que el bucle 'while' es un bucle de control de salida. `while` no necesariamente se ejecutará, mientras `do while` es un bucle controlado de entrada (se ejecutará al menos una vez, incluso si la condición no es verdadera).

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

**Recuerde** : la condición de un bucle `do-while` se comprueba después de que el cuerpo del código se ejecutado una vez.

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJYl/0)

## Ejercicio

¿Puedes adivinar el resultado del siguiente fragmento de código?

```java
int i = 10; 
 do 
 { 
    System.out.println("The value of i is " + i); 
    i--; 
 } 
 while (i >= 10); 

```
