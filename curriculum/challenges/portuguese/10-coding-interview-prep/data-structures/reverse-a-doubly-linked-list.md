---
id: 587d825a367417b2b2512c88
title: Inverter uma lista duplamente encadeada
challengeType: 1
forumTopicId: 301714
dashedName: reverse-a-doubly-linked-list
---

# --description--

Vamos criar mais um método para a nossa lista duplamente encadeada, chamado reverse, que inverterá a lista atual. Quando o método for executado, a head (início da lista) deve apontar para a tail (fim da lista) anterior e a tail deve apontar para a head anterior. Agora, se percorrermos a lista da head para a tail, devemos encontrar os nós em uma ordem inversa em comparação com a lista original. Tentar reverter uma lista vazia deve retornar null.

# --hints--

A estrutura de dados `DoublyLinkedList` deve existir.

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

`DoublyLinkedList` deve ter um método chamado `reverse`.

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

Inverter uma lista vazia deve retornar `null`.

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

O método `reverse` deverá inverter a lista.

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

As referências `next` e `previous` devem ser mantidas corretamente quando a lista é revertida.

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
