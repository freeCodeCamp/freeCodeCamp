---
id: 587d825a367417b2b2512c8a
title: Insert an Element into a Max Heap
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() }; return (typeof test == "object")})(), "The MaxHeap data structure exists.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.insert == "function")})(), "MaxHeap has a method called insert.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; return (typeof test.print == "function")})(), "MaxHeap has a method called print.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== "undefined") { test = new MaxHeap() } else { return false; }; test.insert(50); test.insert(100); test.insert(700); test.insert(32); test.insert(51); let result = test.print(); return ((result.length == 5) ? result[0] == 700 : result[1] == 700) })(), "The insert method adds elements according to the max heap property.");'

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
