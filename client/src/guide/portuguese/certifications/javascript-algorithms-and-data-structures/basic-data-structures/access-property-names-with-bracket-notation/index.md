---
title: Access Property Names with Bracket Notation
localeTitle: Acessar nomes de propriedades com notação de suporte
---
## Acessar nomes de propriedades com notação de suporte

Método:

*   Usando a notação de colchetes, simplesmente escreva a declaração de retorno na função `checkInventory()` .
*   O bloco de código a seguir demonstra a sintaxe necessária.

## Exemplo:

```javascript
let juice = { 
  apple: 1.15, 
  orange: 1.45 
 }; 
 function checkInventory(scannedItem) { 
  return juice[scannedItem]; 
 } 
```

## Solução:

```javascript
let foods = { 
  apples: 25, 
  oranges: 32, 
  plums: 28, 
  bananas: 13, 
  grapes: 35, 
  strawberries: 27 
 }; 
 // do not change code above this line 
 
 function checkInventory(scannedItem) { 
  // change code below this line 
  return foods[scannedItem]; 
 } 
 
 // change code below this line to test different cases: 
 console.log(checkInventory("apples")); 

```