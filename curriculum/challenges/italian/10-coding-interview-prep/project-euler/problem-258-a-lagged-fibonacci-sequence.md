---
id: 5900f46e1000cf542c50ff81
title: 'Problema 258: Una sequenza di Fibonacci ritardata'
challengeType: 1
forumTopicId: 301906
dashedName: problem-258-a-lagged-fibonacci-sequence
---

# --description--

Una sequenza è definita come:

- $g_k = 1$, per $0 ≤ k ≤ 1999$
- $g_k = g_{k - 2000} + g_{k - 1999}$, per $k ≥ 2000$.

Trova $g_k$ mod 20092010 per $k = {10}^{18}$.

# --hints--

`laggedFibonacciSequence()` dovrebbe restituire `12747994`.

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
