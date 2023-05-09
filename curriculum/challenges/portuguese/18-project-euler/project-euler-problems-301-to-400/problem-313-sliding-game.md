---
id: 5900f4a61000cf542c50ffb8
title: 'Problema 313: Jogo de deslizar'
challengeType: 1
forumTopicId: 301969
dashedName: problem-313-sliding-game
---

# --description--

Em um jogo de deslizar, um contador pode deslizar horizontalmente ou verticalmente para um espaço vazio. O objetivo do jogo é mover o contador vermelho do canto superior esquerdo de uma grade para o canto inferior direito; o espaço sempre começa no canto inferior direito. Por exemplo, a sequência de imagens a seguir mostra como o jogo pode ser concluído em cinco movimentos em uma grade de 2 em 2.

<img class="img-responsive center-block" alt="completando o jogo em cinco movimentos na grade 2x2" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px;" />

Considere $S(m, n)$ como representante do número mínimo de movimentos para completar o jogo em uma grade de $m$ por $n$. Por exemplo, pode-se verificar que $S(5, 4) = 25$.

<img class="img-responsive center-block" alt="estado inicial da grade e estado final da grade para um jogo na grade 5x4" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px;" />

Há exatamente 5482 grades quadriculadas, para as quais $S(m, n) = p^2$, em que $p &lt; 100$ é um número primo.

Em quantas grades $S(m, n) = p^2$, onde $p &lt; {10}^6$ é um número primo?

# --hints--

`slidingGame()` deve retornar `2057774861813004`.

```js
assert.strictEqual(slidingGame(), 2057774861813004);
```

# --seed--

## --seed-contents--

```js
function slidingGame() {

  return true;
}

slidingGame();
```

# --solutions--

```js
// solution required
```
