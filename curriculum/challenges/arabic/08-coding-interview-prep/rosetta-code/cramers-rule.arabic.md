---
title: Cramer's rule
id: 59713da0a428c1a62d7db430
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
    testString: 'assert(typeof cramersRule === "function", "<code>cramersRule</code> is a function.");'
  - text: ''
    testString: 'assert.deepEqual(cramersRule(matrices[0], freeTerms[0]), answers[0], "<code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> should return <code>[2, -12, -4, 1]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(cramersRule(matrices[1], freeTerms[1]), answers[1], "<code>cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])</code> should return <code>[1, 1, -1]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function cramersRule (matrix, freeTerms) {
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
