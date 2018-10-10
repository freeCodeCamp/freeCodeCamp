---
id: 5900f4b11000cf542c50ffc4
challengeType: 5
title: 'Problem 325: Stone Game II'
videoUrl: ''
localeTitle: 'Problema 325: Stone Game II'
---

## Description
<section id="description"> Um jogo é jogado com duas pilhas de pedras e dois jogadores. Por sua vez, um jogador remove um número de pedras da pilha maior. O número de pedras que ela remove deve ser um múltiplo positivo do número de pedras na pilha menor. <p> Por exemplo, deixe o par ordenado (6,14) descrever uma configuração com 6 pedras na pilha menor e 14 pedras na pilha maior, então o primeiro jogador pode remover 6 ou 12 pedras da pilha maior. </p><p> O jogador que pega todas as pedras de uma pilha ganha o jogo. </p><p> Uma configuração vencedora é aquela em que o primeiro jogador pode forçar uma vitória. Por exemplo, (1,5), (2,6) e (3,12) estão ganhando configurações porque o primeiro jogador pode remover imediatamente todas as pedras da segunda pilha. </p><p> Uma configuração perdedora é aquela em que o segundo jogador pode forçar uma vitória, não importando o que o primeiro jogador faça. Por exemplo, (2,3) e (3,4) estão perdendo configurações: qualquer jogada legal deixa uma configuração vencedora para o segundo jogador. </p><p> Defina S (N) como a soma de (xi + yi) para todas as configurações perdedoras (xi, yi), 0 &lt;xi &lt;yi ≤ N. Podemos verificar que S (10) = 211 e S (104) = 230312207313. </p><p> Encontre S (1016) mod 710. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler325()</code> deve retornar 54672965.
    testString: 'assert.strictEqual(euler325(), 54672965, "<code>euler325()</code> should return 54672965.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler325() {
  // Good luck!
  return true;
}

euler325();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
