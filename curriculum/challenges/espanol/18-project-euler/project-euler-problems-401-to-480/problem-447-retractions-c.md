---
id: 5900f52c1000cf542c51003e
title: 'Problem 447: Retractions C'
challengeType: 1
forumTopicId: 302119
dashedName: problem-447-retractions-c
---

# --description--

For every integer $n > 1$, the family of functions $f_{n, a, b}$ is defined by:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ para $a, b, x$ entero y $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Llamaremos $f_{n, a, b}$ una retracción si $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ para cada $0 \le x \lt n$.

Sea $R(n)$ el número de retracciones para $n$.

$F(N) = \displaystyle\sum_{n = 2}^N R(n)$.

$F({10}^7) ≡ 638\\,042\\,271\bmod 1\\,000\\,000\\,007$.

Find $F({10}^{14})$. Give your answer modulo $1\\,000\\,000\\,007$.

# --hints--

`retractionsC()` should return `530553372`.

```js
assert.strictEqual(retractionsC(), 530553372);
```

# --seed--

## --seed-contents--

```js
function retractionsC() {

  return true;
}

retractionsC();
```

# --solutions--

```js
// solution required
```
