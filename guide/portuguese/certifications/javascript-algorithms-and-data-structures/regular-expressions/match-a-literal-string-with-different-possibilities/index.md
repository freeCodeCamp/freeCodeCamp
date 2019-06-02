---
title: Match a Literal String with Different Possibilities
localeTitle: Combine uma seqüência literal com diferentes possibilidades
---
## Combine uma seqüência literal com diferentes possibilidades

Suponha que você queira combinar muitas palavras diferentes com sua expressão regular; usando o `|` símbolo, isso se torna possível. Neste desafio, você está usando esse símbolo para identificar quatro animais de estimação diferentes escondidos dentro de cordas!

## Sugestão 1:

Dentro da string literal, coloque os nomes dos animais de estimação, cada um separado pelo `|` símbolo.

## Alerta de Spoiler - Solução à frente!

## Solução:

```js
let petString = "James has a pet cat."; 
 let petRegex = /dog|cat|bird|fish/; 
 let result = petRegex.test(petString); 

```