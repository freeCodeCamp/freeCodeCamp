---
title: Add Key-Value Pairs to JavaScript Objects
localeTitle: Adicionar pares de valor-chave a objetos JavaScript
---
## Adicionar pares de valor-chave a objetos JavaScript

*   O objeto de alimentos já foi declarado. Tudo o que resta a fazer é adicionar três novos `key-values` .

```javascript
OBJECT[{KEY}] = {VALUE} 
```

*   O código acima criará um `key-value` ney dentro do objeto.

## Solução

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