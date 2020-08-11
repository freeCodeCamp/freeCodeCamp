---
id: 587d825b367417b2b2512c8c
title: Implement Heap Sort with a Min Heap
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
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() }; return (typeof test == "object")})(), "The MinHeap data structure exists.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; return (typeof test.insert == "function")})(), "MinHeap has a method called insert.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; return (typeof test.remove == "function")})(), "MinHeap has a method called remove.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; return (typeof test.sort == "function")})(), "MinHeap has a method called sort.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; test.insert(3); test.insert(12); test.insert(5); test.insert(10); test.insert(1); test.insert(27); test.insert(42); test.insert(57); test.insert(5); var result = test.sort(); return (isSorted(result)); })(), "The sort method returns an array containing all items added to the min heap in sorted order.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// check if array is sorted
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return (size > 1) ? createArray(size - 1) : undefined;
})(25);
var MinHeap = function() {
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
