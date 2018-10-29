---
title: Break Control Statement
localeTitle: Declaración de control de ruptura
---
# Declaración de control de ruptura

Termina el bucle y comienza la ejecución del código que sigue inmediatamente al bucle. Si tiene bucles anidados, la instrucción de `break` solo finalizará el bucle en el que se encuentra.

```java
// Loop 1 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break; // Will terminate Loop 2, but Loop 1 will keep going 
        } 
    } 
 } 
```

Pero si también quiere salir del bucle externo, puede usar una etiqueta para salir:

```java
loop1: // This is a label 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break loop1; // Will break out of Loop 1, instead of Loop 2 
        } 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJZA/0)

`break` declaraciones de `break` pueden ser particularmente útiles al buscar un elemento en una matriz. El uso de `break` en el siguiente código mejora la eficiencia a medida que el bucle se detiene tan pronto como se encuentra el elemento que buscamos ( `searchFor` ), en lugar de continuar hasta llegar al final de `arrayInts` .

```java
int j = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 for (int i : arrayOfInts) 
 { 
    if (arrayOfInts[j] == searchFor) 
    { 
        break; 
    } 
    j++; 
 } 
 
 System.out.println("j = " + j); 
```

La declaración de ruptura también se puede utilizar bajo la instrucción while.

```java
int i = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 while(i < 10){ 
 System.out.println("i = " + j); 
 if(arrayOfInts[i] > 7){ 
  break; 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJZC/0)