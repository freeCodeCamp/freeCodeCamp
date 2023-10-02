---
id: 5900f3e41000cf542c50fef7
title: 'Problema 120: Resti di quadrati'
challengeType: 1
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

Sia `r` il resto quando ${(a − 1)}^n + {(a + 1)}^n$ viene diviso per $a^2$.

Per esempio, se $a = 7$ e $n = 3$, allora $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$. E se `n` varia, allora anche `r` varia, ma per $a = 7$ risulta che $r_{max} = 42$.

Per $3 ≤ a ≤ 1000$, trova $\sum{r}_{max}$.

# --hints--

`squareRemainders()` dovrebbe restituire `333082500`.

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
