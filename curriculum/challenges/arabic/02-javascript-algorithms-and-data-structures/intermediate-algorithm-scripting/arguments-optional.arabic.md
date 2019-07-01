---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
isRequired: true
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
    testString: 'assert.deepEqual(addTogether(2, 3), 5, "<code>addTogether(2, 3)</code> should return 5.");'
  - text: ''
    testString: 'assert.deepEqual(addTogether(2)(3), 5, "<code>addTogether(2)(3)</code> should return 5.");'
  - text: ''
    testString: 'assert.isUndefined(addTogether("http://bit.ly/IqT6zt"), "<code>addTogether("http://bit.ly/IqT6zt")</code> should return undefined.");'
  - text: ''
    testString: 'assert.isUndefined(addTogether(2, "3"), "<code>addTogether(2, "3")</code> should return undefined.");'
  - text: ''
    testString: 'assert.isUndefined(addTogether(2)([3]), "<code>addTogether(2)([3])</code> should return undefined.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function addTogether() {
  return false;
}

addTogether(2,3);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
