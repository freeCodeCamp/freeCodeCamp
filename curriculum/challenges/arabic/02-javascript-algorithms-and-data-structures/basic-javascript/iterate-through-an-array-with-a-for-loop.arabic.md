---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
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
    testString: 'assert(code.match(/var.*?total\s*=\s*0.*?;/), "<code>total</code> should be declared and initialized to 0");'
  - text: ''
    testString: 'assert(total === 20, "<code>total</code> should equal 20");'
  - text: ''
    testString: 'assert(code.match(/for\s*\(/g).length > 1 && code.match(/myArr\s*\[/), "You should use a <code>for</code> loop to iterate through <code>myArr</code>");'
  - text: ''
    testString: 'assert(!code.match(/total[\s\+\-]*=\s*(\d(?!\s*[;,])|[1-9])/g), "Do not set <code>total</code> to 20 directly");'

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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
