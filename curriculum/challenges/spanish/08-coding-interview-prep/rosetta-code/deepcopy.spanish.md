---
title: Deepcopy
id: 596a8888ab7c01048de257d5
challengeType: 5
videoUrl: ''
localeTitle: Copia profunda
---

## Description
<section id="description"> Tarea: <p> Escribe una función que devuelva una copia profunda de un objeto dado. </p><p> La copia no debe ser el mismo objeto que se le dio. </p><p> Esta tarea no probará para: </p> Objetos con propiedades que son funciones Objetos de fecha u objeto con propiedades que son objetos de fecha RegEx u objeto con propiedades que son objetos de RegEx Copia de prototipo </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>deepcopy</code> debe ser una función.
    testString: 'assert(typeof deepcopy === "function", "<code>deepcopy</code> should be a function.");'
  - text: '<code>deepcopy({test: &quot;test&quot;})</code> debe devolver un objeto.'
    testString: 'assert(typeof deepcopy(obj1) === "object", "<code>deepcopy({test: "test"})</code> should return an object.");'
  - text: No debe devolver el mismo objeto que se proporcionó.
    testString: 'assert(deepcopy(obj2) != obj2, "Should not return the same object that was provided.");'
  - text: 'Cuando se pasa un objeto que contiene una matriz, debe devolver una copia profunda del objeto.'
    testString: 'assert.deepEqual(deepcopy(obj2), obj2, "When passed an object containing an array, should return a deep copy of the object.");'
  - text: 'Cuando se pasa un objeto que contiene otro objeto, debe devolver una copia profunda del objeto.'
    testString: 'assert.deepEqual(deepcopy(obj3), obj3, "When passed an object containing another object, should return a deep copy of the object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function deepcopy (obj) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
