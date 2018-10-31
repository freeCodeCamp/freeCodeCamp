---
title: Emirp primes
id: 599d0ba974141b0f508b37d5
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
    testString: 'assert(typeof emirps === "function", "<code>emirps</code> is a function.");'
  - text: ''
    testString: 'assert.deepEqual(emirps(20, true), [13, 17, 31, 37, 71, 73, 79, 97, 107, 113, 149, 157, 167, 179, 199, 311, 337, 347, 359, 389], "<code>emirps(20,true)</code> should return <code>[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]</code>");'
  - text: ''
    testString: 'assert.deepEqual(emirps(10000), 948349, "<code>emirps(10000)</code> should return <code>948349</code>");'
  - text: ''
    testString: 'assert.deepEqual(emirps([7700, 8000], true), [7717, 7757, 7817, 7841, 7867, 7879, 7901, 7927, 7949, 7951, 7963], "<code>emirps([7700,8000],true)</code> should return <code>[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]</code>");'
  - text: ''
    testString: 'assert.deepEqual(emirps([7700, 8000], false), 11, "<code>emirps([7700,8000],true)</code> should return <code>11</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function emirps(n) {
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
