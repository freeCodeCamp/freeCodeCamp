---
title: Deal cards for FreeCell
id: 59694356a6e7011f7f1c5f4e
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
    testString: 'assert(typeof dealFreeCell === "function", "<code>dealFreeCell</code> is a function.");'
  - text: ''
    testString: 'assert(typeof dealFreeCell(1) === "object", "<code>dealFreeCell(seed)</code> should return an object.");'
  - text: ''
    testString: 'assert(dealFreeCell(1).length === 7, "<code>dealFreeCell(seed)</code> should return an array of length 7.");'
  - text: ''
    testString: 'assert.deepEqual(dealFreeCell(1), game1, "<code>dealFreeCell(1)</code> should return an array identical to example "Game #1"");'
  - text: ''
    testString: 'assert.deepEqual(dealFreeCell(617), game617, "<code>dealFreeCell(617)</code> should return an array identical to example "Game #617"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dealFreeCell (seed) {
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
