---
id: 5900f4ae1000cf542c50ffc0
title: 'Завдання 321: заміна фішок'
challengeType: 1
forumTopicId: 301978
dashedName: problem-321-swapping-counters
---

# --description--

Горизонтальний ряд з $2n + 1$ квадратів має $n$ червоних фішок з одного боку та $n$ синіх фішок з іншого, які розділені порожнім квадратом посередині. Наприклад, якщо $n = 3$.

<img class="img-responsive center-block" alt="три квадрати з червоними та синіми фішками розміщені у протилежних кінцях ряду й розділені порожнім квадратом" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-1.gif" style="background-color: white; padding: 10px;" />

Фішка може перейти з одного квадрата на інший, або перестрибнути через іншу фішку, якщо квадрат біля тої фішки не зайнятий.

<img class="img-responsive center-block" alt="дозволені рухи фішок" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-2.gif" style="background-color: white; padding: 10px;" />

Нехай $M(n)$ представляє мінімальну кількість рухів, потрібних для повної заміни позицій кольорових фішок, тобто потрібно перемістити червоні фішки праворуч та сині ліворуч.

Можна довести, що $M(3) = 15$, яке також є трикутним числом.

Якщо створити послідовність на основі значень n, за яких $M(n)$ є трикутним числом, то першими п’ятьма членами будуть 1, 3, 10, 22 та 63, а їх сума дорівнюватиме 99.

Знайдіть суму перших сорока членів такої послідовності.

# --hints--

`swappingCounters()` має повернути `2470433131948040`.

```js
assert.strictEqual(swappingCounters(), 2470433131948040);
```

# --seed--

## --seed-contents--

```js
function swappingCounters() {

  return true;
}

swappingCounters();
```

# --solutions--

```js
// solution required
```
