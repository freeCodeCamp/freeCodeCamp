---
id: 587d824c367417b2b2512c4c
title: Assert Deep Equality with .deepEqual and .notDeepEqual
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
<code>deepEqual()</code> asserts that two object are deep equal.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.deepEqual()</code> or <code>assert.notDeepEqual()</code> to make the tests pass.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - deepEqual vs. notDeepEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(data => {  assert.equal(data.assertions[0].method, 'deepEqual', 'The order of the keys does not matter'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - deepEqual vs. notDeepEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(data => {  assert.equal(data.assertions[1].method, 'notDeepEqual', 'The position of elements within an array does matter'); }, xhr => { throw new Error(xhr.responseText); })

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
