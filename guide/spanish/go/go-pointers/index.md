---
title: Go Pointers
localeTitle: Go Punteros
---
## Go Punteros

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/go/go-pointers/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

Punteros

Ir tiene punteros. Un puntero contiene la dirección de memoria de un valor.

El tipo \* T es un puntero a un valor de T Su valor cero es nulo.

var p \* int

El operador & genera un puntero a su operando.

i: = 42 p = & i

El operador \* denota el valor subyacente del puntero.

fmt.Println (\* p) // lee i a través del puntero p \* p = 21 // establece i a través del puntero p

Esto se conoce como "desreferenciación" o "direccionamiento indirecto".

A diferencia de C, Go no tiene aritmética de punteros.

#### Más información:

*   [Un tour de go](https://tour.golang.org/moretypes/1)
*   [Ir por ejemplo](https://gobyexample.com/pointers)
*   [Libro de golang](https://www.golang-book.com/books/intro/8)
*   [La especificación del lenguaje de programación Go](https://golang.org/ref/spec#Address_operators)