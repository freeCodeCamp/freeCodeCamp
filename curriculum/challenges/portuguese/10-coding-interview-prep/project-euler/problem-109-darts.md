---
id: 5900f3db1000cf542c50feec
title: 'Problema 109: Dardos'
challengeType: 1
forumTopicId: 301733
dashedName: problem-109-darts
---

# --description--

No jogo de dardos, um jogador joga três dardos em um alvo que é dividido em vinte seções de tamanho igual, numeradas de um a vinte.

<img class="img-responsive center-block" alt="Alvo dos dardos" src="https://cdn.freecodecamp.org/curriculum/project-euler/darts.png" style="background-color: white; padding: 10px;" />

A pontuação de um dardo é determinada pelo número da região que o dardo atinge. Um dardo aterrissando fora do anel externo vermelho/verde, marca zero. As regiões preta e creme dentro deste anel representam pontuações únicas. No entanto, o anel externo vermelho/verde e o anel do meio têm pontuações duplas e triplas, respectivamente.

No centro do tabuleiro, há dois círculos concêntricos chamados de região chamada bull, ou, bullseye. O bull externo vale 25 pontos e o bull interno é um duplo, valendo 50 pontos.

Há muitas variações de regras, mas, no jogo mais popular, os jogadores começarão com uma pontuação de 301 ou 501 e o primeiro jogador a reduzir seu total de aproveitamento para zero é um vencedor. No entanto, é normal jogar um sistema de "duplos fora", o que significa que o jogador deve acertar um duplo (incluindo o alvo duplo no centro do tabuleiro) em seu dardo final para vencer; qualquer outro dardo que reduziria seu total de corrida para um ou menos significa que a pontuação para aquele conjunto de três dardos foi um "fracasso".

Quando um jogador consegue terminar na pontuação atual, ela é chamada de "check-out". O check-out mais alto vale 170: T20 T20 D25 (dois 20s triplos e um duplo bull). Há exatamente onze maneiras distintas de marcar uma pontuação de 6:

$$\begin{array}   \text{D3} &    &    \\\\
  D1        & D2 &    \\\\   S2        & D2 &    \\\\
  D2        & D1 &    \\\\   S4        & D1 &    \\\\
  S1        & S1 & D2 \\\\   S1        & T1 & D1 \\\\
  S1        & S3 & D1 \\\\   D1        & D1 & D1 \\\\
  D1        & S2 & D1 \\\\ S2        & S2 & D1 \end{array}$$

Observe que D1 D2 é considerado diferente de D2 D1, pois terminam em duplas diferentes. No entanto, a combinação S1 T1 D1 é considerada a mesma que T1 S1 D1. Além disso, não devemos incluir erros ao considerar as combinações; por exemplo, D3 é o mesmo que 0 D3 e 0 0 D3. Incrivelmente, no total, existem 42336 maneiras distintas de fazer checkout. De quantas maneiras diferentes um jogador pode finalizar com uma pontuação inferior a 100?

# --hints--

`darts()` deve retornar `38182`.

```js
assert.strictEqual(darts(), 38182);
```

# --seed--

## --seed-contents--

```js
function darts() {

  return true;
}

darts();
```

# --solutions--

```js
// solution required
```
