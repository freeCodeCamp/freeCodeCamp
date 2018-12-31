---
title: Loops
localeTitle: rotações
---
# Para loop em Go

Go tem apenas `for` loop. A base `for` circuito tem três componentes separados por `;` -

*   a instrução **init** : executada antes da primeira iteração
    
*   a expressão de **condição** : avaliada antes de cada iteração
    
*   o **post** statement: executado no final de cada iteração
    

A instrução **init** é geralmente uma declaração de variável curta. As variáveis ​​declaradas são visíveis apenas no escopo da instrução `for` . O loop pára de iterar quando a condição booleana é avaliada como falsa.

Um exemplo da `for` ciclo é dada abaixo -

**for.go**

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

Executar o programa acima produz uma saída semelhante à seguinte saída - \`\` \`  
$ go run for.go A soma dos primeiros 10 números naturais é de 55
```
You can use `continue` and `break` to adjust the loops flow 
```

ir // este código imprime qualquer número ímpar até 5 para n: = 0; n <= 10; n ++ { if n% 2 == 0 { // se o número for até pular para o próximo n continuar } fmt.Println (n) // se o número for 5, saia do loop se n == 5 { pausa } }
```
If you want to create an infinite loop just use `for { }` 
```

ir para { // Até que uma condição interrompa o loop quebrar // sair do loop }
```
## Replacement for while-loop 
 To simulate while-loop of other languages, you can simply exclude the **init** and **post** statement: 
```

ir func main () { num: = 1 para num <= 1000 { num \* = 2 } fmt.Println ("O menor poder de 2 acima de 1000 é", num) } \`\` \`