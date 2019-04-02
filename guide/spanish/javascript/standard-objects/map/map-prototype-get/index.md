---
title: Map.prototype.get
localeTitle: Map.prototype.get
---
## Map.prototype.get

Devuelve un valor de la clave especificada de un objeto `Map` .

## Sintaxis

```javascript
myMap.get(key); 
```

## Parámetros

**Clave** Requerida.

## Ejemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 myMap.get('foo');   // returns 1 
 myMap.get('baz');   // returns 3 
 myMap.get('hihi');  // return undefined 

```