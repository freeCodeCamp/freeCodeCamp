---
id: 5900f4a61000cf542c50ffb8
title: 'Завдання 313: гра «П’ятнашки»'
challengeType: 1
forumTopicId: 301969
dashedName: problem-313-sliding-game
---

# --description--

У п’ятнашках фішку можна переміщати горизонтально або вертикально, займаючи порожнє місце. Мета гри — перемістити червону фішку з лівого верхнього кута сітки в правий нижній кут. На початку гри порожньою клітинкою завжди є нижній правий кут. Ось приклад того, як можна завершити гру за п’ять ходів на сітці 2 × 2.

<img class="img-responsive center-block" alt="завершення гри за п’ять ходів на сітці 2х2" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px;" />

Нехай $S(m, n)$ позначає мінімальну кількість ходів, щоб завершити гру на сітці розміром $m$ × $n$. Наприклад, можна довести, що $S(5, 4) = 25$.

<img class="img-responsive center-block" alt="початок і кінець гри на сітці розміром 5х4" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px;" />

Існує 5482 сітки, за яких $S(m, n) = p^2$, де $p &lt; 100$ є простим числом.

Скільки сіток створює $S(m, n) = p^2$, де $p &lt; {10}^6$ є простим числом?

# --hints--

`slidingGame()` має повернути `2057774861813004`.

```js
assert.strictEqual(slidingGame(), 2057774861813004);
```

# --seed--

## --seed-contents--

```js
function slidingGame() {

  return true;
}

slidingGame();
```

# --solutions--

```js
// solution required
```
