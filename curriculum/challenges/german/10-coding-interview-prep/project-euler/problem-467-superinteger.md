---
id: 5900f5411000cf542c510052
title: 'Problem 467: Super-Integer'
challengeType: 1
forumTopicId: 302142
dashedName: problem-467-superinteger
---

# --description--

Ein Integer $s$ wird als Super-Integer eines anderen Integers $n$ bezeichnet, wenn die Ziffern von $n$ eine Teilfolge der Ziffern von $s$ bilden.

Zum Beispiel ist 2718281828 ein Super-Integer von 18828, während 314159 kein Super-Integer von 151 ist.

Lass $p(n)$ die $n$-te Primzahl sein und lass $c(n)$ die $n$-te zusammengesetzte Zahl sein. Zum Beispiel $p(1) = 2$, $p(10) = 29$, $c(1) = 4$ und $c(10) = 18$.

$$\begin{align}   & \\{p(i) : i ≥ 1\\} = \\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \ldots \\} \\\\
  & \\{c(i) : i ≥ 1\\} = \\{4, 6, 8, 9, 10, 12, 14, 15, 16, 18, \ldots \\} \end{align}$$

Lass $P^D$ die Folge der digitalen Wurzeln von $\\{p(i)\\}$ sein ($C^D$ ist ähnlich definiert für $\\{c(i)\\}$):

$$\begin{align}   & P^D = \\{2, 3, 5, 7, 2, 4, 8, 1, 5, 2, \ldots \\} \\\\
  & C^D = \\{4, 6, 8, 9, 1, 3, 5, 6, 7, 9, \ldots \\} \end{align}$$

Lass $P_n$ den Integer sein, der durch die Verkettung der ersten $n$-Elemente von $P^D$ gebildet wird ($C_n$ ist ähnlich definiert für $C^D$).

$$\begin{align}   & P_{10} = 2\\,357\\,248\\,152 \\\\
  & C_{10} = 4\\,689\\,135\\,679 \end{align}$$

Lass $f(n)$ den kleinsten positiven Integer sein, der einen gemeinsamen Super-Integer von $P_n$ und $C_n$ ist. Zum Beispiel $f(10) = 2\\,357\\,246\\,891\\,352\\,679$, und $f(100)\bmod 1\\,000\\,000\\,007 = 771\\,661\\,825$.

Finde $f(10\\,000)\bmod 1\\,000\\,000\\,007$.

# --hints--

`superinteger()` sollte `775181359` zurückgeben.

```js
assert.strictEqual(superinteger(), 775181359);
```

# --seed--

## --seed-contents--

```js
function superinteger() {

  return true;
}

superinteger();
```

# --solutions--

```js
// solution required
```
