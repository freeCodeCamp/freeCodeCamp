---
id: 587d824c367417b2b2512c4f
title: Test if a Value Falls within a Specific Range
challengeType: 2
forumTopicId: 301598
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

<code>.approximately(actual, expected, delta, [message])</code>
Asserts that the actual is equal <code>expected</code>, to within a +/- <code>delta</code> range.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.approximately()</code> to make the tests pass.
Choose the minimum range (3rd parameter) to make the test always pass. It should be less than 1.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should use approximately(actual, expected, range) - You should choose the correct range.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {  assert.equal(data.assertions[0].method, 'approximately');  assert.equal(data.assertions[0].args[2], 0.5, 'weirdNumbers(0.5) is in the range (0.5, 1.5]. It\'s within 1 +/- 0.5'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should use approximately(actual, expected, range) - You should choose the correct range.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(data => {  assert.equal(data.assertions[1].method, 'approximately');  assert.equal(data.assertions[1].args[2], 0.8, 'weirdNumbers(0.2) is in the range (0.2, 1.2]. It\'s within 1 +/- 0.8'); }, xhr => { throw new Error(xhr.responseText); })

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
