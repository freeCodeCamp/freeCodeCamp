---
id: 587d824d367417b2b2512c51
title: Test if an Array Contains an Item
localeTitle: Probar si una matriz contiene un elemento
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=11").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - incluir vs. noIncluir
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=11").then(data => {  assert.equal(data.assertions[0].method, "notInclude", "It\"s summer in july..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - incluir vs. noIncluir
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
