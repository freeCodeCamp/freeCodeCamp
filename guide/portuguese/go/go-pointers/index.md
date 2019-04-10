---
title: Go Pointers
localeTitle: Ir ponteiros
---
## Ir ponteiros

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/go/go-pointers/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

Ponteiros

Go tem ponteiros. Um ponteiro contém o endereço de memória de um valor.

O tipo \* T é um ponteiro para um valor T. Seu valor zero é nulo.

var p \* int

O operador & gera um ponteiro para seu operando.

i: = 42 p = e eu

O operador \* indica o valor subjacente do ponteiro.

fmt.Println (\* p) // lê i através do ponteiro p \* p = 21 // definir i pelo ponteiro p

Isso é conhecido como "desreferenciamento" ou "indireto".

Ao contrário de C, Go não possui aritmética de ponteiros.

#### Mais Informações:

*   [Um passeio de ir](https://tour.golang.org/moretypes/1)
*   [Vá pelo exemplo](https://gobyexample.com/pointers)
*   [Livro Golang](https://www.golang-book.com/books/intro/8)
*   [A especificação da linguagem de programação Go](https://golang.org/ref/spec#Address_operators)