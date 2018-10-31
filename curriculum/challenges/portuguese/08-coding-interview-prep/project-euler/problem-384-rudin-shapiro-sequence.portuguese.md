---
id: 5900f4ed1000cf542c50fffe
challengeType: 5
title: 'Problem 384: Rudin-Shapiro sequence'
videoUrl: ''
localeTitle: 'Problema 384: sequência de Rudin-Shapiro'
---

## Description
<section id="description"> Defina a sequência a (n) como o número de pares adjacentes de uns na expansão binária de n (possivelmente sobrepostos). Por exemplo: a (5) = a (1012) = 0, a (6) = a (1102) = 1, a (7) = a (1112) = 2 <p> Defina a sequência b (n) = (-1) a (n). Essa sequência é chamada de sequência de Rudin-Shapiro. Considere também a sequência sumariativa de b (n):. </p><p> Os primeiros dois valores dessas sequências são: n 0 1 2 3 4 5 6 7 a (n) 0 0 0 1 0 0 1 2 b (n) 1 1 1 -1 1 1 -1 1 s (n) 1 2 3 2 3 4 3 4 </p><p> A seqüência s (n) tem a notável propriedade de que todos os elementos são positivos e todo inteiro positivo k ocorre exatamente k vezes. </p><p> Defina g (t, c), com 1 ≤ c ≤ t, como o índice em s (n) para o qual t ocorre pelo c&#39;th tempo em s (n). Ex: g (3,3) = 6, g (4,2) = 7 e g (54321, 12345) = 1220847710. </p><p> Seja F (n) a seqüência de fibonacci definida por: F (0) = F (1) = 1 e F (n) = F (n-1) + F (n-2) para n&gt; 1. </p><p> Defina GF (t) = g (F (t), F (t-1)). </p><p> Encontre ΣGF (t) para 2≤t≤45. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler384()</code> deve retornar 3354706415856333000.
    testString: 'assert.strictEqual(euler384(), 3354706415856333000, "<code>euler384()</code> should return 3354706415856333000.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler384() {
  // Good luck!
  return true;
}

euler384();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
