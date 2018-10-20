---
title: Map.prototype.delete
localeTitle: Mapa.prototipo.delete
---
## Mapa.prototipo.delete

Elimina el elemento especificado de un objeto `Map` . Devuelve si la clave fue encontrada y eliminada con éxito.

## Sintaxis

```javascript
myMap.delete(key); 
```

## Parámetros

**Clave** Requerida.

## Ejemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 myMap.size(); // 3 
 myMap.has('foo'); // true; 
 
 myMap.delete('foo');  // Returns true. Successfully removed. 
 
 myMap.size(); // 2 
 myMap.has('foo');    // Returns false. The "foo" element is no longer present. 

```