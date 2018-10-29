---
title: Do...While Loop
localeTitle: Fazer ... While Loop
---
# Do… While Loop

O `do while` é semelhante `while` loop while, mas o grupo de instruções é garantido para ser executado pelo menos uma vez antes de verificar uma determinada condição. Uma coisa importante a notar é que o loop 'while' é um loop de controle de saída. while (não será necessariamente executado), 'do while' é um loop de entrada controlada (será executado pelo menos uma vez, mesmo se a condição não for verdadeira).

```java
do 
 { 
    // Statements 
 } 
 while (condition); 
```

## Exemplo

```java
int iter_DoWhile = 20; 
 do 
 { 
    System.out.print (iter_DoWhile + " "); 
 
    // Increment the counter 
    iter_DoWhile++; 
 } 
 while (iter_DoWhile < 10); 
 System.out.println("iter_DoWhile Value: " + iter_DoWhile); 
```

Saída:
```
    20 
    iter_DoWhile Value: 21 
```

**Lembre** - **se** : A condição de um loop `do-while` while é verificada depois que o corpo do código é executado uma vez.

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJYl/0)

## Exercício

Você consegue adivinhar a saída do seguinte trecho de código?

```java
int i = 10; 
 do 
 { 
    System.out.println("The value of i is " + i); 
    i--; 
 } 
 while (i >= 10); 

```