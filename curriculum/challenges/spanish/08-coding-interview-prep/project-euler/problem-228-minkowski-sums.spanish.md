---
id: 5900f4511000cf542c50ff63
challengeType: 5
title: 'Problem 228: Minkowski Sums'
videoUrl: ''
localeTitle: 'Problema 228: Sumas de Minkowski'
---

## Description
<section id="description"> Sea Sn el polígono regular de n lados, o forma, cuyos vértices <p> vk (k = 1,2, ..., n) tiene coordenadas: </p><pre> <code>xk   = cos( 2k-1/n ×180° ) yk   = sin( 2k-1/n ×180° )</code> </pre><p> Cada Sn debe interpretarse como una forma rellena que consta de todos los puntos en el perímetro y en el interior. </p><p> La suma de Minkowski, S + T, de dos formas S y T es el resultado de </p><p> agregando cada punto en S a cada punto en T, donde la adición de puntos se realiza por coordenadas: </p><p> (u, v) + (x, y) = (u + x, v + y). </p><p> Por ejemplo, la suma de S3 y S4 es la forma de seis lados que se muestra en rosa a continuación: </p><p> ¿Cuántos lados tiene S1864 + S1865 +… + S1909? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler228()</code> debe devolver 86226.
    testString: 'assert.strictEqual(euler228(), 86226, "<code>euler228()</code> should return 86226.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler228() {
  // Good luck!
  return true;
}

euler228();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
