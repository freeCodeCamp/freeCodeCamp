---
id: 587d8251367417b2b2512c63
title: リンクリストから要素を削除する
challengeType: 1
forumTopicId: 301712
dashedName: remove-elements-from-a-linked-list
---

# --description--

リンクリストの実装に不可欠な重要メソッドがもう一つあります。それは `remove` メソッドです。 このメソッドは、削除したい要素を引数として取り、リストを検索して、その要素が含まれているノードを見つけて削除します。

リンクリストからノードを削除するときは、削除によってそのリストの残りを誤って孤立させることがないように常に注意を払うことが重要です。 すべてのノードの `next` プロパティが、リスト内でそれに続くノードを指すということを思い出してください。 例えば、中央の要素を取り除く場合、その要素の前のノードの `next` プロパティから、その中央の要素の `next` プロパティ (リスト内の次のノード！) への接続を確保しなければなりません。

これはかなりややこしく聞こえるかもしれないので、分かりやすい概念モデルとしてにコンガラインの例に戻りましょう。 あなたがコンガラインの中にいて、すぐ前の人がラインを離れるところを想像してください。 ラインを離れたその人はもうラインの誰にも手を置いておらず、あなたは離れた人にもう手を置いていません。 あなたは前に進み、次に見える人に手を置きます。

削除したい要素が `head` 要素である場合、リンクリストの 2 つ目のノードに `head` を割り当てます。

# --instructions--

要素を受け取り、それをリンクリストから削除する `remove` メソッドを記述してください。

**注:** リストの `length` は、リンクリストから要素が削除されるたびに 1 ずつ減少する必要があります。

# --hints--

`LinkedList` クラスに `remove` メソッドが必要です。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.remove === 'function';
  })()
);
```

`remove` メソッドは、最初のノードが削除されたときに、`head` を2 つ目のノードに再割り当てする必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.remove('cat');
    return test.head().element === 'dog';
  })()
);
```

`remove` メソッドは、ノードが 1 つ削除されるたびにリンクリストの `length` を 1 ずつ減らす必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('hamster');
    test.remove('cat');
    test.remove('fish');
    return test.size() === 2;
  })()
);
```

`remove` メソッドは、削除されたノードの前のノードの参照を、削除されたノードの `next` 参照に再割り当てする必要があります。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('snake');
    test.add('kitten');
    test.remove('snake');
    return test.head().next.next.element === 'kitten';
  })()
);
```

`remove` メソッドは、リンクリストに要素が存在しない場合にリンクリストを変更してはいけません。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.remove('elephant');
    return (
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

  this.remove = function(element){
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

  this.remove = function(element){
    if (head === null) {
      return;
    }
    var previous;
    var currentNode = head;

    while (currentNode.next !== null && currentNode.element !== element) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode.next === null && currentNode.element !== element) {
      return;
    }
    else if (previous) {
      previous.next = currentNode.next;
    } else {
      head = currentNode.next;
    }

    length--;
  };
} 
```
