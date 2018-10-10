---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift()
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
    testString: 'assert((function(d){if(typeof d[0] === "object" && d[0][0] == "Paul" && d[0][1] === 35 && d[1][0] != undefined && d[1][0] == "dog" && d[1][1] != undefined && d[1][1] == 3){return true;}else{return false;}})(myArray), "<code>myArray</code> should now have [["Paul", 35], ["dog", 3]].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.

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
