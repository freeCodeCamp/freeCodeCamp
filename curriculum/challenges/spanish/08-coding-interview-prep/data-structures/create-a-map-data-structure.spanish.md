---
id: 8d5823c8c441eddfaeb5bdef
title: Create a Map Data Structure
challengeType: 1
videoUrl: ''
localeTitle: Crear una estructura de datos de mapas
---

## Description
<section id="description"> Los próximos desafíos cubrirán mapas y tablas hash. Los mapas son estructuras de datos que almacenan pares clave-valor. En JavaScript, estos están disponibles para nosotros como objetos. Los mapas proporcionan una búsqueda rápida de elementos almacenados en función de valores clave y son estructuras de datos muy comunes y útiles. Instrucciones: Hagamos algo de práctica creando nuestro propio mapa. Debido a que los objetos de JavaScript proporcionan una estructura de mapa mucho más eficiente que cualquier otra que podamos escribir aquí, esto está pensado principalmente como un ejercicio de aprendizaje. Sin embargo, los objetos de JavaScript solo nos proporcionan ciertas operaciones. ¿Y si quisiéramos definir operaciones personalizadas? Utilice el objeto <code>Map</code> que se proporciona aquí como una envoltura alrededor de un <code>object</code> JavaScript. Cree los siguientes métodos y operaciones en el objeto Map: <ul><li> <code>add</code> acepta una <code>key, value</code> par de <code>key, value</code> para agregar al mapa. </li><li> <code>remove</code> acepta una clave y elimina la <code>key, value</code> asociada <code>key, value</code> par de <code>key, value</code> </li><li> <code>get</code> acepta una <code>key</code> y devuelve el <code>value</code> almacenado </li><li> <code>has</code> acepta una <code>key</code> y devuelve <dfn>verdadero</dfn> si existe la clave o <dfn>falso</dfn> si no lo hace. </li><li> <code>values</code> devuelve una matriz de todos los valores en el mapa </li><li> <code>size</code> devuelve el número de elementos en el mapa </li><li> <code>clear</code> vacía el mapa </li></ul></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos del mapa existe.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test == "object")})(), "The Map data structure exists.");'
  - text: 'El objeto Mapa tiene los siguientes métodos: agregar, eliminar, obtener, tiene, valores, borrar y tamaño.'
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test.add == "function" && typeof test.remove == "function" && typeof test.get == "function" && typeof test.has == "function" && typeof test.values == "function" && typeof test.clear == "function" && typeof test.size == "function")})(), "The Map object has the following methods: add, remove, get, has, values, clear, and size.");'
  - text: El método add agrega elementos al mapa.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add(5,6); test.add(2,3); test.add(2,5); return (test.size() == 2)})(), "The add method adds items to the map.");'
  - text: El método has devuelve true para los elementos agregados y false para los elementos ausentes.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("test","value"); return (test.has("test") && !test.has("false"))})(), "The has method returns true for added items and false for absent items.");'
  - text: El método get acepta las claves como entrada y devuelve los valores asociados.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("abc","def"); return (test.get("abc") == "def")})(), "The get method accepts keys as input and returns the associated values.");'
  - text: El método de valores devuelve todos los valores almacenados en el mapa como cadenas en una matriz.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("a","b"); test.add("c","d"); test.add("e","f"); var vals = test.values(); return (vals.indexOf("b") != -1 && vals.indexOf("d") != -1 && vals.indexOf("f") != -1)})(), "The values method returns all the values stored in the map as strings in an array.");'
  - text: El método claro vacía el mapa y el método de tamaño devuelve el número de elementos presentes en el mapa.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("b","b"); test.add("c","d"); test.remove("asdfas"); var init = test.size(); test.clear(); return (init == 2 && test.size() == 0)})(), "The clear method empties the map and the size method returns the number of items present in the map.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Map = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
