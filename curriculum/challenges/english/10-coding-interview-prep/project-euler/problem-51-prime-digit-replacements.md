---
id: 5900f39f1000cf542c50feb2
title: 'Problem 51: Prime digit replacements'
challengeType: 5
forumTopicId: 302162
dashedName: problem-51-prime-digit-replacements
---

# --description--

By replacing the 1st digit of the 2-digit number \*3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56\*\*3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an `n` prime value family.

# --hints--

`primeDigitReplacements(6)` should return a number.

```js
assert(typeof primeDigitReplacements(6) === 'number');
```

`primeDigitReplacements(6)` should return `13`.

```js
assert.strictEqual(primeDigitReplacements(6), 13);
```

`primeDigitReplacements(7)` should return `56003`.

```js
assert.strictEqual(primeDigitReplacements(7), 56003);
```

`primeDigitReplacements(8)` should return `121313`.

```js
assert.strictEqual(primeDigitReplacements(8), 121313);
```

# --seed--

## --seed-contents--

```js
function primeDigitReplacements(n) {

  return true;
}

primeDigitReplacements(6);
```

# --solutions--

```js
// solution required
```
