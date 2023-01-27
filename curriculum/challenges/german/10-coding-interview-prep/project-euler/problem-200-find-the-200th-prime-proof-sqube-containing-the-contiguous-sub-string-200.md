---
id: 5900f4351000cf542c50ff47
title: >-
  Problem 200: Finde die 200. primenfeste Quadratzahl, die die zusammenhängende Teilzeichenkette "200" enthält
challengeType: 1
forumTopicId: 301840
dashedName: >-
  problem-200-find-the-200th-prime-proof-sqube-containing-the-contiguous-sub-string-200
---

# --description--

Wir definieren eine Sqube als eine Zahl der Form ${p^2}{q^3}$, wobei $p$ und $q$ verschiedene Primzahlen sind.

Zum Beispiel $200 = {5^2}{2^3}$ oder $120072949 = {{23}^2}{{61}^3}$.

Die ersten fünf Squbes sind 72, 108, 200, 392 und 500.

Interessanterweise ist 200 auch die erste Zahl, bei der man keine einzige Ziffer ändern kann, um eine Primzahl zu bilden; wir werden solche Zahlen primenfest nennen. Die nächste prime-proof sqube, die den zusammenhängenden Teilstring `200` enthält, ist 1992008.

Finde das 200. prime-proof sqube, das die zusammenhängende Teilzeichenkette `200` enthält.

# --hints--

`primeProofSqubeWithSubString()` sollte `229161792008` zurückgeben.

```js
assert.strictEqual(primeProofSqubeWithSubString(), 229161792008);
```

# --seed--

## --seed-contents--

```js
function primeProofSqubeWithSubString() {

  return true;
}

primeProofSqubeWithSubString();
```

# --solutions--

```js
// solution required
```
