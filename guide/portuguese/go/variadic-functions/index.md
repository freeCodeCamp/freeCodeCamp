---
title: Variadic Functions
localeTitle: Funções Variadic
---
## Funções Variadic

Funções Variadic são funções que podem ser chamadas com qualquer número de argumentos à direita.

Esse é um recurso útil quando estamos trabalhando em aplicativos da web.

Às vezes, não temos quantos elementos precisaremos passar para o mecanismo de criação de templates em HTML.

Aqui estão as noções básicas sobre como funcionam as funções varidicas:

```go
package main 
 import "fmt" 
 
 func printFruits(fruits ...string) { 
    for _, fruit := range fruits{ 
        fmt.Println(fruit) 
    } 
 } 
 
 func main() { 
   printFruits("apple", "bannana") 
   printFruits("papaya", "coconut", "pear", "pineapple") 
   berries := []string{"blueberry", "strawberry", "raspberry"} 
   printFruits(berries...) 
 } 
```

Primeiro, em printFruits nós definimos o número de argumentos com \[… string\].

Isso informa ao Go que essa função aceita qualquer número de argumentos de string.

As duas primeiras chamadas para printFruits mostram que a função imprimirá cada string, mesmo se passarmos um número diferente de argumentos.

```text
apple 
 bannana 
 ... 
 papaya 
 coconut 
 pear 
 ... 
```

Isso também funcionará para fatias.

Para usar uma função vardiac com uma fatia, adicionamos os pontos de treinamento à chamada.

```go
printFruits(berries...) 
```

```text
blueberry 
 strawberry 
 raspberry 

```