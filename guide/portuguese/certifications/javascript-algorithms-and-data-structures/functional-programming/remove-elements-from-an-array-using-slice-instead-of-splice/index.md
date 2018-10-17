---
title: Remove Elements from an Array Using slice Instead of splice
localeTitle: Remover elementos de um array usando slice Em vez de splice
---
## Remover elementos de um array usando slice Em vez de splice

*   A diferença entre o método splice e slice é que o método slice não altera o array original, mas retorna um novo.
*   O método de fatia leva 2 dois argumentos para os índices começarem e terminarem a fatia (o final não é inclusivo).
*   Se você não quiser alterar o array original, poderá usar o método de fatia.

## Solução

```javascript
function nonMutatingSplice(cities) { 
  // Add your code below this line 
 
  return cities.slice(0, 3); 
 
  // Add your code above this line 
 } 
 var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"]; 
 nonMutatingSplice(inputCities); 

```