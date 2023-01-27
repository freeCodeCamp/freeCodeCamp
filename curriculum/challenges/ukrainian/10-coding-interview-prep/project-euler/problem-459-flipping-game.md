---
id: 5900f5371000cf542c51004a
title: 'Завдання 459: Гра "Перегорталка"'
challengeType: 1
forumTopicId: 302133
dashedName: problem-459-flipping-game
---

# --description--

У цій грі двоє гравців грають на $N$, користуючись $N$ квадратними панелями.

Кожен квадрат містить диск, що з однієї сторони чорний, а з іншої білий.

На початку гри всі диски перевернуті білою стороною.

Хід полягає в тому, щоб перевернути всі диски наступним чином:

- у верхньому правому кутку прямокутника повинен знаходитись білий диск
- ширина прямокутника - це квадратне число (1, 4, 9, 16, ...)
- висота прямокутника - трикутне число (1, 3, 6, 10, ...)

<img class="img-responsive center-block" alt="необхідно перевернути всі диски у прямокутнику 4х3 на дошці 5х5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-1.png" style="background-color: white; padding: 10px;" />

Гравці ходять по черзі. Гравець перемагає, перегорнувши диски на чорну сторону.

Нехай $W(N)$ буде кількістю виграшних ходів для першого гравця на дошці $N$ на $N$ з усіма білими дисками за умови бездоганної гри.

$W(1) = 1$, $W(2) = 0$, $W(5) = 8$ and $W({10}^2) = 31\\,395$.

За $N = 5$, вісьмома виграшними ходами гравця є:

<img class="img-responsive center-block" alt="перші вісім виграшних ходів для N = 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-2.png" style="background-color: white; padding: 10px;" />

Знайдіть $W({10}^6)$.

# --hints--

`flippingGame()` має повернути `3996390106631`.

```js
assert.strictEqual(flippingGame(), 3996390106631);
```

# --seed--

## --seed-contents--

```js
function flippingGame() {

  return true;
}

flippingGame();
```

# --solutions--

```js
// solution required
```
