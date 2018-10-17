---
title: Access Property Names with Bracket Notation
localeTitle: Acceso a nombres de propiedades con notación de corchete
---
## Acceso a nombres de propiedades con notación de corchete

Método:

*   Usando la notación de corchetes, simplemente escriba la declaración de retorno en la función `checkInventory()` .
*   El siguiente bloque de código muestra la sintaxis requerida.

## Ejemplo:

```javascript
let juice = { 
  apple: 1.15, 
  orange: 1.45 
 }; 
 function checkInventory(scannedItem) { 
  return juice[scannedItem]; 
 } 
```

## Solución:

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