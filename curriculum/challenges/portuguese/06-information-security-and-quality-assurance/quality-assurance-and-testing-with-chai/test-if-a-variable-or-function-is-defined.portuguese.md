---
id: 587d824b367417b2b2512c47
title: Test if a Variable or Function is Defined
challengeType: 2
videoUrl: ''
localeTitle: Teste se uma variável ou função é definida
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Use assert.isDefined () ou assert.isUndefined () para fazer os testes passarem </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isDefined vs. isUndefined
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {  assert.equal(data.assertions[0].method, "isDefined", "Null is not undefined"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isDefined vs. isUndefined
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {  assert.equal(data.assertions[1].method, "isUndefined", "Undefined is undefined"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - isDefined vs. isUndefined
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {  assert.equal(data.assertions[2].method, "isDefined", "A string is not undefined"); }, xhr => { throw new Error(xhr.responseText); })'

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
