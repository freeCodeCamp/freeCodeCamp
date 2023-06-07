---
id: 5900f3d61000cf542c50fee7
title: 'Problem 103: Spezielle Teilmengensummen: optimal'
challengeType: 1
forumTopicId: 301727
dashedName: problem-103-special-subset-sums-optimum
---

# --description--

Lasse $S(A)$ die Summe der Elemente der Menge A der Größe n sein. Wir nennen sie eine spezielle Summenmenge, wenn für zwei beliebige nicht leere, disjunkte Teilmengen B und C die folgenden Eigenschaften zutreffen:

1. $S(B) ≠ S(C)$; heißt, die Summen der Teilmengen können nicht gleich sein.
2. Wenn B mehr Elemente enthält als C, dann $S(B) > S(C)$.

Wenn $S(A)$ für ein gegebenes n minimiert ist, nennen wir es eine optimale spezielle Summenmenge. Die ersten fünf optimalen Sondersummensätze sind nachstehend aufgeführt.

$$\begin{align}   & n = 1: \\{1\\} \\\\
  & n = 2: \\{1, 2\\} \\\\   & n = 3: \\{2, 3, 4\\} \\\\
  & n = 4: \\{3, 5, 6, 7\\} \\\\   & n = 5: \\{6, 9, 11, 12, 13\\} \\\\
\end{align}$$

Es scheint, dass für eine gegebene optimale Menge $A = \\{a_1, a_2, \ldots, a_n\\}$ die nächste optimale Menge die Form $B = \\{b, a_1 + b, a_2 + b, \ldots, a_n + b\\}$ hat, wobei b das "mittlere" Element der vorherigen Reihe ist.

Bei Anwendung dieser "Regel" würden wir erwarten, dass die optimale Menge für $n = 6$ $A = \\{11, 17, 20, 22, 23, 24\\}$ ist, mit $S(A) = 117$. Dies ist jedoch nicht die optimale Menge, da wir lediglich einen Algorithmus angewendet haben, der eine nahezu optimale Menge liefert. Die optimale Menge für $n = 6$ ist $A = \\{11, 18, 19, 20, 22, 25\\}$, mit $S(A) = 115$ und dem zugehörigen eingestellten String:`111819202225`.

Es ist gegeben, dass A eine optimale spezielle Summenmenge für $n = 7$ ist, und finde den zugehörigen String.

**Hinweis:** Dieses Problem steht im Zusammenhang mit Problem 105 und 106.

# --hints--

`optimumSpecialSumSet()` sollte den String `20313839404245` zurückgeben.

```js
assert.strictEqual(optimumSpecialSumSet(), '20313839404245');
```

# --seed--

## --seed-contents--

```js
function optimumSpecialSumSet() {

  return true;
}

optimumSpecialSumSet();
```

# --solutions--

```js
// solution required
```
