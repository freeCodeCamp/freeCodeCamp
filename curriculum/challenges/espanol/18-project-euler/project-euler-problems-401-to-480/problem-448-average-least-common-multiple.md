---
id: 5900f52c1000cf542c51003f
title: 'Problema 448: Promedio de mínimo común múltiplo'
challengeType: 1
forumTopicId: 302120
dashedName: problem-448-average-least-common-multiple
---

# --description--

The function $lcm(a, b)$ denotes the least common multiple of $a$ and $b$.

$A(n)$ sea el promedio de los valores de $lcm(n, i)$ para $1 ≤ i ≤ n$.

Por ej.: $A(2) = \frac{2 + 2}{2} = 2$ y $A(10) = \frac{10 + 10 + 30 + 20 + 10 + 30 + 70 + 40 + 90 + 10}{10} = 32$.

Sea $S(n) = \sum A(k)$ para $1 ≤ k ≤ n$.

$S(100) = 122\\,726$.

Encontrar $S(99\\,999\\,999\\,019)\bmod 999\\,999\\,017$.

# --hints--

`averageLCM()` deberia devolver `106467648`.

```js
assert.strictEqual(averageLCM(), 106467648);
```

# --seed--

## --seed-contents--

```js
function averageLCM() {

  return true;
}

averageLCM();
```

# --solutions--

```js
// solution required
```
