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
  - text: The MinHeap data structure should exist.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() }; return (typeof test == 'object')})());
  - text: MinHeap should have a method called insert.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.insert == 'function')})());
  - text: MinHeap should have a method called remove.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.remove == 'function')})());
  - text: MinHeap should have a method called sort.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.sort == 'function')})());
  - text: The sort method should return an array containing all items added to the min heap in sorted order.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; test.insert(3); test.insert(12); test.insert(5); test.insert(10); test.insert(1); test.insert(27); test.insert(42); test.insert(57); test.insert(5); var result = test.sort(); return (isSorted(result)); })());
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return size > 1 ? createArray(size - 1) : undefined;
})(25);
var MinHeap = function() {
  // Only change code below this line
  
  // Only change code above this line
};
```

</div>
</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
