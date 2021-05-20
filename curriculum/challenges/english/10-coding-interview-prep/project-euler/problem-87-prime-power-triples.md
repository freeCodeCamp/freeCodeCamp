---
id: 5900f3c51000cf542c50fed8
title: 'Problem 87: Prime power triples'
challengeType: 5
forumTopicId: 302201
dashedName: problem-87-prime-power-triples
---

# --description--

The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is `28`. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

<div style='margin-left: 4em;'>
  28 = 2<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br>
  33 = 3<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br>
  49 = 5<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br>
  47 = 2<sup>2</sup> + 3<sup>3</sup> + 2<sup>4</sup>
</div>

How many numbers below `n` can be expressed as the sum of a prime square, prime cube, and prime fourth power?

# --hints--

`primePowerTriples(50)` should return a number.

```js
assert(typeof primePowerTriples(50) === 'number');
```

`primePowerTriples(50)` should return `4`.

```js
assert.strictEqual(primePowerTriples(50), 4);
```

`primePowerTriples(10035)` should return `684`.

```js
assert.strictEqual(primePowerTriples(10035), 684);
```

`primePowerTriples(500000)` should return `18899`.

```js
assert.strictEqual(primePowerTriples(500000), 18899);
```

`primePowerTriples(5000000)` should return `138932`.

```js
assert.strictEqual(primePowerTriples(5000000), 138932);
```

`primePowerTriples(50000000)` should return `1097343`.

```js
assert.strictEqual(primePowerTriples(50000000), 1097343);
```

# --seed--

## --seed-contents--

```js
function primePowerTriples(n) {

  return true;
}

primePowerTriples(50);
```

# --solutions--

```js
// solution required
```
