---
id: 587d824d367417b2b2512c50
title: Test if a Value is an Array
challengeType: 2
videoUrl: ''
localeTitle: Teste se um valor é uma matriz
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=10").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isArray vs. isNotArray
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=10").then(data => {  assert.equal(data.assertions[0].method, "isArray", "String.prototype.split() returns an Array"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isArray vs. isNotArray
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=10").then(data => {  assert.equal(data.assertions[1].method, "isNotArray", "Array.prototype.indexOf() returns a number"); }, xhr => { throw new Error(xhr.responseText); })'

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
