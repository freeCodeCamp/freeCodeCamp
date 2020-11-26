---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2
forumTopicId: 301607
---

## Description

<section id='description'>

As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

`isOk()` will test for a truthy value, and `isNotOk()` will test for a falsy value.

To learn more about truthy and falsy values, try our <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer" target="_blank">Falsy Bouncer</a> challenge.

</section>

## Instructions

<section id='instructions'>

Within `tests/1_unit-tests.js` under the test labelled `#3` in the `Basic Assertions` suite, change each `assert` to either `assert.isOk()` or `assert.isNotOk()` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the correct method for the first assertion - `isOk` vs. `isNotOk`.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[0].method, 'isNotOk', 'Null is falsy'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the correct method for the second assertion - `isOk` vs. `isNotOk`.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[1].method, 'isOk','A string is truthy'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the correct method for the third assertion - `isOk` vs. `isNotOk`.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[2].method, 'isOk', 'true is truthy'); }, xhr => { throw new Error(xhr.responseText); })
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
