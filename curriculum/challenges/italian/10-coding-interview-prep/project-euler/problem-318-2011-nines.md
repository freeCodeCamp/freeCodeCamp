---
id: 5900f4ab1000cf542c50ffbd
title: 'Problema 318: 2011 nove'
challengeType: 1
forumTopicId: 301974
dashedName: problem-318-2011-nines
---

# --description--

Considera il numero reale $\sqrt{2} + \sqrt{3}$.

Quando calcoliamo le potenze pari di $\sqrt{2} + \sqrt{3}$ troviamo:

$$\begin{align}   & {(\sqrt{2} + \sqrt{3})}^2 = 9.898979485566356\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^4 = 97.98979485566356\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^6 = 969.998969071069263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^8 = 9601.99989585502907\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{10} = 95049.999989479221\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{12} = 940897.9999989371855\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{14} = 9313929.99999989263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{16} = 92198401.99999998915\ldots \\\\ \end{align}$$

Sembra che il numero di nove consecutivi all'inizio della parte frazionaria di queste potenze non diminuisca. In realtà si può dimostrare che la parte frazionaria di ${(\sqrt{2} + \sqrt{3})}^{2n}$ si avvicina 1 per $n$ di grandi dimensioni.

Considera tutti i numeri reali del modulo $\sqrt{p} + \sqrt{q}$ con $p$ e $q$ interi positivi e $p &lt; q$, tali che la parte frazionaria di ${(\sqrt{p} + \sqrt{q})}^{2n}$ si avvicina 1 per $n$ di grandi dimensioni.

Sia $C(p,q,n)$ il numero di nove consecutivi all'inizio della parte frazionaria di ${(\sqrt{p} + \sqrt{q})}^{2n}$.

Sia $N(p,q)$ il valore minimo di $n$ tale che $C(p,q,n) ≥ 2011$.

Trova $\sum N(p,q)$ per $p + q ≤ 2011$.

# --hints--

`twoThousandElevenNines()` dovrebbe restituire `709313889`.

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
