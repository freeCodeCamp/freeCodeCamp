---
id: 587d824b367417b2b2512c4b
title: Use the Triple Equals to Assert Strict Equality
challengeType: 2
videoUrl: ''
localeTitle: Use o Triple Equals para afirmar a igualdade estrita
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . .strictEqual (), .notStrictEqual () .strictEqual () compara objetos usando &#39;===&#39; </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - strictEqual vs. notStrictEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {  assert.equal(data.assertions[0].method, "notStrictEqual", "with strictEqual the type must match"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - strictEqual vs. notStrictEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {  assert.equal(data.assertions[1].method, "strictEqual", "3*2 = 6..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - strictEqual vs. notStrictEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {  assert.equal(data.assertions[2].method, "strictEqual", "6 * \"2\" is 12. Types match !"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - strictEqual vs. notStrictEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=5").then(data => {  assert.equal(data.assertions[3].method, "notStrictEqual", "Even if they have the same elements, the Arrays are notStrictEqual"); }, xhr => { throw new Error(xhr.responseText); })'

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
