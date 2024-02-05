---
id: 5900f5081000cf542c510019
title: 'Завдання 411: шлях вгору'
challengeType: 1
forumTopicId: 302080
dashedName: problem-411-uphill-paths
---

# --description--

Нехай $n$ буде натуральним числом. Припустимо, що на координатах $(x, y) = (2^i\bmod n, 3^i\bmod n)$ за умови $0 ≤ i ≤ 2n$ розташовані станції. Станції з однаковими координатами вважатимемо однією станцією.

Потрібно створити шлях від (0, 0) до ($n$, $n$) таким чином, щоб координати $x$ та $y$ не зменшувалися.

Нехай $S(n)$ буде максимальною кількістю станцій, через які може пройти шлях.

Наприклад, якщо $n = 22$, то існує 11 окремих станцій, а дійсний шлях може пройти максимум через 5 станцій. Отже, $S(22) = 5$. Так виглядає приклад оптимального шляху даного випадку:

<img class="img-responsive center-block" alt="дійсний шлях, який проходить через 5 точок з 11 окремими точками за умови n = 22" src="https://cdn.freecodecamp.org/curriculum/project-euler/uphill-paths.png" style="background-color: white; padding: 10px;" />

Також можна довести, що $S(123) = 14$ та $S(10\\,000) = 48$.

Знайдіть $\sum S(k^5)$ за умови $1 ≤ k ≤ 30$.

# --hints--

`uphillPaths()` має повернути `9936352`.

```js
assert.strictEqual(uphillPaths(), 9936352);
```

# --seed--

## --seed-contents--

```js
function uphillPaths() {

  return true;
}

uphillPaths();
```

# --solutions--

```js
// solution required
```
