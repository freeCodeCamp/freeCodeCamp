---
id: 56bbb991ad1ed5201cd392cc
title: Manipulate Arrays With pop()
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
    testString: 'assert((function(d){if(d[0][0] == "John" && d[0][1] === 23 && d[1] == undefined){return true;}else{return false;}})(myArray), "<code>myArray</code> should only contain <code>[["John", 23]]</code>.");'
  - text: ''
    testString: 'assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code), "Use <code>pop()</code> on <code>myArray</code>");'
  - text: ''
    testString: 'assert((function(d){if(d[0] == "cat" && d[1] === 2 && d[2] == undefined){return true;}else{return false;}})(removedFromMyArray), "<code>removedFromMyArray</code> should only contain <code>["cat", 2]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray;

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
