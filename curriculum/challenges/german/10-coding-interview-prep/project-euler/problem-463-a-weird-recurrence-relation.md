---
id: 5900f53c1000cf542c51004e
title: 'Problem 463: Eine merkwürdige Wiederholungsrelation'
challengeType: 1
forumTopicId: 302138
dashedName: problem-463-a-weird-recurrence-relation
---

# --description--

Die Funktion $f$ ist für alle positive Integer wie folgt definiert:

$$\begin{align}   & f(1) = 1 \\\\
  & f(3) = 3 \\\\   & f(2n) = f(n) \\\\
  & f(4n + 1) = 2f(2n + 1) - f(n) \\\\ & f(4n + 3) = 3f(2n + 1) - 2f(n) \end{align}$$

Die Funktion $S(n)$ ist als $\sum_{i=1}^{n} f(i)$ definiert.

$S(8) = 22$ und $S(100) = 3604$.

Finde $S(3^{37})$. Gib die letzten 9 Ziffern deiner Antwort an.

# --hints--

`weirdRecurrenceRelation()` sollte `808981553` zurückgeben.

```js
assert.strictEqual(weirdRecurrenceRelation(), 808981553);
```

# --seed--

## --seed-contents--

```js
function weirdRecurrenceRelation() {

  return true;
}

weirdRecurrenceRelation();
```

# --solutions--

```js
// solution required
```
