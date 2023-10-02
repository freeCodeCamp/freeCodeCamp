---
id: 587d8251367417b2b2512c64
title: リンクリスト内で検索する
challengeType: 1
forumTopicId: 301715
dashedName: search-within-a-linked-list
---

# --description--

作成したリンクリストクラスに、便利なメソッドをもう少し追加しましょう。 `Stack` クラスや `Queue` クラスと同じように、リストが空かどうかを知ることができたら便利ではありませんか？

リンクリスト内の特定の要素を見つけることもできるはずです。 データ構造の走査はたくさん練習しなければなりません！ `element` を引数として取り、リンクリスト内におけるその要素の `index` を返す、`indexOf` メソッドを作成しましょう。 リンクリスト内にその要素が見つからない場合は、`-1` を返してください。

また、逆のことをする `elementAt` メソッドも実装しましょう。このメソッドは `index` を引数として取り、与えられた `index` にある `element` を返します。 `element` が見つからない場合は `undefined` を返します。

# --instructions--

Write an `isEmpty` method that checks if the linked list is empty, an `indexOf` method that returns the `index` of a given element, and an `elementAt` that returns an `element` at a given `index`.

# --hints--

`LinkedList` クラスに `isEmpty` メソッドが必要です。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.isEmpty === 'function';
  })()
);
```

リンクリストに 1 つ以上の要素がある場合、`isEmpty` メソッドは `false` を返す必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.isEmpty() === false;
  })()
);
```

リンクリストに要素がない場合、`isEmpty` メソッドは `true` を返す必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    return test.isEmpty() === true;
  })()
);
```

`LinkedList` クラスに `indexOf` メソッドが必要です。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

`indexOf` メソッドは、リンクリスト内で見つかった、与えられた要素のインデックスを返す必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('cat') === 0;
  })()
);
```

与えられた要素がリンクリスト内に見つからない場合、`indexOf` メソッドは `-1` を返す必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('pony') === -1;
  })()
);
```

`LinkedList` クラスに `elementAt` メソッドが必要です。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

`elementAt` メソッドは、リンクリスト内の与えられたインデックスで見つかった要素を返す必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(1) === 'dog';
  })()
);
```

`elementAt` メソッドは、リンクリスト内の与えられたインデックスに、与えられた要素が見つからない場合、`undefined` を返す必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(5) === undefined;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  this.indexOf = function(element) {
    if (head === null) return -1

    let current = head;
    let index = 0;

    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++
    }

    if (current.element !== element && current.next === null) {
      return -1
    }

    return index;
  }

  this.elementAt = function(index) {
    if (head === null) return undefined;

    let current = head;
    let currentIndex = 0;

    while (currentIndex !== index && current.next !== null) {
      current = current.next;
      currentIndex++
    }

    if (currentIndex !== index && current.next === null) {
      return undefined;
    }

    return current.element;
  }

  this.isEmpty = function() {
    return length === 0;
  }
}
```
