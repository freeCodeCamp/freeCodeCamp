---
id: 5900f54a1000cf542c51005c
challengeType: 5
title: 'Problem 477: Number Sequence Game'
videoUrl: ''
localeTitle: 'Problema 477: Jogo Sequencial Numérico'
---

## Description
<section id="description"> O jogo de sequência numérica começa com uma sequência S de N números escritos em uma linha. Dois jogadores alternam turnos. Por sua vez, um jogador deve selecionar e remover o primeiro ou o último número remanescente na sequência. A pontuação do jogador é a soma de todos os números que ele tirou. Cada jogador tenta maximizar sua própria soma. Se N = 4 e S = {1, 2, 10, 3}, então cada jogador maximiza sua pontuação da seguinte forma: Jogador 1: remove o primeiro número (1) Jogador 2: remove o último número da sequência restante (3) Jogador 1: remove o último número da sequência restante (10) Jogador 2: remove o número restante (2) A pontuação do Jogador 1 é 1 + 10 = 11. Seja F (N) a pontuação do jogador 1 se ambos os jogadores seguirem o estratégia ótima para a sequência S = {s1, s2, ..., sN} definida como: s1 = 0 si + 1 = (si2 + 45) módulo 1 000 000 007 A sequência começa com S = {0, 45, 2070 , 4284945, 753524550, 478107844, 894218625, ...}. Você recebe F (2) = 45, F (4) = 4284990, F (100) = 26365463243, F (104) = 2495838522951. Encontre F (108). </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler477()</code> deve retornar 25044905874565164.
    testString: 'assert.strictEqual(euler477(), 25044905874565164, "<code>euler477()</code> should return 25044905874565164.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler477() {
  // Good luck!
  return true;
}

euler477();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
