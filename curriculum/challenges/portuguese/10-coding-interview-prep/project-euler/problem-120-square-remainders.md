---
id: 5900f3e41000cf542c50fef7
title: 'Problema 120: Restos quadrados'
challengeType: 1
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

Considere que `r` seja o resto quando ${(a -- 1)}^n + {(a + 1)}^n$ é dividido por $a^2$.

Por exemplo, se $a = 7$ e $n = 3$, então $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$. Conforme `n` varia, `r` também vai variar, mas, para $a = 7$, temos que $r_{max} = 42$.

Para $3 ≤ a ≤ 1000$, encontre $\sum{r}_{max}$.

# --hints--

`squareRemainders()` deve retornar `333082500`.

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
