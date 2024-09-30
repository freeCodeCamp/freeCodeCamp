---
id: 5900f52a1000cf542c51003c
title: 'Problem 445: Retractions A'
challengeType: 1
forumTopicId: 302117
dashedName: problem-445-retractions-a
---

# --description--

For every integer $n > 1$, the family of functions $f_{n, a, b}$ is defined by:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ for $a, b, x$ integer and $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

We will call $f_{n, a, b}$ a retraction if $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ for every $0 \le x \lt n$.

Let $R(n)$ be the number of retractions for $n$.

You are given that

$$\sum_{k = 1}^{99\\,999} R(\displaystyle\binom{100\\,000}{k}) \equiv 628\\,701\\,600\bmod 1\\,000\\,000\\,007$$

Find $$\sum_{k = 1}^{9\\,999\\,999} R(\displaystyle\binom{10\\,000\\,000}{k})$$ Give your answer modulo $1\\,000\\,000\\,007$.

# --hints--

`retractionsA()` should return `659104042`.

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
