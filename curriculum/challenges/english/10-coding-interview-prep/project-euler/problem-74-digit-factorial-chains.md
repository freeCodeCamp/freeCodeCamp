---
id: 5900f3b61000cf542c50fec9
title: 'Problem 74: Digit factorial chains'
challengeType: 5
forumTopicId: 302187
dashedName: problem-74-digit-factorial-chains
---

# --description--

The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:

<div style='margin-left: 4em;'>1! + 4! + 5! = 1 + 24 + 120 = 145</div>

Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:

<div style='margin-left: 4em;'>
  169 → 363601 → 1454 → 169<br>
  871 → 45361 → 871<br>
  872 → 45362 → 872<br>
</div>
It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,

<div style='margin-left: 4em;'>
  69 → 363600 → 1454 → 169 → 363601 (→ 1454)<br>
  78 → 45360 → 871 → 45361 (→ 871)<br>
  540 → 145 (→ 145)<br>
</div>

Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

How many chains, with a starting number below `n`, contain exactly sixty non-repeating terms?

# --hints--

`digitFactorialChains(2000)` should return a number.

```js
assert(typeof digitFactorialChains(2000) === 'number');
```

`digitFactorialChains(2000)` should return `6`.

```js
assert.strictEqual(digitFactorialChains(2000), 6);
```

`digitFactorialChains(100000)` should return `42`.

```js
assert.strictEqual(digitFactorialChains(100000), 42);
```

`digitFactorialChains(500000)` should return `282`.

```js
assert.strictEqual(digitFactorialChains(500000), 282);
```

`digitFactorialChains(1000000)` should return `402`.

```js
assert.strictEqual(digitFactorialChains(1000000), 402);
```

# --seed--

## --seed-contents--

```js
function digitFactorialChains(n) {

  return true;
}

digitFactorialChains(2000);
```

# --solutions--

```js
// solution required
```
