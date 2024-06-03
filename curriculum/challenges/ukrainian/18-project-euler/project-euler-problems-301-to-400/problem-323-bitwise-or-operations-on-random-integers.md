---
id: 5900f4b01000cf542c50ffc2
title: 'Завдання 323: бітові операції OR над випадковими цілими числами'
challengeType: 1
forumTopicId: 301980
dashedName: problem-323-bitwise-or-operations-on-random-integers
---

# --description--

Нехай $y_0, y_1, y_2, \ldots$ буде послідовністю випадкових 32 бітових чисел (тобто всі значення $0 ≤ y_i &lt; 2^{32}$ рівноймовірні).

Для послідовності $x_i$ надано наступну рекурсію:

- $x_0 = 0$ та
- $x_i = x_{i - 1} \mathbf{|} y_{i - 1}$ за умови $i > 0$. ($\mathbf{|}$ є бітовим оператором OR)

Можна побачити, що зрештою ми отримаємо індекс $N$, за якого $x_i = 2^{32} - 1$ (шаблон з одиниць) для всіх значень $i ≥ N$.

Знайдіть очікуване значення $N$. Дайте відповідь, заокруглену до десяти знаків після коми.

# --hints--

`bitwiseOrOnRandomIntegers()` має повернути `6.3551758451`.

```js
assert.strictEqual(bitwiseOrOnRandomIntegers(), 6.3551758451);
```

# --seed--

## --seed-contents--

```js
function bitwiseOrOnRandomIntegers() {

  return true;
}

bitwiseOrOnRandomIntegers();
```

# --solutions--

```js
// solution required
```
