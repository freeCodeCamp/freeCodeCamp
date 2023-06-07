---
id: 5900f4ab1000cf542c50ffbd
title: 'Problema 318: 2011 noves'
challengeType: 1
forumTopicId: 301974
dashedName: problem-318-2011-nines
---

# --description--

Considere o número real $\sqrt{2} + \sqrt{3}$.

Quando calculamos as potências pares de $\sqrt{2} + \sqrt{3}$ obtemos:

$$\begin{align}   & {(\sqrt{2} + \sqrt{3})}^2 = 9.898979485566356\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^4 = 97.98979485566356\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^6 = 969.998969071069263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^8 = 9601.99989585502907\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{10} = 95049.999989479221\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{12} = 940897.9999989371855\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{14} = 9313929.99999989263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{16} = 92198401.99999998915\ldots \\\\ \end{align}$$

Parece que o número de noves consecutivos no início da parte fracionária dessas potências não diminui. Na verdade, pode ser provado que a parte fracionária de ${(\sqrt{2} + \sqrt{3})}^{2n}$ aproxima-se de 1 para $n$ grandes.

Considere todos os números reais da forma $\sqrt{p} + \sqrt{q}$ com $p$ e $q$ números inteiros positivos e $p &lt; q$, tal que a parte fracionária de ${(\sqrt{p} + \sqrt{q})}^{2n}$ se aproxima de 1 para $n$ grandes.

Considere $C(p,q,n)$ como o número de noves consecutivos no início da parte fracionária de ${(\sqrt{p} + \sqrt{q})}^{2n}$.

Considere $N(p,q)$ como o valor mínimo de $n$, tal que $C(p,q,n) ≥ 2011$.

Encontre $\sum N(p,q)$ para $p + q ≤ 2011$.

# --hints--

`twoThousandElevenNines()` deve retornar `709313889`.

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
