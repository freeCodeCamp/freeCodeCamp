---
title: Continue Control Statement
localeTitle: Continuar declaración de control
---
# Continuar declaración de control

La instrucción `continue` hace que un bucle omita todas las líneas siguientes después de continuar y pasar al principio de la siguiente iteración. En una `for` bucle, el control salta a la instrucción de actualización, y en un `while` o `do while` bucle, el control salta a la expresión booleana / condición.

```java
for (int j = 0; j < 10; j++) 
 { 
    if (j == 5) 
    { 
        continue; 
    } 
    System.out.print (j + " "); 
 } 
```

El valor de `j` se imprimirá para cada iteración, excepto cuando sea igual a `5` . La instrucción de impresión se omitirá debido a la `continue` y la salida será:
```
0 1 2 3 4 6 7 8 9 
```

Digamos que quiere contar el número de `i` en la palabra `mississippi` . Aquí puede usar un bucle con la instrucción `continue` , de la siguiente manera:

```java
String searchWord = "mississippi"; 
 
 // max stores the length of the string 
 int max = searchWord.length(); 
 int numPs = 0; 
 
 for (int i = 0; i < max; i++) 
 { 
    // We only want to count i's - skip other letters 
    if (searchWord.charAt(i) != 'i') 
    { 
        continue; 
    } 
 
    // Increase count_i for each i encountered 
    numPs++; 
 } 
 
 System.out.println("numPs = " + numPs); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJZH/0)

Además, puede usar etiquetas para elegir un bucle específico de un conjunto anidado para saltar a la siguiente iteración.