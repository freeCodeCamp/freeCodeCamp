---
id: 5900f4ab1000cf542c50ffbd
title: 'Problem 318: 2011 Neunen'
challengeType: 1
forumTopicId: 301974
dashedName: problem-318-2011-nines
---

# --description--

Betrachte die reelle Zahl $\sqrt{2} + \sqrt{3}$.

Wenn wir die gleichen Kräfte von $\sqrt{2} + \sqrt{3}$ berechnen, erhalten wir:

$$\begin{align}   & {(\sqrt{2} + \sqrt{3})}^2 = 9.898979485566356\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^4 = 97.98979485566356\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^6 = 969.998969071069263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^8 = 9601.99989585502907\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{10} = 95049.999989479221\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{12} = 940897.9999989371855\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{14} = 9313929.99999989263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{16} = 92198401.99999998915\ldots \\\\ \end{align}$$

Es sieht so aus, als ob die Anzahl der aufeinanderfolgenden Neunen am Anfang des gebrochenen Teils dieser Potenzen nicht abnehmend ist. Tatsächlich kann nachgewiesen werden, dass für große $n$ der Bruchteil von ${(\sqrt{2} + \sqrt{3})}^{2n}$ sich 1 nähert.

Betrachte alle realen Zahlen der Form $\sqrt{p} + \sqrt{q}$ mit $p$ und $q$ positiven Integern und $p &lt; q$ so, dass der Bruchteil von ${(\sqrt{p} + \sqrt{q})}^{2n}$ sich 1 annähert für große $n$.

Lasse $C(p,q,n)$ die Anzahl der aufeinanderfolgenden Neunen am Anfang des Bruchteils von ${(\sqrt{p} + \sqrt{q})}^{2n}$ sein.

Lasse $N(p,q)$ der minimale Wert von $n$ sein, sodass $C(p,q,n) ≥ 2011$ ist.

Finde $\sum N(p,q)$ für $p + q ≤ 2011$.

# --hints--

`twoThousandElevenNines()` sollte `709313889` zurückgeben.

```js
assert.strictEqual(twoThousandElevenNines(), 709313889);
```

# --seed--

## --seed-contents--

```js
function twoThousandElevenNines() {

  return true;
}

twoThousandElevenNines();
```

# --solutions--

```js
// solution required
```
