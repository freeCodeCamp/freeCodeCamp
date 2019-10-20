---
title: Hailstone sequence
id: 595608ff8bcd7a50bd490181
challengeType: 5
videoUrl: ''
localeTitle: Secuencia de granizo
---

## Description
<section id="description"><p> La secuencia de números de Hailstone se puede generar a partir de un entero positivo inicial, n mediante: </p> Si n es 1, entonces la secuencia termina. Si n es par, entonces el siguiente n de la secuencia <code>= n/2</code> Si n es impar, entonces el siguiente n de la secuencia <code>= (3 * n) + 1</code> <p> La <a href="https://en.wikipedia.org/wiki/Collatz conjecture" title="wp: conjetura de Collatz">conjetura</a> (no probada) de <a href="https://en.wikipedia.org/wiki/Collatz conjecture" title="wp: conjetura de Collatz">Collatz</a> es que la secuencia de granizo para cualquier número inicial siempre termina. </p><p> La secuencia de granizo también se conoce como números de granizo (porque los valores suelen estar sujetos a múltiples descensos y ascensos como granizos en una nube), o como la secuencia de Collatz. </p> Tarea: Cree una rutina para generar la secuencia de granizo para un número. Usa la rutina para mostrar que la secuencia de granizo para el número 27 tiene 112 elementos, comenzando con <code>27, 82, 41, 124</code> y terminando con <code>8, 4, 2, 1</code> Muestra el número menor de 100,000 que tiene la secuencia de granizo más larga junto con esa longitud de la secuencia. (¡Pero no muestres la secuencia real!) Ver también: <a href="http://xkcd.com/710" title="enlace: http://xkcd.com/710">xkcd</a> (humorístico). </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hailstoneSequence</code> es una función.
    testString: 'assert(typeof hailstoneSequence === "function", "<code>hailstoneSequence</code> is a function.");'
  - text: '<code>hailstoneSequence()</code> debe devolver <code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code>'
    testString: 'assert.deepEqual(hailstoneSequence(), res, "<code>hailstoneSequence()</code> should return <code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function hailstoneSequence () {
  const res = [];
  // Good luck!

  return res;
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
