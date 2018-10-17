---
title: Remove Whitespace from Start and End
localeTitle: Remova o espaço em branco do início e do fim
---
## Remova o espaço em branco do início e do fim

Para resolver esse desafio, basta criar uma string regex que corresponda a qualquer espaço no início ou no final da string.

## Sugestão 1:

Pense em como você pode selecionar substrings no início ou no final de uma string.

## Dica 2:

Pense em como você pode selecionar o espaço em branco

## Alerta de Spoiler - Solução à frente!

## Solução:

```javascript
let hello = "   Hello, World!  "; 
 let wsRegex = /^\s+|\s+$/g; // Change this line 
 let result = hello.replace(wsRegex, ''); // Change this line 

```