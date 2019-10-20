---
id: 587d824d367417b2b2512c52
title: Test if a Value is a String
challengeType: 2
forumTopicId: 301599
localeTitle: Проверьте, является ли значение строкой
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #isString утверждает, что фактическое значение является строкой.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isString()</code> or <code>assert.isNotString()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isString vs. isNotString
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => {  assert.equal(data.assertions[0].method, 'isNotString', 'A float number is not a string'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isString vs. isNotString
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => {  assert.equal(data.assertions[1].method, 'isString', 'environment vars are strings (or undefined)'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isString vs. isNotString
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(data => {  assert.equal(data.assertions[2].method, 'isString', 'A JSON is a string'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
