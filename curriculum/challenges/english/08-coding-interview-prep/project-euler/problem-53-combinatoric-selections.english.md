---
id: 5900f3a11000cf542c50feb4
challengeType: 5
title: 'Problem 53: Combinatoric selections'
---

## Description
<section id='description'>
There are exactly ten ways of selecting three from five, 12345:
123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
In combinatorics, we use the notation, 5C3 = 10.
In general,

nCr =
n!r!(n−r)!
,where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.

It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.
How many, not necessarily distinct, values of  nCr, for 1 ≤ n ≤ 100, are greater than one-million?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinatoricSelections(1000)</code> should return 4626.
    testString: assert.strictEqual(combinatoricSelections(1000), 4626, '<code>combinatoricSelections(1000)</code> should return 4626.');
  - text: <code>combinatoricSelections(10000)</code> should return 4431.
    testString: assert.strictEqual(combinatoricSelections(10000), 4431, '<code>combinatoricSelections(10000)</code> should return 4431.');
  - text: <code>combinatoricSelections(100000)</code> should return 4255.
    testString: assert.strictEqual(combinatoricSelections(100000), 4255, '<code>combinatoricSelections(100000)</code> should return 4255.');
  - text: <code>combinatoricSelections(1000000)</code> should return 4075.
    testString: assert.strictEqual(combinatoricSelections(1000000), 4075, '<code>combinatoricSelections(1000000)</code> should return 4075.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinatoricSelections(limit) {
  // Good luck!
  return 1;
}

combinatoricSelections(1000000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function combinatoricSelections(limit) {
    const factorial = n =>
        Array.apply(null, { length: n })
            .map((_, i) => i + 1)
            .reduce((p, c) => p * c, 1);

    let result = 0;
    const nMax = 100;

    for (let n = 1; n <= nMax; n++) {
        for (let r = 0; r <= n; r++) {
            if (factorial(n) / (factorial(r) * factorial(n - r)) >= limit)
                result++;
        }
    }

    return result;
}
```

</section>
