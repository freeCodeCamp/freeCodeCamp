---
id: 5900f4431000cf542c50ff56
title: 'Завдання 215: Стіни без тріщин'
challengeType: 1
forumTopicId: 301857
dashedName: problem-215-crack-free-walls
---

# --description--

Розглянемо завдання — побудувати стіни з цеглин розміром 2×1 та 3×1(горизонтальний×вертикальний розмір) та задля забезпечення додаткової міцності розмістити їх так, щоб проміжки між цеглинами не з'єднувалися у наступних рядах, тобто не утворювали "суцільну тріщину".

Наприклад, ця стіна 9×3 не підходить через тріщину, виділену червоним кольором:

<img class="img-responsive center-block" alt="Стіна 9x3 з проміжками, що утворили лінію між горизонтально-прилеглими цеглинами" src="https://cdn.freecodecamp.org/curriculum/project-euler/crack-free-walls.gif" style="background-color: white; padding: 10px;" />

Є вісім способів сформувати стіну 9×3 без тріщини, позначимо це як $W(9,3) = 8$.

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
