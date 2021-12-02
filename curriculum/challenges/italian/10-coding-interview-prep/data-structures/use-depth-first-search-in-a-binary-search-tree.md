---
id: 587d8257367417b2b2512c7e
title: Usa la ricerca in profondità in un alvero di ricerca binario
challengeType: 1
forumTopicId: 301719
dashedName: use-depth-first-search-in-a-binary-search-tree
---

# --description--

Sappiamo come cercare un albero di ricerca binario per un valore specifico. Ma cosa succede se vogliamo solo esplorare l'intero albero? O cosa succede se non abbiamo un albero ordinato e dobbiamo solo cercare un valore? Qui introdurremo alcuni metodi di per traversare l'alvero che possono essere utilizzati per esplorare strutture dati ad albero. Il primo è la prima ricerca in profondità. Nella ricerca in profondità, un dato sotto-albero è esplorato il più profondamente possibile prima che la ricerca continui su un altro sotto-albero. Ci sono tre modi per farlo: In ordine: Iniziare la ricerca al nodo più a sinistra e terminare al nodo più a destra. Pre-ordine: Esplora tutte le radici prima delle foglie. Post-order: Esplora tutte le foglie prima delle radici. Come si può immaginare, è possibile scegliere diversi metodi di ricerca a seconda del tipo di dati che l'albero sta memorizzando e quello che stai cercando. Per un albero di ricerca binario, un attraversamento in ordine restituisce i nodi ordinati.

# --instructions--

Qui creeremo questi tre metodi di ricerca sul nostro albero di ricerca binario. La ricerca di profondità prima è un'operazione intrinsecamente ricorsiva che continua ad esplorare ulteriori sottalberi, a condizione che siano presenti nodi figli. Una volta che capisci questo concetto fondamentale, si può semplicemente riorganizzare l'ordine in cui si esplorano i nodi e sotto-alberi per produrre una delle tre ricerche sopra. Ad esempio, nella ricerca post-ordine vorremmo arrivare ad un nodo foglia prima di iniziare a restituire uno dei nodi stessi, mentre in pre-ordine di ricerca vorremmo restituire i nodi prima, e poi continuare a ricorsare giù l'albero. Definisci i metodi `inorder`, `preorder`e `postorder` sul nostro albero. Ognuno di questi metodi dovrebbe restituire una serie di oggetti che rappresentano il traversale ad albero. Assicurati di restituire i valori interi ad ogni nodo dell'array, non i nodi stessi. Infine, restituisci `null` se l'albero è vuoto.

# --hints--

La struttura dati `BinarySearchTree` dovrebbe esistere.

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

L'albero di ricerca binario dovrebbe avere un metodo chiamato `inorder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.inorder == 'function';
  })()
);
```

L'albero di ricerca binario dovrebbe avere un metodo chiamato `preorder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.preorder == 'function';
  })()
);
```

L'albero di ricerca binario dovrebbe avere un metodo chiamato `postorder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.postorder == 'function';
  })()
);
```

Il metodo `inorder` dovrebbe restituire un array dei valori del nodo che risultano da un traversamento inorder.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.inorder !== 'function') {
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
    return test.inorder().join('') == '012345678910';
  })()
);
```

Il metodo `preorder` dovrebbe restituire un array dei valori del nodo che risultano da un attraversamento preorder.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.preorder !== 'function') {
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
    return test.preorder().join('') == '710325469810';
  })()
);
```

Il metodo `postorder` dovrebbe restituire un array dei valori del nodo che risultano da un traversamento postordine.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.postorder !== 'function') {
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
    return test.postorder().join('') == '024653181097';
  })()
);
```

Il metodo `inorder` dovrebbe restituire `null` per un albero vuoto.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.inorder !== 'function') {
      return false;
    }
    return test.inorder() == null;
  })()
);
```

Il metodo `preorder` dovrebbe restituire `null` per un albero vuoto.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.preorder !== 'function') {
      return false;
    }
    return test.preorder() == null;
  })()
);
```

Il metodo `postorder` dovrebbe restituire `null` per un albero vuoto.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.postorder !== 'function') {
      return false;
    }
    return test.postorder() == null;
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
  this.result = [];

  this.inorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.inorder(node.left);
    this.result.push(node.value);
    if (node.right) this.inorder(node.right);
    return this.result;
  };
  this.preorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    this.result.push(node.value);
    if (node.left) this.preorder(node.left);
    if (node.right) this.preorder(node.right);
    return this.result;
  };
  this.postorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.postorder(node.left);
    if (node.right) this.postorder(node.right);
    this.result.push(node.value);

    return this.result;
  };
}
```
