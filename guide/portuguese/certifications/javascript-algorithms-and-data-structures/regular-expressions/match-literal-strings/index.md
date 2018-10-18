---
title: Match Literal Strings
localeTitle: Combinar cordas literais
---
## Combinar cordas literais

Este desafio não é diferente do anterior; Nesse caso, você está aprendendo que literais de string são sensíveis a maiúsculas e minúsculas. Isso significa que, quando você testar para ver se uma string tem um literal, ele procurará o caso exato (inferior ou superior) dentro da string. Você aprenderá como encontrar literais de string, independentemente do caso, em uma lição futura.

Neste desafio, você está encontrando Waldo ... dentro de uma corda!

## Sugestão 1:

Altere a linha para ter o literal da string correto.

## Alerta de Spoiler - Solução à frente!

## Solução:

```javascript
let waldoIsHiding = "Somewhere Waldo is hiding in this text."; 
 let waldoRegex = /Waldo/; // Change this line 
 let result = waldoRegex.test(waldoIsHiding); 

```