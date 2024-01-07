---
id: 587d8259367417b2b2512c83
title: Inverter uma árvore binária
challengeType: 1
forumTopicId: 301704
dashedName: invert-a-binary-tree
---

# --description--

Aqui criaremos uma função para inverter uma árvore binária. Dada uma árvore binária, queremos produzir uma nova árvore que é equivalentemente à imagem de espelho desta árvore. Executar uma travessia em ordem em uma árvore invertida vai explorar os nós em ordem inversa quando comparado com a travessia em ordem da árvore original. Escreva um método para fazer isso chamado `invert` em nossa árvore binária. Chamar este método deve inverter a estrutura atual da árvore. O ideal é que façamos isso em tempo linear. Ou seja, só visitamos cada nó uma vez e modificamos a estrutura em árvore existente conforme fazemos a travessia, sem usar qualquer memória adicional. Boa sorte!

# --hints--

A estrutura de dados `BinarySearchTree` deve existir.

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

A árvore binária de busca deve ter um método chamado `invert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.invert == 'function';
  })()
);
```

O método `invert` deve inverter corretamente a estrutura da árvore.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.invert !== 'function') {
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
    test.invert();
    return test.inorder().join('') == '877345348741';
  })()
);
```

Inverter uma árvore vazia deve retornar `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.invert !== 'function') {
      return false;
    }
    return test.invert() == null;
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
      function searchTree(node) {
        if (value < node.value) {
          if (node.left == null) {
            node.left = new Node(value);
            return;
          } else if (node.left != null) {
            return searchTree(node.left)
          };
        } else if (value > node.value) {
          if (node.right == null) {
            node.right = new Node(value);
            return;
          } else if (node.right != null) {
            return searchTree(node.right);
          };
        } else {
          return null;
        };
      }

      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        return searchTree(node);
      };
    },
    inorder: function() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {
          if (node.left != null) {
            traverseInOrder(node.left);
          };
          result.push(node.value);
          if (node.right != null) {
            traverseInOrder(node.right);
          };
        }
        traverseInOrder(this.root);
        return result;
      };
    }
  }
);
```

## --seed-contents--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
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
  // Only change code below this line
  this.invert = function(node = this.root) {
    if (node) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      this.invert(node.left);
      this.invert(node.right);
    }
    return node;
  }
    // Only change code above this line
}
```
