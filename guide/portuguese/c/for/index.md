---
title: For Loop
localeTitle: Para loop
---
# Para loop

O loop `for` executa um bloco de código até que uma condição especificada seja falsa. Use `while` laços quando o número de iterações são variáveis, de outro modo utilizar `for` lacetes. Um uso comum de loops `for` são iterações de array.

## Sintaxe do For Loop

```c
for ( init; condition; increment ) { 
   statement(s); 
 } 
```

O loop `for` consiste em 3 seções, a seção de inicialização, uma condição específica e a seção de operação incremental ou decremental. Essas 3 seções controlam o loop `for` .

A instrução de inicialização é executada apenas uma vez. Então, a expressão de teste é avaliada. Se a expressão de teste for falsa (0), o loop será finalizado. Mas se a expressão de teste for verdadeira (diferente de zero), os códigos dentro do corpo do loop for serão executados e a expressão de atualização será atualizada. Esse processo é repetido até que a expressão de teste seja falsa.

O loop for é comumente usado quando o número de iterações é conhecido.

## Exemplo

```c
#include <stdio.h> 
 
 int main () { 
 
    int array[] = {1, 2, 3, 4, 5}; 
 
    for (int i = 0; i < 5; i++) { 
        printf("Item on index %d is %d\n", i, array[i]); 
    } 
 } 
```

## Saída:

```shell
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
 > Item on index 3 is 4 

```