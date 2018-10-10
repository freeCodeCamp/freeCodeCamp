---
title: Entropy
id: 599d15309e88c813a40baf58
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
    testString: 'assert(typeof entropy === "function", "<code>entropy</code> is a function.");'
  - text: ''
    testString: 'assert.equal(entropy("0"), 0, "<code>entropy("0")</code> should return <code>0</code>");'
  - text: ''
    testString: 'assert.equal(entropy("01"), 1, "<code>entropy("01")</code> should return <code>1</code>");'
  - text: ''
    testString: 'assert.equal(entropy("0123"), 2, "<code>entropy("0123")</code> should return <code>2</code>");'
  - text: ''
    testString: 'assert.equal(entropy("01234567"), 3, "<code>entropy("01234567")</code> should return <code>3</code>");'
  - text: ''
    testString: 'assert.equal(entropy("0123456789abcdef"), 4, "<code>entropy("0123456789abcdef")</code> should return <code>4</code>");'
  - text: ''
    testString: 'assert.equal(entropy("1223334444"), 1.8464393446710154, "<code>entropy("1223334444")</code> should return <code>1.8464393446710154</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function entropy (s) {
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
