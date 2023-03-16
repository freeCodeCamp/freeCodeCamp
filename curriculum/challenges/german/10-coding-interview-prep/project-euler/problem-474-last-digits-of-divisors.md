---
id: 5900f5471000cf542c510059
title: 'Problem 474: Letzte Ziffern von Divisoren'
challengeType: 1
forumTopicId: 302151
dashedName: problem-474-last-digits-of-divisors
---

# --description--

Für einen positiven Integer $n$ und Ziffern $d$ definieren wir $F(n, d)$ als die Anzahl der Teiler von $n$, deren letzte Ziffern gleich $d$ sind.

Zum Beispiel, $F(84, 4) = 3$. Unter den Teilern von 84 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84) haben drei von ihnen (4, 14, 84) die letzte Ziffer 4.

Wir können auch überprüfen, dass $F(12!, 12) = 11$ und $F(50!, 123) = 17\\,888$.

Finde $F({10}^6!, 65\\,432) \text{ modulo } ({10}^{16} + 61)$.

# --hints--

`lastDigitsOfDivisors()` sollte `9690646731515010` zurückgeben.

```js
assert.strictEqual(lastDigitsOfDivisors(), 9690646731515010);
```

# --seed--

## --seed-contents--

```js
function lastDigitsOfDivisors() {

  return true;
}

lastDigitsOfDivisors();
```

# --solutions--

```js
// solution required
```
