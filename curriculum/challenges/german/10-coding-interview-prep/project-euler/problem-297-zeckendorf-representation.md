---
id: 5900f4951000cf542c50ffa8
title: 'Problem 297: Satz von Zeckendorf'
challengeType: 1
forumTopicId: 301949
dashedName: problem-297-zeckendorf-representation
---

# --description--

Jedes neue Element in der Fibonacci-Folge wird durch Zusatz der beiden vorherigen Elemente erzeugt.

Beginnend mit 1 und 2 werden die ersten 10 Elemente lauten: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.

Jeder positive Integer kann einzigartig als Summe aufeinanderfolgender Elemente der Fibonacci Folge geschrieben werden. Zum Beispiel, 100 = 3 + 8 + 89.

Eine solche Summe nennt man Zeckendorf Repräsentation der Zahl.

Für jede Ganzzahl $n>0$, lass $z(n)$ die Anzahl der Begriffe in der Zeckendorf-Darstellung von $n$ sein.

Demzufolge, $z(5) = 1$, $z(14) = 2$, $z(100) = 3$ etc.

Auch für $0 &lt; n &lt; {10}^6$, $\sum z(n) = 7\\,894\\,453$.

Finde $\sum z(n)$ für $0 &lt; n &lt; {10}^{17}$.

# --hints--

`zeckendorfRepresentation()` sollte `2252639041804718000` zurückgeben.

```js
assert.strictEqual(zeckendorfRepresentation(), 2252639041804718000);
```

# --seed--

## --seed-contents--

```js
function zeckendorfRepresentation() {

  return true;
}

zeckendorfRepresentation();
```

# --solutions--

```js
// solution required
```
