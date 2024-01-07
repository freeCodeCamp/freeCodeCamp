---
id: 587d825a367417b2b2512c87
title: Creare una lista doppiamente concatenata
challengeType: 1
forumTopicId: 301626
dashedName: create-a-doubly-linked-list
---

# --description--

Tutte le liste concatenate che abbiamo creato finora sono liste semplicemente concatenate. Qui, creeremo una lista <dfn>doppiamente concatenata</dfn>. Come suggerisce il nome, i nodi in una lista doppiamente concatenata hanno dei riferimenti ai nodi successivo e precedente nella lista.

Questo ci permette di attraversare la lista in entrambe le direzioni, ma richiede anche più memoria perché ogni nodo deve contenere un riferimento aggiuntivo al nodo precedente nella lista.

# --instructions--

Abbiamo fornito un oggetto `Node` e abbiamo avviato il nostro `DoublyLinkedList`. Aggiungiamo due metodi alla nostra lista doppiamente concatenata chiamati `add` e `remove`. Il metodo `add` dovrebbe aggiungere l'elemento dato alla lista mentre il metodo `remove` dovrebbe rimuovere tutte le occorrenze di un dato elemento nella lista.

Fai attenzione a gestire eventuali casi limite durante la scrittura di questi metodi, come le cancellazioni per il primo o l'ultimo elemento. Inoltre, la rimozione di qualsiasi elemento in una lista vuota dovrebbe restituire `null`.

# --hints--

La struttura dei dati `DoublyLinkedList` dovrebbe esistere.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return typeof test == 'object';
  })()
);
```

Il `DoublyLinkedList` dovrebbe avere un metodo denominato `add`.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.add == undefined) {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

Il `DoublyLinkedList` dovrebbe avere un metodo denominato `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.remove == undefined) {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

Inoltre, la rimozione di qualsiasi elemento da una lista vuota dovrebbe restituire `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return test.remove(100) == null;
  })()
);
```

Il metodo `add` dovrebbe aggiungere elementi alla lista.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(5);
    test.add(6);
    test.add(723);
    return test.print().join('') == '56723';
  })()
);
```

Ogni nodo dovrebbe tenere traccia del nodo precedente.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(50);
    test.add(68);
    test.add(73);
    return test.printReverse().join('') == '736850';
  })()
);
```

Il primo elemento dovrebbe essere rimovibile dall'elenco.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(25);
    test.add(35);
    test.add(60);
    test.remove(25);
    return test.print().join('') == '3560';
  })()
);
```

L'ultimo elemento dovrebbe essere rimovibile dall'elenco.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(25);
    test.add(35);
    test.add(60);
    test.remove(60);
    return test.print().join('') == '2535';
  })()
);
```

# --seed--

## --after-user-code--

```js
DoublyLinkedList.prototype = Object.assign(
  DoublyLinkedList.prototype,
  {

  print() {
    if (this.head == null) {
      return null;
    } else {
      var result = new Array();
      var node = this.head;
      while (node.next != null) {
        result.push(node.data);
        node = node.next;
      };
      result.push(node.data);
      return result;
    };
  },
  printReverse() {
    if (this.tail == null) {
      return null;
    } else {
      var result = new Array();
      var node = this.tail;
      while (node.prev != null) {
        result.push(node.data);
        node = node.prev;
      };
      result.push(node.data);
      return result;
    };
  }
});
```

## --seed-contents--

```js
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
