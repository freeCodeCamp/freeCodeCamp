---
id: 5900f43e1000cf542c50ff4f
title: 'Problem 209: Circular Logic'
challengeType: 1
forumTopicId: 301850
dashedName: problem-209-circular-logic
---

# --description--

A $k$-input binary truth table is a map from $k$ input bits (binary digits, 0 [false] or 1 [true]) to 1 output bit. For example, the $2$-input binary truth tables for the logical $AND$ and $XOR$ functions are:

| x | y | x AND y |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

| x | y | x XOR y |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

How many $6$-input binary truth tables, $τ$, satisfy the formula

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

for all $6$-bit inputs ($a$, $b$, $c$, $d$, $e$, $f$)?

# --hints--

`circularLogic()` should return `15964587728784`.

```js
assert.strictEqual(circularLogic(), 15964587728784);
```

# --seed--

## --seed-contents--

```js
function circularLogic() {

  return true;
}

circularLogic();
```

# --solutions--

```js
// solution required
```
