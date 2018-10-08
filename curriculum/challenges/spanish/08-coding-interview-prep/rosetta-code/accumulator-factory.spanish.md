---
title: Accumulator factory
id: 594810f028c0303b75339ace
localeTitle: 594810f028c0303b75339ace
challengeType: 5
---

## Description
<section id='description'> 
<p> Cree una función que tome un solo argumento (numérico) y devuelva otra función que sea un acumulador. La función del acumulador devuelto a su vez también toma un solo argumento numérico y devuelve la suma de todos los valores numéricos pasados ​​hasta ese acumulador (incluido el valor inicial pasado cuando se creó el acumulador). </p> 
<p> Reglas: </p> 
<p> No utilice variables globales. </p> 
<p> Insinuación: </p> 
<p> Los cierres salvan el estado exterior. </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>accumulator</code> es una función.
    testString: 'assert(typeof accumulator === "function", "<code>accumulator</code> is a function.");'
  - text: <code>accumulator(0)</code> debe devolver una función.
    testString: 'assert(typeof accumulator(0) === "function", "<code>accumulator(0)</code> should return a function.");'
  - text: <code>accumulator(0)(2)</code> debe devolver un número.
    testString: 'assert(typeof accumulator(0)(2) === "number", "<code>accumulator(0)(2)</code> should return a number.");'
  - text: &#39;Pasar los valores 3, -4, 1.5 y 5 debería devolver 5.5.&#39;
    testString: 'assert(testFn(5) === 5.5, "Passing in the values 3, -4, 1.5, and 5 should return 5.5.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function accumulator (sum) {
  // Good luck!
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
function accumulator (sum) {
  return function (n) {
    return sum += n;
  };
}

```

</section>
