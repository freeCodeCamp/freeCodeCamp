---
id: 587d824a367417b2b2512c46
title: Learn How JavaScript Assertions Work
challengeType: 2
videoUrl: ''
localeTitle: 'Узнайте, как работают JavaScript-утверждения'
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=0").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=0").then(data => {  assert.equal(data.assertions[0].method, "isNull", "Null is null"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - isNull vs. isNotNull
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=0").then(data => {  assert.equal(data.assertions[1].method, "isNotNull", "1 is not null"); }, xhr => { throw new Error(xhr.responseText); })'

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
