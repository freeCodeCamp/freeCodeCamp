---
id: 5900f4411000cf542c50ff53
challengeType: 5
title: 'Problem 212: Combined Volume of Cuboids'
videoUrl: ''
localeTitle: 'Problema 212: Volume Combinado de Cubóides'
---

## Description
<section id="description"> Um cubóide alinhado ao eixo, especificado pelos parâmetros {(x0, y0, z0), (dx, dy, dz)}, consiste em todos os pontos (X, Y, Z) de modo que x0 ≤ X ≤ x0 + dx, y0 ≤ Y ≤ y0 + dy e z0 ≤ Z ≤ z0 + dz. O volume do cubóide é o produto, dx × dy × dz. O volume combinado de uma coleção de cubóides é o volume de sua união e será menor que a soma dos volumes individuais se qualquer cubóide se sobrepor. <p> Seja C1, ..., C50000 uma coleção de 50000 cubos alinhados no eixo, de modo que Cn tenha parâmetros </p><p> x0 = S6n-5 módulo 10000y0 = S6n-4 módulo 10000z0 = S6n-3 módulo 10000dx = 1 + (S6n-2 módulo 399) dy = 1 + (S6n-1 módulo 399) dz = 1 + (S6n módulo 399) </p><p> onde S1, ..., S300000 vêm do &quot;Gerador de Fibonacci Desfigurado&quot;: </p><p> Para 1 ≤ k ≤ 55, Sk = [100003 - 200003k + 300007k3] (módulo 1000000) Para 56 ≤ k, Sk = [Sk-24 + Sk-55] (módulo 1000000) </p><p> Assim, C1 tem parâmetros {(7,53,183), (94,369,56)}, C2 tem parâmetros {(2383,3563,5079), (42,212,344)}, e assim por diante. </p><p> O volume combinado dos primeiros 100 cubóides, C1, ..., C100, é 723581599. </p><p> Qual é o volume combinado de todos os 50000 cubóides, C1, ..., C50000? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler212()</code> deve retornar 328968937309.
    testString: 'assert.strictEqual(euler212(), 328968937309, "<code>euler212()</code> should return 328968937309.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler212() {
  // Good luck!
  return true;
}

euler212();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
