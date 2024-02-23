---
id: 587d8258367417b2b2512c7f
title: Usar a busca em largura na árvore binária de busca
challengeType: 1
forumTopicId: 301718
dashedName: use-breadth-first-search-in-a-binary-search-tree
---

# --description--

Aqui vamos introduzir outro método de travessia de árvores: busca em largura. Em contraste com os métodos de busca em profundidade do último desafio, a busca em largura explora todos os nós em um determinado nível de uma árvore antes de continuar para o próximo nível. Normalmente, as filas (queues) são utilizadas como estruturas de dados auxiliares na criação dos algoritmos de busca em largura.

Neste método, começamos adicionando o nó raiz a uma fila. Em seguida, começamos um laço onde separamos o primeiro item da fila, o adicionamos a um novo array e, então, inspecionamos suas subárvores filhas. Se as filhas não forem nulas, elas serão colocadas na fila. Este processo continua até que a fila esteja vazia.

# --instructions--

Vamos criar um método de busca em largura em nossa árvore chamado `levelOrder`. Este método deve retornar um array que contenha os valores de todos os nós da árvore, explorados em uma busca em largura. Certifique-se de retornar os valores no array, não os próprios nós. Um nível deve ser atravessado da esquerda para a direita. Em seguida, vamos escrever um método similar chamado `reverseLevelOrder`, que executa a mesma busca, mas na direção inversa (da direita para a esquerda) em cada nível.

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

A árvore binária de busca deve ter um método chamado `levelOrder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.levelOrder == 'function';
  })()
);
```

A árvore binária de busca deve ter um método chamado `reverseLevelOrder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.reverseLevelOrder == 'function';
  })()
);
```

O método `levelOrder` deve retornar um array de valores dos nós da árvore explorados na ordem dos níveis.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.levelOrder().join('') == '719038102546';
  })()
);
```

O método `reverseLevelOrder` deve retornar um array de valores dos nós da árvore explorados na ordem inversa dos níveis.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.reverseLevelOrder().join('') == '791108305264';
  })()
);
```

O método `levelOrder` deve retornar `null` para uma árvore vazia.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
      return false;
    }
    return test.levelOrder() == null;
  })()
);
```

O método `reverseLevelOrder` deve retornar `null` para uma árvore vazia.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
      return false;
    }
    return test.reverseLevelOrder() == null;
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
      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
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
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.levelOrder = (root = this.root) => {
    if(!root) return null;
    let queue = [root];
    let results = [];
    while(queue.length > 0) {
      let node = queue.shift();
      results.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return results;
  }

  this.reverseLevelOrder = (root = this.root) => {
    if(!root) return null;
    let queue = [root];
    let results = [] ;
    while ( queue.length > 0) {
      let node = queue.shift();
      results.push(node.value);
      if(node.right) queue.push(node.right);
      if(node.left ) queue.push(node.left);
    }
    return results;
  }
  // Only change code above this line
}
```
