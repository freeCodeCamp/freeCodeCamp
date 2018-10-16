---
title: Map.prototype.set
localeTitle: Map.prototype.set
---
## Map.prototype.set

Establece o actualiza un elemento con clave y el valor a un `Map` de objetos. Devuelve `map` de objetos.

## Sintaxis

```javascript
myMap.set(key, value); 
```

## Parámetros

**Clave** Requerida. **valor** requerido.

## Ejemplo

```javascript
const myMap = new Map(); 
 
 // sets new elements 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 // Updates an element 
 myMap.set('foo', 100); 
 
 myMap.get('foo');   // returns 100 

```