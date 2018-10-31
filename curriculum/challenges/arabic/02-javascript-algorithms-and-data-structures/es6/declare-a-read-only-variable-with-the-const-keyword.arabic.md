---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
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
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in your code.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/(const SENTENCE)/g), "<code>SENTENCE</code> should be a constant variable declared with <code>const</code>.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/(let i)/g), "<code>i</code> should be declared with <code>let</code>.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g), "<code>console.log</code> should be adjusted to print the variable <code>SENTENCE</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  var sentence = str + " is cool!";
  for(var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
