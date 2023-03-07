---
id: 5900f47b1000cf542c50ff8d
title: 'Problem 272: Modulare Würfel, Teil 1'
challengeType: 1
forumTopicId: 301921
dashedName: problem-271-modular-cubes-part-1
---

# --description--

Für eine positive Zahl $n$ definiere $S(n)$ als die Summe der ganzen Zahlen $x$, für die $1 < x < n$ und $x^3 \equiv 1\bmod n$.

Wenn $n = 91$ ist, gibt es 8 mögliche Werte für $x$, nämlich: 9, 16, 22, 29, 53, 74, 79, 81. Somit ist $S(91) = 9 + 16 + 22 + 29 + 53 + 74 + 79 + 81 = $363.

Finde $S(13\\,082\\,761\\,331\\,670\\,030)$.

# --hints--

`modularCubesOne()` sollte `4617456485273130000` zurückgeben.

```js
assert.strictEqual(modularCubesOne(), 4617456485273130000);
```

# --seed--

## --seed-contents--

```js
function modularCubesOne() {

  return true;
}

modularCubesOne();
```

# --solutions--

```js
// solution required
```
