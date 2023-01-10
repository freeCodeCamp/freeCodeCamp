---
id: 5900f4411000cf542c50ff53
title: 'Problem 212: Combined Volume of Cuboids'
challengeType: 1
forumTopicId: 301854
dashedName: problem-212-combined-volume-of-cuboids
---

# --description--

An axis-aligned cuboid, specified by parameters $\{ (x_0,y_0,z_0), (dx,dy,dz) \}$, consists of all points ($X$,$Y$,$Z$) such that $x_0 ≤ X ≤ x_0 + dx$, $y_0 ≤ Y ≤ y_0 + dy$ and $z_0 ≤ Z ≤ z_0 + dz$. Das Volumen des Quaders ist das Produkt $dx × dy × dz$. Das kombinierte Volumen einer Sammlung von Quadern ist das Volumen ihrer Vereinigung und ist kleiner als die Summe der einzelnen Volumina, wenn sich irgendwelche Quader überschneiden.

Lasse $C_1, \ldots, C_{50000}$ eine Sammlung von 50000 achsenausgerichteten Quadern sein, sodass $C_n$ Parameter hat

$$\begin{align}   & x_0 = S_{6n - 5} \\; \text{modulo} \\; 10000    \\\\
  & y_0 = S_{6n - 4} \\; \text{modulo} \\; 10000    \\\\   & z_0 = S_{6n - 3} \\; \text{modulo} \\; 10000    \\\\
  & dx = 1 + (S_{6n - 2} \\; \text{modulo} \\; 399) \\\\   & dy = 1 + (S_{6n - 1} \\; \text{modulo} \\; 399) \\\\
  & dz = 1 + (S_{6n} \\; \text{modulo} \\; 399)     \\\\ \end{align}$$

wobei $S_1, \ldots, S_{300000}$ aus dem "Lagged Fibonacci Generator" stammen:

Für $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007k^3] \\; (modulo \\; 1000000)$

Für $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}] \\; (modulo \\; 1000000)$

Somit hat $C_1$ die Parameter $\{(7,53,183), (94,369,56)\}$, $C_2$ die Parameter $\{(2383,3563,5079), (42,212,344)\}$, und so weiter.

Das Gesamtvolumen der ersten 100 Quader, $C_1, \ldots, C_{100}$, beträgt 723581599.

Wie groß ist das Volumen aller 50000 Quader $C_1, \ldots, C_{50000}$ zusammen?

# --hints--

`combinedValueOfCuboids()` sollte `328968937309` zurückgeben.

```js
assert.strictEqual(combinedValueOfCuboids(), 328968937309);
```

# --seed--

## --seed-contents--

```js
function combinedValueOfCuboids() {

  return true;
}

combinedValueOfCuboids();
```

# --solutions--

```js
// solution required
```
