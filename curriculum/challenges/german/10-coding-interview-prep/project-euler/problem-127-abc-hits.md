---
id: 5900f3ec1000cf542c50fefe
title: 'Problem 127: abc-hits'
challengeType: 1
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

The radical of $n$, $rad(n)$, is the product of distinct prime factors of $n$. Zum Beispiel: $504 = 2^3 × 3^2 × 7$, also $rad(504) = 2 × 3 × 7 = 42$.

Wir definieren das Tripel positiver ganzer Zahlen (a, b, c) als einen abc-Treffer, wenn:

1. $GCD(a, b) = GCD(a, c) = GCD(b, c) = 1$
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

Zum Beispiel ist (5, 27, 32) ein abc-Treffer, weil:

1. $GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

Es stellt sich heraus, dass abc-Treffer recht selten sind und es nur einunddreißig abc-Treffer für $c &lt; 1000$ gibt, mit $\sum{c} = 12523$.

Finde $\sum{c}$ für $c &lt; 120000$.

# --hints--

`abcHits()` sollte `18407904` zurückgeben.

```js
assert.strictEqual(abcHits(), 18407904);
```

# --seed--

## --seed-contents--

```js
function abcHits() {

  return true;
}

abcHits();
```

# --solutions--

```js
// solution required
```
