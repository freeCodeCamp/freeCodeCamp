---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
localeTitle: Utilice Assert.isOK y Assert.isNotOK
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a> . 
Utilice assert.isOk () o assert.isNotOk () para hacer que se pasen las pruebas. 
.isOk (truthy) y .isNotOk (falsey) pasarán. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isOk vs. isNotOk
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {  assert.equal(data.assertions[0].method, "isNotOk", "Null is falsey"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isOk vs. isNotOk
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {  assert.equal(data.assertions[1].method, "isOk","A string is truthy"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isOk vs. isNotOk
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=2").then(data => {  assert.equal(data.assertions[2].method, "isOk", "true is truthy"); }, xhr => { throw new Error(xhr.responseText); })'

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
