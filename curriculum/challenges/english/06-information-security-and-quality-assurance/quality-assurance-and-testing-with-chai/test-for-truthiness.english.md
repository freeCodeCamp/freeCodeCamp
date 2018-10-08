---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
Use assert.isTrue() or assert.isNotTrue() to make the tests pass.
.isTrue(true) and .isNotTrue(everything else) will pass.
.isFalse() and .isNotFalse() also exist.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Choose the right assertion - isTrue vs. isNotTrue
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {  assert.equal(data.assertions[0].method, "isTrue", "True is true"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Choose the right assertion - isTrue vs. isNotTrue
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {  assert.equal(data.assertions[1].method, "isTrue", "Double negation of a truthy value is true"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Choose the right assertion - isTrue vs. isNotTrue
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {  assert.equal(data.assertions[2].method, "isNotTrue", "A truthy object is not true - neither is a false one"); }, xhr => { throw new Error(xhr.responseText); })'

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
