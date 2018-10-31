---
id: 587d824d367417b2b2512c54
title: Use Regular Expressions to Test a String
challengeType: 2
videoUrl: ''
localeTitle: Usa expresiones regulares para probar una cadena
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #match Afirma que el valor real coincide con la expresión regular del segundo argumento. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=14").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - emparejar contra no coincidir
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=14").then(data => {  assert.equal(data.assertions[0].method, "match", "\"# name: John Doe, age: 35\" matches the regex"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - emparejar contra no coincidir
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=14").then(data => {  assert.equal(data.assertions[1].method, "notMatch", "\"# name: Paul Smith III, age: twenty-four\" does not match the regex (the age must be numeric)"); }, xhr => { throw new Error(xhr.responseText); })'

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
