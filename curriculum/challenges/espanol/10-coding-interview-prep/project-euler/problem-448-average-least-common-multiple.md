---
id: 5900f52c1000cf542c51003f
title: 'Problem 448: Average least common multiple'
challengeType: 1
forumTopicId: 302120
dashedName: problem-448-average-least-common-multiple
---

# --description--

The function $lcm(a, b)$ denotes the least common multiple of $a$ and $b$.

Let $A(n)$ be the average of the values of $lcm(n, i)$ for $1 ≤ i ≤ n$.

E.g: $A(2) = \frac{2 + 2}{2} = 2$ and $A(10) = \frac{10 + 10 + 30 + 20 + 10 + 30 + 70 + 40 + 90 + 10}{10} = 32$.

Let $S(n) = \sum A(k)$ for $1 ≤ k ≤ n$.

$S(100) = 122\\,726$.

Find $S(99\\,999\\,999\\,019)\bmod 999\\,999\\,017$.

# --hints--

`averageLCM()` should return `106467648`.

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
