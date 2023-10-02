---
id: 5900f3e41000cf542c50fef7
title: 'Завдання 120: Квадратні остачі'
challengeType: 1
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

Нехай `r` буде остачею при діленні ${(a − 1)}^n + {(a + 1)}^n$ на $a^2$.

Наприклад, якщо $a = 7$ і $n = 3$, тоді $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$. І оскільки змінюється `n`, те ж відбувається і з `r`, але для $a = 7$ виходить так, що $r_{max} = 42$.

Знайдіть $\sum{r}_{max}$ для 3 ≤ a ≤ 1000$.

# --hints--

`squareRemainders()` має вивести `333082500`.

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
