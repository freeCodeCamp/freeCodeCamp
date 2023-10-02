---
id: 587d8255367417b2b2512c74
title: 優先度付きキュークラスを作成する
challengeType: 1
forumTopicId: 301630
dashedName: create-a-priority-queue-class
---

# --description--

このチャレンジでは、優先度付きキューを作成します。 優先度付きキューとは、要素の優先度を指定する追加情報をその要素が持てるという、特殊なタイプのキューです。 優先度は単純に整数で表すことができます。 ある数列要素がキューから取り出されるかどうかの決定は、その要素の位置よりも優先度に基づきます。 優先度の高い要素が優先度の低い要素の後にキューに追加されると、優先度の高い要素は他のすべての要素よりも先にキューから取り出されます。

例えば、3 つの要素を持つ優先度付きキューがあるとします。

```js
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

ここでは、2 番目の値 (整数) が要素の優先度を表します。 優先度が `1` の `['human', 1]` をキューに入れると (優先度の数値が小さいほど優先されると仮定)、その要素はキューから最初に取り出されます。 コレクションは次のようになります。

```js
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

コードエディタ内に `PriorityQueue` の最初の部分が記述されています。 優先度を付けて要素を追加する `enqueue` メソッド、要素を削除して返す `dequeue` メソッド、キューの要素数を返す `size` メソッド、キューの先頭にある要素を返す `front` メソッド、そして最後に、キューが空の場合は `true`、空でない場合は `false` を返す `isEmpty` メソッドを追加してください。

`enqueue` は、上記のフォーマット (`['human', 1]`) の要素を受け入れる必要があります。ここで、`1` は優先度を表します。 `dequeue` と `front` は、その要素の優先度ではなく名前のみを返す必要があります。

# --hints--

`PriorityQueue` クラスに `enqueue` メソッドが必要です。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

`PriorityQueue` クラスに `dequeue` メソッドが必要です。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

`PriorityQueue` クラスに `size` メソッドが必要です。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

`PriorityQueue` クラスに `front` メソッドが必要です。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.front === 'function';
  })()
);
```

`PriorityQueue` クラスに `isEmpty` メソッドが必要です。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

`PriorityQueue` クラスは、要素がキューから出し入れされる際、 `size` メソッドを使用して現在の要素数を正しく追跡する必要があります。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    test.enqueue(['Jon Snow', 1]);
    var size1 = test.size();
    test.dequeue();
    var size2 = test.size();
    test.enqueue(['A', 3]);
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    return size1 === 2 && size2 === 1 && test.size() === 4;
  })()
);
```

`front` メソッドは、要素がキューから出し入れされる際、キューの先頭にある正しい要素を返す必要があります。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    var front1 = test.front();
    test.enqueue(['Jon Snow', 1]);
    var front2 = test.front();
    test.dequeue();
    test.enqueue(['A', 3]);
    var front3 = test.front();
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    test.dequeue();
    var front4 = test.front();
    return (
      front1 === 'David Brown' &&
      front2 === 'Jon Snow' &&
      front3 === 'David Brown' &&
      front4 === 'A'
    );
  })()
);
```

`isEmpty` メソッドは、キューが空の場合に `true` を返す必要があります。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 1]);
    test.enqueue(['B', 1]);
    test.dequeue();
    var first = test.isEmpty();
    test.dequeue();
    return !first && test.isEmpty();
  })()
);
```

優先度付きキューは、優先度の低い要素よりも先に優先度の高い要素を返し、そうしない場合は先入れ先出しの順序で返す必要があります。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 5]);
    test.enqueue(['B', 5]);
    test.enqueue(['C', 5]);
    test.enqueue(['D', 3]);
    test.enqueue(['E', 1]);
    test.enqueue(['F', 7]);
    var result = [];
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    return result.join('') === 'EDABCF';
  })()
);
```

# --seed--

## --seed-contents--

```js
function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (newitem) {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  // Only change code above this line
}
```
