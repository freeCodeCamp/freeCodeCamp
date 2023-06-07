---
id: 5900f4411000cf542c50ff53
title: 'Problema 212: Volume combinato di cuboidi'
challengeType: 1
forumTopicId: 301854
dashedName: problem-212-combined-volume-of-cuboids
---

# --description--

Un cuboid allineato all'asse, specificato dai parametri $\{ (x_0,y_0,z_0), (dx,dy,dz) \}$, è costituito da tutti i punti ($X$,$Y$,$Z$) tali che $x_0 ≤ X ≤ x_0 + dx$, $y_0 ≤ Y ≤ y_0 + dy$ e $z_0 ≤ Z ≤ z_0 + dz$. Il volume del cuboide è il prodotto, $dx × dy × dz$. Il volume combinato di una collezione di cuboidi è il volume della loro unione e sarà inferiore alla somma dei singoli volumi se eventuali cuboidi si sovrappongono.

Sia $C_1, \ldots, C_{50000}$ una collezione di 50000 cuboidi allineati assialmente in modo che $C_n$ abbia parametri

$$\begin{align}   & x_0 = S_{6n - 5} \\; \text{modulo} \\; 10000    \\\\
  & y_0 = S_{6n - 4} \\; \text{modulo} \\; 10000    \\\\   & z_0 = S_{6n - 3} \\; \text{modulo} \\; 10000    \\\\
  & dx = 1 + (S_{6n - 2} \\; \text{modulo} \\; 399) \\\\   & dy = 1 + (S_{6n - 1} \\; \text{modulo} \\; 399) \\\\
  & dz = 1 + (S_{6n} \\; \text{modulo} \\; 399)     \\\\ \end{align}$$

dove $S_1, \ldots, S_{300000}$ provengono dal "Lagged Fibonacci Generator":

Per $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007k^3] \\; (modulo \\; 1000000)$

Per $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}] \\; (modulo \\; 1000000)$

Così, $C_1$ ha parametri $\{(7,53,183), (94,369,56)\}$, $C_2$ ha parametri $\{(2383,3563,5079), (42,212,344)\}$, e così via.

Il volume combinato dei primi 100 cuboidi, $C_1, \ldots, C_{100}$, è 723581599.

Qual è il volume combinato di tutti i 50000 cuboids, $C_1, \ldots, C_{50000}$?

# --hints--

`combinedValueOfCuboids()` dovrebbe restituire `328968937309`.

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
