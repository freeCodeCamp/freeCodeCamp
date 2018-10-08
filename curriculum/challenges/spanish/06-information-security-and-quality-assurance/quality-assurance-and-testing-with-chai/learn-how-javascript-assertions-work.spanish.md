---
id: 587d824a367417b2b2512c46
title: Learn How JavaScript Assertions Work
localeTitle: Aprende cómo funcionan las afirmaciones de JavaScript
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a> . 
Utilice assert.isNull () o assert.isNotNull () para hacer que se pasen las pruebas. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=0").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isNull vs. isNotNull
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=0").then(data => {  assert.equal(data.assertions[0].method, "isNull", "Null is null"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - isNull vs. isNotNull
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=0").then(data => {  assert.equal(data.assertions[1].method, "isNotNull", "1 is not null"); }, xhr => { throw new Error(xhr.responseText); })'

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
