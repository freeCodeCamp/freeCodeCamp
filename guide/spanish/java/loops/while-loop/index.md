---
title: While Loop
localeTitle: Mientras bucle
---
# Mientras bucle

El `while` bucle se ejecuta repetidamente el bloque de instrucciones hasta que la condición especificada dentro de los paréntesis se evalúa como `false` . Por ejemplo:

```java
while (some_condition_is_true) 
 { 
    // do something 
 } 
```

Cada 'iteración' (de ejecutar el bloque de sentencias) está precedida por la evaluación de la condición especificada entre paréntesis: las sentencias se ejecutan solo si la condición se evalúa como `true` . Si se evalúa como `false` , la ejecución del programa se reanuda desde la instrucción justo después del bloque `while` .

**Nota:** Para el `while` de bucle para iniciar la ejecución, que le requiere la condición de ser `true` inicialmente. Sin embargo, para salir del bucle, debe hacer algo dentro del bloque de sentencias para llegar a una iteración cuando la condición se evalúe como `false` (como se hace a continuación). De lo contrario el bucle se ejecutará para siempre. (En la práctica, se ejecutará hasta que la [JVM](https://guide.freecodecamp.org/java/the-java-virtual-machine-jvm) se quede sin memoria).

## Ejemplo

En el siguiente ejemplo, la `expression` está dada por `iter_While < 10` . Incrementamos `iter_While` en `1` cada vez que se ejecuta el bucle. Los `while` se rompe bucle cuando `iter_While` valor alcanza `10` .

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