---
id: 587d824d367417b2b2512c51
title: Test if an Array Contains an Item
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: All tests should pass
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=11").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - include vs. notInclude
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=11").then(data => {  assert.equal(data.assertions[0].method, "notInclude", "It\"s summer in july..."); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - include vs. notInclude
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=11").then(data => {  assert.equal(data.assertions[1].method, "include", "JavaScript is a backend language !!"); }, xhr => { throw new Error(xhr.responseText); })'

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
