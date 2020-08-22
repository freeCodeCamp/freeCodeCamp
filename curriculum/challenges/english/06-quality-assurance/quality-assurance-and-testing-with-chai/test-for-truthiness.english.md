---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
isHidden: false
forumTopicId: 301596
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

<code>isTrue()</code> will test for the boolean value true and <code>isNotTrue()</code> will pass when given anything but the boolean value of true.

```js
assert.isTrue(true, 'this will pass with the boolean value true');
assert.isTrue('true', 'this will NOT pass with the string value 'true');
assert.isTrue(1, 'this will NOT pass with the number value 1');
```


<code>isFalse()</code> and <code>isNotFalse()</code> also exist and behave similary to their true counterparts except they look for the boolean value of false. 
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isTrue()</code> or <code>assert.isNotTrue()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isTrue vs. isNotTrue.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[0].method, 'isTrue', 'True is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isTrue vs. isNotTrue.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[1].method, 'isTrue', 'Double negation of a truthy value is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should choose the right assertion - isTrue vs. isNotTrue.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[2].method, 'isNotTrue', 'A truthy object is not true - neither is a false one'); }, xhr => { throw new Error(xhr.responseText); })

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
