---
id: 5900f4ae1000cf542c50ffc0
title: 'Problema 321: Trocando contadores'
challengeType: 1
forumTopicId: 301978
dashedName: problem-321-swapping-counters
---

# --description--

Uma linha horizontal que compreende $2n + 1$ quadrados tem $n$ contadores vermelhos colocados em uma extremidade e $n$ contadores azuis na outra extremidade, estando separados por um único quadrado vazio no centro. Por exemplo, para $n = 3$.

<img class="img-responsive center-block" alt="três quadrados com contadores vermelhos e azuis colocados em pontas opostas da linha, separados por um quadrado vazio" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-1.gif" style="background-color: white; padding: 10px;" />

Um contador pode se mover de um quadrado para o próximo (deslizando) ou pular sobre outro contador (salto) desde que o quadrado ao lado desse contador esteja desocupado.

<img class="img-responsive center-block" alt="movimentos permitidos do contador" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-2.gif" style="background-color: white; padding: 10px;" />

Considere $M(n)$ como representando o número mínimo de movimentos/ações para reverter completamente as posições dos contadores coloridos; ou seja, mover todos os contadores vermelhos para a direita e todos os contadores azuis para a esquerda.

Pode-se verificar que $M(3) = 15$, que também é um número triangular.

Se criarmos uma sequência baseada nos valores de n para os quais $M(n)$ é um número triangular, então os primeiros cinco termos seriam: 1, 3, 10, 22, e 63, e sua soma seria 99.

Encontre a soma dos primeiros quarenta termos desta sequência.

# --hints--

`swappingCounters()` deve retornar `2470433131948040`.

```js
assert.strictEqual(swappingCounters(), 2470433131948040);
```

# --seed--

## --seed-contents--

```js
function swappingCounters() {

  return true;
}

swappingCounters();
```

# --solutions--

```js
// solution required
```
