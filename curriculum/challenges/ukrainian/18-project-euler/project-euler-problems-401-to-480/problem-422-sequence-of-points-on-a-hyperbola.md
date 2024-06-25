---
id: 5900f5131000cf542c510025
title: 'Завдання 422: послідовність точок на гіперболі'
challengeType: 1
forumTopicId: 302092
dashedName: problem-422-sequence-of-points-on-a-hyperbola
---

# --description--

Нехай $H$ буде гіперболою, заданою рівнянням $12x^2 + 7xy - 12y^2 = 625$.

Визначимо $X$ як точку з координатами (7, 1). Як бачите, $X$ належить $H$.

Тепер визначимо послідовність точок гіперболи $H, \\{P_i : i ≥ 1\\}$ як:

- $P_1 = (13, \frac{61}{4})$.
- $P_2 = (\frac{-43}{6}, -4)$.
- За умови $i > 2$, $P_i$ є унікальною точкою гіперболи $H$, яка відрізняється від $P_{i - 1}$, та за якої пряма $P_iP_{i - 1}$ паралельна прямій $P_{i - 2}X$. Можна довести, що $P_i$ однозначно визначена, а її координати завжди раціональні.

<img class="img-responsive center-block" alt="анімація з визначеними точками від P_1 до P_6" src="https://cdn.freecodecamp.org/curriculum/project-euler/sequence-of-points-on-a-hyperbola.gif" style="background-color: white; padding: 10px;" />

Дано, що $P_3 = (\frac{-19}{2}, \frac{-229}{24})$, $P_4 = (\frac{1267}{144}, \frac{-37}{12})$ та $P_7 = (\frac{17\\,194\\,218\\,091}{143\\,327\\,232}, \frac{274\\,748\\,766\\,781}{1\\,719\\,926\\,784})$.

Знайдіть $P_n$ за умови $n = {11}^{14}$ у такому форматі: якщо $P_n = (\frac{a}{b}, \frac{c}{d})$, де дроби нескоротні, а знаменники додатні, то відповіддю буде $(a + b + c + d)\bmod 1\\,000\\,000\\,007$.

За умови $n = 7$ відповіддю буде $806\\,236\\,837$.

# --hints--

`sequenceOfPointsOnHyperbola()` має повернути `92060460`.

```js
assert.strictEqual(sequenceOfPointsOnHyperbola(), 92060460);
```

# --seed--

## --seed-contents--

```js
function sequenceOfPointsOnHyperbola() {

  return true;
}

sequenceOfPointsOnHyperbola();
```

# --solutions--

```js
// solution required
```
