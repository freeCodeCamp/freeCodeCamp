---
title: Match Anything with Wildcard Period
localeTitle: Combinar qualquer coisa com o período curinga
---
## Combinar qualquer coisa com o período curinga

## Sugestão 1:

O ponto `.` é a chave neste desafio.

## Dica 2:

Você deve colocar o ponto na posição correta.

## Solução

```javascript
let exampleStr = "Let's have fun with regular expressions!"; 
 let unRegex = /.un/; // Change this line 
 let result = unRegex.test(exampleStr); 
```

## Explicação

O período `.` será qualquer caractere, então as strings "run", "sun", "fun" e "pun" terão os mesmos charaters.