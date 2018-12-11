---
title: JavaScript for Loops Explained
localeTitle: JavaScript para Loops Explained
---
A instrução for cria um loop que consiste em três expressões opcionais, entre parênteses e separadas por ponto e vírgula, seguidas por uma instrução ou um conjunto de instruções executadas no loop.

O loop for possui a seguinte sintaxe:
```
for (<a href='http://forum.freecodecamp.com/t/javascript-while-loop/14668' target='_blank' rel='nofollow'>initialization]; [condition]; [final-expression]) { 
    code block to be executed 
 } 
```

\[inicialização\] é executado antes que o loop (o bloco de código) seja iniciado.

\[condição\] define a condição para executar o loop (o bloco de código).

\[expressão final\] é executada toda vez que o loop (o bloco de código) é executado.

## Exemplo em JavaScript:
```
var ourArray = []; 
 for (var i = 0; i < 5; i++) { 
    ourArray.push(i); 
 } 
```

No exemplo acima, você pode ler:

\[initialization\] define uma variável antes do início do loop (var i = 0).

\[condição\] define a condição para o loop ser executado (eu devo ser menor que 5).

\[expressão final\] aumenta um valor (i ++) toda vez que o bloco de código no loop for executado.

## Por que precisamos de "for loops"?

For loops são usados ​​para percorrer um bloco de código um número conhecido de vezes. Às vezes é o computador que sabe quantas vezes, não você, mas ainda é conhecido.

Checkout alguns dos nossos outros artigos em loops:

*   \[While Loop
*   [Para em loop](http://forum.freecodecamp.com/t/javascript-for-in-loop/14665)