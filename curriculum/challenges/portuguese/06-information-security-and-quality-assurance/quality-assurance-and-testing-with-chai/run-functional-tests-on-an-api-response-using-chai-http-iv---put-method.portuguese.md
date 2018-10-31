---
id: 587d824f367417b2b2512c5b
title: Run Functional Tests on an API Response using Chai-HTTP IV - PUT method
challengeType: 2
videoUrl: ''
localeTitle: Executar testes funcionais em uma resposta da API usando o método Chai-HTTP IV - PUT
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Este exercício é semelhante ao anterior. Olhe para os detalhes. Enviar {sobrenome: &#39;da Verrazzano&#39;}. Substitua assert.fail () e faça o teste passar. Verifique por 1) status, 2) tipo, 3) body.name, 4) body.surname Siga a ordem de afirmação acima, nós confiamos nele. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Você deve testar o 'res.status' como 200
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.assertions[0].method, "equal"); assert.equal(data.assertions[0].args[0], "res.status"); assert.equal(data.assertions[0].args[1], "200");}, xhr => { throw new Error(xhr.responseText); })'
  - text: Você deve testar 'res.type' como 'application / json'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.assertions[1].method, "equal"); assert.equal(data.assertions[1].args[0], "res.type"); assert.equal(data.assertions[1].args[1], "\"application/json\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: Você deve testar 'res.body.name' para ser 'Giovanni'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.assertions[2].method, "equal"); assert.equal(data.assertions[2].args[0], "res.body.name"); assert.equal(data.assertions[2].args[1], "\"Giovanni\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: Você deve testar 'res.body.surname' para ser 'da Verrazzano'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.assertions[3].method, "equal"); assert.equal(data.assertions[3].args[0], "res.body.surname"); assert.equal(data.assertions[3].args[1], "\"da Verrazzano\"");}, xhr => { throw new Error(xhr.responseText); })'

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
