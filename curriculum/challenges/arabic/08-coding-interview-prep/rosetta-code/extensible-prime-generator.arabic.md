---
title: Extensible prime generator
id: 598ee8b91b410510ae82efef
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
    testString: 'assert(typeof primeGenerator === "function", "<code>primeGenerator</code> is a function.");'
  - text: ''
    testString: 'assert.deepEqual(primeGenerator(20, true), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], "<code>primeGenerator</code> is a function.");'
  - text: ''
    testString: 'assert.deepEqual(primeGenerator([100, 150], true), [101, 103, 107, 109, 113, 127, 131, 137, 139, 149], "<code>primeGenerator</code> is a function.");'
  - text: ''
    testString: 'assert.equal(primeGenerator([7700, 8000], false), 30, "<code>primeGenerator</code> is a function.");'
  - text: ''
    testString: 'assert.equal(primeGenerator(10000, false), 104729, "<code>primeGenerator</code> is a function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primeGenerator (num, showPrimes) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
