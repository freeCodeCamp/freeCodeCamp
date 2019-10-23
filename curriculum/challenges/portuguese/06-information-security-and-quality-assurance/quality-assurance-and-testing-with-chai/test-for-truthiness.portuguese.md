---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
videoUrl: ''
localeTitle: Teste de veracidade
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Use assert.isTrue () ou assert.isNotTrue () para fazer os testes passarem. .IsTrue (true) e .isNotTrue (todo o resto) passarão. .isFalse () e .isNotFalse () também existem. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - isTrue vs. isNotTrue
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {  assert.equal(data.assertions[0].method, "isTrue", "True is true"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - isTrue vs. isNotTrue
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {  assert.equal(data.assertions[1].method, "isTrue", "Double negation of a truthy value is true"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - isTrue vs. isNotTrue
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {  assert.equal(data.assertions[2].method, "isNotTrue", "A truthy object is not true - neither is a false one"); }, xhr => { throw new Error(xhr.responseText); })'

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
