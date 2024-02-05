---
id: 5900f3e41000cf542c50fef7
title: 'Завдання 120: квадратні остачі'
challengeType: 1
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

Нехай `r` буде остачею при діленні ${(a − 1)}^n + {(a + 1)}^n$ на $a^2$.

Наприклад, якщо $a = 7$ та $n = 3$, тоді $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$. Оскільки змінюється `n`, також змінюється `r`, але за умови $a = 7$ виходить так, що $r_{max} = 42$.

Знайдіть $\sum{r}_{max}$ за умови 3 ≤ a ≤ 1000$.

# --hints--

`squareRemainders()` має повернути `333082500`.

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
