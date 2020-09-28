---
id: 587d824c367417b2b2512c4e
title: Test if One Value is Below or At Least as Large as Another
challengeType: 2
forumTopicId: 301606
localeTitle: Испытайте, если одно значение ниже или, по крайней мере, как большое, как другое
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . .isBelow () =&gt; a &lt;b, .isAtLeast =&gt; a&gt; = b
</section>

## Instructions
<section id='instructions'>
Use <code>assert.isBelow()</code> (i.e. less than) or <code>assert.isAtLeast()</code> (i.e. greater than or equal) to make the tests pass.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isBelow vs. isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[0].method, 'isAtLeast', '5 is at least (>=) 5'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isBelow vs. isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[1].method, 'isAtLeast', '2 * Math.random() is at least 0'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isBelow vs. isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[2].method, 'isBelow', '1 is smaller than 2'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Choose the right assertion - isBelow vs. isAtLeast
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(data => {  assert.equal(data.assertions[3].method, 'isBelow', '2/3 (0.6666) is smaller than 1'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
