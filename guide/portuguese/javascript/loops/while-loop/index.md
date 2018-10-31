---
title: While Loop
localeTitle: While Loop
---
O loop while inicia avaliando a condição. Se a condição for verdadeira, a (s) instrução (ões) será (ão) executada (s). Se a condição for falsa, a (s) instrução (ões) será (ão) executada (s). Depois disso, enquanto o loop termina.

Aqui está a **sintaxe** do loop while:

## Sintaxe:
```
while (condition) 
 
 { 
 
  statement(s); 
 
 } 
```

_declaração (ões):_ Uma instrução que é executada contanto que a condição seja avaliada como verdadeira.

_condição:_ Aqui, condição é uma expressão booleana que é avaliada antes de cada passagem pelo loop. Se essa condição for avaliada como verdadeira, a (s) instrução (ões) será (ão) executada (s). Quando a condição é avaliada como falsa, a execução continua com a instrução após o loop while.

## Exemplo:
```
    var i = 1; 
    while (i < 10) 
    { 
      console.log(i); 
       i++; // i=i+1 same thing 
    } 
 
    Output: 
    1 
    2 
    3 
    4 
    5 
    6 
    7 
    8 
    9 
```

_Fonte: [While Loop - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)_