---
title: Extensible prime generator
id: 598ee8b91b410510ae82efef
challengeType: 5
videoUrl: ''
localeTitle: Generador principal extensible
---

## Description
<section id="description"><p> Escriba un generador de números primos, en orden, que se ajustará automáticamente para adaptarse a la generación de cualquier primo razonablemente alto. </p> El generador debe ser capaz de: Mostrar los primeros <b>n</b> números primos. Mostrar los números primos en un rango. Mostrar el número de números primos en un rango. Mostrar el <b><sup>número</sup></b> primo n. <p> La función debe tener dos parámetros. El primero recibirá <b>n</b> o el rango como una matriz. El segundo recibirá un valor booleano, que especifica si la función devuelve los números primos como una matriz o un único número (el número de números primos en el rango o la <b><sup>enésima</sup></b> primo). De acuerdo con los parámetros, la función debe devolver una matriz. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>primeGenerator</code> es una función.
    testString: 'assert(typeof primeGenerator === "function", "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> es una función.
    testString: 'assert.deepEqual(primeGenerator(20, true), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> es una función.
    testString: 'assert.deepEqual(primeGenerator([100, 150], true), [101, 103, 107, 109, 113, 127, 131, 137, 139, 149], "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> es una función.
    testString: 'assert.equal(primeGenerator([7700, 8000], false), 30, "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> es una función.
    testString: 'assert.equal(primeGenerator(10000, false), 104729, "<code>primeGenerator</code> is a function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primeGenerator (num, showPrimes) {
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
