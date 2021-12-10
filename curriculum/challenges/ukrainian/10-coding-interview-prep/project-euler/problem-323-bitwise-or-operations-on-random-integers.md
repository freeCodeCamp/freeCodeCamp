---
id: 5900f4b01000cf542c50ffc2
title: 'Завдання 323: Бітові операції над випадковими цілими числами'
challengeType: 5
forumTopicId: 301980
dashedName: problem-323-bitwise-or-operations-on-random-integers
---

# --description--

Нехай $y_0, y_1, y_2, \ldots$ – це послідовність випадково непідписаних 32-бітних цілих чисел

(тобто $0 ≤ y_i &lt; 2^{32}$, кожне значення рівноможливе).

Для послідовності $x_i$ надано наступну рекурсію:

- $x_0 = 0$ і
- $x_i = x_{i - 1} \mathbf{|} y_{i - 1}$, для $i > 0$. ($\mathbf{|}$ – це оператори бітових операцій)

Бачимо, що зрештою в нас буде такий індекс $N$, що $x_i = 2^{32} - 1$ (бітовий шаблон для всіх одиниць) для всіх $i ≥ N$.

Знайдіть очікуване значення $N$. Округліть відповідь до 10 цифр після коми.

# --hints--

`bitwiseOrOnRandomIntegers()` має повернути до `6.3551758451`.

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
