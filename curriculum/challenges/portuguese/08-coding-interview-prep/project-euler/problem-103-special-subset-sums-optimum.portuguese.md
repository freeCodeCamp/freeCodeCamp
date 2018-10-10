---
id: 5900f3d61000cf542c50fee7
challengeType: 5
title: 'Problem 103: Special subset sums: optimum'
videoUrl: ''
localeTitle: 'Problema 103: Soma especial do subconjunto: ótimo'
---

## Description
<section id="description"> Seja S (A) a soma dos elementos no conjunto A de tamanho n. Vamos chamá-lo de um conjunto especial de soma se para quaisquer dois subconjuntos separados, não-vazios, B e C, as seguintes propriedades são verdadeiras: S (B) ≠ S (C); isto é, somas de subconjuntos não podem ser iguais. Se B contiver mais elementos que C, então S (B)&gt; S (C). Se S (A) é minimizado para um dado n, nós o chamaremos de um conjunto de soma especial ótimo. Os primeiros cinco conjuntos de somas especiais ótimos são dados abaixo. n = 1: {1} n = 2: {1, 2} n = 3: {2, 3, 4} n = 4: {3, 5, 6, 7} n = 5: {6, 9, 11 , 12, 13} Parece que, para um determinado conjunto ótimo, A = {a1, a2, ..., an}, o próximo conjunto ótimo é da forma B = {b, a1 + b, a2 + b,. .., an + b}, onde b é o elemento &quot;middle&quot; na linha anterior. Aplicando esta &quot;regra&quot; esperamos que o conjunto ótimo para n = 6 seja A = {11, 17, 20, 22, 23, 24}, com S (A) = 117. Entretanto, este não é o conjunto ótimo , como temos apenas aplicado um algoritmo para fornecer um conjunto ótimo próximo. O conjunto ótimo para n = 6 é A = {11, 18, 19, 20, 22, 25}, com S (A) = 115 e correspondente string set: 111819202225. Dado que A é uma soma especial ótima definida para n = 7, encontre sua string set. NOTA: Esse problema está relacionado ao problema 105 e ao problema 106. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler103()</code> deve retornar 20313839404245.
    testString: 'assert.strictEqual(euler103(), 20313839404245, "<code>euler103()</code> should return 20313839404245.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler103() {
  // Good luck!
  return true;
}

euler103();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
