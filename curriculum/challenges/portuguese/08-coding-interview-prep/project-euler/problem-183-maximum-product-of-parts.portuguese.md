---
id: 5900f4231000cf542c50ff36
challengeType: 5
title: 'Problem 183: Maximum product of parts'
videoUrl: ''
localeTitle: 'Problema 183: Produto Máximo de Peças'
---

## Description
<section id="description"> Seja N um inteiro positivo e seja N dividido em k partes iguais, r = N / k, de modo que N = r + r + ... + r. Seja P o produto dessas partes, P = r × r × ... × r = rk. <p> Por exemplo, se 11 é dividido em cinco partes iguais, 11 = 2,2 + 2,2 + 2,2 + 2,2 + 2,2, então P = 2,25 = 51,53632. </p><p> Seja M (N) = Pmax para um dado valor de N. </p><p> Acontece que o máximo para N = 11 é encontrado dividindo onze em quatro partes iguais, o que leva a Pmax = (11/4) 4; isto é, M (11) = 14641/256 = 57.19140625, que é um decimal de terminação. </p><p> No entanto, para N = 8, o máximo é obtido dividindo-o em três partes iguais, portanto, M (8) = 512/27, que é um decimal sem terminação. </p><p> Seja D (N) = N se M (N) for um decimal sem terminação e D (N) = -N se M (N) for um decimal de terminação. </p><p> Por exemplo, ΣD (N) para 5 ≤ N ≤ 100 é 2438. </p><p> Encontre ΣD (N) para 5 ≤ N ≤ 10000. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler183()</code> deve retornar 48861552.
    testString: 'assert.strictEqual(euler183(), 48861552, "<code>euler183()</code> should return 48861552.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler183() {
  // Good luck!
  return true;
}

euler183();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
