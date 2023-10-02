---
id: 587d825a367417b2b2512c87
title: 二重リンクリストを作成する
challengeType: 1
forumTopicId: 301626
dashedName: create-a-doubly-linked-list
---

# --description--

これまでに作成したリンクリストは、すべて単独でリンクされたリストです。 ここでは<dfn>二重リンクリスト</dfn>を作成します。 名前が示すように、二重リンクリスト内のノードは、リスト内の次ノードと前ノードへの参照を持っています。

これにより両方向でリストを走査することができますが、すべてのノードにリスト内の前ノードへの参照を追加する必要があるため、より多くのメモリを使用することになります。

# --instructions--

`Node` オブジェクトが用意され、`DoublyLinkedList` の最初の部分が書いてあります。 二重リンクリストに、`add`、`remove` と呼ばれる 2 つのメソッドを追加しましょう。 `add` メソッドは与えられた要素をリストに追加する必要があります。`remove` メソッドは、与えられた要素をリストからすべて削除する必要があります。

これらのメソッドを記述する際は、先頭または末尾の要素の削除など、起こり得るエッジケースを慎重に処理してください。 また、空のリスト上で要素を削除すると、`null` が返される必要があります。

# --hints--

The `DoublyLinkedList` data structure should exist.

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

The `DoublyLinkedList` should have a method called `add`.

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

The `DoublyLinkedList` should have a method called `remove`.

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

Removing an item from an empty list should return `null`.

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

The `add` method should add items to the list.

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

各ノードは前のノードを追跡する必要があります。

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

先頭の要素はリストから削除可能である必要があります。

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

末尾の要素はリストから削除可能である必要があります。

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
