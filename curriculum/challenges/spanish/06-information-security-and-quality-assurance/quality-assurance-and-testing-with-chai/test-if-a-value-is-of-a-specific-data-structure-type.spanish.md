---
id: 587d824e367417b2b2512c56
title: Test if a Value is of a Specific Data Structure Type
localeTitle: Probar si un valor es de un tipo específico de estructura de datos
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a> . 
#typeOf afirma que el tipo de valor es la cadena dada, según lo determinado por Object.prototype.toString. 
Use #typeOf o #notTypeOf cuando corresponda 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[0].method, "typeOf", "myCar is typeOf Object"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[1].method, "typeOf", "Car.model is a String"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[2].method, "notTypeOf", "Plane.wings is a Number (not a String)"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[3].method, "typeOf", "Plane.engines is an Array"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Elija la aserción correcta - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[4].method, "typeOf", "Car.wheels is a Number"); }, xhr => { throw new Error(xhr.responseText); })'

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
