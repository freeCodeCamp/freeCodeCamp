---
id: 5900f38a1000cf542c50fe9d
title: 'Problem 30: Digit n powers'
challengeType: 1
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

1634 = 1 <sup>4</sup> + 6 <sup>4</sup> + 3 <sup>4</sup> + 4 <sup>4</sup>

8208 = 8 <sup>4</sup> + 2 <sup>4</sup> + 0 <sup>4</sup> + 8 <sup>4</sup>

9474 = 9 <sup>4</sup> + 4 <sup>4</sup> + 7 <sup>4</sup> + 4 <sup>4</sup>

# --hints--

由于1 = 1 <sup>4</sup>不是总和，因此不包括在内。

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
