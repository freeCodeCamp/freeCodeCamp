---
id: 587d824d367417b2b2512c50
title: Test if a Value is an Array
challengeType: 2
videoUrl: ''
localeTitle: اختبار إذا كانت القيمة هي صفيف
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=10").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=10").then(data => {  assert.equal(data.assertions[0].method, "isArray", "String.prototype.split() returns an Array"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=10").then(data => {  assert.equal(data.assertions[1].method, "isNotArray", "Array.prototype.indexOf() returns a number"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
