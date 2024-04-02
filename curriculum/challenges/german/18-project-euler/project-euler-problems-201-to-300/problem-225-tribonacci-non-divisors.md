---
id: 5900f44e1000cf542c50ff60
title: 'Problem 225: Tribonacci-Nicht-Teiler'
challengeType: 1
forumTopicId: 301868
dashedName: problem-225-tribonacci-non-divisors
---

# --description--

Die Sequenz 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201 ...

wird definiert durch $T_1 = T_2 = T_3 = 1$ und $T_n = T_{n - 1} + T_{n - 2} + T_{n - 3}$.

Es kann gezeigt werden, dass 27 keinen einzigen Term dieser Folge teilt. Tatsächlich ist 27 die erste ungerade Zahl mit dieser Eigenschaft.

Finde die ${124}^{\text{th}}$ ungerade Zahl, die keinen Term der obigen Folge teilt.

# --hints--

`tribonacciNonDivisors()` sollte `2009` zurückgeben.

```js
assert.strictEqual(tribonacciNonDivisors(), 2009);
```

# --seed--

## --seed-contents--

```js
function tribonacciNonDivisors() {

  return true;
}

tribonacciNonDivisors();
```

# --solutions--

```js
// solution required
```
