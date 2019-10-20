---
id: 587d824e367417b2b2512c57
title: Test if an Object is an Instance of a Constructor
challengeType: 2
forumTopicId: 301605
localeTitle: Проверьте, является ли объект экземпляром конструктора
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #instanceOf утверждает, что объект является экземпляром конструктора. Используйте #instanceOf или #notInstanceOf, где это необходимо
</section>

## Instructions
<section id='instructions'>
Use <code>assert.instanceOf()</code> or <code>assert.notInstanceOf()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - instanceOf vs. notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[0].method, 'notInstanceOf', 'myCar is not an instance of Plane'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - instanceOf vs. notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[1].method, 'instanceOf', 'airlinePlane is an instance of Plane'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - instanceOf vs. notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[2].method, 'instanceOf', 'everything is an Object in JavaScript...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - instanceOf vs. notInstanceOf
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(data => { assert.equal(data.assertions[3].method, 'notInstanceOf', 'myCar.wheels is not an instance of String'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
