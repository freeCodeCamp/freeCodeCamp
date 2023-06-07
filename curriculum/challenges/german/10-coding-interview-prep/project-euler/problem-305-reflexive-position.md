---
id: 5900f49d1000cf542c50ffb0
title: 'Problem 305: Reflexive Position'
challengeType: 1
forumTopicId: 301959
dashedName: problem-305-reflexive-position
---

# --description--

Nennen wir $S$ einen (unendlichen) String, der durch die Verkettung aufeinanderfolgender positiver Integer (beginnend mit 1) zum Basiswert 10 entsteht.

Demzufolge: $S = 1234567891011121314151617181920212223242\ldots$

Es ist leicht zu erkennen, dass jede Zahl unendlich oft in $S$ vorkommt.

Nennen wir $f(n)$ die Anfangsposition des $n^{\text{th}}$-Vorkommens von $n$ in $S$. Zum Beispiel ist $f(1) = 1$, $f(5) = 81$, $f(12) = 271$ und $f(7780) = 111\\,111\,365$.

Finde $\sum f(3^k) for 1 ≤ k ≤ 13$.

# --hints--

`reflexivePosition()` sollte `18174995535140` zurückgeben.

```js
assert.strictEqual(reflexivePosition(), 18174995535140);
```

# --seed--

## --seed-contents--

```js
function reflexivePosition() {

  return true;
}

reflexivePosition();
```

# --solutions--

```js
// solution required
```
