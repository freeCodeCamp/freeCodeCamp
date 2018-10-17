---
title: Do...While Loop
localeTitle: Fazer ... While Loop
---
O laço `do...while` while está intimamente relacionado [`while`](http://forum.freecodecamp.com/t/javascript-while-loop/14668) loop while. No loop while, a condição é verificada no final do loop.

Aqui está a **sintaxe** para `do...while` loop:

## Sintaxe:
```
 do { 
 
   *Statement(s);* 
 
 } while (*condition*); 
```

**declaração (ões):** Uma instrução que é executada **pelo menos uma vez** antes de a condição ou expressão booleana ser avaliada e ser executada novamente toda vez que a condição for avaliada como verdadeira.

**condição:** Aqui, uma condição é uma expressão booleana . Se a expressão booleana for avaliada como verdadeira, a instrução será executada novamente. Quando a expressão booleana é avaliada como falsa, os loops terminam.

## Exemplo:
```
var i = 0; 
 do { 
  i = i + 1; 
  console.log(i); 
 } while (i < 5); 
 
 Output: 
 1 
 2 
 3 
 4 
 5 
```

fonte: [**do… enquanto**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do…while)