---
title: Convert seconds to compound duration
id: 596fd036dc1ab896c5db98b1
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
    testString: 'assert(typeof convertSeconds === "function", "<code>convertSeconds</code> is a function.");'
  - text: ''
    testString: 'assert.equal(convertSeconds(testCases[0]), results[0], "<code>convertSeconds(7259)</code> should return <code>2 hr, 59 sec</code>.");'
  - text: ''
    testString: 'assert.equal(convertSeconds(testCases[1]), results[1], "<code>convertSeconds(86400)</code> should return <code>1 d</code>.");'
  - text: ''
    testString: 'assert.equal(convertSeconds(testCases[2]), results[2], "<code>convertSeconds(6000000)</code> should return <code>9 wk, 6 d, 10 hr, 40 min</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertSeconds (sec) {
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
