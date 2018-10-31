---
id: 5900f3db1000cf542c50feec
challengeType: 5
title: 'Problem 109: Darts'
videoUrl: ''
localeTitle: 'Problema 109: Dardos'
---

## Description
<section id="description"> No jogo de dardos, um jogador lança três dardos em uma prancha de alvo que é dividida em vinte seções de igual tamanho, numeradas de um a vinte. <p> A pontuação de um dardo é determinada pelo número da região em que o dardo pousa. Um pouso de dardo fora do anel externo vermelho / verde pontua zero. As regiões de preto e creme dentro deste anel representam pontuações únicas. No entanto, o anel externo vermelho / verde e o anel intermediário pontuam os escores duplo e triplo, respectivamente. No centro do tabuleiro há dois círculos concêntricos chamados de região de touro, ou olho de boi. O touro exterior vale 25 pontos e o touro interno é um duplo, valendo 50 pontos. Existem muitas variações de regras, mas no jogo mais popular os jogadores começarão com uma pontuação 301 ou 501 eo primeiro jogador a reduzir seu total de corridas a zero é um vencedor. No entanto, é normal jogar um sistema de &quot;duplicação&quot;, o que significa que o jogador deve conseguir um duplo (incluindo o olho duplo no centro do tabuleiro) em seu dardo final para vencer; qualquer outro dardo que reduza seu total de corridas para um ou menos significa que a pontuação para aquele conjunto de três dardos é &quot;busto&quot;. Quando um jogador é capaz de terminar em sua pontuação atual, ele é chamado de &quot;checkout&quot; e o maior check-out é 170: T20 T20 D25 (dois agudos 20s e duplo touro). Existem exatamente onze maneiras distintas de fazer checkout em uma pontuação de 6: </p><p> D3 </p><p> D1 D2 </p><p> S2 D2 </p><p> D2 D1 </p><p> S4 D1 </p><p> S1 S1 D2 S1 T1 D1 S1 S3 D1 D1 D1 D1 D1 S2 D1 S2 S2 D1 </p><p> Note que D1 D2 é considerado diferente de D2 D1 quando eles terminam em diferentes duplas. No entanto, a combinação S1 T1 D1 é considerada igual a T1 S1 D1. Além disso, não incluiremos erros em considerar combinações; por exemplo, D3 é o mesmo que 0 D3 e 0 0 D3. Incrivelmente, existem 42336 formas distintas de check-out no total. Quantas maneiras distintas pode um jogador finalizar com uma pontuação inferior a 100? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler109()</code> deve retornar 38182.
    testString: 'assert.strictEqual(euler109(), 38182, "<code>euler109()</code> should return 38182.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler109() {
  // Good luck!
  return true;
}

euler109();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
