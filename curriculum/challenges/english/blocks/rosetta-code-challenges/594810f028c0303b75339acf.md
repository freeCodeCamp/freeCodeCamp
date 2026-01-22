---
id: 594810f028c0303b75339acf
title: Ackermann function
challengeType: 1
forumTopicId: 302223
dashedName: ackermann-function
---

# --description--

The Ackermann function is a classic example of a recursive function, notable especially because it is not a primitive recursive function. It grows very quickly in value, as does the size of its call tree.

The Ackermann function is usually defined as follows:

$A(m, n) = \\begin{cases} n+1 & \\mbox{if } m = 0 \\\\ A(m-1, 1) & \\mbox{if } m > 0 \\mbox{ and } n = 0 \\\\ A(m-1, A(m, n-1)) & \\mbox{if } m > 0 \\mbox{ and } n > 0. \\end{cases}$

Its arguments are never negative and it always terminates.

# --instructions--

Write a function which returns the value of $A(m, n)$. Arbitrary precision is preferred (since the function grows so quickly), but not required.

# --hints--

`ack` should be a function.

```js
assert(typeof ack === 'function');
```

`ack(0, 0)` should return 1.

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)` should return 3.

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)` should return 13.

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)` should return 61.

```js
assert(ack(3, 3) === 61);
```

# --seed--

## --seed-contents--

```js
function ack(m, n) {

}
```

# --solutions--

```js
function ack(m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
```
