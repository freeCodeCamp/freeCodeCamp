---
id: 5900f4fe1000cf542c510010
challengeType: 5
title: 'Problem 400: Fibonacci tree game'
videoUrl: ''
localeTitle: 'Problema 400: Jogo da árvore de Fibonacci'
---

## Description
<section id="description"> Uma árvore Fibonacci é uma árvore binária definida recursivamente como: T (0) é a árvore vazia. T (1) é a árvore binária com apenas um nó. T (k) consiste em um nó raiz que tem T (k-1) e T (k-2) como filhos. <p> Em tal árvore, dois jogadores jogam um jogo de take-away. Em cada turno, um jogador seleciona um nó e remove esse nó junto com a subárvore com raiz nesse nó. O jogador que é forçado a pegar o nó raiz da árvore inteira perde. </p><p> Aqui estão os movimentos ganhadores do primeiro jogador no primeiro turno para T (k) de k = 1 para k = 6. </p><p> Seja f (k) o número de jogadas vencedoras do primeiro jogador (ou seja, os movimentos para os quais o segundo jogador não tem estratégia vencedora) no primeiro turno do jogo quando este jogo é jogado em T (k). </p><p> Por exemplo, f (5) = 1 e f (10) = 17. </p><p> Encontre f (10000). Dê os últimos 18 dígitos da sua resposta. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler400()</code> deve retornar 438505383468410600.
    testString: 'assert.strictEqual(euler400(), 438505383468410600, "<code>euler400()</code> should return 438505383468410600.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler400() {
  // Good luck!
  return true;
}

euler400();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
