---
title: Generate lower case ASCII alphabet
id: 5a23c84252665b21eecc7e7a
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
    testString: 'assert(typeof lascii=="function","<code>lascii</code> should be a function.");'
  - text: ''
    testString: 'assert(Array.isArray(lascii("a","d")),"<code>lascii("a","d")</code> should return an array.");'
  - text: ''
    testString: 'assert.deepEqual(lascii("a","d"),results[0],"<code>lascii("a","d")</code> should return <code>[ "a", "b", "c", "d" ]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(lascii("c","i"),results[1],"<code>lascii("c","i")</code> should return <code>[ "c", "d", "e", "f", "g", "h", "i" ]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(lascii("m","q"),results[2],"<code>lascii("m","q")</code> should return <code>[ "m", "n", "o", "p", "q" ]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(lascii("k","n"),results[3],"<code>lascii("k","n")</code> should return <code>[ "k", "l", "m", "n" ]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(lascii("t","z"),results[4],"<code>lascii("t","z")</code> should return <code>[ "t", "u", "v", "w", "x", "y", "z" ]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function lascii (cFrom, cTo) {
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
