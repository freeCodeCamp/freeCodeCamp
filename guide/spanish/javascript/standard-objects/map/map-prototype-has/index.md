---
title: Map.prototype.has
localeTitle: Map.prototype.has
---
## Map.prototype.has

Dado un `Map` con elementos dentro, la función `has()` permite determinar si un elemento existe o no dentro del Mapa, según la clave que pase.

La función `has()` devuelve una _primitiva `Boolean`_ (ya sea `true` o `false` ), que indica que el Mapa contiene el elemento o no.

Pasa un parámetro `key` a la función `has()` , que se usará para buscar un elemento con esa clave dentro del Mapa.

Ejemplo:

```js
// A simple Map 
 const campers = new Map(); 
 
 // add some elements to the map 
 // each element's key is 'camp' and a number 
 campers.set('camp1', 'Bernardo'); 
 campers.set('camp2', 'Andrea'); 
 campers.set('camp3', 'Miguel'); 
 
 // Now I want to know if there's an element 
 // with 'camp4' key: 
 campers.has('camp4'); 
 // output is `false` 
```

El mapa de `campers` no tiene actualmente un elemento con una `'camp4'` . Por lo tanto, la llamada a la función `has('camp4')` devolverá `false` .

```js
// If we add an element with the 'camp4' key to the map 
 campers.set('camp4', 'Ana'); 
 
 // and try looking for that key again 
 campers.has('camp4'); 
 // output is `true` 
```

Como el mapa ahora tiene un elemento con una `'camp4'` , ¡la llamada a la función `has('camp4')` se volverá `true` esta vez!

En un escenario más real, es posible que no agregue manualmente los elementos al Mapa usted mismo, por lo que la función `has()` sería realmente útil en esos casos.

#### Más información:

*   [Map.prototype.has () en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)