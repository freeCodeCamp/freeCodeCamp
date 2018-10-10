---
id: 587d824d367417b2b2512c52
title: Test if a Value is a String
challengeType: 2
videoUrl: ''
localeTitle: Teste se um valor é uma string
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #isString afirma que o valor real é uma string. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isString vs. isNotString
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => {  assert.equal(data.assertions[0].method, "isNotString", "A float number is not a string"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isString vs. isNotString
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => {  assert.equal(data.assertions[1].method, "isString", "environment vars are strings (or undefined)"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isString vs. isNotString
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=12").then(data => {  assert.equal(data.assertions[2].method, "isString", "A JSON is a string"); }, xhr => { throw new Error(xhr.responseText); })'

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
