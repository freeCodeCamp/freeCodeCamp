---
id: 587d824d367417b2b2512c54
title: Use Regular Expressions to Test a String
challengeType: 2
forumTopicId: 301608
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
<code>match()</code> asserts that the actual value matches the second argument regular expression.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.match()</code> or <code>assert.notMatch()</code> to make the tests pass.
  
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=14').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - match vs. notMatch.
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=14'').then(data => {  assert.equal(data.assertions[0].method, ''match'', ''\''# name: John Doe, age: 35\'' matches the regex''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: You should choose the right assertion - match vs. notMatch.
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/get-tests?type=unit&n=14'').then(data => {  assert.equal(data.assertions[1].method, ''notMatch'', ''\''# name: Paul Smith III, age: twenty-four\'' does not match the regex (the age must be numeric)''); }, xhr => { throw new Error(xhr.responseText); })'

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
