---
id: 587d824d367417b2b2512c50
title: Test if a Value is an Array
challengeType: 2
forumTopicId: 301600
---

## Description

<section id='description'>

As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

</section>

## Instructions

<section id='instructions'>

Within `tests/1_unit-tests.js` under the test labelled `#11` in the `Arrays` suite, change each `assert` to either `assert.isArray` or `assert.isNotArray` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the correct method for the first assertion - `isArray` vs. `isNotArray`.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(data => {  assert.equal(data.assertions[0].method, 'isArray', 'String.prototype.split() returns an Array'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the correct method for the second assertion - `isArray` vs. `isNotArray`.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(data => {  assert.equal(data.assertions[1].method, 'isNotArray', 'Array.prototype.indexOf() returns a number'); }, xhr => { throw new Error(xhr.responseText); })
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
