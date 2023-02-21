---
id: 5900f4421000cf542c50ff55
title: 'Problem 214: Totient-Chains'
challengeType: 1
forumTopicId: 301856
dashedName: problem-214-totient-chains
---

# --description--

Sei $φ$ die Eulersche Phi-Funktion, d.h. für eine natürliche Zahl $n$ ist $φ(n)$ die Anzahl der $k$, $1 ≤ k ≤ n$, für die $gcd(k,n) = 1$.

Durch Iteration von $φ$ erzeugt jede positive ganze Zahl eine abnehmende Kette von Zahlen, die auf 1 enden. z.B. Wenn wir mit 5 beginnen, ergibt sich die Folge 5,4,2,1. Hier finden Sie eine Auflistung aller Ketten mit der Länge 4:

$$\begin{align}    5,4,2,1 & \\\\
   7,6,2,1 & \\\\    8,4,2,1 & \\\\
   9,6,2,1 & \\\\   10,4,2,1 & \\\\
  12,4,2,1 & \\\\   14,6,2,1 & \\\\
  18,6,2,1 & \end{align}$$

Nur zwei dieser Ketten beginnen mit einer Primzahl, ihre Summe ist 12.

Wie lautet die Summe aller Primzahlen, die kleiner als $40\\,000\\,000$ sind und eine Kette der Länge 25 ergeben?

# --hints--

`totientChains()` sollte `1677366278943` zurückgeben.

```js
assert.strictEqual(totientChains(), 1677366278943);
```

# --seed--

## --seed-contents--

```js
function totientChains() {

  return true;
}

totientChains();
```

# --solutions--

```js
// solution required
```
