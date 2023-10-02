---
id: 587d8259367417b2b2512c84
title: Crea un Árbol Trie de búsqueda
challengeType: 1
forumTopicId: 301634
dashedName: create-a-trie-search-tree
---

# --description--

Aquí pasaremos del árbol binario de búsqueda y veremos otro tipo de estructura llamada un Trie. Un Trie es un árbol de búsqueda ordenado comúnmente usado para contener cadenas, o más generalmente arreglos asociativos o conjuntos de datos dinámicos en los cuales las claves son cadenas. Son muy buenos para almacenar conjuntos de datos cuando muchas claves tendrán prefijos superpuestos, por ejemplo, todas las palabras en un diccionario. A diferencia de un árbol binario, los nodos no están asociado con valores reales. En su lugar, la ruta a un nodo representa una clave específica. Por ejemplo, si queremos almacenar la cadena code en un trie. tendríamos cuatro nodos, uno por cada letra: c - o - d - e. Siguiendo esta ruta a través de estos nodos creará la cadena code - esa ruta es la clave que almacenamos. Entonces, si queremos agregar la cadena coding, compartiríamos los primeros tres nodos de code antes desviarnos después de la d. De esta forma, los grandes conjuntos de datos pueden ser almacenados muy compactamente. Además, la búsqueda puede ser muy rápida ya que está efectivamente limitada al largo de la cadena que está almacenada. Además, a diferencia de los árboles binarios un nodo puede almacenar cualquier número de nodos hijos. Como podrías haber adivinado en el ejemplo anterior, algunos metadatos son comúnmente almacenados en los nodos que contienen el final de una clave de manera que en los trayectos posteriores esa clave todavía puede ser recuperada. Por ejemplo, si agregamos codes en nuestro ejemplo anterior necesitaríamos una forma de saber que la e en code representa el final de una clave que fue previamente ingresada. De otra manera, esta información se perdería cuando agregamos codes.

# --instructions--

Vamos a crear un Trie para almacenar palabras. Aceptará palabras a través de un método `add` y almacenará esas palabras en una estructura de datos Trie. También nos permitirá consultar si una cadena dada es una palabra con un método `isWord`, y recuperar todas las palabras ingresadas en el trie con un método `print`. `isWord` debe devolver un valor booleano y `print` debe devolver un arreglo de todas estas palabras como valores de cadena. Para que podamos verificar que esta estructura de datos se implementa correctamente, hemos proveído una estructura `Node` para cada nodo en el árbol. Cada nodo será un objeto con una propiedad `keys` la cual es un objeto Mapa de JavaScript. Esto mantendrá las letras individuales que son claves válidas de cada nodo. También hemos creado una propiedad `end` en los nodos que puede ser establecids a `true` si el nodo representa la terminación de una palabra.

# --hints--

El `Trie` debe tener un método `add`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

El `Trie` debe tener un método `print`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

El `Trie` debe tener un método `isWord`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.isWord == 'function';
  })()
);
```

El método `print` debe devolver todos los elementos añadidos al Trie como un arrreglo de cadenas.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('jump');
    test.add('jumps');
    test.add('jumped');
    test.add('house');
    test.add('mouse');
    var added = test.print();
    return (
      added.indexOf('jump') != -1 &&
      added.indexOf('jumps') != -1 &&
      added.indexOf('jumped') != -1 &&
      added.indexOf('house') != -1 &&
      added.indexOf('mouse') != -1 &&
      added.length == 5
    );
  })()
);
```

El método `isWord` debe devolver `true` solo para las palabras añadidas al trie y `false` para todas las otras palabras.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('hop');
    test.add('hops');
    test.add('hopped');
    test.add('hoppy');
    test.add('hope');
    return (
      test.isWord('hop') &&
      !test.isWord('ho') &&
      test.isWord('hopped') &&
      !test.isWord('hopp') &&
      test.isWord('hoppy') &&
      !test.isWord('hoping')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
