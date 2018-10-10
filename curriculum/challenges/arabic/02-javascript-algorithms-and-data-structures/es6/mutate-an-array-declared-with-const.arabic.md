---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
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
    testString: 'getUserInput => assert(getUserInput("index").match(/const/g), "Do not replace <code>const</code> keyword.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+s/g), "<code>s</code> should be a constant variable (by using <code>const</code>).");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g), "Do not change the original array declaration.");'
  - text: ''
    testString: 'assert.deepEqual(s, [2, 5, 7], "<code>s</code> should be equal to <code>[2, 5, 7]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
