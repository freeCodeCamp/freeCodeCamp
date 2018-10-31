---
id: 587d824b367417b2b2512c47
title: Test if a Variable or Function is Defined
challengeType: 2
videoUrl: ''
localeTitle: Probar si una variable o función está definida
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Use assert.isDefined () o assert.isUndefined () para hacer pasar las pruebas </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isDefined vs. isUndefined
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {  assert.equal(data.assertions[0].method, "isDefined", "Null is not undefined"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isDefined vs. isUndefined
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=1").then(data => {  assert.equal(data.assertions[1].method, "isUndefined", "Undefined is undefined"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isDefined vs. isUndefined
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
