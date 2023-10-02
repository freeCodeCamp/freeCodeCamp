---
id: 587d8258367417b2b2512c82
title: Eliminare un nodo con due figli in un albero binario di ricerca
challengeType: 1
forumTopicId: 301639
dashedName: delete-a-node-with-two-children-in-a-binary-search-tree
---

# --description--

Rimuovere i nodi che hanno due figli è il caso più difficile da implementare. Rimuovere un nodo come questo produce due sotto-alberi che non sono più collegati alla struttura originale dell'albero. Come possiamo ricollegarli? Un metodo è quello di trovare il valore più piccolo nel sottoalbero destro del nodo obiettivo e sostituire il nodo obiettivo con questo valore. Selezionare il rimpiazzo in questo modo assicura che sia maggiore di ogni nodo nel sottoalbero sinistro di cui diventa il nuovo genitore ma anche minore di ogni nodo nel sottoalbero destro di cui diventa il nuovo genitore. Una volta effettuata la sostituzione, il nodo di rimpiazzo deve essere rimosso dal sotto-albero destro. Anche questa operazione è difficile perché il rimpiazzo può essere una foglia o può essere di per sé il genitore di un sottoalbero destro. Se si tratta di una foglia dobbiamo eliminare il riferimento nel suo genitore. In caso contrario, deve essere il figlio destro del nodo obiettivo. In questo caso, dobbiamo sostituire il valore obiettivo con il valore di sostituzione e far sì che il riferimento dell'obiettivo punti al figlio destro del sostituto.

# --instructions--

Finiamo il nostro metodo `remove` gestendo il terzo caso. Abbiamo fornito di nuovo del codice per i primi due casi. Aggiungi adesso un po' di codice per gestire i nodi obiettivo con due figli. Eventuali casi limite di cui essere a conoscenza? E se l'albero avesse solo tre nodi? Una volta finito, questo completerà la nostra operazione di cancellazione per gli alberi di ricerca binari. Bel lavoro, questo è un problema piuttosto difficile!

# --hints--

La struttura di dati `BinarySearchTree` dovrebbe esistere.

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

L'albero binario di ricerca dovrebbe avere un metodo chiamato `remove`.

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

Tentare di rimuovere un elemento che non esiste dovrebbe restituire `null`.

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

Se il nodo radice non ha figli, l'eliminazione dovrebbe impostare la radice a `null`.

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

Il metodo `remove` dovrebbe rimuovere i nodi foglia dall'albero.

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

Il metodo `remove` dovrebbe rimuovere i nodi con un figlio.

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

Rimuovere la radice in un albero con due nodi dovrebbe impostare il secondo come radice.

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

Il metodo `remove` dovrebbe rimuovere i nodi con due figli mantenendo la struttura dell'albero binario di ricerca.

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

La radice dovrebbe essere rimovibile su un albero di tre nodi.

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
