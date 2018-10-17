---
title: Map.prototype.keys
localeTitle: Map.prototype.keys
---
## Map.prototype.keys

Devuelve un nuevo objeto `Iterator` que contiene las claves para cada elemento en el objeto `Map` en el orden de inserción.

## Sintaxis

```javascript
myMap.keys() 
```

## Ejemplo

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