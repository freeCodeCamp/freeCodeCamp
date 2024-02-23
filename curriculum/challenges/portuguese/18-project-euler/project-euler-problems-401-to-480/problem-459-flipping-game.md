---
id: 5900f5371000cf542c51004a
title: 'Problema 459: Jogo de viradas'
challengeType: 1
forumTopicId: 302133
dashedName: problem-459-flipping-game
---

# --description--

O jogo de viradas é um jogo de dois jogadores jogado em um tabuleiro quadrado de $N$ por $N$.

Cada quadrado contém um disco com um lado branco e um lado preto.

O jogo termina quando todos os discos mostrarem seu lado branco.

Um movimento consiste em virar todos os discos em um retângulo com as seguintes propriedades:

- o canto superior direito do retângulo consiste em um disco branco
- a largura do retângulo é um quadrado perfeito (1, 4, 9, 16, ...)
- a altura do retângulo é um número triangular (1, 3, 6, 10, ...)

<img class="img-responsive center-block" alt="virando todos os discos em um retângulo de 4x3 em um tabuleiro de 5x5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-1.png" style="background-color: white; padding: 10px;" />

Os jogadores alternam a vez. Um jogador ganha ao tornar a grade toda preta.

Considere $W(N)$ como o número de movimentos vencedores para o primeiro jogador em um tabuleiro $N$ por $N$ com todos os discos brancos, assumindo uma jogada perfeita.

$W(1) = 1$, $W(2) = 0$, $W(5) = 8$ e $W({10}^2) = 31.395$.

Para $N = 5$, os oito primeiros movimentos vencedores do primeiro jogador são:

<img class="img-responsive center-block" alt="oito primeiros movimentos vencedores para N = 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-2.png" style="background-color: white; padding: 10px;" />

Encontre $W({10}^6)$.

# --hints--

`flippingGame()` deve retornar `3996390106631`.

```js
assert.strictEqual(flippingGame(), 3996390106631);
```

# --seed--

## --seed-contents--

```js
function flippingGame() {

  return true;
}

flippingGame();
```

# --solutions--

```js
// solution required
```
