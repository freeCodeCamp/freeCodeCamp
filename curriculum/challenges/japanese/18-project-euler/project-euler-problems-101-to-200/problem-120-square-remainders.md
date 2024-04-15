---
id: 5900f3e41000cf542c50fef7
title: '問題 120: 平方数で除した余り'
challengeType: 1
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

${(a − 1)}^n + {(a + 1)}^n$ を $a^2$ で除した余りを `r` とします。

例えば、$a = 7$ かつ $n = 3$ のとき、$r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$ です。 `n` が変わると `r` も変わりますが、$a = 7$ のときに $r_{max} = 42$ となります。

$3 ≤ a ≤ 1000$ のとき、$\sum{r}_{max}$ を求めなさい。

# --hints--

`squareRemainders()` は `333082500` を返す必要があります。

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
