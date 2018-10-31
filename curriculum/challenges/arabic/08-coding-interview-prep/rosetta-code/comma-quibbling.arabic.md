---
title: Comma quibbling
id: 596e414344c3b2872167f0fe
challengeType: 5
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
    testString: 'assert(typeof quibble === "function", "<code>quibble</code> is a function.");'
  - text: ''
    testString: 'assert(typeof quibble(["ABC"]) === "string", "<code>quibble(["ABC"])</code> should return a string.");'
  - text: ''
    testString: 'assert.equal(quibble(testCases[0]), results[0], "<code>quibble([])</code> should return "{}".");'
  - text: ''
    testString: 'assert.equal(quibble(testCases[1]), results[1], "<code>quibble(["ABC"])</code> should return "{ABC}".");'
  - text: ''
    testString: 'assert.equal(quibble(testCases[2]), results[2], "<code>quibble(["ABC", "DEF"])</code> should return "{ABC and DEF}".");'
  - text: ''
    testString: 'assert.equal(quibble(testCases[3]), results[3], "<code>quibble(["ABC", "DEF", "G", "H"])</code> should return "{ABC,DEF,G and H}".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quibble (words) {
  // Good luck!
  return true;
}

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
