---
title: Map.prototype.entries
localeTitle: Map.prototype.entries
---
## Map.prototype.entries

Devuelve un nuevo objeto `Iterator` que contiene los pares `[key, value]` para cada elemento en el objeto `Map` en el orden de inserción.

## Sintaxis

```javascript
myMap.entries() 
```

## Ejemplo

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