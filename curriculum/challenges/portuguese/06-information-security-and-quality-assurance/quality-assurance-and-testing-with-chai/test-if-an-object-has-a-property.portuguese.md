---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2
videoUrl: ''
localeTitle: Teste se um objeto tem uma propriedade
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #property afirma que o objeto real tem uma determinada propriedade. Use #property ou #notProperty quando apropriado </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - propriedade vs. não Propriedade
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.assertions[0].method, "notProperty", "A car has not wings"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - propriedade vs. não Propriedade
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.assertions[1].method, "property", "planes have engines"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação correta - propriedade vs. não Propriedade
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.assertions[2].method, "property", "Cars have wheels"); }, xhr => { throw new Error(xhr.responseText); })'

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
