---
id: 587d8255367417b2b2512c75
title: Create a Circular Queue
challengeType: 1
forumTopicId: 301625
dashedName: create-a-circular-queue
---

# --description--

In this challenge you will be creating a Circular Queue. A circular queue is a queue that writes to the end of a collection then begins overwriting itself at the beginning of the collection. This type of data structure is useful in certain situations. For example, a circular queue can be used for streaming media. Once the queue is full, new media data will overwrite old data.

A good way to illustrate this concept is with an array of length `5`:

```js
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
```

Here the read and write are both at position `0`. Now the queue gets 3 new records `a`, `b`, and `c`. Our queue now looks like:

```js
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
```

As the read head reads, it can remove values or keep them:

```js
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
```

Now we write the values `d`, `e`, and `f` to the queue. Once the write reaches the end of the array it loops back to the beginning:

```js
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
```

This approach requires a constant amount of memory but allows files of a much larger size to be processed.

# --instructions--

In this challenge we will implement a circular queue. The circular queue should provide `enqueue` and `dequeue` methods which allow you to read from and write to the queue. The class itself should also accept an integer argument which you can use to specify the size of the queue when created. 我們已經在代碼編輯器中爲您編寫了此類的起始版本。

When you enqueue items to the queue, the write pointer should advance forward and loop back to the beginning once it reaches the end of the queue. The `enqueue` method should return the item you enqueued if it is successful; otherwise it will return `null`.

Likewise, the read pointer should advance forward as you dequeue items. When you dequeue an item, that item should be returned. If you cannot dequeue an item, you should return `null`.

The write pointer should not be allowed to move past the read pointer (our class won't let you overwrite data you haven't read yet) and the read pointer should not be able to advance past data you have written.

# --hints--

The `enqueue` method should add items to the circular queue.

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

You should not enqueue items past the read pointer.

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

The `dequeue` method should dequeue items from the queue.

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

After an item is dequeued, its position in the queue should be reset to `null`.

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

Trying to dequeue past the write pointer should return `null` and does not advance the write pointer.

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
