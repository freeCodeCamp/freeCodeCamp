---
id: 587d8258367417b2b2512c80
title: Excluir um nó de folha em uma árvore binária de busca
challengeType: 1
forumTopicId: 301637
dashedName: delete-a-leaf-node-in-a-binary-search-tree
---

# --description--

Este é o primeiro de três desafios onde implementaremos uma operação mais difícil em árvores binárias de busca: a exclusão. A exclusão é difícil porque remover nós quebra as ligações da árvore. Estas ligações devem ser cuidadosamente restabelecidas para garantir a manutenção da estrutura da árvore binária. Para algumas exclusões, isto significa que a árvore tem de ser reorganizada. Em geral, você encontrará um dos três casos ao tentar excluir um nó: Nó de folha: o destino que se quer excluir tem zero filhos. Um filho: o destino que se quer excluir tem apenas um filho. Dois filhos: o destino que se quer excluir tem dois nós filhos. Remover um nó de folha é fácil, simplesmente o removemos. Excluir um nó com um filho também é relativamente fácil, simplesmente removemos ele e vinculamos o seu pai ao filho do nó que excluímos. Remover um nó com dois filhos é mais difícil, no entanto, porque cria dois nós filhos que precisam ser reconectados à árvore pai. Vamos ver como lidar com esse caso no terceiro desafio. Além disso, você precisa estar atento a alguns casos extremos ao lidar com a exclusão. E se a árvore estiver vazia? E se o nó a ser excluído é o nó raiz? E se há apenas dois elementos na árvore? Por agora, vamos lidar com o primeiro caso, em que excluímos um nó de folha.

# --instructions--

Crie um método em nossa árvore binária chamado `remove`. Vamos construir a lógica para nossa operação de exclusão aqui. Primeiro, você vai querer criar uma função dentro de remove que encontre o nó que estamos tentando excluir na árvore atual. Se o nó não estiver presente na árvore, `remove` deve retornar `null`. Agora, se o nó de destino for um nó de folha sem filhos, então a referência pai deve ser definida como `null`. Isto efetivamente exclui o nó da árvore. Para fazer isso, você terá que acompanhar o pai do nó que estamos tentando excluir também. Também será útil criar uma maneira de rastrear o número de filhos que o nó alvo tem, pois isso determinará qual o caso da nossa exclusão. Trataremos do segundo e do terceiro caso nos próximos desafios. Boa sorte!

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

A árvore binária de busca deve ter um método chamado `remove`.

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

Tentar remover um elemento de uma árvore vazia deve retornar `null`.

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

Tentar remover um elemento que não existe deve retornar `null`.

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

Se o nó raiz não tem filhos, a exclusão deve definir a raiz como `null`.

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

O método `remove` deve remover os nós de folha da árvore.

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
