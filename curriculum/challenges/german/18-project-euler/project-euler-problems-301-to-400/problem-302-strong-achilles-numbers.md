---
id: 5900f49b1000cf542c50ffad
title: 'Problem 302: Starke Achilles-Zahlen'
challengeType: 1
forumTopicId: 301956
dashedName: problem-302-strong-achilles-numbers
---

# --description--

A positive integer $n$ is powerful if $p^2$ is a divisor of $n$ for every prime factor $p$ in $n$.

Ein positiver Integer $n$ ist eine vollkommene Potenz, wenn $n$ als Potenz eines anderen positiven Integers ausgedrückt werden kann.

Ein positiver Integer $n$ ist eine Achilleszahl, wenn $n$ zwar mächtig, aber keine vollkommene Potenz ist. Zum Beispiel sind 864 und 1800 Achilleszahlen: $864 = 2^5 \mal 3^3$ und $1800 = 2^3 \mal 3^2 \mal 5^2$.

Wir nennen einen positiven Integer $S$ eine starke Achilleszahl, wenn sowohl $S$ als auch $φ(S)$ Achilleszahlen sind. $φ$ bezeichnet die Eulersche Totalitätsfunktion.

Zum Beispiel ist 864 eine starke Achilleszahl: $φ(864) = 288 = 2^5 \mal 3^2$. Allerdings ist 1800 keine starke Achilleszahl, denn: $φ(1800) = 480 = 2^5 \mal 3^1 \mal 5^1$.

Es gibt 7 starke Achilleszahlen unter ${10}^4$ und 656 unter ${10}^8$.

Wie viele starke Achilleszahlen gibt es unter ${10}^{18}$?

# --hints--

`strongAchillesNumbers()` should return `1170060`.

```js
assert.strictEqual(strongAchillesNumbers(), 1170060);
```

# --seed--

## --seed-contents--

```js
function strongAchillesNumbers() {

  return true;
}

strongAchillesNumbers();
```

# --solutions--

```js
// solution required
```
