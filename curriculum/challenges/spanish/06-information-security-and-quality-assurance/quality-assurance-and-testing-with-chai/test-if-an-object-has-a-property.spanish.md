---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2
videoUrl: ''
localeTitle: Probar si un objeto tiene una propiedad
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #property afirma que el objeto real tiene una propiedad dada. Use #property o #notProperty cuando sea apropiado </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - propiedad vs. notProperty
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.assertions[0].method, "notProperty", "A car has not wings"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - propiedad vs. notProperty
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=15").then(data => { assert.equal(data.assertions[1].method, "property", "planes have engines"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - propiedad vs. notProperty
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
