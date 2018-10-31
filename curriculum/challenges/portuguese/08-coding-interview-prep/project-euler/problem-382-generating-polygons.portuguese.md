---
id: 5900f4eb1000cf542c50fffd
challengeType: 5
title: 'Problem 382: Generating polygons'
videoUrl: ''
localeTitle: 'Problema 382: Gerando polígonos'
---

## Description
<section id="description"> Um polígono é uma forma plana que consiste em segmentos de linha reta que são unidos para formar uma cadeia ou circuito fechado. Um polígono consiste em pelo menos três lados e não se auto-intercepta. <p> Diz-se que um conjunto S de números positivos gera um polígono P se: não há dois lados de P com o mesmo comprimento, o comprimento de todos os lados de P está em S e S não contém outro valor. </p><p> Por exemplo: O conjunto {3, 4, 5} gera um polígono com os lados 3, 4 e 5 (um triângulo). O conjunto {6, 9, 11, 24} gera um polígono com os lados 6, 9, 11 e 24 (um quadrilátero). Os conjuntos {1, 2, 3} e {2, 3, 4, 9} não geram nenhum polígono. </p><p> Considere a sequência s, definida da seguinte forma: s1 = 1, s2 = 2, s3 = 3 sn = sn-1 + sn-3 para n&gt; 3. </p><p> Seja Un o conjunto {s1, s2, ..., sn}. Por exemplo, U10 = {1, 2, 3, 4, 6, 9, 13, 19, 28, 41}. Seja f (n) o número de subconjuntos de Un que geram pelo menos um polígono. Por exemplo, f (5) = 7, f (10) = 501 e f (25) = 18635853. </p><p> Encontre os últimos 9 dígitos de f (1018). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler382()</code> deve retornar 697003956.
    testString: 'assert.strictEqual(euler382(), 697003956, "<code>euler382()</code> should return 697003956.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler382() {
  // Good luck!
  return true;
}

euler382();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
