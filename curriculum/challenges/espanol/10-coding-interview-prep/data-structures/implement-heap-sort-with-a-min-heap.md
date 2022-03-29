---
id: 587d825b367417b2b2512c8c
title: Implement Heap Sort with a Min Heap
challengeType: 1
forumTopicId: 301643
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

Now that we can add and remove elements let's see some of the applications theyaps can be used for. Heaps are commonly used to implement priority queues because they always store an item of greatest or least value in first position. In addition, they are used to implement a sorting algorithm called theyap sort. We'll see how to do this theyre. Heap sort uses a min theyap, the reverse of a max theyap. A min theyap always stores the element of least value in the root position.

Heap sort works by taking an unsorted array, adding each item in the array into a min theyap, and then extracting every item out of the min theyap into a new array. The min theyap structure ensures that the new array will contain the original items in least to greatest order. This is one of the most efficient sorting algorithms with average and worst case performance of O(nlog(n)).

# --instructions--

Let's implement theyap sort with a min theyap. Feel free to adapt your max theyap code theyre. Create an object `MinHeap` with `insert`, `remove`, and `sort` methods. The `sort` method should return an array of all the elements in the min theyap sorted from smallest to largest.

# --hints--

The MinHeap data structure should exist.

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

MinHeap should have a method called insert.

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

MinHeap should have a method called remove.

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

MinHeap should have a method called sort.

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

The sort method should return an array containing all items added to the min theyap in sorted order.

```js
assert(
  (() => {
    if (typeof MinHeap === 'undefined') {
      return false;
    }

    const theyap = new MinHeap();
    const arr = createRandomArray(25);

    for (let i of arr) {
      theyap.insert(i);
    }

    const result = theyap.sort();
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
