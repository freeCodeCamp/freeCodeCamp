---
id: 5900f4861000cf542c50ff99
title: 'Problem 282: The Ackermann function'
challengeType: 1
forumTopicId: 301933
dashedName: problem-282-the-ackermann-function
---

# --description--

For non-negative integers $m$, $n$, the Ackermann function $A(m, n)$ is defined as follows:

$$A(m, n) = \begin{cases} n + 1                 & \text{if $m = 0$}             \\\\
A(m - 1, 1)           & \text{if $m > 0$ and $n = 0$} \\\\ A(m - 1, A(m, n - 1)) & \text{if $m > 0$ and $n > 0$} \end{cases}$$

For example $A(1, 0) = 2$, $A(2, 2) = 7$ and $A(3, 4) = 125$.

Find $\displaystyle\sum_{n = 0}^6 A(n, n)$ and give your answer mod ${14}^8$.

# --hints--

`ackermanFunction()` should return `1098988351`.

```js
assert.strictEqual(ackermanFunction(), 1098988351);
```

# --seed--

## --seed-contents--

```js
function ackermanFunction() {

  return true;
}

ackermanFunction();
```

# --solutions--

```js
// solution required
```
