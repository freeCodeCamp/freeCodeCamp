---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2
forumTopicId: 301607
localeTitle: Используйте Assert.isOK и Assert.isNotOK
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Используйте assert.isOk () или assert.isNotOk (), чтобы пройти тесты. .isOk (правдивый) и .isNotOk (falsey) пройдут.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isOk()</code> or <code>assert.isNotOk()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isOk vs. isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[0].method, 'isNotOk', 'Null is falsey'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isOk vs. isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[1].method, 'isOk','A string is truthy'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isOk vs. isNotOk
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(data => {  assert.equal(data.assertions[2].method, 'isOk', 'true is truthy'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
