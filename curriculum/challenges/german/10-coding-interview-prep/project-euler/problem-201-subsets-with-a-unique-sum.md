---
id: 5900f4361000cf542c50ff48
title: 'Problem 201: Teilmengen mit einer eindeutigen Summe'
challengeType: 1
forumTopicId: 301841
dashedName: problem-201-subsets-with-a-unique-sum
---

# --description--

Für eine beliebige Menge $A$ von Zahlen sei $sum(A)$ die Summe der Elemente von $A$.

Betrachte die Menge $B = \\{1,3,6,8,10,11\\}$. Es gibt 20 Teilmengen von $B$, die drei Elemente enthalten, und ihre Summen sind:

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

Einige dieser Summen kommen mehrmals vor, andere sind einmalig. Für eine Menge $A$ sei $U(A,k)$ die Menge der eindeutigen Summen von $k$-Element-Teilmengen von $A$, in unserem Beispiel finden wir $U(B,3) = \\{10,12,14,18,21,25,27,29\\}$ und $sum(U(B,3)) = 156$.

Betrachten wir nun die $100$-Elementmenge $S = \\{1^2, 2^2, \ldots , {100}^2\\}$. $S$ hat $100\\,891\\,344\\,545\\,564\\,193\\,334\\,812\\,497\\,256\\\;$ $50$-Element-Untermengen.

Bestimme die Summe aller Integer, die die Summe von genau einer der $50$-Element-Teilmengen von $S$ sind, d.h. finde $sum(U(S,50))$.

# --hints--

`uniqueSubsetsSum()` sollte `115039000` zurückgeben.

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
