---
id: 5900f4791000cf542c50ff8c
title: 'Problem 269: Polynomials with at least one integer root'
challengeType: 5
forumTopicId: 301918
dashedName: problem-269-polynomials-with-at-least-one-integer-root
---

# --description--

A root or zero of a polynomial P(x) is a solution to the equation P(x) = 0.

Define Pn as the polynomial whose coefficients are the digits of n.

For example, P5703(x) = 5x3 + 7x2 + 3.

We can see that:Pn(0) is the last digit of n, Pn(1) is the sum of the digits of n, Pn(10) is n itself.Define Z(k) as the number of positive integers, n, not exceeding k for which the polynomial Pn has at least one integer root.

It can be verified that Z(100 000) is 14696.

What is Z(1016)?

# --hints--

`euler269()` should return 1311109198529286.

```js
assert.strictEqual(euler269(), 1311109198529286);
```

# --seed--

## --seed-contents--

```js
function euler269() {

  return true;
}

euler269();
```

# --solutions--

```js
// solution required
```
