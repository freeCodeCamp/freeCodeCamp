---
title: While Loop
localeTitle: Mientras bucle
---
# Mientras bucle

El `while` bucle repetidamente ejecuta el bloque de instrucciónes hasta que la condición especificada dentro de los paréntesis se evalúa como `false` . Por ejemplo:

```java
while (some_condition_is_true) 
 { 
    // do something 
 } 
```

Cada 'iteración' (de ejecutar el bloque de instrucciónes) está precedida por la evaluación de la condición especificada dentro del paréntesis: las instrucciónes se ejecutan solo si la condición se evalúa como `true` . Si se evalúa como `false` , la ejecución del programa se reanuda desde la instrucción justo después del bloque `while`.

**Nota:** Para que el `while` bucle empieze la ejecución, requiere que la condición sea `true` inicialmente. Sin embargo, para salir del bucle, debe hacer algo dentro del bloque de instrucciónes para llegar a una iteración cuando la condición se evalúe como `false` (como en el siguiente ejemplo). De lo contrario, el bucle se ejecutará para siempre. (En realidad, se ejecutará hasta que la [JVM](https://guide.freecodecamp.org/java/the-java-virtual-machine-jvm) se quede sin memoria).

## Ejemplo
En el siguiente ejemplo, la `expression` es `iter_While < 10` . Incrementamos `iter_While` por `1` cada vez que se ejecuta el bucle. El bucle `while` se rompe cuando el valor de `iter_While` alcanza `10` .

```java
int iter_While = 0; 
 while (iter_While < 10) 
 { 
    System.out.print(iter_While + " "); 
    // Increment the counter 
    // Iterated 10 times, iter_While 0,1,2...9 
    iter_While++; 
 } 
 System.out.println("iter_While Value: " + iter_While); 
```

Salida:
```
0 1 2 3 4 5 6 7 8 9 
 iter_While Value: 10 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJYj/0)
