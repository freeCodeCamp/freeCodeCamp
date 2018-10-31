---
id: 5900f51d1000cf542c51002f
challengeType: 5
title: 'Problem 433: Steps in Euclid"s algorithm'
videoUrl: ''
localeTitle: 'Problema 433: Etapas no algoritmo de Euclides'
---

## Description
<section id="description"> Seja E (x0, y0) o número de passos necessários para determinar o maior divisor comum de x0 e y0 com o algoritmo de Euclides. Mais formalmente: x1 = y0, y1 = x0 mod y0xn = yn-1, yn = xn-1 mod yn-1 E (x0, y0) é o menor n tal que yn = 0. <p> Nós temos E (1,1) = 1, E (10,6) = 3 e E (6,10) = 4. </p><p> Defina S (N) como a soma de E (x, y) para 1 ≤ x, y ≤ N. Temos S (1) = 1, S (10) = 221 e S (100) = 39826. </p><p> Encontre S (5 · 106). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler433()</code> deve retornar 326624372659664.
    testString: 'assert.strictEqual(euler433(), 326624372659664, "<code>euler433()</code> should return 326624372659664.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler433() {
  // Good luck!
  return true;
}

euler433();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
