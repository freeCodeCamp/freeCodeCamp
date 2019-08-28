---
id: 587d824a367417b2b2512c46
title: Learn How JavaScript Assertions Work
challengeType: 2
forumTopicId: 301589
localeTitle: Узнайте, как работают JavaScript-утверждения
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isNull()</code> or <code>assert.isNotNull()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isNull vs. isNotNull
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(data => {  assert.equal(data.assertions[0].method, 'isNull', 'Null is null'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isNull vs. isNotNull
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(data => {  assert.equal(data.assertions[1].method, 'isNotNull', '1 is not null'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
