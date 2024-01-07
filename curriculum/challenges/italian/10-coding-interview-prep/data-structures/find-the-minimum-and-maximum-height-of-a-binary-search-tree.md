---
id: 587d8257367417b2b2512c7d
title: Trovare l'altezza minima e massima di un albero binario di ricerca
challengeType: 1
forumTopicId: 301641
dashedName: find-the-minimum-and-maximum-height-of-a-binary-search-tree
---

# --description--

Nell'ultima sfida abbiamo descritto uno scenario in cui un albero potrebbe diventare squilibrato. Per capire il concetto di equilibrio, diamo un'occhiata ad un'altra proprietà dell'albero: l'altezza. L'altezza in un albero rappresenta la distanza dal nodo radice a qualsiasi nodo foglia. Percorsi diversi in una struttura ad albero altamente ramificato possono avere altezze diverse, ma per un dato albero ci sarà un'altezza minima e una massima. Se l'albero è bilanciato, questi valori differiranno al massimo di uno. Ciò significa che in un albero bilanciato, tutti i nodi delle foglie sono allo stesso livello, o al massimo a un livello di distanza.

La proprietà dell'equilibrio è importante per gli alberi perché è ciò che determina l'efficienza delle operazioni su di essi. Come abbiamo spiegato nell'ultima sfida, per alberi fortemente squilibrati ci troviamo di fronte alla peggiore complessità temporale. Gli alberi auto-bilancianti sono comunemente utilizzati per tenere conto di questo problema in alberi con serie di dati dinamici. Esempi comuni di questi includono gli alberi AVL, gli alberi rosso-neri e gli alberi B. Tutti questi alberi contengono una logica interna aggiuntiva che riequilibra l'albero quando inserzioni o cancellazioni creano uno stato di squilibrio.

**Nota:** Una proprietà simile all'altezza è la profondità, che si riferisce a quanto un dato nodo è lontano dal nodo radice.

# --instructions--

Scrivi due metodi per il nostro albero binario: `findMinHeight` e `findMaxHeight`. Questi metodi dovrebbero restituire un valore intero per l'altezza minima e massima all'interno di un dato albero binario, rispettivamente. Se il nodo è vuoto, assegniamogli un'altezza di `-1` (questo è il caso di base). Infine, aggiungi un terzo metodo `isBalanced` che restituisce `true` o `false` a seconda che l'albero sia bilanciato o meno. È possibile utilizzare i primi due metodi che hai appena scritto per determinarlo.

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

L'albero binario di ricerca dovrebbe avere un metodo chiamato `findMinHeight`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMinHeight == 'function';
  })()
);
```

L'albero binario di ricerca dovrebbe avere un metodo chiamato `findMaxHeight`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMaxHeight == 'function';
  })()
);
```

L'albero binario di ricerca dovrebbe avere un metodo chiamato `isBalanced`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.isBalanced == 'function';
  })()
);
```

Il metodo `findMinHeight` deve restituire l'altezza minima dell'albero.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMinHeight !== 'function') {
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
    return test.findMinHeight() == 1;
  })()
);
```

Il metodo `findMaxHeight` deve restituire l'altezza massima dell'albero.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMaxHeight !== 'function') {
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
    return test.findMaxHeight() == 5;
  })()
);
```

Un albero vuoto dovrebbe restituire un'altezza di `-1`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMaxHeight !== 'function') {
      return false;
    }
    return test.findMaxHeight() == -1;
  })()
);
```

Il metodo `isBalanced` dovrebbe restituire `false` se l'albero è un albero binario di ricerca sbilanciato.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isBalanced !== 'function') {
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
    return test.isBalanced() === false;
  })()
);
```

Il metodo `isBalanced` dovrebbe restituire `true` se l'albero è un albero binario di ricerca equilibrato.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isBalanced !== 'function') {
      return false;
    }
    test.add(10);
    test.add(3);
    test.add(22);
    test.add(1);
    test.add(4);
    test.add(17);
    test.add(32);
    return test.isBalanced() === true;
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

  // Only change code above this line
  this.findMinHeight = function(root = this.root) {
    // empty tree.
    if (root === null) {
      return -1;
    }
    // leaf node.
    if (root.left === null && root.right === null) {
      return 0;
    }
    if (root.left === null) {
      return this.findMinHeight(root.right) + 1;
    }
    if (root.right === null) {
      return this.findMinHeight(root.left) + 1;
    }
    const lHeight = this.findMinHeight(root.left);
    const rHeight = this.findMinHeight(root.right);
    return Math.min(lHeight, rHeight) + 1;
  };
  this.findMaxHeight = function(root = this.root) {
    // empty tree.
    if (root === null) {
      return -1;
    }
    // leaf node.
    if (root.left === null && root.right === null) {
      return 0;
    }
    if (root.left === null) {
      return this.findMaxHeight(root.right) + 1;
    }
    if (root.right === null) {
      return this.findMaxHeight(root.left) + 1;
    }
    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    return Math.max(lHeight, rHeight) + 1;
  };
  this.isBalanced = function(root = this.root) {
    if (root === null) {
      return true;
    }

    if (root.left === null && root.right === null) {
      return true;
    }

    if (root.left === null) {
      return this.findMaxHeight(root.right) <= 0;
    }

    if (root.right === null) {
      return this.findMaxHeight(root.left) <= 0;
    }

    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    if (Math.abs(lHeight - rHeight) > 1) {
      return false;
    }
    return this.isBalanced(root.left) && this.isBalanced(root.right);
  };
}
```
