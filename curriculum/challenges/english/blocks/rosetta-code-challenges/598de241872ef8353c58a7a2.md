---
id: 598de241872ef8353c58a7a2
title: Evaluate binomial coefficients
challengeType: 1
forumTopicId: 302259
dashedName: evaluate-binomial-coefficients
---

# --description--

Write a function to calculate the binomial coefficient for the given value of n and k.

This formula is recommended:

$\\binom{n}{k} = \\frac{n!}{(n-k)!k!} = \\frac{n(n-1)(n-2)\\ldots(n-k+1)}{k(k-1)(k-2)\\ldots 1}$

# --hints--

`binom` should be a function.

```js
assert(typeof binom === 'function');
```

`binom(5,3)` should return 10.

```js
assert.equal(binom(5, 3), 10);
```

`binom(7,2)` should return 21.

```js
assert.equal(binom(7, 2), 21);
```

`binom(10,4)` should return 210.

```js
assert.equal(binom(10, 4), 210);
```

`binom(6,1)` should return 6.

```js
assert.equal(binom(6, 1), 6);
```

`binom(12,8)` should return 495.

```js
assert.equal(binom(12, 8), 495);
```

# --seed--

## --seed-contents--

```js
function binom(n, k) {

}
```

# --solutions--

```js
function binom(n, k) {
  let coeff = 1;
  for (let i = n - k + 1; i <= n; i++) coeff *= i;
  for (let i = 1; i <= k; i++) coeff /= i;
  return coeff;
}
```
