---
id: 587d825a367417b2b2512c88
title: Invertire una lista a doppio collegamento
challengeType: 1
forumTopicId: 301714
dashedName: reverse-a-doubly-linked-list
---

# --description--

Creiamo un metodo in più per la nostra lista a doppio collegamento, chiamato reverse, che inverte la lista "in place" (NdT: cioè lavorando sulla lista stessa, senza crearne una copia). Una volta eseguito il metodo la testa dovrebbe puntare alla vecchia coda e la coda dovrebbe puntare alla vecchia testa. Ora, se attraversiamo la lista dalla testa alla coda dovremmo incontrare i nodi in ordine inverso rispetto alla lista originale. Tentare di invertire una lista vuota dovrebbe restituire null.

# --hints--

La struttura di dati DoublyLinkedList dovrebbe esistere.

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

`DoublyLinkedList` dovrebbe avere un metodo chiamato `reverse`.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.reverse == undefined) {
      return false;
    }
    return typeof test.reverse == 'function';
  })()
);
```

Invertire una lista vuota dovrebbe restituire `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return test.reverse() == null;
  })()
);
```

Il metodo `reverse` dovrebbe invertire la lista.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(58);
    test.add(61);
    test.add(32);
    test.add(95);
    test.add(41);
    test.reverse();
    return test.print().join('') == '4195326158';
  })()
);
```

I riferimenti `next` e `previous` dovrebbero essere mantenuti correttamente quando la lista è invertita.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(11);
    test.add(22);
    test.add(33);
    test.add(44);
    test.add(55);
    test.reverse();
    return test.printReverse().join('') == '1122334455';
  })()
);
```

# --seed--

## --after-user-code--

```js
DoublyLinkedList.prototype = Object.assign(
  DoublyLinkedList.prototype,
  {
    add(data) {
      if (this.head == null) {
        this.head = new Node(data, null);
        this.tail = this.head;
      } else {
        var node = this.head;
        var prev = null;
        while (node.next != null) {
          prev = node;
          node = node.next;
        };
        var newNode = new Node(data, node);
        node.next = newNode;
        this.tail = newNode;
      };
    },
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
  }
);
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
  var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;

    this.reverse = function() {
      if (!this.head || !this.head.next) {
        return this.head
      }

      let tail;
      let temp;
      let current = this.head;
      while(current !== null) {
        if(!tail) tail = current;
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }

      this.head = temp.prev;
      this.tail = tail
    }
  };
```
