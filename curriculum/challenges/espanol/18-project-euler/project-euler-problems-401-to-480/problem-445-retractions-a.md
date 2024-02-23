---
id: 5900f52a1000cf542c51003c
title: 'Problema 445: Retracciones A'
challengeType: 1
forumTopicId: 302117
dashedName: problem-445-retractions-a
---

# --description--

For every integer $n > 1$, the family of functions $f_{n, a, b}$ is defined by:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ para $a, b, x$ entero y $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Llamaremos $f_{n, a, b}$ una retracción si $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ para cada $0 \le x \lt n$.

Sea $R(n)$ el número de retracciones para $n$.

Se le ha dado eso

$$\sum_{k = 1}^{99\\,999} R(\displaystyle\binom{100\\,000}{k}) \equiv 628\\,701\\,600\bmod 1\\,000\\,000\\,007$$

Encuentra $$\sum_{k = 1}^{9\\,999\\,999} R(\displaystyle\binom{10\\,000\\,000}{k})$$ Da tu respuesta modulo $1\\,000\\,000\\,007$.

# --hints--

`retractionsA()` debería devolver `659104042`.

```js
assert.strictEqual(retractionsA(), 659104042);
```

# --seed--

## --seed-contents--

```js
function retractionsA() {

  return true;
}

retractionsA();
```

# --solutions--

```js
// solution required
```
