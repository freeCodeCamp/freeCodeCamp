---
id: 5900f4cf1000cf542c50ffe1
title: 'Задача 354: Відстані в бджолиних стільниках'
challengeType: 1
forumTopicId: 302014
dashedName: problem-354-distances-in-a-bees-honeycomb
---

# --description--

Розглянемо стільники медоносних бджіл, де кожна клітина є ідеальним правильним шестикутником із довжиною сторони 1.

<img class="img-responsive center-block" alt="шестикутний стільник з довжиною кожної сторони 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/distances-in-a-bees-honeycomb.png" style="background-color: white; padding: 10px;" />

Одну конкретну клітину займає бджола-матка. Для додатного дійсного числа $L$, нехай $B(L)$ підраховує клітини з відстанню $L$ від осередку бджолиної матки (усі відстані вимірюються від центру до центру); ви можете припустити, що стільники досить великі, щоб вмістити будь-яку відстань, яку ми хочемо врахувати.

Наприклад, $B(\sqrt{3}) = 6$, $B(\sqrt{21}) = 12$ та $B(111\\,111\\,111) = 54$.

Знайдіть кількість $L ≤ 5 \times {10}^{11}$ таких, що $B(L) = 450$.

# --hints--

`distancesInHoneycomb()` повинен повертати `58065134`.

```js
assert.strictEqual(distancesInHoneycomb(), 58065134);
```

# --seed--

## --seed-contents--

```js
function distancesInHoneycomb() {

  return true;
}

distancesInHoneycomb();
```

# --solutions--

```js
// solution required
```
