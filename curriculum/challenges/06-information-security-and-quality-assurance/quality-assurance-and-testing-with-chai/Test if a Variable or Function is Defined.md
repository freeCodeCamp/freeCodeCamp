---
id: 587d824b367417b2b2512c47
title: Test if a Variable or Function is Defined
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
Use assert.isDefined() or assert.isUndefined() to make the tests pass
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: All tests should pass
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - isDefined vs. isUndefined
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {  assert.equal(data.assertions[0].method, "isDefined", "Null is not undefined"); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - isDefined vs. isUndefined
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {  assert.equal(data.assertions[1].method, "isUndefined", "Undefined is undefined"); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - isDefined vs. isUndefined
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {  assert.equal(data.assertions[2].method, "isDefined", "A string is not undefined"); }, xhr => { throw new Error(xhr.responseText); })'

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
