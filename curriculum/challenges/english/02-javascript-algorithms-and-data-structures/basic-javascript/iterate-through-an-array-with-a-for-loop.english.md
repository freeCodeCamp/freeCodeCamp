---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
challengeType: 1
---

## Description
<section id='description'>
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a <code>for</code> loop. This code will output each element of the array <code>arr</code> to the console:
<blockquote>var arr = [10,9,8,7,6];<br>for (var i = 0; i < arr.length; i++) {<br>&nbsp;&nbsp; console.log(arr[i]);<br>}</blockquote>
Remember that Arrays have zero-based numbering, which means the last index of the array is length - 1. Our <dfn>condition</dfn> for this loop is <code>i < arr.length</code>, which stops when <code>i</code> is at length - 1.
</section>

## Instructions
<section id='instructions'>
Declare and initialize a variable <code>total</code> to <code>0</code>. Use a <code>for</code> loop to add the value of each element of the <code>myArr</code> array to <code>total</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>total</code> should be declared and initialized to 0
    testString: assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/), '<code>total</code> should be declared and initialized to 0');
  - text: <code>total</code> should equal 20
    testString: assert(total === 20, '<code>total</code> should equal 20');
  - text: You should use a <code>for</code> loop to iterate through <code>myArr</code>
    testString: assert(code.match(/for\s*\(/g).length > 1 && code.match(/myArr\s*\[/), 'You should use a <code>for</code> loop to iterate through <code>myArr</code>');
  - text: Do not set <code>total</code> to 20 directly
    testString: assert(!code.match(/total[\s\+\-]*=\s*(0(?!\s*[;,]?$)|[1-9])/gm), 'Do not set <code>total</code> to 20 directly');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

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
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```

</section>
