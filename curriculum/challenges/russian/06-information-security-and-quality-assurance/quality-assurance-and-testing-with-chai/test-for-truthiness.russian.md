---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
forumTopicId: 301596
localeTitle: Тест на правду
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Используйте assert.isTrue () или assert.isNotTrue (), чтобы пройти тесты. .isTrue (true) и .isNotTrue (все остальное). .isFalse () и .isNotFalse () также существуют.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isTrue()</code> or <code>assert.isNotTrue()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isTrue vs. isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[0].method, 'isTrue', 'True is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isTrue vs. isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[1].method, 'isTrue', 'Double negation of a truthy value is true'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isTrue vs. isNotTrue
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(data => {  assert.equal(data.assertions[2].method, 'isNotTrue', 'A truthy object is not true - neither is a false one'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
