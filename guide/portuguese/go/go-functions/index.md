---
title: Go Functions
localeTitle: Ir funções
---
## Ir funções

Uma função é um bloco de código que executa uma tarefa quando é chamado, de modo que o nome da função a identifica e é usado para chamar a função.

A declaração de uma função começa com a palavra-chave `func` seguida pelo nome da função e depois os argumentos da função e finalmente os tipos de valores retornados. A declaração liga o nome da função à função. Tenha em mente que o tipo vem depois do nome da variável nos argumentos e nos valores retornados. Um exemplo de declaração de uma função é o seguinte

```go
func add(a int, b int) int 
```

Uma função pode ter 0 ou muitos argumentos, dependendo de sua funcionalidade desejada

```go
func zero() int { /* Function Definition */ } 
 func increment(x int) int { /* Function Definition */ } 
 func add(x, y int) int { /* Function Definition */ } 
```

Go suporta o retorno de vários valores. A função abaixo retorna 2 valores: a soma dos 2 argumentos e a diferença entre o primeiro e o segundo argumento

```go
func addAndSubtract(x, y int) (int, int) { 
  return x + y, x - y 
 } 
 
 addAndSubtract(7, 4) // Returns 11, 3 
```

Go também suporta nomear os valores retornados

```go
func mulitplyByThreeAndDivideByFive(x int) (product int, quotient int) { 
    product = x * 3 
    quotient = x / 5 
    return 
 } 
 
 mulitplyByThreeAndDivideByFive(20) // Returns 60, 4 
```

#### Mais Informações:

*   [Um passeio de ir](https://tour.golang.org/basics/4)
*   [Vá pelo exemplo](https://gobyexample.com/functions)
*   [Livro Golang](https://www.golang-book.com/books/intro/7)
*   [A especificação da linguagem de programação Go](https://golang.org/ref/spec#Function_declarations)