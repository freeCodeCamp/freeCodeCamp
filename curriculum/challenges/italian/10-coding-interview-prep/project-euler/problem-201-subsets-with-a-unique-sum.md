---
id: 5900f4361000cf542c50ff48
title: 'Problema 201: Sottoinsiemi con una somma unica'
challengeType: 1
forumTopicId: 301841
dashedName: problem-201-subsets-with-a-unique-sum
---

# --description--

Per qualsiasi insieme $A$ di numeri, sia $sum(A)$ la somma degli elementi di $A$.

Considera l'insieme $B = \\{1,3,6,8,10,11\\}$. Ci sono 20 sottoinsiemi di $B$ contenenti tre elementi, e le loro somme sono:

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

Alcune di queste somme si verificano più di una volta, altre sono uniche. Per un insieme $A$, sia $U(A,k)$ l'insieme di somme uniche dei sottoinsiemi di $k$ elementi di $A$, nel nostro esempio troviamo $U(B,3) = \\{10,12,14,18,21,25,27,29\\}$ e $sum(U(B,3)) = 156$.

Considera ora l'insieme di $100$ elementi $S = \\{1^2, 2^2, \ldots , {100}^2\\}$. $S$ ha sottoinsiemi di $50$ elementi $100\\,891\\,344\\,545\\,564\\,193\\,334\\,812\\,497\\,256\\;$.

Determina la somma di tutti i numeri interi che sono la somma esatta di uno dei sottoinsiemi di $50$ elementi di $S$, cioè trova $sum(U(S,50)$.

# --hints--

`uniqueSubsetsSum()` dovrebbe restituire `115039000`.

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
