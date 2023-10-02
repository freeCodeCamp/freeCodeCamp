---
id: 587d8255367417b2b2512c75
title: 循環キューを作成する
challengeType: 1
forumTopicId: 301625
dashedName: create-a-circular-queue
---

# --description--

このチャレンジでは、循環キューを作成します。 循環キューとは、コレクションの末尾にデータを書き込んだ後にコレクションの先頭から上書きを始めるキューです。 このタイプのデータ構造は、特定の状況で便利です。 例えば、ストリーミングメディアに循環キューを使用できます。 キューがいっぱいになると、新しいメディアデータが古いデータを上書きします。

この概念を分かりやすく説明するために、次のような、長さが `5` の配列を使います。

```js
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
```

今、読み取りと書き込みの両方が位置 `0` にあります。 ここでキューは `a`、`b`、`c` という 3 つの新しいレコードを取得します。 キューは次のようになりました。

```js
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
```

読み取りヘッドは、値を読み取るときに、次のように値を削除したり保持したりできます。

```js
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
```

次に、値 `d`、`e`、`f` をキューに書き込みましょう。 書き込みが配列の末尾に達すると、先頭に戻って書き込みが行われます。

```js
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
```

このアプローチは一定量のメモリを必要としますが、他のアプローチと比べ、はるかに大きなサイズのファイルを処理できます。

# --instructions--

このチャレンジでは、循環キューを実装してください。 循環キューには、キューからの読み取りとキューへの書き込みを可能にする `enqueue` メソッドと `dequeue` メソッドが必要です。 キューの作成時にそのサイズ指定に使用できる整数引数を、クラス自体が受け入れる必要があります。 このクラスの最初のバージョンが、コードエディタ内に既に用意されています。

要素をキューに入れると、書き込みポインタは前に進み、キューの末尾に達したら先頭に戻ります。 `enqueue` メソッドは、成功した場合、キューに追加された要素を返す必要があります。それ以外の場合は、`null` を返します。

同様に、要素をキューから取り除くと読み取りポインタが前進する必要があります。 要素をキューから取り除く際は、その要素を返す必要があります。 要素をキューから取り除けない場合は、`null` を返す必要があります。

書き込みポインタが読み取りポインタを追い越せないようにする必要があります (このクラスは、まだ読み取っていないデータを上書きすることはできません)。また、読み取りポインタは、書き込まれた過去のデータを前進させることはできません。

# --hints--

`enqueue` メソッドは、循環キューに要素を追加する必要があります。

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

読み取りポインタを追い越して要素をキューに入れてはいけません。

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    test.enqueue(13);
    test.enqueue(25);
    test.enqueue(59);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

`dequeue` メソッドは、キューから要素を取り除く必要があります。

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591
    );
  })()
);
```

要素がキューから取り除かれた後、キュー内におけるその要素の位置が `null` にリセットされる必要があります。

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(672);
    test.dequeue();
    test.dequeue();
    var print = test.print();
    return print[0] === null && print[1] === null && print[2] === 672;
  })()
);
```

書き込みポインタを越えてキューから取り除こうとすると `null` が返される必要があります。この場合、書き込みポインタは前進しません。

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 &&
      test.dequeue() === 32 &&
      test.dequeue() === 591 &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.enqueue(100) === 100 &&
      test.dequeue() === 100
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line

    // Only change code above this line
  }
}
```

# --solutions--

```js
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    console.log(this.write, this.max);
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) {
        this.write = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) {
        this.read = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }
}
```
