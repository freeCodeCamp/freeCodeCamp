---
id: 5900f4461000cf542c50ff58
title: 'Problem 217: Ausgeglichene Zahlen'
challengeType: 1
forumTopicId: 301859
dashedName: problem-217-balanced-numbers
---

# --description--

Ein positiver Integer mit $k$ (Dezimal-) Ziffern wird als ausgewogen bezeichnet, wenn die Summe der ersten $⌈\frac{k}{2}⌉$ Ziffern den gleichen Wert wie die Summe ihrer letzten $⌈\frac{k}{2}⌉$ Ziffern ergeben, wobei $⌈x⌉$, sprich Obergrenze von $x$, die kleinste Ganzzahl $≥ x$ ist, also $⌈π⌉ = 4$ und $⌈5⌉ = 5$.

So sind z. B. alle Palindrome ausgeglichen, ebenso wie 13722.

Lasse $T(n)$ die Summe aller ausgeglichenen Zahlen kleiner als $10^n$ sein.

Somit ist: $T(1) = 45$, $T(2) = 540$ und $T(5) = 334\\,795\\,890$.

Finde $T(47)\\,mod\\,3^{15}$

# --hints--

`balancedNumbers()` sollte `6273134` zurückgeben.

```js
assert.strictEqual(balancedNumbers(), 6273134);
```

# --seed--

## --seed-contents--

```js
function balancedNumbers() {

  return true;
}

balancedNumbers();
```

# --solutions--

```js
// solution required
```
