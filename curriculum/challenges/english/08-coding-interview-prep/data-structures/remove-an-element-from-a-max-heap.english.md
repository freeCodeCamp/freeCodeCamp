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
Instructions: Add a method to our max heap called remove. This method should return the greatest value that has been added to our max heap and remove it from the heap. It should also reorder the heap so the heap property is maintained. After removing an element, the next greatest element remaining in the heap should become the root. Add your insert method again here as well.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The MaxHeap data structure exists.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() }; return (typeof test == 'object')})());
  - text: MaxHeap has a method called print.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.print == 'function')})());
  - text: MaxHeap has a method called insert.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.insert == 'function')})());
  - text: MaxHeap has a method called remove.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.remove == 'function')})());
  - text: The remove method removes the greatest element from the max heap while maintaining the max heap property.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; test.insert(30); test.insert(300); test.insert(500); test.insert(10); let result = []; result.push(test.remove()); result.push(test.remove()); result.push(test.remove()); result.push(test.remove());  return (result.join('') == '5003003010') })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
var MaxHeap = function() {
  // change code below this line
  // change code above this line
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
