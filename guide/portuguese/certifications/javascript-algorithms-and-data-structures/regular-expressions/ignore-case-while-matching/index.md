---
title: Ignore Case While Matching
localeTitle: Ignorar maiúsculas e minúsculas durante a correspondência
---
## Ignorar maiúsculas e minúsculas durante a correspondência

Ao criar uma expressão regular, você pode querer corresponder partes da string que são iguais em ortografia, mas diferentes no caso. Para fazer isso, você adiciona o sinalizador `i` ao final da regex. Neste desafio, você está fazendo exatamente isso.

## Sugestão 1:

Modifique o regex para que ele detecte "freeCodeCamp", "FREECODECAMP" e "FrEeCoDeCaMp". Talvez usando o `i` bandeira pode ajudar?

## Alerta de Spoiler - Solução à frente!

## Solução

```javascript
let myString = "freeCodeCamp"; 
 let fccRegex = /freeCodeCamp/i; 
 let result = fccRegex.test(myString); 

```