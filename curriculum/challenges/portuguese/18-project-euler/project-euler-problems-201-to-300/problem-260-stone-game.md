---
id: 5900f4701000cf542c50ff83
title: 'Problema 260: Jogo da pedra'
challengeType: 1
forumTopicId: 301909
dashedName: problem-260-stone-game
---

# --description--

Uma partida é jogada com três pilhas de pedras e dois jogadores.

No turno de cada jogador, ele remove uma ou mais pedras das pilhas. No entanto, se o jogador recebe pedras de mais de uma pilha, o mesmo número de pedras deve ser removido de cada uma das pilhas selecionadas.

Em outras palavras, o jogador escolhe algumas $N > 0$ e as remove:

- $N$ stones from any single pile; or
- $N$ stones from each of any two piles ($2N$ total); or
- $N$ stones from each of the three piles ($3N$ total).

The player taking the last stone(s) wins the game.

A winning configuration is one where the first player can force a win.

For example, (0,0,13), (0,11,11) and (5,5,5) are winning configurations because the first player can immediately remove all stones.

A losing configuration is one where the second player can force a win, no matter what the first player does.

For example, (0,1,2) and (1,3,3) are losing configurations: any legal move leaves a winning configuration for the second player.

Consider all losing configurations ($x_i$,$y_i$,$z_i$) where $x_i ≤ y_i ≤ z_i ≤ 100$. We can verify that $\sum (x_i + y_i + z_i) = 173\\,895$ for these.

Find $\sum (x_i + y_i + z_i)$ where ($x_i$,$y_i$,$z_i$) ranges over the losing configurations with $x_i ≤ y_i ≤ z_i ≤ 1000$.

# --hints--

`stoneGame()` should return `167542057`.

```js
assert.strictEqual(stoneGame(), 167542057);
```

# --seed--

## --seed-contents--

```js
function stoneGame() {

  return true;
}

stoneGame();
```

# --solutions--

```js
// solution required
```
