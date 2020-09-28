---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2
forumTopicId: 301604
localeTitle: Проверьте, имеет ли объект свойство
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #property утверждает, что фактический объект имеет заданное свойство. Используйте #property или #notProperty, где это необходимо.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.property()</code> or <code>assert.notProperty()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - property vs. notProperty
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[0].method, 'notProperty', 'A car has not wings'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - property vs. notProperty
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[1].method, 'property', 'planes have engines'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - property vs. notProperty
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(data => { assert.equal(data.assertions[2].method, 'property', 'Cars have wheels'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
