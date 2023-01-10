---
id: 5900f4411000cf542c50ff53
title: 'Problema 212: Volume combinado de cuboides'
challengeType: 1
forumTopicId: 301854
dashedName: problem-212-combined-volume-of-cuboids
---

# --description--

Um cuboide alinhado em seus eixos, especificado pelos parâmetros $\{ (x_0,y_0,z_0), (dx,dy,dz) \}$, consiste em todos os pontos ($X$,$Y$,$Z$), de modo que $x_0 ≤ X ≤ x_0 + dx$, $y_0 ≤ Y ≤ y_0 + dy$ e $z_0 ≤ Z ≤ z_0 + dz$. O volume do cuboide é o produto, $dx × dy × dz$. O volume combinado de uma coleção de cuboides é o volume da sua união e será inferior à soma dos volumes individuais se houver sobreposição de qualquer um dos cuboides.

Considere $C_1, \ldots, C_{50000}$ como sendo uma coleção de 50.000 cuboides alinhados em seus eixos, de modo que $C_n$ tenha parâmetros

$$\begin{align}   & x_0 = S_{6n - 5} \\; \text{modulo} \\; 10000    \\\\
  & y_0 = S_{6n - 4} \\; \text{modulo} \\; 10000    \\\\   & z_0 = S_{6n - 3} \\; \text{modulo} \\; 10000    \\\\
  & dx = 1 + (S_{6n - 2} \\; \text{modulo} \\; 399) \\\\   & dy = 1 + (S_{6n - 1} \\; \text{modulo} \\; 399) \\\\
  & dz = 1 + (S_{6n} \\; \text{modulo} \\; 399)     \\\\ \end{align}$$

onde $S_1, \ldots, S_{300000}$ vem do "Gerador Fibonacci com atraso":

Para $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007k^3] \\; (modulo \\; 1000000)$

Para $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}] \\; (modulo \\; 1000000)$

Assim, $C_1$ tem parâmetros $\{(7,53,183), (94,369,56)\}$, $C_2$ tem parâmetros $\{(2383,3563,5079), (42,212,344)\}$ e assim por diante.

O volume combinado dos primeiros 100 cuboides, $C_1, \ldots, C_{100}$, é 723581599.

Qual é o volume combinado de todos os 50000 cuboides, $C_1, \ldots, C_{50000}$?

# --hints--

`combinedValueOfCuboids()` deve retornar `328968937309`.

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
