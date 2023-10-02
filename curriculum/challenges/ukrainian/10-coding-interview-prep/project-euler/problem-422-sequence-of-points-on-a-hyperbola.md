---
id: 5900f5131000cf542c510025
title: 'Задача 422: Послідовність точок на гіперболі'
challengeType: 1
forumTopicId: 302092
dashedName: problem-422-sequence-of-points-on-a-hyperbola
---

# --description--

Нехай $H$ - це гіпербола, визначена рівнянням $12x^2 + 7xy - 12y^2 = 625$.

Визначте $X$ як точку з координатами (7, 1). Можна побачити, що $X$ знаходиться в $H$.

Тепер визначимо послідовність точок у $H, \\{P_i : i ≥ 1\\}$, як:

- $P_1 = (13, \frac{61}{4})$.
- $P_2 = (\frac{-43}{6}, -4)$.
- Для $i > 2$, $P_i$ є унікальною точкою в $H$, яка відрізняється від $P_{i - 1}$. Таким чином лінія $P_iP_{i - 1}$ паралельна до лінії $P_{i - 2}X$. Можна показати, що $P_i$ є добре визначеною і її координати завжди раціональні.

<img class="img-responsive center-block" alt="анімація, що показує точки від P_1 до P_6" src="https://cdn.freecodecamp.org/curriculum/project-euler/sequence-of-points-on-a-hyperbola.gif" style="background-color: white; padding: 10px;" />

Дано, що $P_3 = (\frac{-19}{2}, \frac{-229}{24})$, $P_4 = (\frac{1267}{144}, \frac{-37}{12})$ and $P_7 = (\frac{17\\,194\\,218\\,091}{143\\,327\\,232}, \frac{274\\,748\\,766\\,781}{1\\,719\\,926\\,784})$.

Знайдіть $P_n$ для $n = {11}^{14}$ у такому форматі: Якщо $P_n = (\frac{a}{b}, \frac{c}{d})$, де дроби - найнижчі значення, а знаменники додатні, то відповіддю є $(a + b + c + d)\bmod 1\\,000\\,000\\,007$.

Для $n = 7$ відповідь була б такою: $806\\,236\\,837$.

# --hints--

`sequenceOfPointsOnHyperbola()` повинен повернути `92060460`.

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
