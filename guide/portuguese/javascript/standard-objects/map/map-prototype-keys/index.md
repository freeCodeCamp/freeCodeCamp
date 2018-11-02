---
title: Map.prototype.keys
localeTitle: Map.prototype.keys
---
## Map.prototype.keys

Retorna um novo objeto `Iterator` que contém as chaves para cada elemento no objeto `Map` na ordem de inserção.

## Sintaxe

```javascript
myMap.keys() 
```

## Exemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 const iterator = myMap.keys(); 
 
 console.log(iterator.next().value); // 'foo' 
 console.log(iterator.next().value); // 'bar' 
 console.log(iterator.next().value); // 'baz' 

```