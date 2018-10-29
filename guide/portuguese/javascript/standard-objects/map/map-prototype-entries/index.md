---
title: Map.prototype.entries
localeTitle: Map.prototype.entries
---
## Map.prototype.entries

Retorna um novo objeto `Iterator` que contém os pares `[key, value]` para cada elemento no objeto `Map` em ordem de inserção.

## Sintaxe

```javascript
myMap.entries() 
```

## Exemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 var iterator = myMap.entries(); 
 
 console.log(iterator.next().value); // ['foo', 1] 
 console.log(iterator.next().value); // ['bar', 2] 
 console.log(iterator.next().value); // ['baz', 3] 

```