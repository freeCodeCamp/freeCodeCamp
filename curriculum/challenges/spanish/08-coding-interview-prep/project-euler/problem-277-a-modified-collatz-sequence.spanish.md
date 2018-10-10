---
id: 5900f4811000cf542c50ff94
challengeType: 5
title: 'Problem 277: A Modified Collatz sequence'
videoUrl: ''
localeTitle: 'Problema 277: Una secuencia de Collatz modificada'
---

## Description
<section id="description"> Se obtiene una secuencia de enteros de Collatz modificada a partir de un valor inicial a1 de la siguiente manera: <p> an + 1 = an / 3 si an es divisible por 3. Denotaremos esto como un gran paso hacia abajo, &quot;D&quot;. </p><p> an + 1 = (4an + 2) / 3 si dividido por 3 da un resto de 1. Denotaremos esto como un paso hacia arriba, &quot;U&quot;. </p><p> an + 1 = (2an - 1) / 3 si dividido por 3 da un resto de 2. Denotaremos esto como un pequeño paso hacia abajo, &quot;d&quot;. </p><p> La secuencia termina cuando algunos an = 1. </p><p> Dado cualquier entero, podemos enumerar la secuencia de pasos. Por ejemplo, si a1 = 231, entonces la secuencia {an} = {231,77,51,17,11,7,10,14,9,3,1} corresponde a los pasos &quot;DdDddUUdDD&quot;. </p><p> Por supuesto, hay otras secuencias que comienzan con esa misma secuencia &quot;DdDddUUdDD ....&quot;. Por ejemplo, si a1 = 1004064, entonces la secuencia es DdDddUUdDDDdUDUUUdDdUUDDDUdDD. De hecho, 1004064 es el a1&gt; 106 más pequeño posible que comienza con la secuencia DdDddUUdDD. </p><p> ¿Cuál es el a1&gt; 1015 más pequeño que comienza con la secuencia &quot;UDDDUdddDDUDDddDdDddDDUDDdUUDd&quot;? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler277()</code> debe devolver 1125977393124310.
    testString: 'assert.strictEqual(euler277(), 1125977393124310, "<code>euler277()</code> should return 1125977393124310.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler277() {
  // Good luck!
  return true;
}

euler277();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
