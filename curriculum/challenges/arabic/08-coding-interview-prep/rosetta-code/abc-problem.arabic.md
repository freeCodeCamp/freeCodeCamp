---
title: ABC Problem
id: 594810f028c0303b75339acc
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
    testString: 'assert(typeof canMakeWord === "function", "<code>canMakeWord</code> is a function.");'
  - text: ''
    testString: 'assert(typeof canMakeWord("hi") === "boolean", "<code>canMakeWord</code> should return a boolean.");'
  - text: ''
    testString: 'assert(canMakeWord(words[0]), "<code>canMakeWord("bark")</code> should return true.");'
  - text: ''
    testString: 'assert(!canMakeWord(words[1]), "<code>canMakeWord("BooK")</code> should return false.");'
  - text: ''
    testString: 'assert(canMakeWord(words[2]), "<code>canMakeWord("TReAT")</code> should return true.");'
  - text: ''
    testString: 'assert(!canMakeWord(words[3]), "<code>canMakeWord("COMMON")</code> should return false.");'
  - text: ''
    testString: 'assert(canMakeWord(words[4]), "<code>canMakeWord("squAD")</code> should return true.");'
  - text: ''
    testString: 'assert(canMakeWord(words[5]), "<code>canMakeWord("conFUSE")</code> should return true.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function canMakeWord (word) {
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
