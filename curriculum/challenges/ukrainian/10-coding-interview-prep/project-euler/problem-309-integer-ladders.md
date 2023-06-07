---
id: 5900f4a11000cf542c50ffb4
title: 'Завдання 309: Драбини цілих чисел'
challengeType: 1
forumTopicId: 301963
dashedName: problem-309-integer-ladders
---

# --description--

У класичній задачі про схрещенні драбини нам дається довжина $x$ і $y$ двох драбин, що лежать на протилежних стінах вузької вулиці. Ми маємо висоту $h$ над вулицею, де драбини перетинаються і повинні визначити ширину вулиці ($w$).

<img class="img-responsive center-block" alt="драбини х і y, перетинаються на висоті h, і спираються на протилежні стіни вулиці ширини w" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;" />

Слід враховувати лише випадки, де усі чотири перемінні будуть цілими числами. Наприклад, якщо $x = 70$, $y = 119$ and $h = 30$, можемо визначити, що $w = 56$.

Насправді, для цілих значень $x$, $y$, $h$ і $0 &lt; x &lt; y &lt; 200$, є лише п'ять триплетів ($x$, $y$, $h$), які дають ціле рішення для $w$: (70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) і (119, 175, 40).

З цілими значеннями $x$, $y$, $h$ і $0 &lt; x &lt; y &lt; 1\\,000\\,000$, скільки триплетів ($x$, $y$, $h$) дають ціле рішення для $w$?

# --hints--

`integerLadders()` має повернути `210139`.

```js
assert.strictEqual(integerLadders(), 210139);
```

# --seed--

## --seed-contents--

```js
function integerLadders() {

  return true;
}

integerLadders();
```

# --solutions--

```js
// solution required
```
