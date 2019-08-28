---
id: 587d824b367417b2b2512c47
title: Test if a Variable or Function is Defined
challengeType: 2
forumTopicId: 301602
localeTitle: Проверить, задана ли переменная или функция
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Используйте assert.isDefined () или assert.isUndefined (), чтобы пройти тесты
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isDefined()</code> or <code>assert.isUndefined()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isDefined vs. isUndefined
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[0].method, 'isDefined', 'Null is not undefined'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isDefined vs. isUndefined
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[1].method, 'isUndefined', 'Undefined is undefined'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isDefined vs. isUndefined
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(data => {  assert.equal(data.assertions[2].method, 'isDefined', 'A string is not undefined'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
