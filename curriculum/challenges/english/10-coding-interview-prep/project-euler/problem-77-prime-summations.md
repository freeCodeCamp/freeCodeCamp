---
id: 5900f3b91000cf542c50fecc
title: 'Problem 77: Prime summations'
challengeType: 5
forumTopicId: 302190
dashedName: problem-77-prime-summations
---

# --description--

It is possible to write ten as the sum of primes in exactly five different ways:

<div style='margin-left: 4em;'>
  7 + 3<br>
  5 + 5<br>
  5 + 3 + 2<br>
  3 + 3 + 2 + 2<br>
  2 + 2 + 2 + 2 + 2<br>
</div>

What is the first value which can be written as the sum of primes in over `n` ways?

# --hints--

`primeSummations(5)` should return a number.

```js
assert(typeof primeSummations(5) === 'number');
```

`primeSummations(5)` should return `11`.

```js
assert.strictEqual(primeSummations(5), 11);
```

`primeSummations(100)` should return `31`.

```js
assert.strictEqual(primeSummations(100), 31);
```

`primeSummations(1000)` should return `53`.

```js
assert.strictEqual(primeSummations(1000), 53);
```

`primeSummations(5000)` should return `71`.

```js
assert.strictEqual(primeSummations(5000), 71);
```

# --seed--

## --seed-contents--

```js
function primeSummations(n) {

  return true;
}

primeSummations(5);
```

# --solutions--

```js
// solution required
```
