---
id: 587d824e367417b2b2512c57
title: Test if an Object is an Instance of a Constructor
challengeType: 2
videoUrl: ''
localeTitle: Probar si un objeto es una instancia de un constructor
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo a partir del siguiente proyecto inicial en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #instanceOf afirma que un objeto es una instancia de un constructor. Use #instanceOf o #notInstanceOf cuando sea apropiado </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - instanceOf vs. notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[0].method, "notInstanceOf", "myCar is not an instance of Plane"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - instanceOf vs. notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[1].method, "instanceOf", "airlinePlane is an instance of Plane"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - instanceOf vs. notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[2].method, "instanceOf", "everything is an Object in JavaScript..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - instanceOf vs. notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[3].method, "notInstanceOf", "myCar.wheels is not an instance of String"); }, xhr => { throw new Error(xhr.responseText); })'

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
