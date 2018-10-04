---
id: 587d824d367417b2b2512c53
title: Test if a String Contains a Substring
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
#include (on #notInclude ) works for strings too !!
It asserts that the actual string contains the expected substring
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=13'').then(data => { assert.equal(data.state,''passed''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Choose the right assertion - include vs. notInclude
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=13'').then(data => {  assert.equal(data.assertions[0].method, ''include'', ''\''Arrow\'' contains \''row\''...''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Choose the right assertion - include vs. notInclude
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=13'').then(data => {  assert.equal(data.assertions[1].method, ''notInclude'', ''... a \''dart\'' doesn\''t contain a \''queue\''''); }, xhr => { throw new Error(xhr.responseText); })'

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
