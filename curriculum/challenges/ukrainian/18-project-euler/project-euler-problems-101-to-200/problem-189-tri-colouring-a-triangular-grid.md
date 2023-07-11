---
id: 5900f4291000cf542c50ff3c
title: 'Завдання 189: забарвлення трикутної сітки'
challengeType: 1
forumTopicId: 301825
dashedName: problem-189-tri-colouring-a-triangular-grid
---

# --description--

Розглянемо таку розмітку для 64 трикутників:

<img class="img-responsive center-block" alt="64 трикутники, розміщені таким чином, що утворюють більший трикутник зі сторонами довжиною у 8 трикутників" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-1.gif" style="background-color: white; padding: 10px;" />

Ми хочемо заповнити внутрішню область кожного трикутника одним із трьох кольорів (червоним, зеленим чи синім) таким чином, щоб жодні два сусідні трикутники не були однакового кольору. Таке забарвлення вважається допустимим. Два трикутники вважаються сусідніми, якщо вони мають спільне ребро. Примітка: якщо вони мають лише спільну вершину, вони не сусідні.

Наприклад, ось допустиме забарвлення наведеної вище розмітки:

<img class="img-responsive center-block" alt="забарвлена розмітка з 64 трикутників" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-2.gif" style="background-color: white; padding: 10px;" />

Забарвлення C', отримане за допомогою повороту або відбиття забарвлення C, вважається відмінним від C, якщо вони не ідентичні.

Скільки існує різних допустимих забарвлень для наведеної вище розмітки?

# --hints--

`triangularGridColoring()` має повернути `10834893628237824`.

```js
assert.strictEqual(triangularGridColoring(), 10834893628237824);
```

# --seed--

## --seed-contents--

```js
function triangularGridColoring() {

  return true;
}

triangularGridColoring();
```

# --solutions--

```js
// solution required
```
