---
title: Match Numbers and Letters of the Alphabet
localeTitle: Corresponder números e letras do alfabeto
---
## Corresponder números e letras do alfabeto

Neste desafio, você é solicitado a retornar uma coleção de números e letras extraídos de uma string. Nosso objetivo é criar um regexp único que capture o intervalo de letras entre he s e os números de 2 a 6.

### Sugestão 1:

Você está usando o método match ()? Se sim, então você está chamando o método da variável apropriada? ou seja

```javascript
  let input_string = "The string you are testing on" 
  let yourRegExp = /[hs]/; 
  let correct_result = input_string.match(yourRegExp); // passes - returns characters H to S 
 
  let incorrect_result = yourRegExp.match(input_string); // fails - .match() is not a function 
```

### Dica 2:

Você se lembrou de ativar os sinalizadores regexp como "i" para ignorar maiúsculas e minúsculas e "g" para recuperar vários valores? Se sim, então você está incluindo tanto a correspondência de maiúsculas e minúsculas para números e letras?

```javascript
let regexp = /[a-z1-100]/ig 
 // above code returns all characters from A to Z, along with all numbers from 1 to 100 
 // this includes the letter A and Z and the numbers 1 and 100 
```

### Alerta de spoiler - Solução à frente

## Solução

```javascript
let quoteSample = "Blueberry 3.141592653s are delicious."; 
 let myRegex = /[h-s2-6]/ig; // Change this line 
 let result = quoteSample.match(myRegex); // Change this line 

```