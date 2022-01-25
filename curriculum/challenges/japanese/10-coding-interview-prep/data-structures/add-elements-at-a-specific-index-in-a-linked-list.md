---
id: 587d8252367417b2b2512c67
title: リンクリストの特定のインデックスに要素を追加する
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

与えられたインデックスの位置に要素を追加する addAt(index,element) メソッドを作成しましょう。 与えられたインデックスの位置にある要素を削除する方法と同様に、リンクリストを走査する際に currentIndex を追跡する必要があります。 currentIndex と与えられたインデックスとが一致する場合、前のノードの next プロパティを再び割り当て、追加された新しいノードを参照する必要があります。 新しいノードは、currentIndex 内の次のノードを参照する必要があります。 コンガラインの例に戻りましょう。新しい人がラインの途中に加わりたいと考えています。 あなたは列の途中にいるので、自分の手を前の人から離します。 新しい人が歩いてきて、今まであなたが手を置いていた人に手を置きます。そしてあなたは新しい人に手を置きます。

# --instructions--

与えられたインデックスの位置に要素を追加する `addAt(index,element)` メソッドを作成してください。 要素を追加できなかった場合は false を返してください。 **注:** 与えられたインデックスが負であるか、リンクリストの長さよりも長いかを必ず調べてください。

# --hints--

与えられたインデックスが 0 の場合、`addAt` メソッドは `head` を新しいノードに再割り当てする必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'fish');
    return test.head().element === 'fish' && test.head().next.element === 'cat';
  })()
);
```

`addAt` メソッドは、リンクリストに新しいノードが追加されるたびに、リンクリストの長さを 1 ずつ増やす必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'cat');
    return test.size() === 3;
  })()
);
```

`addAt` メソッドは、ノードを追加できなかった場合に `false` を返す必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.addAt(4, 'cat') === false;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
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

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if (head === null){
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
  this.addAt = function (index, element) {
    if (index > length || index < 0) {
      return false;
    }
    var newNode = new Node(element);
    var currentNode = head;
    if (index === 0) {
      head = newNode;
    } else {
      var previousNode = null;
      var i = 0;
      while (currentNode && i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      previousNode.next = newNode;
    }
    newNode.next = currentNode;
    length++;
  }
}
```
