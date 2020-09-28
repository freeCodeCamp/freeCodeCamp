---
id: 587d824e367417b2b2512c57
title: Test if an Object is an Instance of a Constructor
challengeType: 2
forumTopicId: 301605
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
<code>#instanceOf</code> asserts that an object is an instance of a constructor.

</section>

## Instructions
<section id='instructions'>
Use <code>assert.instanceOf()</code> or <code>assert.notInstanceOf()</code> to make the tests pass. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - instanceOf vs. notInstanceOf.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[0].method, 'notInstanceOf', 'myCar is not an instance of Plane'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - instanceOf vs. notInstanceOf.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[1].method, 'instanceOf', 'airlinePlane is an instance of Plane'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - instanceOf vs. notInstanceOf.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[2].method, 'instanceOf', 'everything is an Object in JavaScript...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - instanceOf vs. notInstanceOf.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[3].method, 'notInstanceOf', 'myCar.wheels is not an instance of String'); }, xhr => { throw new Error(xhr.responseText); })

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
