---
id: 5900f4be1000cf542c50ffd1
challengeType: 5
title: 'Problem 338: Cutting Rectangular Grid Paper'
videoUrl: ''
localeTitle: 'Problema 338: Cortando Papel de Grade Retangular'
---

## Description
<section id="description"> Uma folha retangular de papel quadriculado com dimensões inteiras w × h é fornecida. Seu espaçamento de grade é 1. Quando cortamos a folha ao longo das linhas de grade em duas partes e reorganizamos essas peças sem sobrepor, podemos fazer novos retângulos com dimensões diferentes. Por exemplo, a partir de uma folha com dimensões 9 × 4, podemos fazer retângulos com dimensões 18 × 2, 12 × 3 e 6 × 6, cortando e rearranjando como abaixo: <p> Da mesma forma, a partir de uma folha com dimensões 9 × 8, podemos fazer retângulos com dimensões de 18 × 4 e 12 × 6. </p><p> Para um par w e h, seja F (w, h) o número de retângulos distintos que podem ser feitos a partir de uma folha com dimensões w × h. Por exemplo, F (2,1) = 0, F (2,2) = 1, F (9,4) = 3 e F (9,8) = 2. Observe que retângulos congruentes ao inicial não são contados. em F (w, h). Note também que os retângulos com dimensões w × h e dimensões h × w não são considerados distintos. </p><p> Para um inteiro N, seja G (N) a soma de F (w, h) para todos os pares w e h que satisfazem 0 &lt;h ≤ w ≤ N. Podemos verificar que G (10) = 55, G (103 ) = 971745 e G (105) = 9992617687. </p><p> Encontre G (1012). Dê sua resposta módulo 108. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler338()</code> deve retornar 15614292.
    testString: 'assert.strictEqual(euler338(), 15614292, "<code>euler338()</code> should return 15614292.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler338() {
  // Good luck!
  return true;
}

euler338();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
