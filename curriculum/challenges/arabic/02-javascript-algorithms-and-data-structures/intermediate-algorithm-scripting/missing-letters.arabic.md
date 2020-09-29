---
id: af7588ade1100bde429baf20
title: Missing letters
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
    testString: 'assert.deepEqual(fearNotLetter("abce"), "d", "<code>fearNotLetter("abce")</code> should return "d".");'
  - text: ''
    testString: 'assert.deepEqual(fearNotLetter("abcdefghjklmno"), "i", "<code>fearNotLetter("abcdefghjklmno")</code> should return "i".");'
  - text: ''
    testString: 'assert.deepEqual(fearNotLetter("stvwx"), "u", "<code>fearNotLetter("stvwx")</code> should return "u".");'
  - text: ''
    testString: 'assert.deepEqual(fearNotLetter("bcdf"), "e", "<code>fearNotLetter("bcdf")</code> should return "e".");'
  - text: ''
    testString: 'assert.isUndefined(fearNotLetter("abcdefghijklmnopqrstuvwxyz"), "<code>fearNotLetter("abcdefghijklmnopqrstuvwxyz")</code> should return undefined.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
