---
id: 587d8251367417b2b2512c65
title: インデックスによってリンクリストから要素を削除する
challengeType: 1
forumTopicId: 301711
dashedName: remove-elements-from-a-linked-list-by-index
---

# --description--

別のデータ構造の話に移る前に、リンクリストを使って最後の練習をいくつか行いましょう。

与えられた `index` に位置している `element` を削除する `removeAt` メソッドを書きましょう。 メソッドは `removeAt(index)` と呼ばれる必要があります。 特定の `index` にある `element` を削除するには、リンクリストに沿って移動しながら各ノードの実行数を数え続ける必要があります。

リンクリストの要素に対して操作を繰り返すための一般的なテクニックは、比較対象ノードを「指し示す」ための <dfn>'runner'</dfn>、すなわち番兵を使用することです。 今回のケースでは、リストの `head` が出発点です。`0` で始まる `currentIndex` 変数で操作を開始します。 `currentIndex` は、ノードが 1 つ渡されるたびに 1 ずつ増加する必要があります。

<a href="/japanese/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list" target="_blank" rel="noopener noreferrer nofollow">以前のレッスン</a>で取り上げた `remove(element)` メソッドと同じように、`removeAt(index)` メソッドでノードを削除する際には、リストの残りの部分が孤立しないように注意する必要があります。 削除されたノードへの参照を持つノードに、次のノードへの参照を必ず持たせることにより、ノードの連続性を保ちます。

# --instructions--

与えられた `index` に位置しているノードを削除して返す、`removeAt(index)` メソッドを記述してください。 与えられた `index` が負の数であるか、リンクリストの `length` 以上である場合、このメソッドは `null` を返す必要があります。

**注:** `currentIndex` を数え続けることを忘れないでください。

# --hints--

`LinkedList` クラスに `removeAt` メソッドが必要です。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.removeAt === 'function';
  })()
);
```

`removeAt` メソッドは、リンクリストの `length` を 1 減らす必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.removeAt(1);
    return test.size() === 2;
  })()
);
```

`removeAt` メソッドは、指定されたインデックスにある要素をリンクリストから削除する必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.add('bird');
    test.removeAt(1);
    return (
      JSON.stringify(test.head()) ===
      '{"element":"cat","next":{"element":"kitten","next":{"element":"bird","next":null}}}'
    );
  })()
);
```

リンクリストに要素が 1 つしかない場合、`removeAt` メソッドは、指定されたインデックスにある要素を削除して返し、リンクリストの長さを減らす必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    var removedItem = test.removeAt(0);
    return test.head() === null && test.size() === 0 && removedItem === 'cat';
  })()
);
```

`removeAt` メソッドは、削除されたノードの要素を返す必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.removeAt(1) === 'dog';
  })()
);
```

与えられたインデックスが `0` より小さい場合、`removeAt` メソッドは `null` を返す必要があり、リンクリストを変更してはいけません。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    var removedItem = test.removeAt(-1);
    return (
      removedItem === null &&
      JSON.stringify(test.head()) ===
        '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'
    );
  })()
);
```

与えられたインデックスがリストの `length` 以上である場合、`removeAt` メソッドは `null` を返す必要があり、リンクリストを変更してはいけません。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    var removedItem = test.removeAt(3);
    return (
      removedItem === null &&
      JSON.stringify(test.head()) ===
        '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'
    );
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

  this.size = function(){
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

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.removeAt = function (index) {
    var currentNode = head;
    var previous = head;
    var count = 0;
    if (index >= length || index < 0) {
      return null;
    }
    if (index === 0) {
      var removed = head.element;
      head = currentNode.next;
    } else {
      while (count < index) {
        previous = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      var removed = previous.next.element;
      previous.next = currentNode.next;
    }
    length--;
    return removed;
  };
}
```
