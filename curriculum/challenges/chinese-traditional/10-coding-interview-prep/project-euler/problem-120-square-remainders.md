---
id: 5900f3e41000cf542c50fef7
title: '問題 120：平方餘數'
challengeType: 1
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

將 `r` 記爲當 ${(a − 1)}^n + {(a + 1)}^n$ 除以 $a^2$ 的餘數。

例如，如果 $a = 7$ 且 $n = 3$，則 $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$。 `r` 會隨着 `n` 的變化而變化，但對於 $a = 7$，會有 $r_{max} = 42$。

對於 $3 ≤ a ≤ 1000$，求 $\sum{r}_{max}$。

# --hints--

`squareRemainders()` 應該返回 `333082500`。

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
