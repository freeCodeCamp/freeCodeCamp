---
id: 5900f4431000cf542c50ff56
title: 'Завдання 215: стіни без тріщин'
challengeType: 1
forumTopicId: 301857
dashedName: problem-215-crack-free-walls
---

# --description--

Розглянемо задачу: потрібно побудувати стіну з цеглин 2×1 та 3×1 (горизонтальний × вертикальний розмір) таким чином, щоб сусідні горизонтальні цеглини не нагромаджувались в послідовні ряди. Іншими словами, щоб вони не утворювали «суцільну тріщину».

Наприклад, ця стіна 9×3 неправильна через тріщину, виділену червоним кольором:

<img class="img-responsive center-block" alt="Стіна 9x3 з проміжками, що утворили лінію між горизонтально-прилеглими цеглинами" src="https://cdn.freecodecamp.org/curriculum/project-euler/crack-free-walls.gif" style="background-color: white; padding: 10px;" />

Існує вісім способів утворити стіну 9×3 без тріщин. Запишемо як $W(9,3) = 8$.

Обчисліть $W(32,10)$.

# --hints--

`crackFreeWalls()` має повернути `806844323190414`.

```js
assert.strictEqual(crackFreeWalls(), 806844323190414);
```

# --seed--

## --seed-contents--

```js
function crackFreeWalls() {

  return true;
}

crackFreeWalls();
```

# --solutions--

```js
// solution required
```
