---
id: 5900f4291000cf542c50ff3b
title: 'Problem 188: The hyperexponentiation of a number'
challengeType: 1
forumTopicId: 301824
dashedName: problem-188-the-hyperexponentiation-of-a-number
---

# --description--

The hyperexponentiation or tetration of a number $a$ by a positive integer $b$, denoted by $a↑↑b$ or ${}^ba$, is recursively defined by:

$a↑↑1 = a$,

$a↑↑(k+1) = a^{(a↑↑k)}$.

Thus we have e.g. $3↑↑2 = 3^3 = 27$, hence $3↑↑3 = 3^{27} = 7625597484987$ and $3↑↑4$ is roughly ${10}^{3.6383346400240996 \times {10}^{12}}$. Find the last 8 digits of $1777↑↑1855$.

# --hints--

`hyperexponentation()` should return `95962097`.

```js
assert.strictEqual(hyperexponentation(), 95962097);
```

# --seed--

## --seed-contents--

```js
function hyperexponentation() {

  return true;
}

hyperexponentation();
```

# --solutions--

```js
// solution required
```
