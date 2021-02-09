---
id: 5900f4b71000cf542c50ffc9
title: 'Problem 330: Euler''s Number'
challengeType: 5
forumTopicId: 301988
dashedName: problem-330-eulers-number
---

# --description--

An infinite sequence of real numbers a(n) is defined for all integers n as follows:

<!-- TODO Use MathJax and re-write from projecteuler.net -->

For example,a(0) = 11! + 12! + 13! + ... = e − 1 a(1) = e − 11! + 12! + 13! + ... = 2e − 3 a(2) = 2e − 31! + e − 12! + 13! + ... = 72 e − 6

with e = 2.7182818... being Euler's constant.

It can be shown that a(n) is of the form

A(n) e + B(n)n! for integers A(n) and B(n).

For example a(10) =

328161643 e − 65269448610!.

Find A(109) + B(109) and give your answer mod 77 777 777.

# --hints--

`euler330()` should return 15955822.

```js
assert.strictEqual(euler330(), 15955822);
```

# --seed--

## --seed-contents--

```js
function euler330() {

  return true;
}

euler330();
```

# --solutions--

```js
// solution required
```
