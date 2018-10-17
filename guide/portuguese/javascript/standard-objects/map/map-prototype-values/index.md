---
title: Map.prototype.values
localeTitle: Map.prototype.values
---
## Map.prototype.values

Retorna um objeto iterador que contém os valores para cada elemento no objeto `Map` na ordem de inserção.

## Sintaxe

```javascript
myMap.values() 
```

## Exemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 const iterator = myMap.values(); 
 console.log(iterator.next().value); // 1 
 console.log(iterator.next().value); // 2 
 console.log(iterator.next().value); // 3 

```