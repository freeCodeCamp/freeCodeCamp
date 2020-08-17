---
id: 587d824b367417b2b2512c47
title: Test if a Variable or Function is Defined
challengeType: 2
isHidden: false
forumTopicId: 301602
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

</section>

## Instructions
<section id='instructions'>
Use <code>assert.isDefined()</code> or <code>assert.isUndefined()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isDefined vs. isUndefined.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[0].method, 'isDefined', 'Null is not undefined'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isDefined vs. isUndefined.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[1].method, 'isUndefined', 'Undefined is undefined'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isDefined vs. isUndefined.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[2].method, 'isDefined', 'A string is not undefined'); }, xhr => { throw new Error(xhr.responseText); })

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
