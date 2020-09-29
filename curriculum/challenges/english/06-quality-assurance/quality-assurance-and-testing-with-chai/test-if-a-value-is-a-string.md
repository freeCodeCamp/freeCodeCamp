---
id: 587d824d367417b2b2512c52
title: Test if a Value is a String
challengeType: 2
forumTopicId: 301599
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
<code>isString</code> or <code>isNotString</code> asserts that the actual value is a string.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isString()</code> or <code>assert.isNotString()</code> to make the tests pass. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isString vs. isNotString.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => {  assert.equal(data.assertions[0].method, 'isNotString', 'A float number is not a string'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isString vs. isNotString.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => {  assert.equal(data.assertions[1].method, 'isString', 'environment vars are strings (or undefined)'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isString vs. isNotString.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => {  assert.equal(data.assertions[2].method, 'isString', 'A JSON is a string'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
