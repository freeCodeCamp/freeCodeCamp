---
id: 5900f3a11000cf542c50feb4
title: 'Problem 53: Combinatoric selections'
challengeType: 5
forumTopicId: 302164
dashedName: problem-53-combinatoric-selections
---

# --description--

There are exactly ten ways of selecting three from five, 12345:

<div style='text-align: center;'>123, 124, 125, 134, 135, 145, 234, 235, 245, and 345</div>

In combinatorics, we use the notation, $\\displaystyle \\binom 5 3 = 10$

In general, $\\displaystyle \\binom n r = \\dfrac{n!}{r!(n-r)!}$, where $r \\le n$, $n! = n \\times (n-1) \\times ... \\times 3 \\times 2 \\times 1$, and $0! = 1$.

It is not until $n = 23$, that a value exceeds one-million: $\\displaystyle \\binom {23} {10} = 1144066$.

How many, not necessarily distinct, values of $\\displaystyle \\binom n r$ for $1 \\le n \\le 100$, are greater than one-million?

# --hints--

`combinatoricSelections(1000)` should return a number.

```js
assert(typeof combinatoricSelections(1000) === 'number');
```

`combinatoricSelections(1000)` should return 4626.

```js
assert.strictEqual(combinatoricSelections(1000), 4626);
```

`combinatoricSelections(10000)` should return 4431.

```js
assert.strictEqual(combinatoricSelections(10000), 4431);
```

`combinatoricSelections(100000)` should return 4255.

```js
assert.strictEqual(combinatoricSelections(100000), 4255);
```

`combinatoricSelections(1000000)` should return 4075.

```js
assert.strictEqual(combinatoricSelections(1000000), 4075);
```

# --seed--

## --seed-contents--

```js
function combinatoricSelections(limit) {

  return 1;
}

combinatoricSelections(1000000);
```

# --solutions--

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
