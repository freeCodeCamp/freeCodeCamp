---
id: 5900f3c81000cf542c50fedb
title: 'Problem 92: Square digit chains'
challengeType: 5
forumTopicId: 302209
dashedName: problem-92-square-digit-chains
---

# --description--

A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

For example,

<div style='margin-left: 4em;'>
  44 → 32 → 13 → 10 → <strong>1</strong> → <strong>1</strong><br>
  85 → <strong>89</strong> → 145 → 42 → 20 → 4 → 16 → 37 → 58 → <strong>89</strong>
</div>

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?

# --hints--

`squareDigitChains()` should return a number.

```js
assert(typeof squareDigitChains() === 'number');
```

`squareDigitChains()` should return 8581146.

```js
assert.strictEqual(squareDigitChains(), 8581146);
```

# --seed--

## --seed-contents--

```js
function squareDigitChains() {

  return true;
}

squareDigitChains();
```

# --solutions--

```js
// solution required
```
