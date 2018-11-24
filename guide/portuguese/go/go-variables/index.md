---
title: Go Variables
localeTitle: Ir variáveis
---
# Declarações variáveis ​​em Go

## Método 1: Declarações de Variáveis ​​Regulares

Uma declaração de variável regular cria uma ou mais variáveis ​​ligando identificadores com um tipo e um valor inicial. Se uma variável é declarada sem um tipo, então essa variável recebe o tipo do valor de inicialização correspondente na atribuição. Se uma variável é definida sem valor inicial, então a variável é inicializada com seu [valor zero](https://golang.org/ref/spec#The_zero_value) .

Os exemplos a seguir são todas as declarações de variáveis ​​válidas em go: \`\` \`ir var x int = 1 var y int var z = 0 var a, b float32 = -1, -2
```
## Method 2: Short Variable Declarations 
 
 Shorthand variable declarations create variables with only an identifier and an initial value. The `var` keyword and types are not needed to declare a variable using shorthand syntax: 
```

ir x: = 1 text, err: = ioutil.ReadAll (leitor) \`\` \`

Declarações de variáveis ​​curtas podem aparecer apenas dentro de funções. Em alguns contextos, como os inicializadores de `if` , `for` ou `switch` , eles podem ser usados ​​para declarar variáveis ​​temporárias locais.

#### Mais Informações:

*   [Um passeio de ir](https://tour.golang.org/basics/8)
*   [Vá pelo exemplo](https://gobyexample.com/variables)
*   [Livro Golang](https://www.golang-book.com/books/intro/4)
*   [A especificação da linguagem de programação Go](https://golang.org/ref/spec#Variable_declarations)