---
title: Equilibrium index
id: 5987fd532b954e0f21b5d3f6
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
    testString: 'assert(typeof equilibrium === "function", "<code>equilibrium</code> is a function.");'
  - text: ''
    testString: 'assert.deepEqual(equilibrium(tests[0]), ans[0], "<code>equilibrium([-7, 1, 5, 2, -4, 3, 0])</code> should return <code>[3,6]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(equilibrium(tests[1]), ans[1], "<code>equilibrium([2, 4, 6])</code> should return <code>[]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(equilibrium(tests[2]), ans[2], "<code>equilibrium([2, 9, 2])</code> should return <code>[1]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(equilibrium(tests[3]), ans[3], "<code>equilibrium([1, -1, 1, -1, 1, -1, 1])</code> should return <code>[0,1,2,3,4,5,6]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(equilibrium(tests[4]), ans[4], "<code>equilibrium([1])</code> should return <code>[0]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(equilibrium(tests[5]), ans[5], "<code>equilibrium([])</code> should return <code>[]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function equilibrium (a) {
  // Good luck!
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
