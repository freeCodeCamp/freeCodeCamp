---
id: 587d8257367417b2b2512c7c
title: Controllare se un elemento è presente in un albero binario di ricerca
challengeType: 1
forumTopicId: 301623
dashedName: check-if-an-element-is-present-in-a-binary-search-tree
---

# --description--

Ora che abbiamo un senso generale di cosa è un albero binario di ricerca, parliamo di esso in maggiore dettaglio. Gli alberi binari di ricerca richiedono un tempo logaritmico per le operazioni comuni di ricerca, inserimento, e cancellazione nel caso medio, e tempo lineare nel caso peggiore. Perché? Ognuna di queste operazioni di base ci richiede di trovare un elemento nell'albero (o nel caso di inserimento per trovare dove dovrebbe andare) e a causa della struttura ad albero ad ogni nodo genitore ci dirigiamo o a sinistra o a destra escludendo efficacemente metà della dimensione dell'albero rimanente. Questo rende la ricerca proporzionale al logaritmo del numero di nodi nell'albero, che nel caso medio dà un tempo logaritmico per queste operazioni. Ok, ma nel caso peggiore? Bene, immagina di costruire un albero con i seguenti valori, aggiungendoli da sinistra a destra: `10`, `12`, `17`, `25`. Seguendo le nostre regole per un albero di ricerca binario, aggiungeremo `12` alla destra di `10`, `17` a destra di questo, e `25` a destra di questo. Ora il nostro albero assomiglia a una lista collegata e attraversarlo per trovare `25` ci richiederebbe di attraversare tutti gli oggetti in modo lineare. Quindi, tempo lineare nel caso peggiore. Il problema qui è che l'albero non è bilanciato. Esamineremo un po' di più il significato di questo nelle seguenti sfide.

# --instructions--

In questa sfida, creeremo un'utilità per il nostro albero. Scrivi un metodo `isPresent` che prende un valore intero come input e restituisce un valore booleano per la presenza o l'assenza di quel valore nell'albero binario di ricerca.

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

L'albero binario di ricerca dovrebbe avere un metodo chiamato `isPresent`.

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

Il metodo `isPresent` dovrebbe controllare correttamente la presenza o l'assenza di elementi aggiunti all'albero.

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

`isPresent` dovrebbe gestire i casi in cui l'albero è vuoto.

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
