---
title: Loops
localeTitle: Bucles
---
# Para bucle en Go

Go tiene solo `for` loop. El básico `for` bucle tiene tres componentes separados por `;` -

*   La sentencia **init** : ejecutada antes de la primera iteración.
    
*   La expresión de **condición** : evaluada antes de cada iteración.
    
*   La declaración **posterior** : se ejecuta al final de cada iteración.
    

La declaración de **inicio** es a menudo una declaración de variable corta. Las variables declaradas allí son visibles solo en el alcance de la declaración `for` . El bucle deja de iterar una vez que la condición booleana se evalúa como falsa.

A continuación se muestra un ejemplo del bucle `for` :

**abstenerse de**

```go
package main 
 
 import "fmt" 
 
 func main() { 
    sum := 0 
    for i := 0; i <= 10; i++ { 
        sum += i 
    } 
    fmt.Println("The sum of first 10 natural numbers is", sum) 
 } 
```

Ejecutar el programa anterior produce una salida similar a la siguiente salida: \`\` \`  
$ ve a correr para. La suma de los primeros 10 números naturales es 55.
```
You can use `continue` and `break` to adjust the loops flow 
```

ir // este código imprime cualquier número impar hasta 5 para n: = 0; n <= 10; n ++ { si n% 2 == 0 { // si el número es par a saltar al siguiente n continuar } fmt.Println (n) // si el número es 5 sal del bucle si n == 5 { descanso } }
```
If you want to create an infinite loop just use `for { }` 
```

ir para { // Whill loop hasta que una condición rompa el loop romper // salir del bucle }
```
## Replacement for while-loop 
 To simulate while-loop of other languages, you can simply exclude the **init** and **post** statement: 
```

ir func main () { num: = 1 para num <= 1000 { num \* = 2 } fmt.Println ("La potencia más pequeña de 2 sobre 1000 es", num) } \`\` \`