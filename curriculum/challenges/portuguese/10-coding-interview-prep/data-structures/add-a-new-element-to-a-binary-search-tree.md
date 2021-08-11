---
id: 587d8257367417b2b2512c7b
title: Adicionar um novo elemento a uma árvore binária de busca
challengeType: 1
forumTopicId: 301618
dashedName: add-a-new-element-to-a-binary-search-tree
---

# --description--

Esta série de desafios vai introduzir a estrutura de dados de árvore. As árvores são uma estrutura de dados importante e versátil na ciência da computação. É claro que o seu nome vem do fato de, quando visualizada, se assemelhar muito a uma árvore, com a qual estamos familiarizados no mundo natural. Uma estrutura de dados de árvore começa com um nó, normalmente referido como nó raiz (ou root). Deste nó surgem ramificações para os nós adicionais, cada um dos quais pode ter mais nós filhos, e assim por diante. A estrutura de dados geralmente é visualizada com o nó raiz na parte superior. Imagine-a como se fosse uma árvore natural, mas de cabeça para baixo.

Primeiro, vamos descrever a terminologia comum que encontraremos ao falar de árvores. O nó raiz é o topo da árvore. Os pontos de dados na árvore são chamados de nós. Nós com ramificações (branches) que levam a outros nós são referidos como o pai dos nós para os quais as ramificações levam (os filhos). São aplicados outros termos familiares mais complicados, como você poderia esperar. Uma subárvore se refere a todos os descendentes de um nó específico. Ramificações podem ser chamadas de ramos, e os nós folhas são nós no final da árvore que não têm filhos. Por fim, observe que as árvores são estruturas de dados inerentemente recursivas. Ou seja, os filhos de um nó são pais de sua própria subárvore, e assim por diante. É importante entender a natureza recursiva das árvores ao projetar algoritmos para operações comuns com árvores.

Para começar, vamos discutir um tipo específico de árvore, a árvore binária. De fato, discutiremos uma árvore binária específica, a árvore binária de busca. Vamos descrever o que isso significa. Enquanto a estrutura de dados de árvore pode ter qualquer número de ramificações em um único nó, em uma árvore binária só é possível ter dois ramos para cada nó. Além disso, uma árvore binária de busca é ordenada em relação às subárvores filhas para que o valor de cada nó na subárvore esquerda seja menor ou igual ao valor do nó pai, e que o valor de cada nó na subárvore direita seja maior ou igual ao valor do nó pai. É uma boa ideia visualizar este relacionamento para entender melhor:

<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img style='width: 100%; max-width: 350px; background-color: var(--gray-05);' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>

Esta relação ordenada é muito fácil de ver. Observe que todo valor à esquerda de 8, o nó raiz, é menor que 8, enquanto todo valor à direita é maior que 8. Perceba que esta relação também se aplica a cada uma das subárvores. Por exemplo, o primeiro filho da esquerda é uma subárvore. 3 é o nó pai e tem exatamente dois nós filhos — pelas regras que regem árvores de pesquisa binária, nós sabemos sem precisarmos ver que o filho à esquerda deste nó (e qualquer um de seus filhos) será menor que 3, e que o filho à direita (e qualquer um de seus filhos) será maior do que 3 (mas também menor do que o valor raiz da estrutura) e assim por diante.

Árvores de busca binárias são estruturas de dados muito comuns e úteis, pois fornecem tempo logarítmico em média para várias operações comuns como pesquisa, inserção e exclusão.

# --instructions--

Nós começaremos com algo simples. Definimos o esqueleto de uma estrutura de pesquisa binária aqui, além de uma função para criar nós para nossa árvore. Observe que cada nó pode ter um valor à esquerda e outro à direita. Serão atribuídos a eles subárvores filhas, se existirem. Você criará um método para adicionar novos valores à nossa árvore binária de busca. O método deve ser chamado de `add` e deve aceitar um valor inteiro a ser adicionado à árvore. Tome cuidado para não alterar o que não pode ser alterado em uma árvore binária de busca: o valor em cada filho à esquerda deve ser menor ou igual ao valor original, e o valor em cada filho à direita deve ser maior ou igual ao valor do pai. Aqui, vamos fazer com que nossa árvore não possa ter valores duplicados. Se tentarmos adicionar um valor que já existe, o método deve retornar `null`. Caso contrário, se a adição for bem-sucedida, deve ser retornado `undefined`.

**Dica:** árvores são estruturas de dados recursivas!

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

A árvore binária de busca deve ter um método chamado `add`.

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

O método add deve adicionar elementos de acordo com as regras da árvore binária de busca.

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

Adicionar um elemento que já existe deve retornar `null`.

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
