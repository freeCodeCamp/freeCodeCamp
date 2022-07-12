---
id: 5900f46e1000cf542c50ff81
title: 'Завдання 258: Метод Фібоначчі із запізнюваннями'
challengeType: 1
forumTopicId: 301906
dashedName: problem-258-a-lagged-fibonacci-sequence
---

# --description--

Послідовність визначається як:

- $g_k = 1$, для $0 ≤ k ≤ 1999$
- $g_k = g_{k - 2000} + g_{k - 1999}$, для $k ≥ 2000$.

Знайдіть $g_k$ mod 20092010 для $k = {10}^{18}$.

# --hints--

`laggedFibonacciSequence()` має повернути `12747994`.

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
