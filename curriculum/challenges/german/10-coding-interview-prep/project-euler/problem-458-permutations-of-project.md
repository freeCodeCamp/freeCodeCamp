---
id: 5900f5361000cf542c510049
title: 'Problem 458: Permutationen des Projekts'
challengeType: 1
forumTopicId: 302132
dashedName: problem-458-permutations-of-project
---

# --description--

Betrachte das Alphabet $A$, das aus den Buchstaben des Wortes `project` besteht: $A = \\{c, e, j, o, p, r, t\\}$.

Lasse $T(n)$ die Anzahl der Strings der Länge $n$ sein, die aus Buchstaben von $A$ bestehen, die keinen Unterstring haben, die eine der 5040 Permutationen von `project` ist.

$T(7) = 7^7 - 7! = 818\\,503$.

Finde $T({10}^{12})$. Gebe die letzten 9 Ziffern deiner Antwort an.

# --hints--

`permutationsOfProject()` sollte `423341841` zurückgeben.

```js
assert.strictEqual(permutationsOfProject(), 423341841);
```

# --seed--

## --seed-contents--

```js
function permutationsOfProject() {

  return true;
}

permutationsOfProject();
```

# --solutions--

```js
// solution required
```
