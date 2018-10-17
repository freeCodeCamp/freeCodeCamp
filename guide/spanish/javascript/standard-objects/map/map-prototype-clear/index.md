---
title: Map.prototype.clear
localeTitle: Mapa.prototipo.clear
---
## Map.prototype.clear

Elimina todos los elementos de un `Map` de objetos. Las devoluciones `undefined` .

## Sintaxis

```javascript
myMap.clear(); 
```

## Ejemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 myMap.size(); // 3 
 myMap.has('foo'); // true; 
 
 myMap.clear(); 
 
 myMap.size(); // 0 
 myMap.has('foo'); // false 

```