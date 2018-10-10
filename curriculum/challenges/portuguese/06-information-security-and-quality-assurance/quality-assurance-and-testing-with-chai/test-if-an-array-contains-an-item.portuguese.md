---
id: 587d824d367417b2b2512c51
title: Test if an Array Contains an Item
challengeType: 2
videoUrl: ''
localeTitle: Teste se uma matriz contém um item
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=11").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - incluir vs. nãoIncluir
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=11").then(data => {  assert.equal(data.assertions[0].method, "notInclude", "It\"s summer in july..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - incluir vs. nãoIncluir
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=11").then(data => {  assert.equal(data.assertions[1].method, "include", "JavaScript is a backend language !!"); }, xhr => { throw new Error(xhr.responseText); })'

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
