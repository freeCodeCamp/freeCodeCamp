---
id: 587d8258367417b2b2512c80
title: Elimina un Nodo Hoja en un Arbol de búsqueda binaria
challengeType: 1
forumTopicId: 301637
dashedName: delete-a-leaf-node-in-a-binary-search-tree
---

# --description--

Este es el primero de tres desafíos donde implementaremos una operación más difícil en un árboles binarios de búsqueda: eliminación. La eliminación es difícil porque la eliminación de nodos rompe enlaces en el árbol. Estos enlaces deben ser restablecidos de manera cuidadosa para asegurar que la estructura del árbol binario es mantenida. Para algunas eliminaciones, esto significa que el árbol debe ser reorganizado. En general, econtrarás uno de los tres casos cuando trates de eliminar un nodo: Nodo Hoja: El objetivo a eliminar tiene cero hijos. Un Hijo: el objetivo a eliminar solo tiene un hijo. Dos hijos: El objetivo a eliminar tiene dos hijos. Eliminar un nodo hoja es fácil, simplemente lo eliminamos. Eliminar un nodo con un hijo es también relativamente fácil, simplemente los eliminamos y vinculamos a su padres el hijo del nodo que eliminamos. Eliminar un nodo con dos hijos es más difícil, sin embargo, porque esto crea dos nodos hijos que necesitan ser reconectados al árbol padre. Veremos como tratar con este caso en el tercer desafío. Adicionalmente, debe tener en cuenta algunos casos de aristas cuando manejemos la eliminación. ¿Qué pasa si el árbol está vacío? ¿Qué pasa si el nodo a eliminar es el nodo raíz? ¿Qué pasa si sólo hay dos elementos en el árbol? Por ahora, vamos a manejar el primer caso donde eliminamos un nodo hoja.

# --instructions--

Crea un método en nuestro árbol binario llamado `remove`. Construiremos la lógica de nuestra operación de eliminación aquí. Primero, querrás crear una función dentro de la eliminación que encuentre el nodo que estamos tratando de eliminar en el árbol actual. Si el nodo no está presente en el árbol, `remove` debe devolver `null`. Ahora, si el nodo objetivo es un nodo hoja sin hijos, entonces la referencia al padre debe ser establecida a `null`. Esto elimina efectivamente el nodo del árbol. Para hacer esto, deberás mantener el seguimiento del padre del nodo que estamos tratando de eliminar también. También será útil crear una forma de rastrear el número de hijos que tiene el nodo objetivo, ya que esto determinará que casp de eliminación tenemos. Manejaremos el segundo y tercer caso en los siguientes desafíos. ¡Buena Suerte!

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

El árbol binario de búsqueda debe tener un método llamado `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

Tratar de eliminar un elemento de un árbol vacío debe devolver `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    return test.remove(100) == null;
  })()
);
```

Tratar de eliminar un elemento que no existe debe devolver `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(15);
    test.add(30);
    return test.remove(100) == null;
  })()
);
```

Si el nodo raís no tiene hijos, eliminarlo debe establecer la raíz a `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(500);
    test.remove(500);
    return test.inorder() == null;
  })()
);
```

El método `remove` debe eliminar nodos hojas en el árbol.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(5);
    test.add(3);
    test.add(7);
    test.add(6);
    test.add(10);
    test.add(12);
    test.remove(3);
    test.remove(12);
    test.remove(10);
    return test.inorder().join('') == '567';
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
    },
    inorder: function() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {
          if (node.left != null) {
            traverseInOrder(node.left);
          }
          result.push(node.value);
          if (node.right != null) {
            traverseInOrder(node.right);
          }
        }
        traverseInOrder(this.root);
        return result;
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
}
```

# --solutions--

```js
// solution required
```
