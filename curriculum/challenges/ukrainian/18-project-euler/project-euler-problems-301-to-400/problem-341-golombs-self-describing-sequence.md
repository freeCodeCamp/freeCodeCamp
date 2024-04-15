---
id: 5900f4c11000cf542c50ffd3
title: 'Завдання 341: самоописова послідовність Голомба'
challengeType: 1
forumTopicId: 302000
dashedName: problem-341-golombs-self-describing-sequence
---

# --description--

Самоописова послідовність Голомба ($G(n)$) є єдиною неспадною послідовністю натуральних чисел, за яких $n$ з’являється рівно $G(n)$ разів. Значенням $G(n)$ для перших кількох $n$ є

$$\begin{array}{c}   n    & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \ldots \\\\
  G(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5  &  5 &  6 &  6 &  6 &  6 & \ldots \end{array}$$

Дано, що $G({10}^3) = 86$, $G({10}^6) = 6137$.

Також дано, що $\sum G(n^3) = 153\\,506\\,976$ за умови $1 ≤ n &lt; {10}^3$.

Знайдіть $\sum G(n^3)$ за умови $1 ≤ n &lt; {10}^6$.

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
