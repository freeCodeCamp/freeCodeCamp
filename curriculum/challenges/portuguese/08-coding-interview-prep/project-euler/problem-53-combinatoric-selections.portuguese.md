---
id: 5900f3a11000cf542c50feb4
challengeType: 5
title: 'Problem 53: Combinatoric selections'
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> Existem exatamente dez maneiras de selecionar três de cinco, 12345: 123, 124, 125, 134, 135, 145, 234, 235, 245 e 345. Em combinatória, usamos a notação, 5C3 = 10. Em geral, <p> nCr = n! r! (n − r)! , onde r ≤ n, n! = n × (n − 1) × ... × 3 × 2 × 1 e 0! = 1 </p><p> Não é até n = 23, que um valor excede um milhão: 23C10 = 1144066. Quantos, não necessariamente distintos, valores de nCr, para 1 ≤ n ≤ 100, são maiores que um milhão? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinatoricSelections(1000)</code> deve retornar 4626.
    testString: 'assert.strictEqual(combinatoricSelections(1000), 4626, "<code>combinatoricSelections(1000)</code> should return 4626.");'
  - text: <code>combinatoricSelections(10000)</code> deve retornar 4431.
    testString: 'assert.strictEqual(combinatoricSelections(10000), 4431, "<code>combinatoricSelections(10000)</code> should return 4431.");'
  - text: <code>combinatoricSelections(100000)</code> deve retornar 4255.
    testString: 'assert.strictEqual(combinatoricSelections(100000), 4255, "<code>combinatoricSelections(100000)</code> should return 4255.");'
  - text: <code>combinatoricSelections(1000000)</code> deve retornar 4075.
    testString: 'assert.strictEqual(combinatoricSelections(1000000), 4075, "<code>combinatoricSelections(1000000)</code> should return 4075.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinatoricSelections(limit) {
  // Good luck!
  return 1;
}

combinatoricSelections(1000000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
