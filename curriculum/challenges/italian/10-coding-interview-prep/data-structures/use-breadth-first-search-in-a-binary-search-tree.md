---
id: 587d8258367417b2b2512c7f
title: Una la ricerca in ampiezza nella ricerca binaria in un albero
challengeType: 1
forumTopicId: 301718
dashedName: use-breadth-first-search-in-a-binary-search-tree
---

# --description--

Qui introdurremo un altro metodo traversale di albero: la ricerca in ampiezza. In contrasto con il metodo di ricerca in profondità dell'ultima sfida, La ricerca in ampiezza esplora tutti i nodi in un dato livello all'interno di un albero prima di continuare al livello successivo. Tipicamente, le code sono utilizzate come strutture di dati helper nella progettazione di algoritmi di ricerca in ampiezza.

In questo metodo, iniziamo aggiungendo il nodo radice alla coda. Poi iniziamo un ciclo in cui decodiamo il primo elemento nella coda, aggiungerlo a un nuovo array, e quindi ispezionare entrambi i suoi sottalberi. Se i suoi figli non sono nulli, sono ciascuno messo in coda. Questo processo continua fino a quando la coda non è vuota.

# --instructions--

Creiamo un metodo di ricerca in ampiezza nel nostro albero chiamato `levelOrder`. Questo metodo dovrebbe restituire un array contenente i valori di tutti i nodi degli alberi, esplorati con la ricerca in ampiezza. Assicurati di restituire i valori nell'array, non i nodi stessi. Un livello dovrebbe essere attraversato da sinistra a destra. Poi scriviamo un metodo simile chiamato `reverseLevelOrder` che esegue la stessa ricerca ma nella direzione inversa (da destra a sinistra) ad ogni livello.

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

L'albero di ricerca binario dovrebbe avere un metodo chiamato `levelOrder`.

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

L'albero di ricerca binario dovrebbe avere un metodo chiamato `reverseLevelOrder`.

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

Il metodo `levelOrder` dovrebbe restituire un array dei valori del nodo albero esplorati in ordine di livello.

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

Il metodo `reverseLevelOrder` dovrebbe restituire un array dei valori del nodo albero esplorati in ordine di livello inverso.

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

Il metodo `levelOrder` dovrebbe restituire `null` per un albero vuoto.

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

Il metodo `reverseLevelOrder` dovrebbe restituire `null` per un albero vuoto.

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
