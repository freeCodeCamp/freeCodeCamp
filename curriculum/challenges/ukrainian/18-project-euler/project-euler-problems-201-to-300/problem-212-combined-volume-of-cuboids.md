---
id: 5900f4411000cf542c50ff53
title: 'Завдання 212: загальний об’єм прямокутних паралелепіпедів'
challengeType: 1
forumTopicId: 301854
dashedName: problem-212-combined-volume-of-cuboids
---

# --description--

Вирівняний по осях прямокутний паралелепіпед, заданий параметрами $\{ (x_0,y_0,z_0), (dx,dy,dz) \}$, складається з точок ($X$,$Y$,$Z$), за яких $x_0 ≤ X ≤ x_0 + dx$, $y_0 ≤ Y ≤ y_0 + dy$ та $z_0 ≤ Z ≤ z_0 + dz$. Об’ємом прямокутного паралелепіпеда є добуток $dx × dy × dz$. Загальний об’єм декількох паралелепіпедів — це об’єм об’єднаних паралелепіпедів, а якщо вони перетинаються, то він менший за суму окремих об’ємів.

Let $C_1, \ldots, C_{50000}$ be a collection of 50000 axis-aligned cuboids such that $C_n$ has parameters

$$\begin{align}   & x_0 = S_{6n - 5} \\; \text{modulo} \\; 10000    \\\\
  & y_0 = S_{6n - 4} \\; \text{modulo} \\; 10000    \\\\   & z_0 = S_{6n - 3} \\; \text{modulo} \\; 10000    \\\\
  & dx = 1 + (S_{6n - 2} \\; \text{modulo} \\; 399) \\\\   & dy = 1 + (S_{6n - 1} \\; \text{modulo} \\; 399) \\\\
  & dz = 1 + (S_{6n} \\; \text{modulo} \\; 399)     \\\\ \end{align}$$

where $S_1, \ldots, S_{300000}$ come from the "Lagged Fibonacci Generator":

За умови $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007k^3] \\; (modulo \\; 1000000)$

За умови $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}] \\; (modulo \\; 1000000)$

Thus, $C_1$ has parameters $\{(7,53,183), (94,369,56)\}$, $C_2$ has parameters $\{(2383,3563,5079), (42,212,344)\}$, and so on.

The combined volume of the first 100 cuboids, $C_1, \ldots, C_{100}$, is 723581599.

What is the combined volume of all 50000 cuboids, $C_1, \ldots, C_{50000}$?

# --hints--

`combinedValueOfCuboids()` має повернути `328968937309`.

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
