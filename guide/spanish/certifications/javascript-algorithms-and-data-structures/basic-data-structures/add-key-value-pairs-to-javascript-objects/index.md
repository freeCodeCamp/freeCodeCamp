---
title: Add Key-Value Pairs to JavaScript Objects
localeTitle: Agregue pares de valor-clave a los objetos de JavaScript
---
## Agregue pares de valor-clave a los objetos de JavaScript

*   El objeto alimentos ya ha sido declarado. Todo lo que queda por hacer es agregar tres nuevos `key-values` .

```javascript
OBJECT[{KEY}] = {VALUE} 
```

*   El código anterior creará un nuevo `key-value` dentro del objeto.

## Solución

```javascript
let foods = { 
  apples: 25, 
  oranges: 32, 
  plums: 28 
 }; 
 // change code below this line 
 foods['bananas'] = 13; 
 foods['grapes'] = 35; 
 foods['strawberries'] = 27; 
 // change code above this line 
 console.log(foods); 

```