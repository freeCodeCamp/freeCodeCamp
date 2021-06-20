---
id: 5900f5191000cf542c51002b
title: 'Problem 428: Necklace of Circles'
challengeType: 5
forumTopicId: 302098
dashedName: problem-428-necklace-of-circles
---

# --description--

Let `a`, `b` and `c` be positive numbers.

Let W, X, Y, Z be four collinear points where |WX| = `a`, |XY| = `b`, |YZ| = `c` and |WZ| = `a` + `b` + `c`.

Let C<sub>in</sub> be the circle having the diameter XY.

Let C<sub>out</sub> be the circle having the diameter WZ.

The triplet (`a`, `b`, `c`) is called a *necklace triplet* if you can place `k` ≥ 3 distinct circles C<sub>1</sub>, C<sub>2</sub>, ..., C<sub><var>k</var></sub> such that:

<ul><li>C<sub><var>i</var></sub> has no common interior points with any C<sub><var>j</var></sub> for 1 ≤ <var>i</var>, <var>j</var> ≤ <var>k</var> and <var>i</var> ≠ <var>j</var>,</li><li>C<sub><var>i</var></sub> is tangent to both C<sub>in</sub> and C<sub>out</sub> for 1 ≤ <var>i</var> ≤ <var>k</var>,</li><li>C<sub><var>i</var></sub> is tangent to C<sub><var>i</var>+1</sub> for 1 ≤ <var>i</var> &lt; <var>k</var>, and</li><li>C<sub><var>k</var></sub> is tangent to C<sub>1</sub>.</li></ul>
For example, (5, 5, 5) and (4, 3, 21) are necklace triplets, while it can be shown that (2, 2, 5) is not.
<img src="https://projecteuler.net/project/images/p428_necklace.png" alt="a visual representation of a necklace triplet">

Let T(`n`) be the number of necklace triplets (`a`, `b`, `c`) such that `a`, `b` and `c` are positive integers, and `b` ≤ `n`. For example, T(1) = 9, T(20) = 732 and T(3000) = 438106.

Find T(1 000 000 000).

# --hints--

`necklace(1000000000)` should return 747215561862.

```js
assert.strictEqual(necklace(1000000000), 747215561862);
```

# --seed--

## --seed-contents--

```js
function necklace(n) {

  return true;
}

necklace(1000000000)
```

# --solutions--

```js
// solution required
```
