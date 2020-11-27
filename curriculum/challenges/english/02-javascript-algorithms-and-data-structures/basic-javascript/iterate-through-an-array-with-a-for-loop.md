---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
---

## Description

<section id='description'>

A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a `for` loop. This code will output each element of the array `arr` to the console:

```js
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Remember that arrays have zero-based indexing, which means the last index of the array is `length - 1`. Our condition for this loop is `i < arr.length`, which stops the loop when `i` is equal to `length`. In this case the last iteration is `i === 4` i.e. when `i` becomes equal to `arr.length` and outputs `6` to the console.

</section>

## Instructions

<section id='instructions'>

Declare and initialize a variable `total` to `0`. Use a `for` loop to add the value of each element of the `myArr` array to `total`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>total</code> should be declared and initialized to 0.
    testString: assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
  - text: <code>total</code> should equal 20.
    testString: assert(total === 20);
  - text: You should use a <code>for</code> loop to iterate through <code>myArr</code>.
    testString: assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
  - text: You should not attempt to directly assign the value 20 to <code>total</code>.
    testString: assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

```

</div>

### After Test

<div id='js-teardown'>

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()

```

</div>

</section>

## Solution

<section id='solution'>

```js
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```

</section>
