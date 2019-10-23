---
id: 587d824d367417b2b2512c54
title: Use Regular Expressions to Test a String
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=14").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=14").then(data => {  assert.equal(data.assertions[0].method, "match", "\"# name: John Doe, age: 35\" matches the regex"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=14").then(data => {  assert.equal(data.assertions[1].method, "notMatch", "\"# name: Paul Smith III, age: twenty-four\" does not match the regex (the age must be numeric)"); }, xhr => { throw new Error(xhr.responseText); })'

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
