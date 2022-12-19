---
id: 587d8257367417b2b2512c7b
title: Añadir un nuevo elemento a un Árbol Binario de Búsqueda
challengeType: 1
forumTopicId: 301618
dashedName: add-a-new-element-to-a-binary-search-tree
---

# --description--

Esta serie de desafíos introducen la estructura de datos de árbol. Los árboles son una estructura de datos importante y versátil en las ciencias de la computación. Por supuesto, el nombre proviene del hecho que cuando las visualizamos se parecen mucho a los árboles con los que estamos familiarizados en el mundo natural. Una estructura de datos de árbol inicia con un nodo, comúnmente llamado raíz, y desde aquí se ramifica hacia nodos adicionales, cada uno de los cuales podría tener más nodos hijos, y así sucesivamente. La estructura de datos es usualmente visualizada con el nodo raíz en la parte superior; tu puedes pensar en él como un árbol natural invertido hacia abajo.

Primero, vamos a describir alguna terminología común que encontraremos con los árboles. El nodo raíz es la parte superior del árbol. Los puntos de datos en el árbol son llamados nodos. Los nodos con ramas que unen a otros nodos son llamados como el padre del nodo al que la rama conduce ( el hijo). Otros términos familiares más complicados son aplicados como podría esperarse. Un subárbol se refiere a todos los descendientes de un nodo en particular, las ramas pueden ser llamadas aristas, y los nodos hojas son los nodos al final del árbol que no tienen hijos. Finalmente, tenga en cuenta que los árboles son inherentemente estructuras de datos recursivas. Esto quiere decir, que todos los hijos de un nodo son padres de su propio subárbol y así sucesivamente. Es importante entender la naturaleza recursiva de los árboles cuando diseñamos algoritmos para las operaciones comunes en árboles.

Para comenzar, trataremos un tipo particular de árbol, el árbol binario. De hecho, en realidad discutiremos un árbol binario en particular, un árbol binario de búsqueda. Describiremos lo que esto significa. Mientras que la estructura de datos de árbol puede tener cualquier número de ramas en un solo nodo, un árbol binario solamente puede tener dos ramas para cada nodo. Además, un árbol binario de búsqueda se ordena respecto a los subárboles hijos, el valor de cada nodo en el subárbol izquierdo es menor o igual que el valor del nodo padre, y el valor de cada nodo en el subárbol derecho es mayor o igual que el valor del nodo padre. Es muy útil visualizar esta relación de orden para entenderla mejor:

<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img style='width: 100%; max-width: 350px; background-color: var(--gray-05);' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>

Ahora esta relación de orden es fácil de ver. Observa que cada valor a la izquierda de 8, el nodo raíz, es menor que 8, y cada valor a la derecha es mayor que 8. Además note que esta relación también es aplicada para cada de los subárboles. Por ejemplo, el primer hijo izquierdo es un subárbol. 3 es el nodo padre, y tiene exactamente dos nodos hijos - debido a las reglas de los árboles binarios de búsqueda, sabemos sin siquiera ver que el hijo izquierdo de este nodo ( y cualquiera de sus hijos) será menor que, y el hijo derecho(y cualquiera de sus hijos) será mayor que 3 (pero además menor que el valor de la raíz de la estructura).

Los árboles binarios de búsqueda son estructuras de datos muy comunes y útiles porque proveen tiempo logarítmico en el caso promedio en varias operaciones comunes como la búsqueda, inserción y eliminación.

# --instructions--

Iniciaremos de manera simple. Hemos definido el esqueleto de un árbol binario de búsqueda además de una función para la creación de nodos para nuestro árbol. Observa que cada nodo puede tener un valor izquierdo y derecho. A estos se le asignarán subárboles si existen. En nuestro árbol binario de búsqueda, crearás un método para añadir nuevos valores al árbol. El método deberá ser llamado `add` y deberá aceptar un valor entero para añadir al árbol. Ten cuidado de mantener el balance de un árbol de búsqueda binaria: el valor de cada hijo izquierdo debe ser menor o igual al valor del padre, y el valor de cada hijo derecho debe ser mayor o igual que el valor del padre. Aquí, haremos que nuestro árbol no pueda tener valores duplicados. Si intentamos añadir un valor que ya existe, el método bebe devolver `null`. De otra forma, si la inserción es exitosa, `undefined` debe ser devuelto.

**Pista:** los árboles son naturalmente estructuras de datos recursivas!

# --hints--

Debe existir la estrucutura de datos `BinarySearchTree`.

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

El árbol de búsqueda debe tener un método llamado `add`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

El método add debe añadir elementos de acuerdo a las reglas de los árboles binarios de búsqueda.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    const expectedResult = [1, 4, 7, 8, 34, 45, 73, 87];
    const result = test.inOrder();
    return expectedResult.toString() === result.toString();
  })()
);
```

La inserción de un elemento que ya existe debe devolver `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    return test.add(4) == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    inOrder() {
      if (!this.root) {
        return null;
      }
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
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
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = function(element) {
    let current = this.root;
    if (!current) {
      this.root = new Node(element);
      return;
    } else {
      const searchTree = function(current) {
        if (current.value > element) {
          if (current.left) {
            return searchTree(current.left);
          } else {
            current.left = new Node(element);
            return;
          }
        } else if (current.value < element) {
          if (current.right) {
            return searchTree(current.right);
          } else {
            current.right = new Node(element);
            return;
          }
        } else {
          return null;
        }
      };
      return searchTree(current);
    }
  };
}
```
