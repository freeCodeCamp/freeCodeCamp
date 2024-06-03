---
id: 5900f5371000cf542c51004a
title: 'Завдання 459: гра «Перегорталка»'
challengeType: 1
forumTopicId: 302133
dashedName: problem-459-flipping-game
---

# --description--

У грі «Перегорталка» двоє гравців грають на квадратній дошці розміром $N$ × $N$.

Кожен квадрат містить диск, що з однієї сторони чорний, а з іншої білий.

На початку гри всі диски перевернуті білою стороною.

За один хід перевертаються всі диски у прямокутнику із такими властивостями:

- у верхньому правому куті прямокутника знаходиться білий диск
- шириною прямокутника є повний квадрат (1, 4, 9, 16, ...)
- висотою прямокутника є трикутне число (1, 3, 6, 10, ...)

<img class="img-responsive center-block" alt="перевертання всіх дисків у прямокутнику 4х3 на дошці 5х5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-1.png" style="background-color: white; padding: 10px;" />

Гравці ходять по черзі. Гравець перемагає, якщо після його ходу всі диски перевернуті чорною стороною.

Нехай $W(N)$ буде кількістю виграшних ходів для першого гравця на дошці $N$ × $N$ з усіма білими дисками за умови бездоганної гри.

$W(1) = 1$, $W(2) = 0$, $W(5) = 8$ та $W({10}^2) = 31\\,395$.

За умови $N = 5$, першими вісьмома виграшними ходами першого гравця є:

<img class="img-responsive center-block" alt="перші вісім виграшних ходів за умови N = 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-2.png" style="background-color: white; padding: 10px;" />

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
