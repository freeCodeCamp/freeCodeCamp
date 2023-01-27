---
id: 5900f5361000cf542c510049
title: 'Problem 458: Permutations of Project'
challengeType: 1
forumTopicId: 302132
dashedName: problem-458-permutations-of-project
---

# --description--

Consider the alphabet $A$ made out of the letters of the word `project`: $A = \\{c, e, j, o, p, r, t\\}$.

Let $T(n)$ be the number of strings of length $n$ consisting of letters from $A$ that do not have a substring that is one of the 5040 permutations of `project`.

$T(7) = 7^7 - 7! = 818\\,503$.

Find $T({10}^{12})$. Give the last 9 digits of your answer.

# --hints--

`permutationsOfProject()` should return `423341841`.

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
