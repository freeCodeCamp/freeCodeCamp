---
id: 5900f49d1000cf542c50ffb0
title: 'Problema 305: Posição reflexiva'
challengeType: 1
forumTopicId: 301959
dashedName: problem-305-reflexive-position
---

# --description--

Vamos chamar de $S$ a string (infinita) que é feita concatenando os números inteiros positivos consecutivos (começando de 1) escrita na base 10.

Assim, $S = 1234567891011121314151617181920212223242\ldots$

É fácil ver que qualquer número vai aparecer um número infinito de vezes em $S$.

Vamos chamar de $f(n)$ na posição inicial da $n^{\text{-ésima}}$ ocorrência de $n$ em $S$. Por exemplo, $f(1) = 1$, $f(5) = 81$, $f(12) = 271$ e $f(7780) = 111.111.365$.

Encontre $\sum f(3^k) para 1 ≤ k ≤ 13$.

# --hints--

`reflexivePosition()` deve retornar `18174995535140`.

```js
assert.strictEqual(reflexivePosition(), 18174995535140);
```

# --seed--

## --seed-contents--

```js
function reflexivePosition() {

  return true;
}

reflexivePosition();
```

# --solutions--

```js
// solution required
```
