---
title: Map.prototype.forEach
localeTitle: Map.prototype.forEach
---
## Map.prototype.forEach

Ejecuta la función proporcionada una vez por cada par de clave / valor en el objeto `Map` , en orden de inserción. Las devoluciones `undefined` .

## Sintaxis

```javascript
myMap.forEach(callback, thisArg) 
```

## Parámetros

Función **callback** para ejecutar para cada elemento. **Este** valor de **arg** para usar como este cuando se ejecuta la devolución de llamada.

## Ejemplo

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 function valueLogger(value, key, map){ 
    console.log(`${value}`); 
 } 
 
 myMap.forEach(valueLogger); 
 // 1 
 // 2 
 // 3 

```