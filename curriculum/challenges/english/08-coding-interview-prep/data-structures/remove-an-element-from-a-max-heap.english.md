---
id: 587d825b367417b2b2512c8b
title: Remove an Element from a Max Heap
challengeType: 1
forumTopicId: 301710
---

## Description
<section id='description'>
Now that we can add elements to our heap let's see how we can remove elements. Removing and inserting elements both require similar logic. In a max heap you will usually want to remove the greatest value, so this involves simply extracting it from the root of our tree. This will break the heap property of our tree, so we must reestablish it in some way. Typically, for a max heap this is done in the following way:
Move the last element in the heap into the root position.
If either child of the root is greater than it, swap the root with the child of greater value.
Continue swapping until the parent is greater than both children, or you reach the last level in the tree.
</section>

## Instructions
<section id='instructions'>
Add a method to our max heap called <code>remove</code>. This method should return the greatest value that has been added to our max heap and remove it from the heap. It should also reorder the heap so the heap property is maintained. After removing an element, the next greatest element remaining in the heap should become the root. If the heap is empty return <code>null</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The MaxHeap data structure exists.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() }; return (typeof test == 'object')})());
  - text: MaxHeap has a method called <code>remove</code>.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.remove == 'function')})());
  - text: The <code>remove</code> method removes the greatest element from the max heap while maintaining the max heap property.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; test.insert(30); test.insert(300); test.insert(500); test.insert(10); let result = []; result.push(test.remove()); result.push(test.remove()); result.push(test.remove()); result.push(test.remove());  return (result.join('') == '5003003010') })());
  - text: The <code>remove</code> method returns <code>null</code> when the heap is empty.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; };  return (test.remove() === null) })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    let index = this.heap.length;
    let parent = Math.floor(index / 2);
    while (index > 1 && value > this.heap[parent]) {
      this.heap[index] = this.heap[parent];
      index = parent;
      parent = Math.floor(index / 2);
    }
    this.heap[index] = value;
  }

  print() {
    return this.heap.slice(1);
  }
  // Add remove method here

}
```

</div>
</section>

## Solution
<section id='solution'>

```js
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    let index = this.heap.length;
    let parent = Math.floor(index / 2);
    while (index > 1 && value > this.heap[parent]) {
      this.heap[index] = this.heap[parent];
      index = parent;
      parent = Math.floor(index / 2);
    }
    this.heap[index] = value;
  }

  print() {
    return this.heap.slice(1);
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
    while ((leftIndex < this.heap.length && this.heap[leftIndex] > lastValue) || (rightIndex < this.heap.length && this.heap[rightIndex] > lastValue)) {
      let maxIndex;
      if (leftIndex >= this.heap.length) {
        maxIndex = rightIndex;
      } else if (rightIndex >= this.heap.length) {
        maxIndex = leftIndex;
      } else if (this.heap[rightIndex] > this.heap[leftIndex]) {
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
}
```

</section>
