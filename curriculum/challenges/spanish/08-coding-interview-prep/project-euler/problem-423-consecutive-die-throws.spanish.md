---
id: 5900f5141000cf542c510027
challengeType: 5
title: 'Problem 423: Consecutive die throws'
videoUrl: ''
localeTitle: 'Problema 423: Tiradas consecutivas'
---

## Description
<section id="description"> Sea n un entero positivo. Un dado de 6 caras se lanza n veces. Sea c el número de pares de lanzamientos consecutivos que dan el mismo valor. <p> Por ejemplo, si n = 7 y los valores de los lanzamientos de dados son (1,1,5,6,6,6,3), entonces los siguientes pares de lanzamientos consecutivos dan el mismo valor: (1,1,5, 6,6,6,3) (1,1,5,6,6,6,3) (1,1,5,6,6,6,3,3) Por lo tanto, c = 3 para (1,1,5 , 6,6,6,3). </p><p> Defina C (n) como el número de resultados de lanzar un dado de 6 caras n veces, de manera que c no exceda de π (n) .1 Por ejemplo, C (3) = 216, C (4) = 1290, C ( 11) = 361912500 y C (24) = 4727547363281250000. </p><p> Defina S (L) como ∑ C (n) para 1 ≤ n ≤ L. Por ejemplo, S (50) mod 1 000 000 007 = 832833871. </p><p> Encontrar S (50 000 000) mod 1 000 000 007. </p><p> 1 π denota la función de conteo de primos, es decir, π (n) es el número de primos ≤ n. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler423()</code> debe devolver 653972374.
    testString: 'assert.strictEqual(euler423(), 653972374, "<code>euler423()</code> should return 653972374.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler423() {
  // Good luck!
  return true;
}

euler423();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
