---
id: 5900f4ae1000cf542c50ffc0
title: 'Завдання 321: Заміна фішок'
challengeType: 1
forumTopicId: 301978
dashedName: problem-321-swapping-counters
---

# --description--

Горизонтальний ряд, що складається з $2n + 1$ квадратів, має $n$ червоних фішок, розміщених в одному кінці, та $n$ синіх фішок у іншому кінці, котрі розмежовані пустим квадратом у центрі. Наприклад, якщо $n = 3$.

<img class="img-responsive center-block" alt="три квадрати з червоними та синіми фішками розміщені у протилежних кінцях ряду й розділені одним пустим квадратом" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-1.gif" style="background-color: white; padding: 10px;" />

Фішка може рухатися з одного квадрата до іншого (зміщення), чи може перестрибнути через іншу фішку, якщо квадрат біля фішки не зайнятий.

<img class="img-responsive center-block" alt="дозволені рухи фішок" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-2.gif" style="background-color: white; padding: 10px;" />

Нехай $M(n)$ відображає мінімальну кількість рухів/дій, потрібних для цілковитої зміни позицій кольорових фішок; це все, перемістіть усі червоні фішки праворуч та усі сині — ліворуч.

Може бути підтверджено, що $M(3) = 15$, яке є трикутним числом.

Якщо ми створимо послідовність, що базується на значеннях n, де $M(n)$ є трикутним числом, тоді першими п'ятьма значеннями будуть: 1, 3, 10, 22 та 63, а їхня сума дорівнюватиме 99.

Знайдіть суму перших сорока значень послідовності.

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
