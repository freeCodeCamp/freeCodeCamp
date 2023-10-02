---
id: 587d8258367417b2b2512c82
title: Exclua um nó com dois filhos em uma árvore binária de busca
challengeType: 1
forumTopicId: 301639
dashedName: delete-a-node-with-two-children-in-a-binary-search-tree
---

# --description--

Remover nós que têm dois filhos é o caso mais difícil de implementar. Remover um nó como este produz duas subárvores que não estão mais conectadas à estrutura original da árvore. Como podemos reconectá-las? Um método é encontrar o menor valor na subárvore à direita do nó de destino e substituir o nó de destino por este valor. Selecionar a substituição desta forma garante que ela é maior do que cada nó na subárvore à esquerda da qual ela se torna o novo pai, mas também menor do que qualquer nó na subárvore à direita da qual ela se torna o novo pai. Uma vez que esta substituição é feita, o nó de substituição deve ser removido da subárvore à direita. Até mesmo esta operação é complicada, porque a substituição pode ser uma folha ou pode ser ela mesma o pai de uma subárvore à direita. Se se trata de uma folha, temos de retirar a referência de seu pai a ela. Caso contrário, ela deverá ser o filho à direita do destino. Neste caso, temos de substituir o valor de destino pelo valor de substituição e fazer com que o destino referencie o filho à direita.

# --instructions--

Vamos terminar nosso método `remove` tratando do terceiro caso. Já fornecemos um pouco de código novamente para os dois primeiros casos. Adicione um código agora para lidar com nós de destino com dois filhos. Há algum caso extremo em que devemos prestar atenção? E se a árvore tiver apenas três nós? Depois de ter terminado, isso vai completar nossa operação de exclusão para as árvores binárias de busca. Bom trabalho! Esse é um problema muito difícil!

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
    return typeof test.remove == 'function' ? test.remove(100) == null : false;
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
    test.add(500);
    test.remove(500);
    return typeof test.remove == 'function' ? test.inorder() == null : false;
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
    test.add(5);
    test.add(3);
    test.add(7);
    test.add(6);
    test.add(10);
    test.add(12);
    test.remove(3);
    test.remove(12);
    test.remove(10);
    return typeof test.remove == 'function'
      ? test.inorder().join('') == '567'
      : false;
  })()
);
```

O método `remove` deve remover os nós com um filho.

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
    test.add(-1);
    test.add(3);
    test.add(7);
    test.add(16);
    test.remove(16);
    test.remove(7);
    test.remove(3);
    return test.inorder().join('') == '-1';
  })()
);
```

Remover a raiz de uma árvore com dois nós deve definir o segundo nó como a raiz.

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
    test.add(27);
    test.remove(15);
    return test.inorder().join('') == '27';
  })()
);
```

O método `remove` deve remover nós com dois filhos, mantendo a estrutura da árvore binária de busca.

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
    test.add(1);
    test.add(4);
    test.add(3);
    test.add(7);
    test.add(9);
    test.add(11);
    test.add(14);
    test.add(15);
    test.add(19);
    test.add(50);
    test.remove(9);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(11);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(14);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(19);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(3);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(50);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(15);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    return test.inorder().join('') == '147';
  })()
);
```

A raiz deve ser removível em uma árvore de três nós.

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
    test.add(100);
    test.add(50);
    test.add(300);
    test.remove(100);
    return test.inorder().join('') == 50300;
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
    },
    isBinarySearchTree() {
      if (this.root == null) {
        return null;
      } else {
        var check = true;
        function checkTree(node) {
          if (node.left != null) {
            var left = node.left;
            if (left.value > node.value) {
              check = false;
            } else {
              checkTree(left);
            }
          }
          if (node.right != null) {
            var right = node.right;
            if (right.value < node.value) {
              check = false;
            } else {
              checkTree(right);
            }
          }
        }
        checkTree(this.root);
        return check;
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
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // Find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }.bind(this)());
    if (target === null) {
      return null;
    }
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // Case 1: Target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // Case 2: Target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // Case 3: Target has two children
    // Only change code below this line
  };
}
```

# --solutions--

```js
// solution required
```
