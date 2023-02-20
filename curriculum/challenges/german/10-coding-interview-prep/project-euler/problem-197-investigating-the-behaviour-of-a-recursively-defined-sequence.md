---
id: 5900f4311000cf542c50ff44
title: 'Problem 197: Untersuchung des Verhaltens einer rekursiv definierten Sequenz'
challengeType: 1
forumTopicId: 301835
dashedName: problem-197-investigating-the-behaviour-of-a-recursively-defined-sequence
---

# --description--

Gegeben sei die Funktion $f(x) = ⌊{2}^{30.403243784 - x^2}⌋ × {10}^{-9}$ ( ⌊ ⌋ ist die Floor-Funktion), die Folge $u_n$ sei definiert durch $u_0 = -1$ und $u_{n + 1} = f(u_n)$.

Finde $u_n + u_{n + 1}$ für $n = {10}^{12}$. Gib deine Antwort mit 9 Stellen nach dem Komma an.

# --hints--

`recursivelyDefinedSequence()` sollte `1.710637717` zurückgeben.

```js
assert.strictEqual(recursivelyDefinedSequence(), 1.710637717);
```

# --seed--

## --seed-contents--

```js
function recursivelyDefinedSequence() {

  return true;
}

recursivelyDefinedSequence();
```

# --solutions--

```js
// solution required
```
