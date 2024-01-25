---
id: 5900f4a11000cf542c50ffb4
title: 'Завдання 309: цілочислові драбини'
challengeType: 1
forumTopicId: 301963
dashedName: problem-309-integer-ladders
---

# --description--

У класичній задачі Фараона (також відома як задача про схрещені драбини) дано довжини $x$ та $y$ двох драбин, що лежать на протилежних стінах вузької вулиці. Також дано висоту $h$, проведену від точки перетину двох драбин над вулицею, і нам потрібно знайти ширину вулиці ($w$).

<img class="img-responsive center-block" alt="драбини х та y перетинаються на висоті h, і опираються на протилежні стіни вулиці з шириною w" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;" />

У цьому завданні ми розглядаємо лише ті випадки, де всі чотири змінні є натуральними числами. Наприклад, якщо $x = 70$, $y = 119$ та $h = 30$, можемо визначити, що $w = 56$.

Насправді для цілих значень $x$, $y$, $h$ за умови $0 &lt; x &lt; y &lt; 200$ існує лише п’ять трійок ($x$, $y$, $h$), які надають ціле значення $w$: (70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) та (119, 175, 40).

Скільки існує трійок ($x$, $y$, $h$), які надають ціле значення $w$ для цілих значень $x$, $y$, $h$ за умови $0 &lt; x &lt; y &lt; 1\\,000\\,000$?

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
