---
id: 5a23c84252665b21eecc7ee0
title: Left factorials
challengeType: 1
forumTopicId: 302302
dashedName: left-factorials
---

# --description--

**Left factorials**, $ !n $, may refer to either *subfactorials* or to *factorial sums*. The same notation can be confusingly seen used for the two different definitions. Sometimes, *subfactorials* (also known as *derangements*) may use any of the notations:

<ul>
  <li>$!n`$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>

(It may not be visually obvious, but the last example uses an upside-down exclamation mark.) This task will be using this formula for **left factorial**:

$ !n = \\sum\_{k=0}^{n-1} k! $

where $!0 = 0$

# --instructions--

Write a function to calculate the left factorial of a given number.

# --hints--

`leftFactorial` should be a function.

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` should return a number.

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` should return `0`.

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` should return `1`.

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` should return `2`.

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` should return `4`.

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` should return `409114`.

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` should return `22324392524314`.

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` should return `6780385526348314`.

```js
assert.equal(leftFactorial(19), 6780385526348314);
```

# --seed--

## --seed-contents--

```js
function leftFactorial(n) {

}
```

# --solutions--

```js
function leftFactorial(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  // Note: for n>=20, the result may not be correct.
  // This is because JavaScript uses 53 bit integers and
  // for n>=20 result becomes too large.

  let res = 2,
    fact = 2;
  for (var i = 2; i < n; i++) {
    res += fact;
    fact *= i + 1;
  }

  return res;
}
```
