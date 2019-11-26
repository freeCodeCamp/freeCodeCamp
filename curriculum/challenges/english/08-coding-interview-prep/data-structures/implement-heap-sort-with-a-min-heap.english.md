---
id: 587d825b367417b2b2512c8c
title: Implement Heap Sort with a Min Heap
challengeType: 1
forumTopicId: 301643
---

## Description
<section id='description'>
Now that we can add and remove elements let's see some of the applications heaps can be used for. Heaps are commonly used to implement priority queues because they always store an item of greatest or least value in first position. In addition, they are used to implement a sorting algorithm called heap sort. We'll see how to do this here. Heap sort uses a min heap, the reverse of a max heap. A min heap always stores the element of least value in the root position.
Heap sort works by taking an unsorted array, adding each item in the array into a min heap, and then extracting every item out of the min heap into a new array. The min heap structure ensures that the new array will contain the original items in least to greatest order. This is one of the most efficient sorting algorithms with average and worst case performance of O(nlog(n)).
</section>

## Instructions
<section id='instructions'>
Let's implement heap sort with a min heap. Feel free to adapt your max heap code here. Create an object <code>MinHeap</code> with <code>insert</code>, <code>remove</code>, and <code>sort</code> methods. The <code>sort</code> method should return an array of all the elements in the min heap sorted from smallest to largest.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The MinHeap data structure exists.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() }; return (typeof test == 'object')})());
  - text: MinHeap has a method called insert.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.insert == 'function')})());
  - text: MinHeap has a method called remove.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.remove == 'function')})());
  - text: MinHeap has a method called sort.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.sort == 'function')})());
  - text: The sort method returns an array containing all items added to the min heap in sorted order.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; test.insert(3); test.insert(12); test.insert(5); test.insert(10); test.insert(1); test.insert(27); test.insert(42); test.insert(57); test.insert(5); var result = test.sort(); return (isSorted(result)); })());
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// check if array is sorted
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// generate a randomly filled array
const array = Array(25).fill().map(() => Math.floor(Math.random() * 100));

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  // Add insert method here

  // Add remove method here

  // Add sort method here

}
```

</div>
</section>

## Solution
<section id='solution'>

```js
// check if array is sorted
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// generate a randomly filled array
const array = Array(25).fill().map(() => Math.floor(Math.random() * 100));

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    let index = this.heap.length;
    let parent = Math.floor(index / 2);
    while (index > 1 && value < this.heap[parent]) {
      this.heap[index] = this.heap[parent];
      index = parent;
      parent = Math.floor(index / 2);
    }
    this.heap[index] = value;
  }

  remove() {
    if (this.heap.length === 1) {
      return null;
    }
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const value = this.heap[1];
    const lastValue = this.heap.pop();
    let index = 1;
    let leftIndex = index * 2;
    let rightIndex = index * 2 + 1;
    while ((leftIndex < this.heap.length && this.heap[leftIndex] < lastValue) || (rightIndex < this.heap.length && this.heap[rightIndex] < lastValue)) {
      let maxIndex;
      if (leftIndex >= this.heap.length) {
        maxIndex = rightIndex;
      } else if (rightIndex >= this.heap.length) {
        maxIndex = leftIndex;
      } else if (this.heap[rightIndex] < this.heap[leftIndex]) {
        maxIndex = rightIndex;
      } else {
        maxIndex = leftIndex;
      }
      this.heap[index] = this.heap[maxIndex];
      index = maxIndex;
      leftIndex = index * 2;
      rightIndex = index * 2 + 1;
    }

    this.heap[index] = lastValue

    return value;
  }

  sort() {
    const values = [];
    let value;
    while (value = this.remove()) {
      values.push(value);
    }
    return values;
  }
}
```

</section>
