---
id: 5900f4361000cf542c50ff48
title: 'Problema 201: Subconjuntos com uma soma única'
challengeType: 1
forumTopicId: 301841
dashedName: problem-201-subsets-with-a-unique-sum
---

# --description--

Para qualquer conjunto $A$ de números, considere $sum(A)$ a soma dos elementos de $A$.

Considere o conjunto $B = \\{1,3,6,8,10,11\\}$. Há 20 subconjuntos de $B$ contendo três elementos, e suas somas são:

$$\begin{align}   & sum(\\{1,3,6\\}) = 10 \\\\
  & sum(\\{1,3,8\\}) = 12 \\\\   & sum(\\{1,3,10\\}) = 14 \\\\
  & sum(\\{1,3,11\\}) = 15 \\\\   & sum(\\{1,6,8\\}) = 15 \\\\
  & sum(\\{1,6,10\\}) = 17 \\\\   & sum(\\{1,6,11\\}) = 18 \\\\
  & sum(\\{1,8,10\\}) = 19 \\\\   & sum(\\{1,8,11\\}) = 20 \\\\
  & sum(\\{1,10,11\\}) = 22 \\\\   & sum(\\{3,6,8\\}) = 17 \\\\
  & sum(\\{3,6,10\\}) = 19 \\\\   & sum(\\{3,6,11\\}) = 20 \\\\
  & sum(\\{3,8,10\\}) = 21 \\\\   & sum(\\{3,8,11\\}) = 22 \\\\
  & sum(\\{3,10,11\\}) = 24 \\\\   & sum(\\{6,8,10\\}) = 24 \\\\
  & sum(\\{6,8,11\\}) = 25 \\\\   & sum(\\{6,10,11\\}) = 27 \\\\
  & sum(\\{8,10,11\\}) = 29 \\end{align}$$

Algumas destas somas ocorrem mais de uma vez, outras são únicas. Para um conjunto de $A$, considere $U(A,k)$ como sendo o conjunto de somas únicas de subconjuntos de $k$ elementos de $A$, No nosso exemplo, encontramos $U(B,3) = \\{10,12,14,18,21,25,27,29\\}$ e $sum(U(B,3)) = 156$.

Agora, considere o $100$º conjunto de elementos $S = \\{1^2, 2^2, \ldots , {100}^2\\}$. $S$ tem $100.891.344.545.564.193.334.812.497.256\\;$ subconjuntos de $50$ elementos.

Determine a soma de todos os números inteiros que são a soma de exatamente um dos subconjuntos de $50$ elementos de $S$, ou seja, encontre $sum(U(S,50))$.

# --hints--

`uniqueSubsetsSum()` deve retornar `115039000`.

```js
assert.strictEqual(uniqueSubsetsSum(), 115039000);
```

# --seed--

## --seed-contents--

```js
function uniqueSubsetsSum() {

  return true;
}

uniqueSubsetsSum();
```

# --solutions--

```js
// solution required
```
