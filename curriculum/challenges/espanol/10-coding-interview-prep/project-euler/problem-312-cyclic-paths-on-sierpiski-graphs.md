---
id: 5900f4a51000cf542c50ffb7
title: 'Problem 312: Cyclic paths on Sierpiński graphs'
challengeType: 5
forumTopicId: 301968
dashedName: problem-312-cyclic-paths-on-sierpiski-graphs
---

# --description--

\- A Sierpiński graph of order-1 (S1) is an equilateral triangle.

\- Sn+1 is obtained from Sn by positioning three copies of Sn so that every pair of copies has one common corner.

Let C(n) be the number of cycles that pass exactly once through all the vertices of Sn. For example, C(3) = 8 because eight such cycles can be drawn on S3, as shown below:

It can also be verified that : C(1) = C(2) = 1 C(5) = 71328803586048 C(10 000) mod 108 = 37652224 C(10 000) mod 138 = 617720485

Find C(C(C(10 000))) mod 138.

# --hints--

`euler312()` should return 324681947.

```js
assert.strictEqual(euler312(), 324681947);
```

# --seed--

## --seed-contents--

```js
function euler312() {

  return true;
}

euler312();
```

# --solutions--

```js
// solution required
```
