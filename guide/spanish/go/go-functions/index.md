---
title: Go Functions
localeTitle: Ir funciones
---
## Ir funciones

Una función es un bloque de código que realiza una tarea cuando se llama, de manera que el nombre de la función lo identifica y se usa para llamar a la función.

La declaración de una función comienza con la palabra clave `func` seguida por el nombre de la función, luego los argumentos de la función y finalmente los tipos de valores devueltos. La declaración enlaza el nombre de la función a la función. Tenga en cuenta que el tipo viene después del nombre de la variable tanto en los argumentos como en los valores devueltos. Un ejemplo de la declaración de una función es el siguiente

```go
func add(a int, b int) int 
```

Una función puede tener 0 o muchos argumentos dependiendo de la funcionalidad deseada

```go
func zero() int { /* Function Definition */ } 
 func increment(x int) int { /* Function Definition */ } 
 func add(x, y int) int { /* Function Definition */ } 
```

Go admite la devolución de múltiples valores. La siguiente función devuelve 2 valores: la suma de los 2 argumentos y la diferencia entre el primer y el segundo argumento

```go
func addAndSubtract(x, y int) (int, int) { 
  return x + y, x - y 
 } 
 
 addAndSubtract(7, 4) // Returns 11, 3 
```

Go también admite nombrar los valores devueltos

```go
func mulitplyByThreeAndDivideByFive(x int) (product int, quotient int) { 
    product = x * 3 
    quotient = x / 5 
    return 
 } 
 
 mulitplyByThreeAndDivideByFive(20) // Returns 60, 4 
```

#### Más información:

*   [Un tour de go](https://tour.golang.org/basics/4)
*   [Ir por ejemplo](https://gobyexample.com/functions)
*   [Libro de golang](https://www.golang-book.com/books/intro/7)
*   [La especificación del lenguaje de programación Go](https://golang.org/ref/spec#Function_declarations)