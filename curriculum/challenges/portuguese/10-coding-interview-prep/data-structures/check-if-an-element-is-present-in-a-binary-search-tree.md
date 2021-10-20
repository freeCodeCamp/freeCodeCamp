---
id: 587d8257367417b2b2512c7c
title: Verificar se um elemento está presente em uma árvore binária de busca
challengeType: 1
forumTopicId: 301623
dashedName: check-if-an-element-is-present-in-a-binary-search-tree
---

# --description--

Agora que temos uma ideia geral do que é uma árvore binária de busca, vamos conversar sobre ela de maneira um pouco mais detalhada. Árvores de pesquisa binária fornecem tempo logarítmico para operações comuns de pesquisa, inserção e exclusão em média e tempo linear no pior dos casos. Por quê? Cada uma dessas operações básicas exige que encontremos um item na árvore (ou, no caso da inserção, encontrar onde ele deve ir). Por causa da estrutura das árvores, em cada nó pai, estamos ramificando à esquerda ou à direita e excluindo efetivamente metade do tamanho da árvore restante. Isto torna a busca proporcional ao logaritmo do número de nós na árvore, o que cria tempo logarítmico para estas operações em média. Certo, mas e no pior dos casos? Bem, considere a construção de uma árvore a partir dos seguintes valores, adicionando-os da esquerda para a direita: `10`, `12`, `17`, `25`. Seguindo nossas regras para uma árvore binária de busca, vamos adicionar `12` à direita de `10`, `17` à direita deste e `25` à direita deste. Agora, nossa árvore se parece com uma lista encadeada. Atravessá-la para encontrar `25` nos obrigaria a atravessar todos os itens de forma linear. Assim, o tempo seria linear no pior dos casos. O problema aqui é que a árvore é desbalanceada. Vamos examinar um pouco melhor o que isso significa nos próximos desafios.

# --instructions--

Neste desafio, criaremos um utilitário para a nossa árvore. Escreva um método `isPresent`, que recebe um valor inteiro como entrada e retorna um valor booleano para a presença ou ausência desse valor na árvore binária de busca.

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

A árvore binária de busca deve ter um método chamado `isPresent`.

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

O método `isPresent` deve verificar corretamente se há a presença ou a ausência de elementos adicionados à árvore.

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

`isPresent` deve tratar de casos onde a árvore está vazia.

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
