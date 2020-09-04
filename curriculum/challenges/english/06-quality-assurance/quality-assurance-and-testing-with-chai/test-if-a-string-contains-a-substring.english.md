---
id: 587d824d367417b2b2512c53
title: Test if a String Contains a Substring
challengeType: 2
forumTopicId: 301597
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

<code>include()</code> and <code>notInclude()</code> work for strings too!
<code>include()</code> asserts that the actual string contains the expected substring.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.include()</code> or <code>assert.notInclude()</code> to make the tests pass.


</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - include vs. notInclude.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => {  assert.equal(data.assertions[0].method, 'include', '\'Arrow\' contains \'row\'...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - include vs. notInclude.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(data => {  assert.equal(data.assertions[1].method, 'notInclude', '... a \'dart\' doesn\'t contain a \'queue\''); }, xhr => { throw new Error(xhr.responseText); })

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
