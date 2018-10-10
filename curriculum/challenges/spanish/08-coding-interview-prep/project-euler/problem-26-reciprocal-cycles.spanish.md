---
id: 5900f3861000cf542c50fe99
challengeType: 5
title: 'Problem 26: Reciprocal cycles'
videoUrl: ''
localeTitle: 'Problema 26: ciclos recíprocos'
---

## Description
<section id="description"> Una fracción unitaria contiene 1 en el numerador. La representación decimal de las fracciones unitarias con denominadores 2 a 10 se da: <div style="padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;"><div> <sup><sub>Media</sub></sup> = 0,5 </div><div> <sup><sub>1/3</sub></sup> = 0. (3) </div><div> <sup><sub>1/4</sub></sup> = 0,25 </div><div> <sup><sub>1/5</sub></sup> = 0,2 </div><div> <sup><sub>1/6</sub></sup> = 0,1 (6) </div><div> <sup><sub>Séptima</sub></sup> = 0. (142857) </div><div> <sup><sub>1/8</sub></sup> = 0,125 </div><div> <sup><sub>1/9</sub></sup> = 0. (1) </div><div> <sup><sub>1/10</sub></sup> = 0,1 </div></div> Donde 0.1 (6) significa 0.166666 ..., y tiene un ciclo recurrente de 1 dígito. Puede ser visto que <sup><sub>1/7</sub></sup> tiene un ciclo recurrente de 6 dígitos. Encuentre el valor de <var>d</var> &lt; <var>n</var> para el cual <sup>1</sup> / <sub>d</sub> contiene el ciclo recurrente más largo en su parte de fracción decimal. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reciprocalCycles(700)</code> deben devolver 659.
    testString: 'assert(reciprocalCycles(700) == 659, "<code>reciprocalCycles(700)</code> should return 659.");'
  - text: <code>reciprocalCycles(800)</code> deben devolver 743.
    testString: 'assert(reciprocalCycles(800) == 743, "<code>reciprocalCycles(800)</code> should return 743.");'
  - text: <code>reciprocalCycles(900)</code> deben devolver 887.
    testString: 'assert(reciprocalCycles(900) == 887, "<code>reciprocalCycles(900)</code> should return 887.");'
  - text: <code>reciprocalCycles(1000)</code> deben devolver 983.
    testString: 'assert(reciprocalCycles(1000) == 983, "<code>reciprocalCycles(1000)</code> should return 983.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function reciprocalCycles(n) {
  // Good luck!
  return n;
}

reciprocalCycles(1000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
