---
id: 5900f3881000cf542c50fe9b
title: 'Problem 28: Number spiral diagonals'
challengeType: 1
forumTopicId: 301930
dashedName: problem-28-number-spiral-diagonals
---

# --description--

Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

<div style='padding-left: 4em;'>
  <div style='color: red; display: inline;'>21</div> 22 23 24 <div style='color: red; display: inline;'>25</div><br>
  20  <div style='color: red; display: inline;'>7</div>  8  <div style='color: red; display: inline;'>9</div> 10<br>
  19  6  <div style='color: red; display: inline;'>1</div>  2 11<br>
  18  <div style='color: red; display: inline;'>5</div>  4  <div style='color: red; display: inline;'>3</div> 12<br>
  <div style='color: red; display: inline;'>17</div> 16 15 14 <div style='color: red; display: inline;'>13</div><br>
</div>

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in an `n` by `n` spiral formed in the same way?

# --hints--

`spiralDiagonals(101)` should return a number.

```js
assert(typeof spiralDiagonals(101) === 'number');
```

`spiralDiagonals(101)` should return 692101.

```js
assert(spiralDiagonals(101) == 692101);
```

`spiralDiagonals(303)` should return 18591725.

```js
assert(spiralDiagonals(303) == 18591725);
```

`spiralDiagonals(505)` should return 85986601.

```js
assert(spiralDiagonals(505) == 85986601);
```

`spiralDiagonals(1001)` should return 669171001.

```js
assert(spiralDiagonals(1001) == 669171001);
```

# --seed--

## --seed-contents--

```js
function spiralDiagonals(n) {

  return n;
}

spiralDiagonals(1001);
```

# --solutions--

```js
const spiralDiagonals = (n) => {
  const Sn2 = (n) => {
    return n*(n+1)*(2*n+1)/6;
  };
  const Sn = (n) => {
    return n*(n+1)/2;
  };
  let sum = (Sn2(n-1) + Sn(n-1) + n-1) + (Math.floor(n/2) + Sn2(n));
  return sum;
};
```
