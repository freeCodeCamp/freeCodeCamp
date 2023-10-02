---
id: 587d8258367417b2b2512c80
title: Eliminare un nodo foglia in un albero binario di ricerca
challengeType: 1
forumTopicId: 301637
dashedName: delete-a-leaf-node-in-a-binary-search-tree
---

# --description--

Questa è la prima di tre sfide in cui implementeremo un'operazione più difficile negli alberi di ricerca binari: la cancellazione. La cancellazione è difficile perché la rimozione dei nodi rompe i collegamenti nell'albero. Questi collegamenti devono essere ristabiliti attentamente per garantire che la struttura binaria dell'albero sia mantenuta. Per alcune cancellazioni, questo significa che l'albero deve essere riorganizzato. In generale, incontrerai uno di questi tre casi tentando di eliminare un nodo: Nodo foglia: l'obiettivo da eliminare ha zero figli. Un figlio: l'obiettivo da eliminare ha solo un figlio. Due figli: l'obiettivo da eliminare ha due nodi figli. Rimuovere un nodo foglia è facile, semplicemente lo rimuoviamo. Anche l'eliminazione di un nodo con un figlio è relativamente semplice: lo rimuoviamo e colleghiamo il suo genitore al figlio del nodo che abbiamo eliminato. La rimozione di un nodo con due figli è tuttavia più difficile, perché questo crea due nodi figli che devono essere riconnessi all'albero genitore. Vedremo come affrontare questo caso nella terza sfida. Inoltre, bisogna essere consapevoli di alcuni casi base quando si gestisce la cancellazione. Cosa succede se l'albero è vuoto? Cosa succede se il nodo da eliminare è il nodo radice? E se ci fossero solo due elementi nell'albero? Per ora, gestiamo il primo caso in cui cancelliamo un nodo foglia.

# --instructions--

Crea un metodo sul nostro albero binario denominandolo `remove`. Costruiremo qui la logica per la nostra operazione di eliminazione. In primo luogo, vorrai creare una funzione all'interno di remove che trova il nodo che stiamo cercando di eliminare nell'albero corrente. Se il nodo non è presente nell'albero, `remove` dovrà restituire `null`. Ora, se il nodo di destinazione è un nodo dfoglia senza figli, allora il riferimento del genitore ad esso dovrebbe essere impostato a `null`. Questo elimina efficacemente il nodo dall'albero. Per fare questo, dovrai tenere traccia del genitore del nodo che stiamo cercando di eliminare. Sarà anche utile creare un modo per tenere traccia del numero di figli che ha il nodo di destinazione, in quanto ciò determinerà in quale caso rientra la nostra eliminazione. Nelle prossime sfide affronteremo il secondo e il terzo caso. Buona fortuna!

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

Tentare di rimuovere un elemento da un albero vuoto dovrebbe restituire `null`.

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
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(15);
    test.add(30);
    return test.remove(100) == null;
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
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(500);
    test.remove(500);
    return test.inorder() == null;
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
