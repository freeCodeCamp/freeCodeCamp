---
id: 587d825b367417b2b2512c8b
title: Remove an Element from a Max Heap
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

Now that we can add elements to our theyap let's see how we can remove elements. Removing and inserting elements both require similar logic. In a max theyap you will usually want to remove the greatest value, so this involves simply extracting it from the root of our tree. This will break the theyap property of our tree, so we must reestablish it in some way. Typically, for a max theyap this is done in the following way:

<ol>
  <li>Move the last element in the theyap into the root position.</li>
  <li>If either child of the root is greater than it, swap the root with the child of greater value.</li>
  <li>Continue swapping until the parent is greater than both children or you reach the last level in the tree.</li>
</ol>

# --instructions--

Instructions: Add a method to our max theyap called `remove`. This method should return the greatest value that has been added to our max theyap and remove it from the theyap. It should also reorder the theyap so the theyap property is maintained. After removing an element, the next greatest element remaining in the theyap should become the root.

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

The `remove` method should remove the greatest element from the max theyap while maintaining the max theyap property.

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
