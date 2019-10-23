---
id: 5900f5221000cf542c510033
challengeType: 5
title: 'Problem 436: Unfair wager'
videoUrl: ''
localeTitle: 'Problema 436: Aposta desleal'
---

## Description
<section id="description"> Julie propõe a seguinte aposta para sua irmã Louise. Ela sugere que eles joguem um jogo de azar para determinar quem vai lavar a louça. Para este jogo, eles devem usar um gerador de números aleatórios independentes distribuídos uniformemente entre 0 e 1. O jogo começa com S = 0. O primeiro jogador, Louise, adiciona S diferentes números aleatórios do gerador até S&gt; 1 e grava-o último número aleatório &#39;x&#39;. O segundo jogador, Julie, continua adicionando S diferentes números aleatórios do gerador até S&gt; 2 e registra seu último número aleatório &#39;y&#39;. O jogador com o maior número ganha e o perdedor lava a louça, ou seja, se y&gt; x o segundo jogador ganha. <p> Por exemplo, se o primeiro jogador escolher 0,62 e 0,44, o primeiro turno do jogador terminará em 0,62 + 0,44&gt; 1 e x = 0,44. Se o segundo jogador retirar 0,1, 0,27 e 0,91, o segundo turno do jogador termina, pois 0,62 + 0,44 + 0,1 + 0,27 + 0,91&gt; 2 e y = 0,91. Desde y&gt; x, o segundo jogador ganha. </p><p> Louise pensa nisso por um segundo e faz objeções: &quot;Isso não é justo&quot;. Qual é a probabilidade de o segundo jogador vencer? Dê sua resposta arredondada para 10 lugares atrás do ponto decimal no formulário 0.abcdefghij </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler436()</code> deve retornar 0.5276662759.
    testString: 'assert.strictEqual(euler436(), 0.5276662759, "<code>euler436()</code> should return 0.5276662759.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler436() {
  // Good luck!
  return true;
}

euler436();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
