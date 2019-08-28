---
id: 5900f5191000cf542c51002b
challengeType: 5
title: 'Problem 428: Necklace of Circles'
forumTopicId: 302098
localeTitle: 'Задача 428: Ожерелье кругов'
---

## Description
<section id='description'>
Let <var>a</var>, <var>b</var> and <var>c</var> be positive numbers.
Let W, X, Y, Z be four collinear points where |WX| = <var>a</var>, |XY| = <var>b</var>, |YZ| = <var>c</var> and |WZ| = <var>a</var> + <var>b</var> + <var>c</var>.
Let C<sub>in</sub> be the circle having the diameter XY.
Let C<sub>out</sub> be the circle having the diameter WZ.

The triplet (<var>a</var>, <var>b</var>, <var>c</var>) is called a <em>necklace triplet</em> if you can place <var>k</var> ≥ 3 distinct circles C<sub>1</sub>, C<sub>2</sub>, ..., C<sub><var>k</var></sub> such that:

<ul><li>C<sub><var>i</var></sub> has no common interior points with any C<sub><var>j</var></sub> for 1 ≤ <var>i</var>, <var>j</var> ≤ <var>k</var> and <var>i</var> ≠ <var>j</var>,</li><li>C<sub><var>i</var></sub> is tangent to both C<sub>in</sub> and C<sub>out</sub> for 1 ≤ <var>i</var> ≤ <var>k</var>,</li><li>C<sub><var>i</var></sub> is tangent to C<sub><var>i</var>+1</sub> for 1 ≤ <var>i</var> &lt; <var>k</var>, and</li><li>C<sub><var>k</var></sub> is tangent to C<sub>1</sub>.</li></ul>
For example, (5, 5, 5) and (4, 3, 21) are necklace triplets, while it can be shown that (2, 2, 5) is not.
<img src="https://projecteuler.net/project/images/p428_necklace.png" alt="a visual reresentation of a necklace triplet">

Let T(<var>n</var>) be the number of necklace triplets (<var>a</var>, <var>b</var>, <var>c</var>) such that <var>a</var>, <var>b</var> and <var>c</var> are positive integers, and <var>b</var> ≤ <var>n</var>.
For example, T(1) = 9, T(20) = 732 and T(3000) = 438106.

Find T(1 000 000 000).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>necklace(1000000000)</code> should return 747215561862.
    testString: assert.strictEqual(necklace(1000000000), 747215561862);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function necklace(n) {
  // Good luck!
  return true;
}

necklace(1000000000)

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
