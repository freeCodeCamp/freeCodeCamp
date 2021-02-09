---
id: 5900f4201000cf542c50ff33
title: 'Problem 180: Rational zeros of a function of three variables'
challengeType: 5
forumTopicId: 301816
dashedName: problem-180-rational-zeros-of-a-function-of-three-variables
---

# --description--

For any integer n, consider the three functions

f1,n(x,y,z) = xn+1 + yn+1 − zn+1f2,n(x,y,z) = (xy + yz + zx)\*(xn-1 + yn-1 − zn-1)f3,n(x,y,z) = xyz\*(xn-2 + yn-2 − zn-2)

and their combination

fn(x,y,z) = f1,n(x,y,z) + f2,n(x,y,z) − f3,n(x,y,z)

We call (x,y,z) a golden triple of order k if x, y, and z are all rational numbers of the form a / b with

0 &lt; a &lt; b ≤ k and there is (at least) one integer n, so that fn(x,y,z) = 0.

Let s(x,y,z) = x + y + z.

Let t = u / v be the sum of all distinct s(x,y,z) for all golden triples (x,y,z) of order 35. All the s(x,y,z) and t must be in reduced form.

Find u + v.

# --hints--

`euler180()` should return 285196020571078980.

```js
assert.strictEqual(euler180(), 285196020571078980);
```

# --seed--

## --seed-contents--

```js
function euler180() {

  return true;
}

euler180();
```

# --solutions--

```js
// solution required
```
