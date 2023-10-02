---
id: 587d8250367417b2b2512c60
title: キュークラスを作成する
challengeType: 1
forumTopicId: 301631
dashedName: create-a-queue-class
---

# --description--

スタックと同様に、キューは要素の集まりです。 しかしスタックとは異なり、キューは FIFO (先入れ先出し) の原則に従います。 キューに追加された要素はキューのテール (末尾) にプッシュされ、取り除くことができる要素はキューの先頭にある要素だけです。

キューは配列を使用して表すことができますが、スタックと同じように、ここではキューに対する制御量を制限したいのです。

キュークラスの 2 つの主なメソッドは enqueue と dequeue です。 enqueue メソッドは要素をキューの末尾にプッシュし、dequeue メソッドはキューの先頭にある要素を削除して返します。 他の便利なメソッドとしては front、size、isEmpty があります。

# --instructions--

要素をキューの末尾にプッシュする `enqueue` メソッド、先頭の要素を削除して返す `dequeue` メソッド、先頭の要素を確認するための `front` メソッド、長さを示す `size` メソッド、および、キューが空かどうかを調べる `isEmpty` メソッドを記述してください。

# --hints--

`Queue` クラスに `enqueue` メソッドが必要です。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.enqueue === 'function';
  })()
);
```

`Queue` クラスに `dequeue` メソッドが必要です。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.dequeue === 'function';
  })()
);
```

`Queue` クラスに `front` メソッドが必要です。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.front === 'function';
  })()
);
```

`Queue` クラスに `size` メソッドが必要です。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.size === 'function';
  })()
);
```

`Queue` クラスに `isEmpty` メソッドが必要です。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.isEmpty === 'function';
  })()
);
```

`dequeue` メソッドはキューの先頭の要素を削除して返す必要があります。

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.dequeue() === 'Smith';
  })()
);
```

`front` メソッドはキューの先頭の要素の値を返す必要があります。

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.front() === 'Smith';
  })()
);
```

`size` メソッドはキューの長さを返す必要があります。

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

`isEmpty` メソッドは、キュー内に要素がある場合に `false` を返す必要があります。

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return !test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(item) {
        collection.push(item);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0 ? true : false;
    }
    // Only change code above this line
}
```
