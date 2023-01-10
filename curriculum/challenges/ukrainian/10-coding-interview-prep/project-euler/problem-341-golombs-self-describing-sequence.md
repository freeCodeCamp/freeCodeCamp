---
id: 5900f4c11000cf542c50ffd3
title: 'Задача 341: Послідовність Голомба, яка описує саму себе'
challengeType: 1
forumTopicId: 302000
dashedName: problem-341-golombs-self-describing-sequence
---

# --description--

Послідовність Голомба ($G(n)$) є єдиною незменшувальною послідовність натуральних чисел, така що $n$ з'являється рівно $G(n)$ разів у послідовності. Значення $G(n)$ для перших кількох $n$ є

$$\початок{array}{c}   n    & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \ldots \\\\
  G(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5  &  5 &  6 &  6 &  6 &  6 & \ldots \end{array}$$

Вам дано що $G({10}^3) = 86$, $G({10}^6) = 6137$.

Вам дано що $\sum G(n^3) = 153\\,506\\,976$ for $1 ≤ n &lt; {10}^3$.

Знайти $\sum G(n^3)$ для $1 ≤ n &lt; {10}^6$.

# --hints--

`golombsSequence()` має повернути `56098610614277016`.

```js
assert.strictEqual(golombsSequence(), 56098610614277016);
```

# --seed--

## --seed-contents--

```js
function golombsSequence() {

  return true;
}

golombsSequence();
```

# --solutions--

```js
// solution required
```
