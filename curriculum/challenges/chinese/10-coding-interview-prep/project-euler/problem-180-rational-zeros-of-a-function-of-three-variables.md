---
id: 5900f4201000cf542c50ff33
title: 'Problem 180: Rational zeros of a function of three variables'
challengeType: 1
forumTopicId: 301816
dashedName: problem-180-rational-zeros-of-a-function-of-three-variables
---

# --description--

For any integer $n$, consider the three functions

$$\begin{align}   & f_{1,n}(x,y,z) = x^{n + 1} + y^{n + 1} − z^{n + 1}\\\\
  & f_{2,n}(x,y,z) = (xy + yz + zx) \times (x^{n - 1} + y^{n - 1} − z^{n - 1})\\\\ & f_{3,n}(x,y,z) = xyz \times (x^{n - 2} + y^{n - 2} − z^{n - 2}) \end{align}$$

and their combination

$$\begin{align} & f_n(x,y,z) = f_{1,n}(x,y,z) + f_{2,n}(x,y,z) − f_{3,n}(x,y,z) \end{align}$$

We call $(x,y,z)$ a golden triple of order $k$ if $x$, $y$, and $z$ are all rational numbers of the form $\frac{a}{b}$ with $0 &lt; a &lt; b ≤ k$ and there is (at least) one integer $n$, so that $f_n(x,y,z) = 0$.

Let $s(x,y,z) = x + y + z$.

Let $t = \frac{u}{v}$ be the sum of all distinct $s(x,y,z)$ for all golden triples $(x,y,z)$ of order 35. All the $s(x,y,z)$ and $t$ must be in reduced form.

Find $u + v$.

# --hints--

`rationalZeros()` should return `285196020571078980`.

```js
assert.strictEqual(rationalZeros(), 285196020571078980);
```

# --seed--

## --seed-contents--

```js
function rationalZeros() {

  return true;
}

rationalZeros();
```

# --solutions--

```js
// solution required
```
