---
id: 587d824d367417b2b2512c51
title: Test if an Array Contains an Item
challengeType: 2
forumTopicId: 301603
localeTitle: Проверьте, содержит ли массив Array Item
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> .
</section>

## Instructions
<section id='instructions'>
Use <code>assert.include()</code> or <code>assert.notInclude()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - include vs. notInclude
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(data => {  assert.equal(data.assertions[0].method, 'notInclude', 'It\'s summer in july...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - include vs. notInclude
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(data => {  assert.equal(data.assertions[1].method, 'include', 'JavaScript is a backend language !!'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
