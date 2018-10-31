---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2
videoUrl: ''
localeTitle: Use Assert.isOK e Assert.isNotOK
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Use assert.isOk () ou assert.isNotOk () para fazer os testes passarem. .isOk (truthy) e .isNotOk (falsey) vão passar. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isOk vs. isNotOk
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {  assert.equal(data.assertions[0].method, "isNotOk", "Null is falsey"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isOk vs. isNotOk
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {  assert.equal(data.assertions[1].method, "isOk","A string is truthy"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isOk vs. isNotOk
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {  assert.equal(data.assertions[2].method, "isOk", "true is truthy"); }, xhr => { throw new Error(xhr.responseText); })'

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
