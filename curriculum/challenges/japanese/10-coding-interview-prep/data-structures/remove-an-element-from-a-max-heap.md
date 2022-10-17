---
id: 587d825b367417b2b2512c8b
title: 最大ヒープから要素を削除する
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

ヒープに要素を追加できるようになったので、要素を削除する方法を学びましょう。 要素の削除と挿入は、どちらも似たようなロジックが必要です。 最大ヒープでは一般に最大値を削除したいので、単に木の根からそれを抽出すれば良いのです。 これによって木のヒーププロパティが壊れるので、何らかの方法でそれを作り直す必要があります。 通常、最大ヒープの場合は次の方法でそれを行います。

<ol>
  <li>ヒープ内の最後の要素を根の位置に移動します。</li>
  <li>根の子のいずれかが根より大きい場合は、根を、より大きい値の子と交換します。</li>
  <li>親が両方の子よりも大きくなるまで、または操作が木の最後のレベルに達するまで、交換を続けます。</li>
</ol>

# --instructions--

手順: `remove` と呼ばれるメソッドを最大ヒープに追加してください。 このメソッドは、最大ヒープに追加された最大値を返し、ヒープから削除する必要があります。 また、ヒーププロパティが維持されるようにヒープの順序を変更する必要があります。 要素を削除した後、ヒープに残っている次の最大の要素が根になる必要があります。

# --hints--

The `MaxHeap` data structure should exist.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    }
    return typeof test == 'object';
  })()
);
```

`MaxHeap` should have a method called `print`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

`MaxHeap` should have a method called `insert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

`MaxHeap` should have a method called `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

The `remove` method should remove the greatest element from the max heap while maintaining the max heap property.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    test.insert(30);
    test.insert(300);
    test.insert(500);
    test.insert(10);
    let result = [];
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    return result.join('') == '5003003010';
  })()
);
```

# --seed--

## --seed-contents--

```js
var MaxHeap = function () {
  this.heap = [];
  this.parent = index => {
    return Math.floor((index - 1) / 2);
  }
  this.insert = element => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }
  this.heapifyUp = index => {
    let currentIndex = index,
    parentIndex = this.parent(currentIndex);
    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  this.print = () => {
    return this.heap;
  }
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
