---
id: 5900f52a1000cf542c51003b
challengeType: 5
title: 'Problem 444: The Roundtable Lottery'
videoUrl: ''
localeTitle: 'Problema 444: A Loteria da Mesa Redonda'
---

## Description
<section id="description"> Um grupo de pessoas decide se sentar em uma mesa redonda e jogar um jogo de troca de bilhetes de loteria. Cada pessoa começa com um bilhete de loteria sem riscagem atribuído aleatoriamente. Cada bilhete, quando riscado, revela um prêmio total de £ 1 a £ p, com dois ingressos iguais. O objetivo do jogo é que cada pessoa maximize seus ganhos ao sair do jogo. <p> Uma pessoa arbitrária é escolhida para ser o primeiro jogador. Indo ao redor da mesa, cada jogador tem apenas uma das duas opções: </p><ol><li> O jogador pode riscar sua passagem e revelar seu valor para todos na mesa. </li><li> O jogador pode trocar o seu bilhete não corrigido pelo bilhete riscado de um jogador anterior e deixar o jogo com esse bilhete. O jogador anterior então arranha seu bilhete recém-adquirido e revela seu valor para todos na mesa. </li></ol><p> O jogo termina quando todos os tickets forem riscados. Todos os jogadores que ainda permanecem na mesa devem sair com seus tickets atualmente retidos. </p><p> Suponha que cada jogador use a estratégia ideal para maximizar o valor esperado de seus ganhos com ingressos. </p><p> Seja E (p) o número esperado de jogadores restantes na mesa quando o jogo terminar em um jogo composto por p jogadores (por exemplo, E (111) = 5.2912 quando arredondado para 5 dígitos significativos). </p><p> Seja S1 (N) = E (p) Seja Sk (N) = Sk-1 (p) para k&gt; 1 </p><p> Encontre S20 (1014) e escreva a resposta em notação científica, arredondada para 10 dígitos significativos. Use um e minúsculo para separar mantissa e expoente (por exemplo, S3 (100) = 5.983679014e5). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler444()</code> deve retornar 1.200856722e + 263.
    testString: 'assert.strictEqual(euler444(), 1.200856722e+263, "<code>euler444()</code> should return 1.200856722e+263.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler444() {
  // Good luck!
  return true;
}

euler444();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
