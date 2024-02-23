---
id: 587d8251367417b2b2512c62
title: リンクリスト・クラスを作成する
challengeType: 1
forumTopicId: 301628
dashedName: create-a-linked-list-class
---

# --description--

`linked list` (リンクリスト) クラスを作成しましょう。 どのリンクリストでも、まずは基本プロパティ、すなわち `head` (リストの最初の要素) と `length` (リストの要素数) を定義する必要があります。 リストの最後の要素に `tail` を組み込んだリンクリストの実装も時々見かけますが、今はこの 2 つだけを使いましょう。 リンクリストに要素を追加するたびに、`length` プロパティが 1 ずつ増分される必要があります。

リンクリストに要素を追加する方法が必要なので、最初に作成したいのは `add` メソッドです。

リストが空の場合、リンクリストに要素を追加するのは簡単です。その要素を `Node` クラスにラップし、そのノードをリンクリストの `head` に割り当てるだけです。

しかし、このリストに既に 1 つ以上のメンバーがある場合はどうなるでしょう？ どうすればリストに要素を追加できるでしょうか？ リンクリストの各ノードに `next` プロパティがあることを思い出してください。 リストにノードを追加するには、リスト内の最後のノードを探し、最後のノードの `next` プロパティが新しいノードを指すようにします。 (ヒント: ノードの `next` プロパティが `null` のとき、リンクリストの末尾に到達したことが分かります。)

# --instructions--

リンクリストにプッシュした最初のノードを `head` に割り当てる add メソッドを記述してください。割り当ての後、ノードを追加するたびに、そのノードは前のノードの `next` プロパティによって参照される必要があります。

注

リストの `length` は、リンクリストに要素が追加されるたびに 1 ずつ増加する必要があります。

# --hints--

`LinkedList` クラスに `add` メソッドが必要です。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.add === 'function';
  })()
);
```

`LinkedList` クラスは、追加された最初のノードに `head` を割り当てる必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    return test.head().element === 'cat';
  })()
);
```

`LinkedList` クラスの以前の `node` は、作成された最新ノードへの参照を持つ必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('fish');
    return test.head().next.element === 'dog' && test.head().next.next.element === 'fish';
  })()
);
```

`LinkedList` クラスの `size` は、リンクリスト内のノードの数と同じである必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.size() === 2;
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line

    // Only change code above this line
  };
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    if (head == null) {
      head = new Node(element);
    } 
    else {
      let currentNode = head;
      while (currentNode.next != null) {
        // currentNode.next will be last node of linked list after loop
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    length++;
    // Only change code above this line
  };
}
```
