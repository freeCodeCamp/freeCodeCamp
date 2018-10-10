---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
videoUrl: ''
localeTitle: Prueba de la verdad
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Utilice assert.isTrue () o assert.isNotTrue () para hacer que se pasen las pruebas. .isTrue (verdadero) y .isNotTrue (todo lo demás) pasarán. .isFalse () y .isNotFalse () también existen. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isTrue vs. isNotTrue
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {  assert.equal(data.assertions[0].method, "isTrue", "True is true"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isTrue vs. isNotTrue
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {  assert.equal(data.assertions[1].method, "isTrue", "Double negation of a truthy value is true"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isTrue vs. isNotTrue
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=3").then(data => {  assert.equal(data.assertions[2].method, "isNotTrue", "A truthy object is not true - neither is a false one"); }, xhr => { throw new Error(xhr.responseText); })'

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
