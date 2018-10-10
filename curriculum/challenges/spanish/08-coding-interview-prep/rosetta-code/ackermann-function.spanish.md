---
title: Ackermann function
id: 594810f028c0303b75339acf
challengeType: 5
videoUrl: ''
localeTitle: Función ackermann
---

## Description
<section id="description"><p> La función de Ackermann es un ejemplo clásico de una función recursiva, especialmente porque no es una función recursiva primitiva. Crece muy rápidamente en valor, al igual que el tamaño de su árbol de llamadas. </p><p> La función de Ackermann se define generalmente de la siguiente manera: </p> $$ A (m, n) = \ begin {cases} n + 1 &amp; \ mbox {if} m = 0 \\ A (m-1, 1) &amp; \ mbox {if} m&gt; 0 \ mbox {and} n = 0 \\ A (m-1, A (m, n-1)) &amp; \ mbox {if} m&gt; 0 \ mbox {y} n&gt; 0. \ end {cases} $$ <p> Sus argumentos nunca son negativos y siempre termina. Escriba una función que devuelva el valor de $ A (m, n) $. Se prefiere la precisión arbitraria (ya que la función crece tan rápidamente), pero no es obligatoria. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ack</code> es una función.
    testString: 'assert(typeof ack === "function", "<code>ack</code> is a function.");'
  - text: '<code>ack(0, 0)</code> debe devolver 1.'
    testString: 'assert(ack(0, 0) === 1, "<code>ack(0, 0)</code> should return 1.");'
  - text: '<code>ack(1, 1)</code> debe devolver 3.'
    testString: 'assert(ack(1, 1) === 3, "<code>ack(1, 1)</code> should return 3.");'
  - text: '<code>ack(2, 5)</code> debe devolver 13.'
    testString: 'assert(ack(2, 5) === 13, "<code>ack(2, 5)</code> should return 13.");'
  - text: '<code>ack(3, 3)</code> debe devolver 61.'
    testString: 'assert(ack(3, 3) === 61, "<code>ack(3, 3)</code> should return 61.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function ack (m, n) {
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
