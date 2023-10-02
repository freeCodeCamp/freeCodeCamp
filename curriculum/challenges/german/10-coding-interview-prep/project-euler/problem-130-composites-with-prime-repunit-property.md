---
id: 5900f3ee1000cf542c50ff00
title: 'Problem 130: Composites with prime repunit property'
challengeType: 1
forumTopicId: 301758
dashedName: problem-130-composites-with-prime-repunit-property
---

# --description--

Eine Zahl, die ausschließlich aus Einsen besteht, nennt man Repunit. Wir definieren $R(k)$ als Repunit der Länge $k$; zum Beispiel $R(6) = 111111$.

Unter der Voraussetzung, dass $n$ eine positive ganze Zahl ist und $GCD(n, 10) = 1$, kann man zeigen, dass es immer einen Wert $k$ gibt, für den $R(k)$ durch $n$ teilbar ist, und dass $A(n)$ der kleinste solche Wert von $k$ ist; zum Beispiel $A(7) = 6$ und $A(41) = 5$.

Es ist gegeben, dass für alle Primzahlen $p > 5$, dass $p - 1$ durch $A(p)$ teilbar ist. Wenn zum Beispiel $p = 41 ist, ist A(41) = 5$, und 40 durch 5 teilbar.

Es gibt jedoch seltene zusammengesetzte Werte, für die dies ebenfalls zutrifft; die ersten fünf Beispiele sind 91, 259, 451, 481 und 703.

Finde die Summe der ersten fünfundzwanzig zusammengesetzten Werte von $n$, für die $GCD(n, 10) = 1$ und $n - 1$ durch $A(n)$ teilbar ist.

# --hints--

`compositeRepunit()` sollte `149253` zurückgeben.

```js
assert.strictEqual(compositeRepunit(), 149253);
```

# --seed--

## --seed-contents--

```js
function compositeRepunit() {

  return true;
}

compositeRepunit();
```

# --solutions--

```js
// solution required
```
