---
id: 587d824c367417b2b2512c4d
title: Compare the Properties of Two Elements
challengeType: 2
isHidden: false
forumTopicId: 301588
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
</section>

## Instructions
<section id='instructions'>

Use <code>assert.isAbove()</code>(i.e. greater) or <code>assert.isAtMost()</code> (i.e. less than or equal) to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isAbove vs. isAtMost.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[0].method, 'isAtMost', '5 is at most (<=) 5'); }, xhr => { throw new Error(xhr.responseText); })
  - text:  You should choose the right assertion - isAbove vs. isAtMost.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[1].method, 'isAbove', '1 is greater than 0'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isAbove vs. isAtMost.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[2].method, 'isAbove', 'Math.PI = 3.14159265 is greater than 3'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isAbove vs. isAtMost.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(data => {  assert.equal(data.assertions[3].method, 'isAtMost', '1 - Math.random() is > 0 and <= 1. It is atMost 1 !'); }, xhr => { throw new Error(xhr.responseText); })

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
