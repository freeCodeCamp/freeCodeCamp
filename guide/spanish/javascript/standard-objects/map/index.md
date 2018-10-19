---
title: Map
localeTitle: Mapa
---
## Mapa

Un mapa de entradas `[key, value]` , donde las claves y los valores pueden ser cualquier valor (tanto los objetos como los valores primitivos).

## Sintaxis

```javascript
new Map([iterable]) 
```

## Parámetros

**iterable** Un Array u otro objeto iterable cuyos elementos son pares clave-valor.

## Ejemplo

```javascript
// basic usage 
 const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 myMap.get('foo');   // returns 1 
 myMap.get('baz');   // returns 3 
 myMap.get('hihi');  // return undefined 
 
 myMap.size();   // 3 

```