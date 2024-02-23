---
id: 5900f48b1000cf542c50ff9e
title: 'Завдання 287: кодування дерева квадратів (простий алгоритм стиснення)'
challengeType: 1
forumTopicId: 301938
dashedName: problem-287-quadtree-encoding-a-simple-compression-algorithm
---

# --description--

Кодування дерева квадратів дозволяє описати чорно-біле зображення $2^N×2^N$ як послідовність бітів (0 та 1). Щоб прочитати такі послідовності зліва направо:

- перший біт стосується блоку $2^N×2^N$;
- "0" позначає розділення:
  - поточний блок $2^n×2^n$ поділено на 4 менших блоки розміром $2^{n - 1}×2^{n - 1}$,
  - а наступні біти містять опис верхнього лівого, верхнього правого, нижнього лівого та нижнього правого менших блоків (в такому ж порядку);
- "10" вказує на те, що поточний блок містить лише чорні пікселі;
- "11" вказує на те, що поточний блок містить лише білі пікселі.

Розглянемо зображення 4×4 (кольорові позначки означають місце, де може бути розділення):

<img class="img-responsive center-block" alt="зображення 4х4 з кольоровими позначками, що позначають можливе розділення" src="https://cdn.freecodecamp.org/curriculum/project-euler/quadtree-encoding-a-simple-compression-algorithm.gif" style="background-color: white; padding: 10px;" />

Це зображення можна описати декількома послідовностями, наприклад: "<strong><span style="color: red">0</span></strong><strong><span style="color: blue">0</span></strong>10101010<strong><span style="color: green">0</span></strong>1011111011<strong><span style="color: orange">0</span></strong>10101010" (довжиною 30) або "<strong><span style="color: red">0</span></strong>10<strong><span style="color: green">0</span></strong>101111101110" (довжиною 16, що є мінімальною можливою довжиною послідовності цього зображення).

Визначимо $D_N$, де $N$ є натуральним числом, як зображення $2^N×2^N$ з такою кольоровою схемою:

- піксель з координатами $x = 0$, $y = 0$ відповідає нижньому лівому пікселю,
- якщо ${(x - 2^{N - 1})}^2 + {(y - 2^{N - 1})}^2 ≤ 2^{2N - 2}$, то піксель чорний,
- в іншому випадку піксель білий.

Яка довжина мінімальної послідовності, яка описує $D_{24}$?

# --hints--

`quadtreeEncoding()` має повернути `313135496`.

```js
assert.strictEqual(quadtreeEncoding(), 313135496);
```

# --seed--

## --seed-contents--

```js
function quadtreeEncoding() {

  return true;
}

quadtreeEncoding();
```

# --solutions--

```js
// solution required
```
