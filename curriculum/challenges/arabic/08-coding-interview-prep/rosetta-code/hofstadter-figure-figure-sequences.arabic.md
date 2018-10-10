---
title: Hofstadter Figure-Figure sequences
id: 59622f89e4e137560018a40e
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
    testString: 'assert(typeof ffr === "function", "<code>ffr</code> is a function.");'
  - text: ''
    testString: 'assert(typeof ffs === "function", "<code>ffs</code> is a function.");'
  - text: ''
    testString: 'assert(Number.isInteger(ffr(1)), "<code>ffr</code> should return integer.");'
  - text: ''
    testString: 'assert(Number.isInteger(ffs(1)), "<code>ffs</code> should return integer.");'
  - text: ''
    testString: 'assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1], "<code>ffr()</code> should return <code>69</code>");'
  - text: ''
    testString: 'assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1], "<code>ffr()</code> should return <code>1509</code>");'
  - text: ''
    testString: 'assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1], "<code>ffr()</code> should return <code>5764</code>");'
  - text: ''
    testString: 'assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1], "<code>ffr()</code> should return <code>526334</code>");'
  - text: ''
    testString: 'assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1], "<code>ffs()</code> should return <code>14</code>");'
  - text: ''
    testString: 'assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1], "<code>ffs()</code> should return <code>59</code>");'
  - text: ''
    testString: 'assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1], "<code>ffs()</code> should return <code>112</code>");'
  - text: ''
    testString: 'assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1], "<code>ffs()</code> should return <code>1041</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function ffr(n) {
  return n;
}

function ffs(n) {
  return n;
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
