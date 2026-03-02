---
id: 5900f4c31000cf542c50ffd5
title: 'Problem 342: The totient of a square is a cube'
challengeType: 1
forumTopicId: 302001
dashedName: problem-342-the-totient-of-a-square-is-a-cube
---

# --description--

Consider the number 50.

${50}^2 = 2500 = 2^2 × 5^4$, so $φ(2500) = 2 × 4 × 5^3 = 8 × 5^3 = 2^3 × 5^3$. $φ$ denotes Euler's totient function.

So 2500 is a square and $φ(2500)$ is a cube.

Find the sum of all numbers $n$, $1 &lt; n &lt; {10}^{10}$ such that $φ(n^2)$ is a cube.


# --hints--

`totientOfSquare()` should return `5943040885644`.

```js
assert.strictEqual(totientOfSquare(), 5943040885644);
```

# --seed--

## --seed-contents--

```js
function totientOfSquare() {

  return true;
}

totientOfSquare();
```

# --solutions--

```js
// solution required
```
