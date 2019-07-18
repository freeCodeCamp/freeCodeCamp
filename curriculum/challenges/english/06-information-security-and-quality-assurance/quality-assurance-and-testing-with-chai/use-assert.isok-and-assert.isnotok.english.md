---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

<code>isOk()</code> will test for a truthy value and <code>isNotOk()</code> will test for a falsy value.
Truthy reference: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
Falsy reference: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isOk()</code> or <code>assert.isNotOk()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isOk vs. isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[0].method, 'isNotOk', 'Null is falsey'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isOk vs. isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[1].method, 'isOk','A string is truthy'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isOk vs. isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[2].method, 'isOk', 'true is truthy'); }, xhr => { throw new Error(xhr.responseText); })

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
