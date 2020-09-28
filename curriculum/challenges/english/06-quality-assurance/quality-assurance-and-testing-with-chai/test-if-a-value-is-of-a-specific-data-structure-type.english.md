---
id: 587d824e367417b2b2512c56
title: Test if a Value is of a Specific Data Structure Type
challengeType: 2
forumTopicId: 301601
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
<code>#typeOf</code> asserts that value’s type is the given string, as determined by <code>Object.prototype.toString</code>.

</section>

## Instructions
<section id='instructions'>
Use <code>assert.typeOf()</code> or <code>assert.notTypeOf()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - typeOf vs. notTypeOf.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[0].method, 'typeOf', 'myCar is typeOf Object'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - typeOf vs. notTypeOf.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[1].method, 'typeOf', 'Car.model is a String'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - typeOf vs. notTypeOf.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[2].method, 'notTypeOf', 'Plane.wings is a Number (not a String)'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - typeOf vs. notTypeOf.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[3].method, 'typeOf', 'Plane.engines is an Array'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - typeOf vs. notTypeOf.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(data => { assert.equal(data.assertions[4].method, 'typeOf', 'Car.wheels is a Number'); }, xhr => { throw new Error(xhr.responseText); })

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
