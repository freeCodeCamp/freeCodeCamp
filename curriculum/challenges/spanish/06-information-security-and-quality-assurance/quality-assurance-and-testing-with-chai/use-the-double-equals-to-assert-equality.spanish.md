---
id: 587d824b367417b2b2512c4a
title: Use the Double Equals to Assert Equality
localeTitle: Utilice el doble igual para afirmar la igualdad
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a> . 
.equal (), .notEqual () 
.equal () compara objetos utilizando &#39;==&#39; 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - igual contra notEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {  assert.equal(data.assertions[0].method, "equal", "Numbers are coerced into strings with == "); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - igual contra notEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {  assert.equal(data.assertions[1].method, "notEqual", " == compares object references"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - igual contra notEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {  assert.equal(data.assertions[2].method, "equal", "6 * \"2\" is 12 ! It should be equal to \"12\""); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - igual contra notEqual
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=4").then(data => {  assert.equal(data.assertions[3].method, "notEqual", "6 + \"2\" is \"62\"..."); }, xhr => { throw new Error(xhr.responseText); })'

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
