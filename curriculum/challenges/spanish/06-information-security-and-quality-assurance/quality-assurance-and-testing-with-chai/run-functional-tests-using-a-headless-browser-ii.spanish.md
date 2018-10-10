---
id: 587d8250367417b2b2512c5d
title: Run Functional Tests using a Headless Browser II
challengeType: 2
videoUrl: ''
localeTitle: Ejecutar pruebas funcionales utilizando un navegador sin cabeza II
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Este ejercicio es similar al anterior. Mira el código para direcciones. Siga el orden de las aserciones, nos basamos en ello. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Afirmar que la solicitud del navegador sin cabeza tuvo éxito
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[0].method, "browser.success"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'afirma que el texto dentro del elemento "span # name" es "Amerigo"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[1].method, "browser.text"); assert.equal(data.assertions[1].args[0], "\"span#name\""); assert.equal(data.assertions[1].args[1], "\"Amerigo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'afirma que el texto dentro del elemento "span # surname" es "Vespucci"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[2].method, "browser.text"); assert.equal(data.assertions[2].args[0], "\"span#surname\""); assert.equal(data.assertions[2].args[1], "\"Vespucci\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Afirmar que el elemento "span # dates" existe y su conteo es 1'
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
