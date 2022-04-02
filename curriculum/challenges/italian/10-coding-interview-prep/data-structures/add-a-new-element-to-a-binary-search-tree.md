---
id: 587d8257367417b2b2512c7b
title: Aggiungere un nuovo elemento ad un albero binario di ricerca
challengeType: 1
forumTopicId: 301618
dashedName: add-a-new-element-to-a-binary-search-tree
---

# --description--

Questa serie di sfide introdurrà la struttura di dati ad albero. Gli alberi sono una struttura dati importante e versatile nell'informatica. Naturalmente, il loro nome deriva dal fatto che quando visualizzati assomigliano molto agli alberi con cui abbiamo familiarità nel mondo naturale. Una struttura di dati ad albero inizia con un nodo, tipicamente indicato come la radice, e da qui si dirama in nodi aggiuntivi, ciascuno dei quali può avere più nodi figli, e così via. La struttura dei dati viene solitamente visualizzata con il nodo radice in alto; lo si può pensare come un albero naturale capovolto verso il basso.

In primo luogo, descriviamo un po' di terminologia comune che incontreremo con gli alberi. Il nodo radice è la parte superiore dell'albero. I punti dati dell'albero sono chiamati nodi. I nodi con rami che conducono ad altri nodi sono indicati come il genitore del nodo al quale il ramo conduce (il figlio). Altri termini familiari più complicati si applicano come ci si potrebbe aspettare. Un sottoalbero si riferisce a tutti i discendenti di un particolare nodo, dei rami possono essere denominati bordi, e i nodi foglie sono i nodi alla fine dell'albero e che non hanno figli. Infine, nota che gli alberi sono intrinsecamente strutture di dati ricorsive. Cioè, tutti i figli di un nodo sono genitori del proprio sottalbero, e così via. La natura ricorsiva degli alberi è importante da capire quando si progettano algoritmi per le operazioni comuni sugli alberi.

Per cominciare, discuteremo un particolare tipo di albero, l'albero binario. Infatti, in realtà discuteremo di un particolare albero binario, un albero binario di ricerca. Vediamo cosa significa. Mentre la struttura dei dati ad albero può avere un numero qualsiasi di rami in un unico nodo, un albero binario può avere solo due rami per ogni nodo. Inoltre, un albero binario di ricerca è ordinato rispetto ai sotto-alberi figli, in modo che il valore di ogni nodo nel sottoalbero sinistro sia inferiore o uguale al valore del nodo genitore, e il valore di ogni nodo nel sottoalbero destro sia maggiore o uguale al valore del nodo genitore. È molto utile visualizzare questa relazione per comprenderla meglio:

<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img style='width: 100%; max-width: 350px; background-color: var(--gray-05);' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>

Ora questo relazione di ordinamento è molto facile da vedere. Nota che ogni valore a sinistra di 8, il nodo radice, è inferiore a 8, e ogni valore a destra è maggiore di 8. Nota che questa relazione si applica anche a ciascuno dei sottoalberi. Per esempio, il primo figlio sinistro è un sottoalbero. 3 è il nodo padre, e ha esattamente due nodi figli — dalle regole che regolano gli alberi binari di ricerca, sappiamo senza nemmeno guardare che il figlio sinistro di questo nodo (e di tutti i suoi figli) sarà minore di 3, e il figlio destro (e qualsiasi dei suoi figli) sarà maggiore di 3 (ma anche minore del valore della radice della struttura), e così via.

Gli alberi binari di ricerca sono strutture di dati molto comuni e utili perché nel caso medio forniscono tempo logaritmico per diverse operazioni comuni come la ricerca, l'inserimento, e la cancellazione.

# --instructions--

Cominceremo con qualcosa di semplice. Qui abbiamo definito lo scheletro di una struttura ad albero binario di ricerca oltre a una funzione per creare nodi per il nostro albero. Nota che ogni nodo può avere un valore sinistro e destro. A questi saranno assegnati sotto-alberi figli, se esistono. Nel nostro albero binario di ricerca, creerai un metodo per aggiungere nuovi valori all'albero. Il metodo dovrebbe essere chiamato `add` e dovrebbe accettare un valore intero da aggiungere all'albero. Fai attenzione a mantenere invariata la struttura di un albero binario di ricerca: il valore in ogni figlio sinistro dovrebbe essere inferiore o uguale al valore genitore, e il valore in ogni figlio destro dovrebbe essere maggiore o uguale al valore genitore. Ecco, facciamo in modo che il nostro albero non possa contenere valori duplicati. Se cerchiamo di aggiungere un valore che esiste già, il metodo dovrebbe restituire `null`. Altrimenti, se l'aggiunta è riuscita, dovrebbe essere restituito `undefined`.

**Suggerimento:** gli alberi sono strutture dati ricorsive per natura!

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

L'albero binario di ricerca dovrebbe avere un metodo chiamato `add`.

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

Il metodo di aggiunta dovrebbe aggiungere elementi secondo le regole dell'albero binario di ricerca.

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

Aggiungere un elemento già esistente dovrebbe restituire `null`.

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
