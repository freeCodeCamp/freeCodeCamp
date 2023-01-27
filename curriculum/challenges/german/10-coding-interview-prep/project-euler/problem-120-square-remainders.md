---
id: 5900f3e41000cf542c50fef7
title: 'Problem 120: Square remainders'
challengeType: 1
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

Let `r` be the remainder when ${(a − 1)}^n + {(a + 1)}^n$ is divided by $a^2$.

Wenn zum Beispiel $a = 7$ und $n = 3$, dann ist $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\ 49$. Und so wie `n` variiert, so wird auch `r` variieren, aber für $a = 7$ stellt sich heraus, dass $r_{max} = 42$ ist.

Für $3 ≤ a ≤ 1000$, finde $\sum{r}_{max}$.

# --hints--

`squareRemainders()` sollte `333082500` zurückgeben.

```js
assert.strictEqual(squareRemainders(), 333082500);
```

# --seed--

## --seed-contents--

```js
function squareRemainders() {

  return true;
}

squareRemainders();
```

# --solutions--

```js
// solution required
```
