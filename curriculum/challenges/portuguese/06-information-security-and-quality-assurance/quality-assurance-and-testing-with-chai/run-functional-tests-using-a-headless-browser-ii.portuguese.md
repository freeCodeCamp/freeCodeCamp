---
id: 587d8250367417b2b2512c5d
title: Run Functional Tests using a Headless Browser II
challengeType: 2
videoUrl: ''
localeTitle: Executar testes funcionais usando um navegador sem cabeça II
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Este exercício é semelhante ao anterior. Veja o código para direções. Siga a ordem de afirmações, contamos com isso. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: afirmar que a solicitação do navegador sem cabeçalho foi bem-sucedida
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[0].method, "browser.success"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'afirma que o texto dentro do elemento "span # name" é "Amerigo"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[1].method, "browser.text"); assert.equal(data.assertions[1].args[0], "\"span#name\""); assert.equal(data.assertions[1].args[1], "\"Amerigo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'asseverar que o texto dentro do elemento "span # surname" é "Vespucci"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[2].method, "browser.text"); assert.equal(data.assertions[2].args[0], "\"span#surname\""); assert.equal(data.assertions[2].args[1], "\"Vespucci\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'asseverar que o elemento "span # dates" existe e sua contagem é 1'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[3].method, "browser.element"); assert.equal(data.assertions[3].args[0], "\"span#dates\""); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })'

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
