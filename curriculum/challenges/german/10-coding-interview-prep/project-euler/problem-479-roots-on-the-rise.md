---
id: 5900f54b1000cf542c51005d
title: 'Problem 479: Roots on the Rise'
challengeType: 1
forumTopicId: 302156
dashedName: problem-479-roots-on-the-rise
---

# --description--

Lasse $a_k$, $b_k$ und $c_k$ die drei Lösungen (reelle oder komplexe Zahlen) des Ausdrucks $\frac{1}{x} = {\left(\frac{k}{x} \right)}^2 (k + x^2) - kx$ sein.

Für $k = 5$ sehen wir zum Beispiel, dass $\\{a_5, b_5, c_5\\}$ ungefähr $\\{5.727244, -0.363622 + 2.057397i, -0.363622 - 2.057397i\\\}$ ist.

Lasse t $S(n) = \displaystyle\sum_{p = 1}^n \sum_{k = 1}^n {(a_k + b_k)}^p {(b_k + c_k)}^p {(c_k + a_k)}^p$ für alle Integer $p$, $k$ sein, so dass $1 ≤ p, k ≤ n$ ist.

Interessanterweise ist $S(n)$ immer ein Integer. Zum Beispiel $S(4) = 51\\,160$.

Finde $S({10}^6) \text{ modulo } 1\\,000\\,000\\,007$.

# --hints--

`rootsOnTheRise()` sollte `191541795` zurückgeben.

```js
assert.strictEqual(rootsOnTheRise(), 191541795);
```

# --seed--

## --seed-contents--

```js
function rootsOnTheRise() {

  return true;
}

rootsOnTheRise();
```

# --solutions--

```js
// solution required
```
