---
title: Go Variables
localeTitle: Ir Variables
---
# Declaraciones de variables en Go

## Método 1: Declaraciones de variables regulares

Una declaración de variable regular crea una o más variables vinculando identificadores con un tipo y un valor inicial. Si una variable se declara sin un tipo, a esa variable se le asigna el tipo del valor de inicialización correspondiente en la asignación. Si se define una variable sin valor inicial, entonces la variable se inicializa a su [valor cero](https://golang.org/ref/spec#The_zero_value) .

Los siguientes ejemplos son todas las declaraciones de variables válidas en go: \`\` \`ir var x int = 1 var y int var z = 0 var a, b float32 = -1, -2
```
## Method 2: Short Variable Declarations 
 
 Shorthand variable declarations create variables with only an identifier and an initial value. The `var` keyword and types are not needed to declare a variable using shorthand syntax: 
```

ir x: = 1 texto, err: = ioutil.ReadAll (lector) \`\` \`

Las declaraciones de variables cortas pueden aparecer solo dentro de las funciones. En algunos contextos, como los inicializadores de `if` , `for` , o las declaraciones de `switch` , se pueden utilizar para declarar variables temporales locales.

#### Más información:

*   [Un tour de go](https://tour.golang.org/basics/8)
*   [Ir por ejemplo](https://gobyexample.com/variables)
*   [Libro de golang](https://www.golang-book.com/books/intro/4)
*   [La especificación del lenguaje de programación Go](https://golang.org/ref/spec#Variable_declarations)