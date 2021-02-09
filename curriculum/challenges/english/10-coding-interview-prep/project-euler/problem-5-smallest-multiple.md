---
id: 5900f3711000cf542c50fe84
title: 'Problem 5: Smallest multiple'
challengeType: 5
forumTopicId: 302160
dashedName: problem-5-smallest-multiple
---

# --description--

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to `n`?

# --hints--

`smallestMult(5)` should return a number.

```js
assert(typeof smallestMult(5) === 'number');
```

`smallestMult(5)` should return 60.

```js
assert.strictEqual(smallestMult(5), 60);
```

`smallestMult(7)` should return 420.

```js
assert.strictEqual(smallestMult(7), 420);
```

`smallestMult(10)` should return 2520.

```js
assert.strictEqual(smallestMult(10), 2520);
```

`smallestMult(13)` should return 360360.

```js
assert.strictEqual(smallestMult(13), 360360);
```

`smallestMult(20)` should return 232792560.

```js
assert.strictEqual(smallestMult(20), 232792560);
```

# --seed--

## --seed-contents--

```js
function smallestMult(n) {

  return true;
}

smallestMult(20);
```

# --solutions--

```js
function smallestMult(n){
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
  }

  function lcm(a, b) {
    return a * b / gcd(a, b);
  }
  var result = 1;
  for(var i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}
```
