---
id: 5900f5271000cf542c51003a
title: 'Problema 443: sequenza GCD'
challengeType: 1
forumTopicId: 302115
dashedName: problem-443-gcd-sequence
---

# --description--

Sia $g(n)$ una sequenza definita come segue:

$$\begin{align}   & g(4) = 13, \\\\
  & g(n) = g(n-1) + gcd(n, g(n - 1)) \text{ for } n > 4. \end{align}$$

I primi valori sono:

$$\begin{array}{l}   n    & 4  & 5  & 6  & 7  & 8  & 9  & 10 & 11 & 12 & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & \ldots \\\\
  g(n) & 13 & 14 & 16 & 17 & 18 & 27 & 28 & 29 & 30 & 31 & 32 & 33 & 34 & 51 & 54 & 55 & 60 & \ldots \end{array}$$

Ti viene dato che $g(1\\,000) = 2\\,524$ and $g(1\\,000\\,000) = 2\\,624\\,152$.

Trova $g({10}^{15})$.

# --hints--

`gcdSequence()` dovrebbe restituire `2744233049300770`.

```js
assert.strictEqual(gcdSequence(), 2744233049300770);
```

# --seed--

## --seed-contents--

```js
function gcdSequence() {

  return true;
}

gcdSequence();
```

# --solutions--

```js
// solution required
```
