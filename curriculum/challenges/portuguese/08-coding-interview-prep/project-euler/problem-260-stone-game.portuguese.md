---
id: 5900f4701000cf542c50ff83
challengeType: 5
title: 'Problem 260: Stone Game'
videoUrl: ''
localeTitle: 'Problema 260: Jogo de Pedra'
---

## Description
<section id="description"> Um jogo é jogado com três pilhas de pedras e dois jogadores. Por sua vez, um jogador remove uma ou mais pedras das pilhas. No entanto, se ela tirar pedras de mais de uma pilha, ela deve remover o mesmo número de pedras de cada uma das pilhas selecionadas. <p> Em outras palavras, o jogador escolhe alguns N&gt; 0 e remove: N pedras de qualquer pilha; ou N pedras de cada uma das duas pilhas (total de 2N); ou N pedras de cada uma das três pilhas (3N no total). O jogador que recebe a (s) última (s) pedra (s) ganha o jogo. </p><p> Uma configuração vencedora é aquela em que o primeiro jogador pode forçar uma vitória. Por exemplo, (0,0,13), (0,11,11) e (5,5,5) estão ganhando configurações porque o primeiro jogador pode remover imediatamente todas as pedras. </p><p> Uma configuração perdedora é aquela em que o segundo jogador pode forçar uma vitória, não importando o que o primeiro jogador faça. Por exemplo, (0,1,2) e (1,3,3) estão perdendo configurações: qualquer jogada legal deixa uma configuração vencedora para o segundo jogador. </p><p> Considere todas as configurações perdedoras (xi, yi, zi) onde xi ≤ yi ≤ zi ≤ 100. Podemos verificar que Σ (xi + yi + zi) = 173895 para estes. </p><p> Encontre Σ (xi + yi + zi) onde (xi, yi, zi) varia sobre as configurações perdedoras com xi ≤ yi ≤ zi ≤ 1000. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler260()</code> deve retornar 167542057.
    testString: 'assert.strictEqual(euler260(), 167542057, "<code>euler260()</code> should return 167542057.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler260() {
  // Good luck!
  return true;
}

euler260();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
