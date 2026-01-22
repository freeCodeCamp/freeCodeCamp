---
id: 5900f3e41000cf542c50fef7
title: 'Problem 120: Square remainders'
challengeType: 1
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

Let `r` be the remainder when ${(a − 1)}^n + {(a + 1)}^n$ is divided by $a^2$.

For example, if $a = 7$ and $n = 3$, then $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$. And as `n` varies, so too will `r`, but for $a = 7$ it turns out that $r_{max} = 42$.

For $3 ≤ a ≤ 1000$, find $\sum{r}_{max}$.

# --hints--

`squareRemainders()` should return `333082500`.

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
