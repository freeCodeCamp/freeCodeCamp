---
id: 587d824e367417b2b2512c56
title: Test if a Value is of a Specific Data Structure Type
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
#typeOf asserts that value’s type is the given string, as determined by Object.prototype.toString.
Use #typeOf or #notTypeOf where appropriate
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: All tests should pass
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - typeOf vs. notTypeOf
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[0].method, "typeOf", "myCar is typeOf Object"); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - typeOf vs. notTypeOf
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[1].method, "typeOf", "Car.model is a String"); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - typeOf vs. notTypeOf
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[2].method, "notTypeOf", "Plane.wings is a Number (not a String)"); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - typeOf vs. notTypeOf
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[3].method, "typeOf", "Plane.engines is an Array"); }, xhr => { throw new Error(xhr.responseText); })'
- text: Choose the right assertion - typeOf vs. notTypeOf
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[4].method, "typeOf", "Car.wheels is a Number"); }, xhr => { throw new Error(xhr.responseText); })'

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
