---
id: 5900f38a1000cf542c50fe9d
title: 'Problem 30: Digit n powers'
challengeType: 5
forumTopicId: 301953
dashedName: problem-30-digit-n-powers
---

# --description--

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

<div style='margin-left: 4em;'>
  1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br>
  8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br>
  9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup><br>
</div>

As 1 = 1<sup>4</sup> is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of `n` powers of their digits.

# --hints--

`digitnPowers(2)` should return a number.

```js
assert(typeof digitnPowers(2) === 'number');
```

`digitnPowers(2)` should return 0.

```js
assert(digitnPowers(2) == 0);
```

`digitnPowers(3)` should return 1301.

```js
assert(digitnPowers(3) == 1301);
```

`digitnPowers(4)` should return 19316.

```js
assert(digitnPowers(4) == 19316);
```

`digitnPowers(5)` should return 443839.

```js
assert(digitnPowers(5) == 443839);
```

# --seed--

## --seed-contents--

```js
function digitnPowers(n) {

  return n;
}

digitnPowers(5);
```

# --solutions--

```js
// solution required
```
