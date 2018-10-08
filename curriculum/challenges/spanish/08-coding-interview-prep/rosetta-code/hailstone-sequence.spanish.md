---
title: Hailstone sequence
id: 595608ff8bcd7a50bd490181
localeTitle: 595608ff8bcd7a50bd490181
challengeType: 5
---

## Description
<section id='description'> 
<p> La secuencia de números de Hailstone se puede generar a partir de un entero positivo inicial, n mediante: </p> 
Si n es 1, la secuencia termina. 
Si n es par, entonces el siguiente n de la secuencia <code>= n/2</code> 
Si n es impar, entonces el siguiente n de la secuencia <code>= (3 * n) + 1</code> <p> La <a href="https://en.wikipedia.org/wiki/Collatz conjecture" title="wp: conjetura de Collatz">conjetura</a> (no probada) de <a href="https://en.wikipedia.org/wiki/Collatz conjecture" title="wp: conjetura de Collatz">Collatz</a> es que la secuencia de granizo para cualquier número inicial siempre termina. </p> 
<p> La secuencia de granizo también se conoce como números de granizo (porque los valores suelen estar sujetos a múltiples descensos y ascensos como granizos en una nube), o como la secuencia de Collatz. </p> 
Tarea: 
Crea una rutina para generar la secuencia de granizo para un número. 
Use la rutina para mostrar que la secuencia de granizo para el número 27 tiene 112 elementos que comienzan con <code>27, 82, 41, 124</code> y que terminan con <code>8, 4, 2, 1</code> 
Muestre el número menos de 100,000 que tiene la secuencia de granizo más larga en conjunto con la longitud de esa secuencia. (¡Pero no muestres la secuencia real!) Ver también: 
<a href="http://xkcd.com/710" title="enlace: http://xkcd.com/710">xkcd</a> (humorístico). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hailstoneSequence</code> es una función.
    testString: 'assert(typeof hailstoneSequence === "function", "<code>hailstoneSequence</code> is a function.");'
  - text: &#39; <code>hailstoneSequence()</code> debe devolver <code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code> &#39;
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
// noprotect
function hailstoneSequence () {
  const res = [];

  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  const h = hailstone(27);
  const hLen = h.length;
  res.push([...h.slice(0, 4), ...h.slice(hLen - 4, hLen)]);

  let n = 0;
  let max = 0;
  for (let i = 100000; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }
  res.push([max, n]);

  return res;
}

```

</section>
