---
id: 5900f4ab1000cf542c50ffbe
title: 'Проблема 319: Обмежені послідовності'
challengeType: 1
forumTopicId: 301975
dashedName: problem-319-bounded-sequences
---

# --description--

Нехай $x_1, x_2, \ldots, x_n$ це послідовність довжини $n$ так, що:

- $x_1 = 2$
- для усіх $1 &lt; i ≤ n : x_{i - 1} &lt; x_i$
- для усіх $i$ та $j$ з $1 ≤ i, j ≤ n : {(x_i)}^j &lt; {(x_j + 1)}^i$

Існують лише п'ять таких послідовностей довжини 2, а саме: {2,4}, {2,5}, {2,6}, {2,7} та {2,8}. Існують 293 такі послідовності довжини 5; нижче наведені три приклада: {2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181}.

Нехай $t(n)$ позначає кількість таких послідовностей довжини $n$. Дано, що $t(10) = 86195$ та $t(20) = 5227991891$.

Знайдіть $t({10}^{10})$ та дайте вашу відповідь на модуль $10^9$.

# --hints--

`boundedSequences()` має видати `268457129`.

```js
assert.strictEqual(boundedSequences(), 268457129);
```

# --seed--

## --seed-contents--

```js
function boundedSequences() {

  return true;
}

boundedSequences();
```

# --solutions--

```js
// solution required
```
