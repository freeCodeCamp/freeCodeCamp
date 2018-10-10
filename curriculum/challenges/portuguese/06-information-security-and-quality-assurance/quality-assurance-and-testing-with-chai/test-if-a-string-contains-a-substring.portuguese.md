---
id: 587d824d367417b2b2512c53
title: Test if a String Contains a Substring
challengeType: 2
videoUrl: ''
localeTitle: Teste se uma String Contiver uma Substring
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #include (on #notInclude) funciona para strings também !! Ele afirma que a cadeia real contém a substring esperada </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=13").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - incluir vs. nãoIncluir
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=13").then(data => {  assert.equal(data.assertions[0].method, "include", "\"Arrow\" contains \"row\"..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - incluir vs. nãoIncluir
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=13").then(data => {  assert.equal(data.assertions[1].method, "notInclude", "... a \"dart\" doesn\"t contain a \"queue\""); }, xhr => { throw new Error(xhr.responseText); })'

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
