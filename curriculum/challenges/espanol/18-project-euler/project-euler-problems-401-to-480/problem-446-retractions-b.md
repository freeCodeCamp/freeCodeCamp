---
id: 5900f52c1000cf542c51003d
title: 'Problem 446: Retractions B'
challengeType: 1
forumTopicId: 302118
dashedName: problem-446-retractions-b
---

# --description--

For every integer $n > 1$, the family of functions $f_{n, a, b}$ is defined by:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ para $a, b, x$ entero y $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Llamaremos $f_{n, a, b}$ una retracción si $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ para cada $0 \le x \lt n$.

Sea $R(n)$ el número de retracciones para $n$.

$F(N) = \displaystyle\sum_{n = 1}^N R(n^4 + 4)$.

$F(1024) = 77\\,532\\,377\\,300\\,600$.

Find $F({10}^7)$. Give your answer modulo $1\\,000\\,000\\,007$.

# --hints--

`retractionsB()` should return `907803852`.

```js
assert.strictEqual(retractionsB(), 907803852);
```

# --seed--

## --seed-contents--

```js
function retractionsB() {

  return true;
}

retractionsB();
```

# --solutions--

```js
// solution required
```
