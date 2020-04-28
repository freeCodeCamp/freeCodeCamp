---
id: 587d825b367417b2b2512c8e
title: Create a Hash Table
challengeType: 1
videoUrl: ''
localeTitle: Crear una tabla de hash
---

## Description
<section id="description"> En este desafío aprenderemos sobre tablas hash. Se utiliza una tabla Hash para implementar matrices asociativas, o asignaciones de pares clave-valor, como los objetos y los mapas que acabamos de estudiar. Un objeto JavaScript podría implementarse como una tabla hash, por ejemplo (su implementación real dependerá del entorno en el que se esté ejecutando). La forma en que funciona una tabla hash es que toma una entrada clave y hace un hash de esta clave de manera determinista a algún valor numérico. Este valor numérico se utiliza como la clave real por la que se almacena el valor asociado. Luego, si intenta acceder a la misma clave nuevamente, la función de hashing procesará la clave y devolverá el mismo resultado numérico, que luego se usará para buscar el valor asociado. Esto proporciona un tiempo de búsqueda O (1) muy eficiente en promedio. Las tablas hash se pueden implementar como matrices con funciones hash que producen índices de matriz dentro de un rango específico. En este método, la elección del tamaño del arreglo es importante, como lo es la función de hashing. Por ejemplo, ¿qué pasa si la función de hashing produce el mismo valor para dos claves diferentes? Esto se llama una colisión. Una forma de manejar las colisiones es simplemente almacenar ambos pares clave-valor en ese índice. Luego, al buscar cualquiera de los dos, tendría que recorrer el conjunto de elementos para encontrar la clave que está buscando. Una buena función de hash minimizará las colisiones para mantener un tiempo de búsqueda eficiente. En este caso, no nos preocuparemos por los detalles de hashing o la implementación de tablas hash, solo intentaremos obtener una idea general de cómo funcionan. Instrucciones: Vamos a crear la funcionalidad básica de una tabla hash. Hemos creado una función de hash ingenua para que la uses. Puede pasar un valor de cadena al hash de función y devolverá un valor hash que puede usar como clave para el almacenamiento. Almacene artículos basados ​​en este valor hash en el objeto this.collection. Crea estos tres métodos: agregar, eliminar y buscar. El primero debe aceptar un par de valores clave para agregar a la tabla hash. El segundo debe eliminar un par clave-valor cuando se pasa una clave. El tercero debe aceptar una clave y devolver el valor asociado o nulo si la clave no está presente. ¡Asegúrese de escribir su código para tener en cuenta las colisiones! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos HashTable existe.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return (typeof test === "object")})(), "The HashTable data structure exists.");'
  - text: La tabla hash tiene un método de adición.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.add) === "function")})(), "The HashTable has an add method.");'
  - text: La tabla hash tiene un método de eliminación.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.remove) === "function")})(), "The HashTable has an remove method.");'
  - text: El HashTable tiene un método de búsqueda.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.lookup) === "function")})(), "The HashTable has an lookup method.");'
  - text: El método de agregar agrega pares de valores clave y el método de búsqueda devuelve los valores asociados con una clave dada.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; test.add("key", "value"); return (test.lookup("key") === "value")})(), "The add method adds key value pairs and the lookup method returns the values associated with a given key.");'
  - text: El método de eliminación acepta una clave como entrada y elimina el par de valores de clave asociado.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; test.add("key", "value"); test.remove("key"); return (test.lookup("key") === null)})(), "The remove method accepts a key as input and removes the associated key value pair.");'
  - text: Los elementos se añaden utilizando la función hash.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; called = 0; test.add("key1","value1"); test.add("key2","value2"); test.add("key3","value3"); return (called === 3)})(), "Items are added using the hash function.");'
  - text: La tabla hash maneja las colisiones.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; called = 0; test.add("key1","value1"); test.add("1key","value2"); test.add("ke1y","value3"); return (test.lookup("key1") === "value1" && test.lookup("1key") == "value2" && test.lookup("ke1y") == "value3")})(), "The hash table handles collisions.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>

### Before Test
<div id='js-setup'>

```js
  var called = 0;
    var hash = (string) => {
     called++;
      var hash = 0;
      for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); };
      return hash;
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
