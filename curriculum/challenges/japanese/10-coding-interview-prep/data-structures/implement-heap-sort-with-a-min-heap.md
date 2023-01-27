---
id: 587d825b367417b2b2512c8c
title: 最小ヒープでヒープ ソートを実装する
challengeType: 1
forumTopicId: 301643
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

要素の追加と削除ができるようになったので、ヒープを使える応用をいくつか見てみましょう。 ヒープは優先度付きキューを実装するためによく使用されます。なぜなら、優先度付きキューは常に、先頭に最大値または最小値の要素を格納するからです。 さらに、ヒープソートと呼ばれるソートアルゴリズムの実装にもヒープが使用されます。 その方法を見ていきましょう。 ヒープソートは、最大ヒープの逆である最小ヒープを使用します。 最小ヒープは常に、最小値である要素を根の位置に格納します。

ヒープソートの仕組みは、ソートされていない配列を取り、配列内の各要素を最小ヒープに追加し、次に最小ヒープからすべての要素を新しい配列に抽出するというものです。 最小ヒープ構造では、新しい配列に元の要素が必ず最小から最大の順序で格納されます。 これは、平均ケースと最悪ケースのパフォーマンスが O(nlog(n)) である最も効率的なソートアルゴリズムの一つです。

# --instructions--

最小ヒープを使ってヒープソートを実装しましょう。 ここでは、自分が書いた最大ヒープのコードを基にしても構いません。 `insert`、`remove`、`sort` の各メソッドを持つオブジェクト `MinHeap` を作成してください。 `sort` メソッドは、最小ヒープ内のすべての要素が最小から最大の順に格納されている配列を返す必要があります。

# --hints--

The `MinHeap` data structure should exist.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    }
    return typeof test == 'object';
  })()
);
```

`MinHeap` should have a method called `insert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

`MinHeap` should have a method called `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

`MinHeap` should have a method called `sort`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.sort == 'function';
  })()
);
```

The `sort` method should return an array containing all items added to the min heap in sorted order.

```js
assert(
  (() => {
    if (typeof MinHeap === 'undefined') {
      return false;
    }

    const heap = new MinHeap();
    const arr = createRandomArray(25);

    for (let i of arr) {
      heap.insert(i);
    }

    const result = heap.sort();
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== result[i]) {
        return false;
      }
    }
    return true;
  })()
);
```

# --seed--

## --seed-contents--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);

  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
