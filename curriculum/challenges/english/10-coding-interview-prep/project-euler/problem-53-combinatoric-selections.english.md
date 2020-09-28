---
id: 5900f3a11000cf542c50feb4
challengeType: 5
title: 'Problem 53: Combinatoric selections'
forumTopicId: 302164
---

## Description
<section id='description'>

There are exactly ten ways of selecting three from five, 12345:

<div style='text-align: center;'>123, 124, 125, 134, 135, 145, 234, 235, 245, and 345</div>

In combinatorics, we use the notation, $\displaystyle \binom 5 3 = 10$

In general, $\displaystyle \binom n r = \dfrac{n!}{r!(n-r)!}$, where $r \le n$, $n! = n \times (n-1) \times ... \times 3 \times 2 \times 1$, and $0! = 1$.

It is not until $n = 23$, that a value exceeds one-million: $\displaystyle \binom {23} {10} = 1144066$.

How many, not necessarily distinct, values of  $\displaystyle \binom n r$ for $1 \le n \le 100$, are greater than one-million?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinatoricSelections(1000)</code> should return a number.
    testString: assert(typeof combinatoricSelections(1000) === 'number');
  - text: <code>combinatoricSelections(1000)</code> should return 4626.
    testString: assert.strictEqual(combinatoricSelections(1000), 4626);
  - text: <code>combinatoricSelections(10000)</code> should return 4431.
    testString: assert.strictEqual(combinatoricSelections(10000), 4431);
  - text: <code>combinatoricSelections(100000)</code> should return 4255.
    testString: assert.strictEqual(combinatoricSelections(100000), 4255);
  - text: <code>combinatoricSelections(1000000)</code> should return 4075.
    testString: assert.strictEqual(combinatoricSelections(1000000), 4075);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinatoricSelections(limit) {

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
