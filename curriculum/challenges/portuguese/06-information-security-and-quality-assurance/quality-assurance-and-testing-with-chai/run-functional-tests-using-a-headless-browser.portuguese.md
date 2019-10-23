---
id: 587d824f367417b2b2512c5c
title: Run Functional Tests using a Headless Browser
challengeType: 2
videoUrl: ''
localeTitle: Executar testes funcionais usando um navegador sem cabeçalho
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Nos próximos desafios, vamos simular a interação humana com uma página usando um dispositivo chamado &#39;Headless Browser&#39;. Um navegador sem cabeçalho é um navegador da web sem interface gráfica com o usuário. Esses tipos de ferramentas são particularmente úteis para testar páginas da Web, pois são capazes de renderizar e entender HTML, CSS e JavaScript da mesma maneira que um navegador faria. Para esses desafios, estamos usando o Zombie.JS. É um navegador leve que é totalmente baseado em JS, sem depender de binários adicionais para serem instalados. Esse recurso faz com que seja utilizável em um ambiente como o Glitch. Existem muitas outras opções (mais poderosas). <br> Olhe para os exemplos no código para as instruções do exercício Siga a ordem de afirmações, nós confiamos nele. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: afirmar que a solicitação do navegador sem cabeçalho foi bem-sucedida
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.assertions[0].method, "browser.success"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'afirma que o texto dentro do elemento "span # name" é "Cristoforo"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.assertions[1].method, "browser.text"); assert.equal(data.assertions[1].args[0], "\"span#name\""); assert.equal(data.assertions[1].args[1], "\"Cristoforo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Afirmar que o texto dentro do elemento "span # surname" é "Colombo"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.assertions[2].method, "browser.text"); assert.equal(data.assertions[2].args[0], "\"span#surname\""); assert.equal(data.assertions[2].args[1], "\"Colombo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'asseverar que o elemento "span # dates" existe e sua contagem é 1'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.assertions[3].method, "browser.element"); assert.equal(data.assertions[3].args[0], "\"span#dates\""); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })'

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
