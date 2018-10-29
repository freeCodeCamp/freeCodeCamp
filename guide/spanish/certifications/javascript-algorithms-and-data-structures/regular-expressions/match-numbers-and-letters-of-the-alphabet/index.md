---
title: Match Numbers and Letters of the Alphabet
localeTitle: Coincidir números y letras del alfabeto
---
## Coincidir números y letras del alfabeto

En este desafío, se le solicita que devuelva una colección de números y letras extraídas de una cadena. Nuestro objetivo es crear una expresión regular única que capture el rango de letras entre hys, y los números del 2 al 6.

### Sugerencia 1:

¿Estás utilizando el método match ()? Si es así, ¿estás llamando al método desde la variable apropiada? es decir

```javascript
  let input_string = "The string you are testing on" 
  let yourRegExp = /[hs]/; 
  let correct_result = input_string.match(yourRegExp); // passes - returns characters H to S 
 
  let incorrect_result = yourRegExp.match(input_string); // fails - .match() is not a function 
```

### Sugerencia 2:

¿Recordó habilitar los indicadores de expresión regular como "i" para ignorar mayúsculas y minúsculas y "g" para volver a recibir múltiples valores? Si es así, ¿estás incluyendo el caso de caracteres para los números Y las letras?

```javascript
let regexp = /[a-z1-100]/ig 
 // above code returns all characters from A to Z, along with all numbers from 1 to 100 
 // this includes the letter A and Z and the numbers 1 and 100 
```

### Alerta de Spoiler - Solución por delante

## Solución

```javascript
let quoteSample = "Blueberry 3.141592653s are delicious."; 
 let myRegex = /[h-s2-6]/ig; // Change this line 
 let result = quoteSample.match(myRegex); // Change this line 

```