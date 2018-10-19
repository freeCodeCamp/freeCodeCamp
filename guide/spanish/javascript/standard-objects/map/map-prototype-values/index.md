---
title: Map.prototype.values
localeTitle: Map.prototype.values
---
## Map.prototype.values

Devuelve un objeto iterador que contiene los valores para cada elemento en el objeto `Map` en el orden de inserción.

## Sintaxis

```javascript
myMap.values() 
```

## Ejemplo

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