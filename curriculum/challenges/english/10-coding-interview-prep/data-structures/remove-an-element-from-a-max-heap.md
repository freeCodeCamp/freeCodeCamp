---
id: 587d825b367417b2b2512c8b
title: Remove an Element from a Max Heap
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

Now that we can add elements to our heap let's see how we can remove elements. Removing and inserting elements both require similar logic. In a max heap you will usually want to remove the greatest value, so this involves simply extracting it from the root of our tree. This will break the heap property of our tree, so we must reestablish it in some way. Typically, for a max heap this is done in the following way:

<ol>
  <li>Move the last element in the heap into the root position.</li>
  <li>If either child of the root is greater than it, swap the root with the child of greater value.</li>
  <li>Continue swapping until the parent is greater than both children or you reach the last level in the tree.</li>
</ol>

# --instructions--

Instructions: Add a method to our max heap called `remove`. This method should return the greatest value that has been added to our max heap and remove it from the heap. It should also reorder the heap so the heap property is maintained. After removing an element, the next greatest element remaining in the heap should become the root.

# --hints--

The `MaxHeap` data structure should exist.

```js
assert(
  (function () {
    let test = false;
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
    let test = false;
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
    let test = false;
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
    let test = false;
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
function isHeap(arr, i, n) {
  if (i >= (n - 1) / 2) {
    return true;
  }
  if (
    arr[i] >= arr[2 * i + 1] &&
    arr[i] >= arr[2 * i + 2] &&
    isHeap(arr, 2 * i + 1, n) &&
    isHeap(arr, 2 * i + 2, n)
  ) {
    return true;
  }
  return false;
}

assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
  let max = Infinity;
  const [result, vals] = [[], [2, 15, 3, 7, 12, 7, 10, 90]];
  vals.forEach((val) => test.insert(val));
  for (let i = 0; i < vals.length; i++) {
    const curHeap = test.print();
    const arr = curHeap[0] === null ? curHeap.slice(1) : curHeap;
    if (!isHeap(arr, 0, arr.length - 1)) {
      return false;
    }
    const removed = test.remove();
    if (!vals.includes(removed)) return false;
    if (removed > max) return false
    max = removed;
    result.push(removed);
  }
  for (let i = 0; i < vals.length; i++) {
     if (!result.includes(vals[i])) {
       return false;
     }
  }
  return true
  })()
);
```

# --seed--

## --seed-contents--

```js
const MaxHeap = function () {
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
