---
id: 587d824b367417b2b2512c4a
title: Use the Double Equals to Assert Equality
challengeType: 2
forumTopicId: 301609
---

## Description

<section id='description'>

As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

`equal()` compares objects using `==`.

</section>

## Instructions

<section id='instructions'>

Within `tests/1_unit-tests.js` under the test labelled `#5` in the `Equality` suite, change each `assert` to either `assert.equal` or `assert.notEqual` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the correct method for the first assertion - `equal` vs. `notEqual`.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[0].method, 'equal', 'Numbers are coerced into strings with == '); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the correct method for the second assertion - `equal` vs. `notEqual`.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[1].method, 'notEqual', ' == compares object references'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the correct method for the third assertion - `equal` vs. `notEqual`.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[2].method, 'equal', '6 * \'2\' is 12 ! It should be equal to \'12\''); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the correct method for the fourth assertion - `equal` vs. `notEqual`.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(data => {  assert.equal(data.assertions[3].method, 'notEqual', '6 + \'2\' is \'62\'...'); }, xhr => { throw new Error(xhr.responseText); })
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
