---
id: 5900f4fe1000cf542c510010
title: 'Problema 400: Jogo da árvore de Fibonacci'
challengeType: 1
forumTopicId: 302067
dashedName: problem-400-fibonacci-tree-game
---

# --description--

Uma árvore de Fibonacci é uma árvore binária recursivamente definida como:

- $T(0)$ é a árvore vazia.
- $T(1)$ é a árvore binária com apenas um nó.
- $T(k)$ consiste em um nó raiz que tem $T(k - 1)$ e $T(k - 2)$ como filhos.

Em uma árvore desse tipo, dois jogadores jogam um jogo de remoção de nós. Em cada turno, um jogador seleciona um nó e o remove, juntamente à subárvore que tem esse nó como raiz. O jogador que for forçado a pegar o nó raiz da árvore é o perdedor.

Aqui estão os movimentos vencedores para o primeiro jogador no primeiro movimento para $T(k)$ de $k = 1$ a $k = 6$.

<img class="img-responsive center-block" alt="movimentos vencedores do primeiro jogador, no primeiro movimento, para k = 1 a k = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/fibonacci-tree-game.png" style="background-color: white; padding: 10px;" />

Considere $f(k)$ como o número de movimentos vencedores do primeiro jogador (ou seja, movimentos para os quais o segundo jogador não pode ter uma estratégia vencedora) no primeiro movimento desse jogo quando ele é jogado em $T(k)$.

Por exemplo, $f(5) = 1$ e $f(10) = 17$.

Encontre $f(10000)$. Dê os últimos 18 algarismos da sua resposta.

# --hints--

`fibonacciTreeGame()` deve retornar `438505383468410600`.

```js
assert.strictEqual(fibonacciTreeGame(), 438505383468410600);
```

# --seed--

## --seed-contents--

```js
function fibonacciTreeGame() {

  return true;
}

fibonacciTreeGame();
```

# --solutions--

```js
// solution required
```
