---
id: 5900f3a11000cf542c50feb4
title: 'Problem 53: Kombinatorische Auswahl'
challengeType: 1
forumTopicId: 302164
dashedName: problem-53-combinatoric-selections
---

# --description--

Es gibt genau zehn Möglichkeiten, drei von fünf auszuwählen, 12345:

<div style='text-align: center;'>123, 124, 125, 134, 135, 145, 234, 235, 245, und 345</div>

In der Kombinatorik verwenden wir die Notation $\\displaystyle \\binom 5 3 = 10$

Im Allgemeinen gilt $\\displaystyle \\\binom n r = \\\dfrac{n!}{r!(n-r)!}$, wobei $r \\le n$, $n! = n \\times (n-1) \\times ... \\times 3 \\times 2 \\times 1$, und $0! = 1$.

Erst bei $n = 23$ übersteigt ein Wert eine Million: $\\displaystyle \\\binom {23} = 1144066$. {10} = 1144066$.

Wie viele, nicht notwendigerweise unterschiedliche, Werte von $\\\displaystyle \\\binom n r$ für $1 \\le n \\le 100$, sind größer als eine Million?

# --hints--

`combinatoricSelections(1000)` sollte eine Zahl zurückgeben.

```js
assert(typeof combinatoricSelections(1000) === 'number');
```

`combinatoricSelections(1000)` sollte 4626 zurückgeben.

```js
assert.strictEqual(combinatoricSelections(1000), 4626);
```

`combinatoricSelections(10000)` sollte 4431 zurückgeben.

```js
assert.strictEqual(combinatoricSelections(10000), 4431);
```

`combinatoricSelections(100000)` sollte 4255 zurückgeben.

```js
assert.strictEqual(combinatoricSelections(100000), 4255);
```

`combinatoricSelections(1000000)` sollte 4075 zurückgeben.

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
