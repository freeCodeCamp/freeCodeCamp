---
id: 587d825b367417b2b2512c8e
title: Crear una tabla Hash
challengeType: 1
forumTopicId: 301627
dashedName: create-a-hash-table
---

# --description--

En este desafío aprenderemos sobre las tablas Hash. Una tabla hash es usada para implementar arreglos asociativos, o mapeos de pares clave-valor, como los objetos y mapas que acabamos de estudiar. Un objeto JavaScript podría ser implementado como una tabala hash, por ejemplo, (su implementación actual dependerpa del entorno en el que se ejecute). La forma en la que funciona una tabla hash es tomar una llave de entrada y hacer hash esta llave en una forma determinista a un valor numérico. Este valor numérico luego se utiliza como la clave real en la que se almacena el valor asociado. Entonces, si tu tratas de acceder a la misma clave otra vez, la funcion hashing procesará la clave, devuelve el mismo resultado numérco, el cual será usado para buscar el valor asociado. Esto proporciona un tiempo de búsqueda O(1) muy eficiente en promedio.

Las tablas hash pueden ser implementadas como arreglos con funciones hash que producen índices del arreglo dentro de un rango específico. En este método, la elección del tamaño del arreglo es importante, al igual que la función de hashing. Por ejemplo, ¿qué pasa si la función de hashing produce el mismo valor para dos diferentes claves? Esto es llamado una colisión. Una forma de manejar las colisiones es solamente almacenar ambos pares clave-valor en ese índice. Luego, al buscar ambos, tendríamos que iterar a través del cubo de objetos para encontrar la llave que estamos buscando. Una buena función de Hashing minimizará las colisiones para mantener un tiempo de búsqueda eficiente.

Aquí, no nos preocuparemos de los detalles de la implementación de la tabal de hash, solamente trataremos de obtener un sentido general de como funcionan.

# --instructions--

Vamos a crear una funcionalidad básica de una tabla de hash. Hemos creado una función hashing sencilla para que la utilices. Puedes pasar un valor de cadena a la función `hash` y retornará un valor hash que puedes usar como una clave para almacenar. Almacenar elementos basado en este valor hash en el objeto `this.collection`. Crea estos tres métodos; `add`,`remove`, y `lookup`. El primero debe aceptar un par clave valor para añadir a la tabla hash. El segundo debe eliminar un par clave valor cuando pasemos una clave. El tercero debe aceptar una clave y devolver el valor asociado o `null` si la llave no está presente.

Asegúrate de escribir tu código tomando en cuenta las colisiones!

**Nota:** Las pruebas del método `remove` no pasarán hasta que los métodos `add` y `lookup` sean correctamente implementados.

# --hints--

La estructura de datos `HashTable` debe existir.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test === 'object';
  })()
);
```

La `HashTable` debe tener un método `add`.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.add === 'function';
  })()
);
```

La `HashTable` debe tener un método `lookup`.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.lookup === 'function';
  })()
);
```

La `HashTable` debe tener un método `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.remove === 'function';
  })()
);
```

El método `add` debe agregar pares clave valor y el método `lookup` debe devolver los valores asociados con una clave dada.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    return test.lookup('key') === 'value';
  })()
);
```

El método `remove` debe aceptar una clave como entrada y debe eliminar el par clave valor asociado.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');

    test.remove('key');
    return !test.collection.hasOwnProperty(hashValue);
  })()
);
```

El método `remove` solo debe eliminar el par clave valor correcto.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    test.add('yek', 'value');
    test.add('altKey', 'value');

    test.remove('yek');
    if (test.lookup('yek') || !test.lookup('key') || !test.lookup('altKey')) {
      return false;
    }

    test.remove('key');

    return !test.collection.hasOwnProperty(hashValue) && test.lookup('altKey');
  })()
);
```

Los elementos deben ser agregados usando la función hash.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('key2', 'value2');
    test.add('key3', 'value3');
    return called >= 3 && called % 3 === 0;
  })()
);
```

La tabla Hash debe manejar las colisiones.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('1key', 'value2');
    test.add('ke1y', 'value3');
    return (
      test.lookup('key1') === 'value1' &&
      test.lookup('1key') == 'value2' &&
      test.lookup('ke1y') == 'value3'
    );
  })()
);
```

# --seed--

## --before-user-code--

```js
var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
```

## --seed-contents--

```js
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

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
  // Only change code below this line

  this.add = function(key, val) {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
  }

  this.remove = function(key) {
    var theHash = hash(key);
    var hashedObj = this.collection[theHash];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[theHash];
    }
  }

  this.lookup = function(key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null
  }
  // Only change code above this line
};
```
