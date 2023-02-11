---
id: 5900f4571000cf542c50ff6a
title: 'Problem 235: Eine arithmetisch-geometrische Folge'
challengeType: 1
forumTopicId: 301879
dashedName: problem-235-an-arithmetic-geometric-sequence
---

# --description--

Gegeben ist die arithmetisch-geometrische Folge $u(k) = (900 - 3k)r^{k - 1}$.

Lasse $s(n) = \sum_{k=1 \ldots n} u(k)$.

Finde den Wert von $r$ für den $s(5000) = -600\\,000\\,000\\,000$.

Gib deine Antwort auf 12 Stellen hinter dem Komma gerundet an.

# --hints--

`arithmeticGeometricSequence()` sollte `1.002322108633` zurückgeben.

```js
assert.strictEqual(arithmeticGeometricSequence(), 1.002322108633);
```

# --seed--

## --seed-contents--

```js
function arithmeticGeometricSequence() {

  return true;
}

arithmeticGeometricSequence();
```

# --solutions--

```js
// solution required
```
