---
id: 5900f50c1000cf542c51001e
title: 'Problema 415: Conjuntos titânicos'
challengeType: 1
forumTopicId: 302084
dashedName: problem-415-titanic-sets
---

# --description--

Um conjunto de pontos de uma rede diagonal $S$ é chamado de conjunto titânico se existir uma linha que passe por exatamente dois pontos em $S$.

Um exemplo de um conjunto titânico é $S = \\{(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)\\}$, onde a linha passando por (0, 1) e (2, 0) não passa por nenhum outro ponto em $S$.

Por outro lado, o conjunto {(0, 0), (1, 1), (2, 2), (4, 4)} não é um conjunto titânico, já que a linha que passa por dois pontos quaisquer no conjunto também passa pelos outros dois.

Para qualquer inteiro positivo $N$, consideremos que $T(N)$ é o número de conjuntos titânicos $S$ em que cada ponto ($x$, $y$) satisfaz $0 ≤ x$, $y ≤ N$. Pode-se verificar que $T(1) = 11$, $T(2) = 494$, $T(4) = 33.554.178$, $T(111)\bmod {10}^8 = 13.500.401$ e $T({10}^5)\bmod {10}^8 = 63.259.062$.

Encontre $T({10}^{11})\bmod {10}^8$.

# --hints--

`titanicSets()` deve retornar `55859742`.

```js
assert.strictEqual(titanicSets(), 55859742);
```

# --seed--

## --seed-contents--

```js
function titanicSets() {

  return true;
}

titanicSets();
```

# --solutions--

```js
// solution required
```
