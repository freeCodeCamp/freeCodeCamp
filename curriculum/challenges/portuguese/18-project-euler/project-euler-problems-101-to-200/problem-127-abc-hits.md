---
id: 5900f3ec1000cf542c50fefe
title: 'Problema 127: Trio abc'
challengeType: 1
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

O radical de $n$, $rad(n)$, é o produto dos fatores primos distintos de $n$. Por exemplo, $504 = 2^3 × 3^2 × 7$, então $rad(504) = 2 × 3 × 7 = 42$.

Definiremos o trio de números inteiros positivos (a, b, c) como sendo um trio abc se:

1. $GCD(a, b) = GCD(a, c) = GCD(b, c) = 1$
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

Por exemplo, (5, 27, 32) é um trio abc, pois:

1. $GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

Ocorre que os trios abc são bastante raros e há somente 31 deles para $c &lt; 1000$, com a $\sum{c} = 12523$.

Encontre a $\sum{c}$ para $c &lt; 120000$.

# --hints--

`abcHits()` deve retornar `18407904`.

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
