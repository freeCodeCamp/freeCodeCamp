---
id: 587d824f367417b2b2512c59
title: Run Functional Tests on API Endpoints using Chai-HTTP II
challengeType: 2
videoUrl: ''
localeTitle: Executar testes funcionais em terminais da API usando o Chai-HTTP II
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Substitua assert.fail (). Teste o status e a resposta de texto. Faça o teste passar. Enviar seu nome na consulta anexando? Name = <your_name> , o endpoint com responde com &#39;olá <your_name> &#39;. </your_name></your_name></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=1").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Você deve testar para 'res.status' == 200
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=1").then(data => { assert.equal(data.assertions[0].method, "equal"); assert.equal(data.assertions[0].args[0], "res.status"); assert.equal(data.assertions[0].args[1], "200");}, xhr => { throw new Error(xhr.responseText); })'
  - text: Você deve testar 'res.text' == 'hello Guest'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=1").then(data => { assert.equal(data.assertions[1].method, "equal"); assert.equal(data.assertions[1].args[0], "res.text"); assert.match(data.assertions[1].args[1], /hello [\w\d_-]/);}, xhr => { throw new Error(xhr.responseText); })'

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
