---
id: 5900f4da1000cf542c50ffed
challengeType: 5
title: 'Problem 366: Stone Game III'
videoUrl: ''
localeTitle: 'Problema 366: Stone Game III'
---

## Description
<section id="description"> Dois jogadores, Anton e Bernhard, estão jogando o seguinte jogo. Há uma pilha de n pedras. O primeiro jogador pode remover qualquer número positivo de pedras, mas não a pilha inteira. Depois disso, cada jogador pode remover no máximo duas vezes o número de pedras que seu oponente tomou no movimento anterior. O jogador que remover a última pedra ganha. <p> Por exemplo, n = 5 Se o primeiro jogador levar mais de uma pedra, o próximo jogador poderá receber todas as pedras restantes. Se o primeiro jogador pegar uma pedra, deixando quatro, seu oponente também pegará uma pedra, deixando três pedras. O primeiro jogador não pode pegar todos os três, porque ele pode levar no máximo 2x1 = 2 pedras. Então, digamos que ele também tome uma pedra, deixando 2. O segundo jogador pode pegar as duas pedras restantes e ganhar. Então, 5 é uma posição perdida para o primeiro jogador. Para algumas posições vencedoras, há mais de um lance possível para o primeiro jogador. Por exemplo, quando n = 17 o primeiro jogador pode remover uma ou quatro pedras. </p><p> Seja M (n) o número máximo de pedras que o primeiro jogador pode tirar de uma posição vencedora em seu primeiro turno e M (n) = 0 para qualquer outra posição. </p><p> (M (n) para n≤100 é 728. </p><p> Encontre ∑M (n) para n≤1018. Dê sua resposta módulo 108. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler366()</code> deve retornar 88351299.
    testString: 'assert.strictEqual(euler366(), 88351299, "<code>euler366()</code> should return 88351299.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler366() {
  // Good luck!
  return true;
}

euler366();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
