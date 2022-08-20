---
id: 5900f3ec1000cf542c50fefe
title: 'Problema 127: abc-hit'
challengeType: 1
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

Il radicale di $n$, $rad(n)$, è il prodotto dei fattori primi distinti di $n$. Per esempio, $504 = 2^3 × 3^2 × 7$, quindi $rad(504) = 2 × 3 × 7 = 42$.

Definiamo la tripletta di numeri interi positivi (a, b, c) come un abc-hit se:

1. $MCD(a, b) = MCD(a, c) = MCD(b, c) = 1$
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

Per esempio, (5, 27, 32) è un abc-hit poiché:

1. $MCD(5, 27) = MCD(5, 32) = MCD(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

Gli abc-hit sono piuttosto rari e ce ne sono solo trentuno per $c &lt; 1000$, con $\sum{c} = 12523$.

Trova $\sum{c}$ per $c &lt; 120000$.

# --hints--

`abcHits()` dovrebbe restituire `18407904`.

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
