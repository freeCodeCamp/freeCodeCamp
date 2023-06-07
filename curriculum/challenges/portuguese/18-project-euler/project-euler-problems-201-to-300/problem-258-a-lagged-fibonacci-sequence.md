---
id: 5900f46e1000cf542c50ff81
title: 'Problema 258: Uma sequência de Fibonacci com atraso'
challengeType: 1
forumTopicId: 301906
dashedName: problem-258-a-lagged-fibonacci-sequence
---

# --description--

Uma sequência é definida como:

- $g_k = 1$, para $0 ≤ k ≤ 1999$
- $g_k = g_{k - 2000} + g_{k - 1999}$, para $k ≥ 2000$.

Encontre $g_k$ mod 20092010 para $k = {10}^{18}$.

# --hints--

`laggedFibonacciSequence()` deve retornar `12747994`.

```js
assert.strictEqual(laggedFibonacciSequence(), 12747994);
```

# --seed--

## --seed-contents--

```js
function laggedFibonacciSequence() {

  return true;
}

laggedFibonacciSequence();
```

# --solutions--

```js
// solution required
```
