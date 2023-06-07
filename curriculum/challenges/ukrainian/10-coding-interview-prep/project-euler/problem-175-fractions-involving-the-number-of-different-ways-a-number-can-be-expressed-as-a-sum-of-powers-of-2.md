---
id: 5900f41c1000cf542c50ff2e
title: >-
  Завдання 175: Дроби, що включають різні способи, як записати число, виразивши суму степенів 2
challengeType: 1
forumTopicId: 301810
dashedName: >-
  problem-175-fractions-involving-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Нехай $f(0) = 1$ і $f(n)$ — кількість способів записати $n$ як суму квадратів, де жоден з степенів не зустрічається більше двох разів.

Наприклад, $f(10) = 5$, бо існує 5 різних способів для вираження 10:

$$10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1$$

Можна показати, що для кожного дріб $\frac{p}{q}\\; (p>0, q>0)$ існує принаймні одне ціле число $n$, а $\frac{f(n)}{f(n - 1)} = \frac{p}{q}$.

Наприклад, найменше $n$, за якого $\frac{f(n)}{f(n - 1)} = \frac{13}{17}$ є 241. Бінарне розширення 241 складає 11110001.

Зчитування цього бінарного числа від найбільш значущого біта до найменш значущого біта містить 4 одиниці, 3 нулі і 1 одиницю. Назвемо ряд 4,3,1 скороченим бінарним розширенням 241.

Знайдіть скорочене бінарне розширення найменшого $n$ для якого

$$\frac{f(n)}{f(n - 1)} = \frac{123456789}{987654321}$$

Запишіть відповідь як ряд з цілими числами, розділеними комами, без пробілів.

# --hints--

`shortenedBinaryExpansionOfNumber()` має повертати рядок.

```js
assert(typeof shortenedBinaryExpansionOfNumber() === 'string');
```

`shortenedBinaryExpansionOfNumber()` має повертати рядок `1,13717420,8`.

```js
assert.strictEqual(shortenedBinaryExpansionOfNumber(), '1,13717420,8');
```

# --seed--

## --seed-contents--

```js
function shortenedBinaryExpansionOfNumber() {

  return true;
}

shortenedBinaryExpansionOfNumber();
```

# --solutions--

```js
// solution required
```
