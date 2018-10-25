---
title: Extract Matches
localeTitle: Extrair correspondências
---
## Extrair correspondências

Usando o método `match()` , você pode extrair partes de uma string que corresponda à sua expressão regular. Neste desafio, você está extraindo a palavra "codificação" da string fornecida.

## Sugestão 1:

Altere seu regex para detectar a palavra "codificação".

## Dica 2:

Você chamou o método `match()` na string?

## Alerta de Spoiler - Solução à frente!

## Solução:

```javascript
let extractStr = "Extract the word 'coding' from this string."; 
 let codingRegex = /coding/; 
 let result = extractStr.match(codingRegex); 

```