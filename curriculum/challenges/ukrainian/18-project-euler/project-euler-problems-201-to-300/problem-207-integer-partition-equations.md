---
id: 5900f43c1000cf542c50ff4e
title: 'Завдання 207: рівняння цілочислових розбиттів'
challengeType: 1
forumTopicId: 301848
dashedName: problem-207-integer-partition-equations
---

# --description--

Для деяких натуральних чисел $k$ існують цілочислові розбиття у вигляді $4^t = 2^t + k$,

де $4^t$, $2^t$ та $k$ є натуральними числами, а $t$ є дійсним числом.

Першими двома такими розбиттями є $4^1 = 2^1 + 2$ та $4^{1.584\\,962\\,5\ldots} = 2^{1.584\\,962\\,5\ldots} + 6$.

Розбиття, де $t$ також є цілим числом, називають досконалим розбиттям. Нехай $P(m)$ буде співвідношенням досконалих розбиттів при $k ≤ m$ за будь-якого $m ≥ 1$.

Таким чином, $P(6) = \frac{1}{2}$.

У таблиці нижче перераховано деякі значення $P(m)$

$$\begin{align}   & P(5) = \frac{1}{1}    \\\\
  & P(10) = \frac{1}{2}   \\\\   & P(15) = \frac{2}{3}   \\\\
  & P(20) = \frac{1}{2}   \\\\   & P(25) = \frac{1}{2}   \\\\
  & P(30) = \frac{2}{5}   \\\\   & \ldots                \\\\
  & P(180) = \frac{1}{4}  \\\\ & P(185) = \frac{3}{13} \end{align}$$

Знайдіть найменше значення $m$, за якого $P(m) &lt; \frac{1}{12\\,345}$

# --hints--

`integerPartitionEquations()` має повернути `44043947822`.

```js
assert.strictEqual(integerPartitionEquations(), 44043947822);
```

# --seed--

## --seed-contents--

```js
function integerPartitionEquations() {

  return true;
}

integerPartitionEquations();
```

# --solutions--

```js
// solution required
```
