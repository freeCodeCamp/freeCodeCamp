---
title: Emirp primes
id: 599d0ba974141b0f508b37d5
challengeType: 5
videoUrl: ''
localeTitle: Bonos Emirp
---

## Description
<section id="description"><p> Un emirp (primo deletreado al revés) son primos que cuando se invierten (en su representación decimal) son primos diferentes. </p><p> Escriba una función que debería ser capaz de: Mostrar los primeros <b>n</b> eprimes números. Mostrar los números de eprimes en un rango. Mostrar el número de eprimes en un rango. Mostrar el <b>n <sup>número de</sup></b> eprimes. </p><p> La función debe tener dos parámetros. El primero recibirá <b>n</b> o el rango como una matriz. El segundo recibirá un valor booleano, que especifica si la función devuelve los eprimes como una matriz o un único número (el número de números primos en el rango o la <b><sup>enésima</sup></b> primo). De acuerdo con los parámetros, la función debe devolver una matriz o un número. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>emirps</code> es una función.
    testString: 'assert(typeof emirps === "function", "<code>emirps</code> is a function.");'
  - text: '<code>emirps(20,true)</code> deberían devolver <code>[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]</code>'
    testString: 'assert.deepEqual(emirps(20, true), [13, 17, 31, 37, 71, 73, 79, 97, 107, 113, 149, 157, 167, 179, 199, 311, 337, 347, 359, 389], "<code>emirps(20,true)</code> should return <code>[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]</code>");'
  - text: <code>emirps(10000)</code> deben devolver <code>948349</code>
    testString: 'assert.deepEqual(emirps(10000), 948349, "<code>emirps(10000)</code> should return <code>948349</code>");'
  - text: '<code>emirps([7700,8000],true)</code> deben devolver <code>[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]</code>'
    testString: 'assert.deepEqual(emirps([7700, 8000], true), [7717, 7757, 7817, 7841, 7867, 7879, 7901, 7927, 7949, 7951, 7963], "<code>emirps([7700,8000],true)</code> should return <code>[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]</code>");'
  - text: '<code>emirps([7700,8000],true)</code> debe devolver <code>11</code>'
    testString: 'assert.deepEqual(emirps([7700, 8000], false), 11, "<code>emirps([7700,8000],true)</code> should return <code>11</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function emirps(n) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
