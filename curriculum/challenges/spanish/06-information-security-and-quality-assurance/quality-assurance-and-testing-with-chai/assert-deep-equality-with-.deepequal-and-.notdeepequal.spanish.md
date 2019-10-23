---
id: 587d824c367417b2b2512c4c
title: Assert Deep Equality with .deepEqual and .notDeepEqual
challengeType: 2
videoUrl: ''
localeTitle: Afirmar la igualdad profunda con .deepEqual y .notDeepEqual
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . .deepEqual (), .notDeepEqual () .deepEqual () afirma que dos objetos son profundos iguales </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=6").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - deepEqual vs. notDeepEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=6").then(data => {  assert.equal(data.assertions[0].method, "deepEqual", "The order of the keys does not matter"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - deepEqual vs. notDeepEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=6").then(data => {  assert.equal(data.assertions[1].method, "notDeepEqual", "The position of elements within an array does matter"); }, xhr => { throw new Error(xhr.responseText); })'

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
