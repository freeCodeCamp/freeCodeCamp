---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2
forumTopicId: 301604
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
<code>property</code> asserts that the actual object has a given property.

</section>

## Instructions
<section id='instructions'>
Use <code>assert.property()</code> or <code>assert.notProperty()</code> to make the tests pass. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - property vs. notProperty.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[0].method, 'notProperty', 'A car has not wings'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - property vs. notProperty.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[1].method, 'property', 'planes have engines'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - property vs. notProperty.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[2].method, 'property', 'Cars have wheels'); }, xhr => { throw new Error(xhr.responseText); })

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
