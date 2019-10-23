---
id: 587d824a367417b2b2512c46
title: Learn How JavaScript Assertions Work
challengeType: 2
videoUrl: ''
localeTitle: Aprenda como funcionam as asserções de JavaScript
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Use assert.isNull () ou assert.isNotNull () para fazer os testes passarem. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=0").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isNull vs. isNotNull
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=0").then(data => {  assert.equal(data.assertions[0].method, "isNull", "Null is null"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isNull vs. isNotNull
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=0").then(data => {  assert.equal(data.assertions[1].method, "isNotNull", "1 is not null"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
