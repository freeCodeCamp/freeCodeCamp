---
title: Compare a list of strings
id: 596e457071c35c882915b3e4
challengeType: 5
videoUrl: ''
localeTitle: Compara una lista de cuerdas
---

## Description
<section id="description"><p> Dada una <a href="https://en.wikipedia.org/wiki/List_(abstract_data_type)" title="wp: List_ (abstract_data_type)">lista</a> de muchas cadenas arbitrarias, implemente una función para cada una de las siguientes condiciones: </p> prueba si todos son léxicamente iguales prueba si cada cadena es léxicamente menor que la siguiente (es decir, si la lista está en estricto orden ascendente) </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>allEqual</code> es una función.
    testString: 'assert(typeof allEqual === "function", "<code>allEqual</code> is a function.");'
  - text: <code>azSorted</code> es una función.
    testString: 'assert(typeof azSorted === "function", "<code>azSorted</code> is a function.");'
  - text: '<code>allEqual([&quot;AA&quot;, &quot;AA&quot;, &quot;AA&quot;, &quot;AA&quot;])</code> devuelve true.'
    testString: 'assert(allEqual(testCases[0]), "<code>allEqual(["AA", "AA", "AA", "AA"])</code> returns true.");'
  - text: '<code>azSorted([&quot;AA&quot;, &quot;AA&quot;, &quot;AA&quot;, &quot;AA&quot;])</code> devuelve falso.'
    testString: 'assert(!azSorted(testCases[0]), "<code>azSorted(["AA", "AA", "AA", "AA"])</code> returns false.");'
  - text: '<code>allEqual([&quot;AA&quot;, &quot;ACB&quot;, &quot;BB&quot;, &quot;CC&quot;])</code> devuelve falso.'
    testString: 'assert(!allEqual(testCases[1]), "<code>allEqual(["AA", "ACB", "BB", "CC"])</code> returns false.");'
  - text: '<code>azSorted([&quot;AA&quot;, &quot;ACB&quot;, &quot;BB&quot;, &quot;CC&quot;])</code> devuelve verdadero.'
    testString: 'assert(azSorted(testCases[1]), "<code>azSorted(["AA", "ACB", "BB", "CC"])</code> returns true.");'
  - text: '<code>allEqual([])</code> devuelve true.'
    testString: 'assert(allEqual(testCases[2]), "<code>allEqual([])</code> returns true.");'
  - text: '<code>azSorted([])</code> devuelve true.'
    testString: 'assert(azSorted(testCases[2]), "<code>azSorted([])</code> returns true.");'
  - text: '<code>allEqual([&quot;AA&quot;])</code> devuelve true.'
    testString: 'assert(allEqual(testCases[3]), "<code>allEqual(["AA"])</code> returns true.");'
  - text: '<code>azSorted([&quot;AA&quot;])</code> devuelve true.'
    testString: 'assert(azSorted(testCases[3]), "<code>azSorted(["AA"])</code> returns true.");'
  - text: '<code>allEqual([&quot;BB&quot;, &quot;AA&quot;])</code> devuelve false.'
    testString: 'assert(!allEqual(testCases[4]), "<code>allEqual(["BB", "AA"])</code> returns false.");'
  - text: '<code>azSorted([&quot;BB&quot;, &quot;AA&quot;])</code> devuelve falso.'
    testString: 'assert(!azSorted(testCases[4]), "<code>azSorted(["BB", "AA"])</code> returns false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function allEqual (arr) {
  // Good luck!
  return true;
}

function azSorted (arr) {
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
