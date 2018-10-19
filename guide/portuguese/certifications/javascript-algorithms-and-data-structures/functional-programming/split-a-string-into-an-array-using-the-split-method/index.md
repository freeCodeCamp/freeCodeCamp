---
title: Split a String into an Array Using the split Method
localeTitle: Dividir uma string em uma matriz usando o método de divisão
---
## Dividir uma string em uma matriz usando o método de divisão

### Método

Basta dividir a string para criar uma nova matriz de palavras.

Uma expressão regular simples pode ser usada para alcançar este resultado.

### Solução

```javascript
function splitify(str) { 
  // Add your code below this line 
  return str.split(/\W/); 
  // Add your code above this line 
 } 
 splitify("Hello World,I-am code"); 

```