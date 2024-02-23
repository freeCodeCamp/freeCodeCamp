---
id: 5900f4cf1000cf542c50ffe1
title: 'Завдання 354: відстані в бджолиних стільниках'
challengeType: 1
forumTopicId: 302014
dashedName: problem-354-distances-in-a-bees-honeycomb
---

# --description--

Розглянемо стільники медоносних бджіл, де кожна сота є ідеальним правильним шестикутником із довжиною сторони 1.

<img class="img-responsive center-block" alt="стільник зі сторонами шестикутника довжиною 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/distances-in-a-bees-honeycomb.png" style="background-color: white; padding: 10px;" />

Одну конкретну соту займає бджоломатка. Нехай $B(L)$, де $L$ є натуральним числом, буде кількістю сотів, віддалених від соти бджоломатки на відстані $L$ (відстані виміряні від центру до центру). Можна припустити, що стільники достатньо великі, щоб вмістити будь-яку відстань, яку хочемо розглянути.

Наприклад, $B(\sqrt{3}) = 6$, $B(\sqrt{21}) = 12$ та $B(111\\,111\\,111) = 54$.

Знайдіть кількість $L ≤ 5 \times {10}^{11}$, за яких $B(L) = 450$.

# --hints--

`distancesInHoneycomb()` має повернути `58065134`.

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
