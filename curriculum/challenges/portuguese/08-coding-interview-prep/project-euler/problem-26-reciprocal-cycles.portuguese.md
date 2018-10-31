---
id: 5900f3861000cf542c50fe99
challengeType: 5
title: 'Problem 26: Reciprocal cycles'
videoUrl: ''
localeTitle: 'Problema 26: Ciclos Recíprocos'
---

## Description
<section id="description"> Uma fração unitária contém 1 no numerador. A representação decimal das frações unitárias com os denominadores 2 a 10 é dada: <div style="padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;"><div> <sup><sub>2/1</sub></sup> = 0,5 </div><div> <sup><sub>3/1</sub></sup> = 0. (3) </div><div> <sup><sub>4/1</sub></sup> = 0,25 </div><div> <sup><sub>5/1</sub></sup> = 0,2 </div><div> <sup><sub>1/6</sub></sup> = 0,1 (6) </div><div> <sup><sub>7/1</sub></sup> = 0. (142857) </div><div> <sup><sub>1/8</sub></sup> = 0,125 </div><div> <sup><sub>9/1</sub></sup> = 0. (1) </div><div> <sup><sub>10/01</sub></sup> = 0,1 </div></div> Onde 0,1 (6) significa 0,166666 ... e tem um ciclo recorrente de 1 dígito. Pode ver-se que <sup><sub>1/7</sub></sup> tem um ciclo repetitivo de 6 dígitos. Encontre o valor de <var>d</var> &lt; <var>n</var> para o qual <sup>1</sup> / <sub>d</sub> contém o ciclo recorrente mais longo em sua parte de fração decimal. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reciprocalCycles(700)</code> devem retornar 659.
    testString: 'assert(reciprocalCycles(700) == 659, "<code>reciprocalCycles(700)</code> should return 659.");'
  - text: <code>reciprocalCycles(800)</code> devem retornar 743.
    testString: 'assert(reciprocalCycles(800) == 743, "<code>reciprocalCycles(800)</code> should return 743.");'
  - text: <code>reciprocalCycles(900)</code> devem retornar 887.
    testString: 'assert(reciprocalCycles(900) == 887, "<code>reciprocalCycles(900)</code> should return 887.");'
  - text: <code>reciprocalCycles(1000)</code> devem retornar 983.
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
