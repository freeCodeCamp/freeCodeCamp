---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
Use assert.isOk() or assert.isNotOk() to make the tests pass.
.isOk(truthy) and .isNotOk(falsey) will pass.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: All tests should pass
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=2'').then(data => {assert.equal(data.state,''passed''); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - isOk vs. isNotOk
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=2'').then(data => {  assert.equal(data.assertions[0].method, ''isNotOk'', ''Null is falsey''); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - isOk vs. isNotOk
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=2'').then(data => {  assert.equal(data.assertions[1].method, ''isOk'',''A string is truthy''); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - isOk vs. isNotOk
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=2'').then(data => {  assert.equal(data.assertions[2].method, ''isOk'', ''true is truthy''); }, xhr => { throw new Error(xhr.responseText); })'

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
