---
id: 587d8257367417b2b2512c7c
title: Verificar si un Elemento está presente en un Árbol Binario de Búsqueda
challengeType: 1
forumTopicId: 301623
dashedName: check-if-an-element-is-present-in-a-binary-search-tree
---

# --description--

Ahora que tenemos un sentido general de lo que es un árbol binario de búsqueda vamos a hablar sobre ello con un poco más de detalle. Un árbol binario de búsqueda provee tiempo lograítmico para las operaciones comunes de búsqueda, inserción y eliminación en el caso promedio, y tiempo linear en el peor de los casos. ¿Porqué es esto? Cada uno de estas operaciones básicas requieren que encontremos un elemento en el árbol ( o en el caso de la inserción encontrar donde debe ir) y debido a que en la estructura de árbol para cada nodo padre estamos yendo a la derecha o izquierda efectivamente excluimos la mitad del tamaño del árbol restante. Esto hace que la búsqueda sea proporcional al logaritmo del numero de nodos en el árbol, lo que crea tiempo logarítmico para estas operaciones en el caso promedio. Bien, pero ¿qué pasa en el peor de los casos? Bueno, considerando construir un árbol a patir de los siguientes valores agregandolos a la izquierdo o derecha: `10`,`12`, `17`, `25`. Siguiendo nuestras reglas para un árbol binario de búsqueda, vamos a añadir `12` a la derecha de `10`, `17` a la derecha de este, y `25` a la derecha de este. Ahora nuestro árbol se parece a una lista enlazada y recorrerlo para encontrar `25` requeriría que atravesemos todos los elementos de manera lineal. Po lo tanto, el tiempo es lineal en el peror caso. El problema aquí es que el árbol está desbalanceado. Veremos un poco más sobre lo que esto significa en los siguientes desafíos.

# --instructions--

En este desafío, vamos a crear una utilidad para nuestro árbol. Escribe un método `isPresent` que tome un valor entero como entrada y devuelva un valor booleano para la presencia o ausencia de ese valor en el árbol binario de búsqueda.

# --hints--

La estructura de datos `BinarySearchTree` debe existir.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    }
    return typeof test == 'object';
  })()
);
```

El árbol binario de búsqueda debe tener un método llamado `isPresent`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.isPresent == 'function';
  })()
);
```

El método `isPresent` deber verificar correctamente la presencia o ausencia de los elementos añadidos en el árbol.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    test.add(4);
    test.add(7);
    test.add(411);
    test.add(452);
    return (
      test.isPresent(452) &&
      test.isPresent(411) &&
      test.isPresent(7) &&
      !test.isPresent(100)
    );
  })()
);
```

`isPresent` debe manejar los casos donde el árbol esté vacío.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    return test.isPresent(5) == false;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    add: function(value) {
      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        function searchTree(node) {
          if (value < node.value) {
            if (node.left == null) {
              node.left = new Node(value);
              return;
            } else if (node.left != null) {
              return searchTree(node.left);
            }
          } else if (value > node.value) {
            if (node.right == null) {
              node.right = new Node(value);
              return;
            } else if (node.right != null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        }
        return searchTree(node);
      }
    }
  }
);
```

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.isPresent = function (value) {
    var current = this.root
    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}
```
