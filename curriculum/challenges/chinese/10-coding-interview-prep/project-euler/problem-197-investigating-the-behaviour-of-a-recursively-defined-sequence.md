---
id: 5900f4311000cf542c50ff44
title: '问题 197：研究递归定义的序列的行为'
challengeType: 1
forumTopicId: 301835
dashedName: problem-197-investigating-the-behaviour-of-a-recursively-defined-sequence
---

# --description--

Given is the function $f(x) = ⌊{2}^{30.403243784 - x^2}⌋ × {10}^{-9}$ ( ⌊ ⌋ is the floor-function), the sequence $u_n$ is defined by $u_0 = -1$ and $u_{n + 1} = f(u_n)$.

Find $u_n + u_{n + 1}$ for $n = {10}^{12}$. Give your answer with 9 digits after the decimal point.

# --hints--

`recursivelyDefinedSequence()` should return `1.710637717`.

```js
assert.strictEqual(recursivelyDefinedSequence(), 1.710637717);
```

# --seed--

## --seed-contents--

```js
function recursivelyDefinedSequence() {

  return true;
}

recursivelyDefinedSequence();
```

# --solutions--

```js
// solution required
```
