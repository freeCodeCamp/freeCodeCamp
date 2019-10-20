---
id: 5900f3851000cf542c50fe98
challengeType: 5
title: 'Problem 25: 1000-digit Fibonacci number'
videoUrl: ''
localeTitle: 'Problema 25: número Fibonacci de 1000 dígitos'
---

## Description
<section id="description"> A seqüência de Fibonacci é definida pela relação de recorrência: <div style="padding-left: 4em;"> F <sub>n</sub> = F <sub>n − 1</sub> + F <sub>n − 2</sub> , onde F <sub>1</sub> = 1 e F <sub>2</sub> = 1. </div> Por isso, os primeiros 12 termos serão: <div style="padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;"><div> F <sub>1</sub> = 1 </div><div> F <sub>2</sub> = 1 </div><div> F <sub>3</sub> = 2 </div><div> F <sub>4</sub> = 3 </div><div> F <sub>5</sub> = 5 </div><div> F <sub>6</sub> = 8 </div><div> F <sub>7</sub> = 13 </div><div> F <sub>8</sub> = 21 </div><div> F <sub>9</sub> = 34 </div><div> F <sub>10</sub> = 55 </div><div> F <sub>11</sub> = 89 </div><div> F <sub>12</sub> = 144 </div></div> O termo 12, F <sub>12,</sub> é o primeiro termo para conter três dígitos. Qual é o índice do primeiro termo na seqüência de Fibonacci para conter <var>n</var> dígitos? </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>digitFibonacci(5)</code> deve retornar 21.
    testString: 'assert.strictEqual(digitFibonacci(5), 21, "<code>digitFibonacci(5)</code> should return 21.");'
  - text: <code>digitFibonacci(10)</code> deve retornar 45.
    testString: 'assert.strictEqual(digitFibonacci(10), 45, "<code>digitFibonacci(10)</code> should return 45.");'
  - text: <code>digitFibonacci(15)</code> deve retornar 69.
    testString: 'assert.strictEqual(digitFibonacci(15), 69, "<code>digitFibonacci(15)</code> should return 69.");'
  - text: <code>digitFibonacci(20)</code> deve retornar 93.
    testString: 'assert.strictEqual(digitFibonacci(20), 93, "<code>digitFibonacci(20)</code> should return 93.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function digitFibonacci(n) {
  // Good luck!
  return n;
}

digitFibonacci(20);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
