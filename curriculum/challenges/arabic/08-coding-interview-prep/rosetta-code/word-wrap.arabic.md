---
title: Word wrap
id: 594810f028c0303b75339ad4
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
    testString: 'assert.equal(typeof wrap, "function", "wrap must be a function.");'
  - text: ''
    testString: 'assert.equal(typeof wrap("abc", 10), "string", "wrap must return a string.");'
  - text: ''
    testString: 'assert(wrapped80.split("\n").length === 4, "wrap(80) must return 4 lines.");'
  - text: ''
    testString: 'assert.equal(wrapped80.split("\n")[0], firstRow80, "Your <code>wrap</code> function should return our expected text");'
  - text: ''
    testString: 'assert(wrapped42.split("\n").length === 7, "wrap(42) must return 7 lines.");'
  - text: ''
    testString: 'assert.equal(wrapped42.split("\n")[0], firstRow42, "Your <code>wrap</code> function should return our expected text");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wrap (text, limit) {
  return text;
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
