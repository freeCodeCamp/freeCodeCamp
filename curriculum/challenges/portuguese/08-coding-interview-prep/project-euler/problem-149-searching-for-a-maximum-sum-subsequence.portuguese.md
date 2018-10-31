---
id: 5900f4021000cf542c50ff13
challengeType: 5
title: 'Problem 149: Searching for a maximum-sum subsequence'
videoUrl: ''
localeTitle: 'Problema 149: Procurando por uma subsequência de soma máxima'
---

## Description
<section id="description"> Olhando para a tabela abaixo, é fácil verificar que a soma máxima possível de números adjacentes em qualquer direção (horizontal, vertical, diagonal ou anti-diagonal) é 16 (= 8 + 7 + 1). <p> −25329−6513273−18−4 8 </p><p> Agora, vamos repetir a pesquisa, mas em uma escala muito maior: </p><p> Primeiro, gere quatro milhões de números pseudo-aleatórios usando uma forma específica do que é conhecido como &quot;Gerador de Fibonacci Desfigurado&quot;: </p><p> Para 1 ≤ k ≤ 55, sk = [100003 - 200003k + 300007k3] (módulo 1000000) - 500000. Para 56 ≤ k ≤ 4000000, sk = [sk − 24 + sk − 55 + 1000000] (módulo 1000000) - 500000. </p><p> Assim, s10 = −393027 e s100 = 86613. </p><p> Os termos de s são então organizados em uma tabela 2000 × 2000, usando os primeiros 2000 números para preencher a primeira linha (seqüencialmente), os próximos 2000 números para preencher a segunda linha, e assim por diante. </p><p> Finalmente, encontre a maior soma de (qualquer número de) entradas adjacentes em qualquer direção (horizontal, vertical, diagonal ou anti-diagonal). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler149()</code> deve retornar 52852124.
    testString: 'assert.strictEqual(euler149(), 52852124, "<code>euler149()</code> should return 52852124.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler149() {
  // Good luck!
  return true;
}

euler149();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
