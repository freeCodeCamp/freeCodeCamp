---
id: 587d824d367417b2b2512c52
title: Test if a Value is a String
challengeType: 2
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => {  assert.equal(data.assertions[0].method, "isNotString", "A float number is not a string"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: اختر التأكيد الصحيح - isString مقابل isNotString
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => {  assert.equal(data.assertions[1].method, "isString", "environment vars are strings (or undefined)"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => {  assert.equal(data.assertions[2].method, "isString", "A JSON is a string"); }, xhr => { throw new Error(xhr.responseText); })'

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
