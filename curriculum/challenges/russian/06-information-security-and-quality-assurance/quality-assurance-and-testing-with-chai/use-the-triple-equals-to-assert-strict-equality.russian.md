---
id: 587d824b367417b2b2512c4b
title: Use the Triple Equals to Assert Strict Equality
challengeType: 2
forumTopicId: 301610
localeTitle: Используйте Triple Equals для подтверждения строгого равенства
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . .strictEqual (), .notStrictEqual () .strictEqual () сравнивает объекты, используя &#39;===&#39;
</section>

## Instructions
<section id='instructions'>
Use <code>assert.strictEqual()</code> or <code>assert.notStrictEqual()</code> to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - strictEqual vs. notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[0].method, 'notStrictEqual', 'with strictEqual the type must match'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - strictEqual vs. notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[1].method, 'strictEqual', '3*2 = 6...'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - strictEqual vs. notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[2].method, 'strictEqual', '6 * \'2\' is 12. Types match !'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - strictEqual vs. notStrictEqual
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(data => {  assert.equal(data.assertions[3].method, 'notStrictEqual', 'Even if they have the same elements, the Arrays are notStrictEqual'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
