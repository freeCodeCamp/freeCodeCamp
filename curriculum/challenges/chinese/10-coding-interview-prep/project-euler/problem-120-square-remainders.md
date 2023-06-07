---
id: 5900f3e41000cf542c50fef7
title: '问题 120：平方余数'
challengeType: 1
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

将 `r` 记为当 ${(a − 1)}^n + {(a + 1)}^n$ 除以 $a^2$ 的余数。

例如，如果 $a = 7$ 且 $n = 3$，则 $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$。 `r` 会随着 `n` 的变化而变化，但对于 $a = 7$，会有 $r_{max} = 42$。

对于 $3 ≤ a ≤ 1000$，求 $\sum{r}_{max}$。

# --hints--

`squareRemainders()` 应该返回 `333082500`。

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
