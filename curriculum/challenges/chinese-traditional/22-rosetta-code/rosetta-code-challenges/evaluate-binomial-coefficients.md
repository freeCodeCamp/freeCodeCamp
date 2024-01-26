---
id: 598de241872ef8353c58a7a2
title: 評估二項式係數
challengeType: 1
forumTopicId: 302259
dashedName: evaluate-binomial-coefficients
---

# --description--

Write a function to calculate the binomial coefficient for the given value of n and k.

寫一個函數來計算給定n和k值的二項式係數。

$\\binom{n}{k} = \\frac{n!}{(n-k)!k!} } = \\ frac {n（n-1）（n-2）\\ ldots（n-k + 1）} { k（k-1）（k-2）\\ ldots 1} $

# --hints--

`binom`是一個功能。

```js
assert(typeof binom === 'function');
```

`binom(5,3)`應該返回10。

```js
assert.equal(binom(5, 3), 10);
```

`binom(7,2)`應該返回21。

```js
assert.equal(binom(7, 2), 21);
```

`binom(10,4)`應該返回210。

```js
assert.equal(binom(10, 4), 210);
```

`binom(6,1)`應該返回6。

```js
assert.equal(binom(6, 1), 6);
```

`binom(12,8)`應該返回495。

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
