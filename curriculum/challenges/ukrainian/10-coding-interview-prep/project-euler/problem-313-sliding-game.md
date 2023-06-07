---
id: 5900f4a61000cf542c50ffb8
title: 'Завдання 313: П''ятнашки'
challengeType: 1
forumTopicId: 301969
dashedName: problem-313-sliding-game
---

# --description--

У цій грі фішки можуть рухатися горизонтально або вертикально, займаючи порожній простір. Мета гри — перемістити червону фішку з лівого верхнього кута сітки в правий нижній кут. На початку гри порожня клітинка завжди в нижньому правому куті. Ось приклад того, як можна завершити гру за п’ять ходів на сітці розміром 2 на 2.

<img class="img-responsive center-block" alt="завершення гри за п’ять ходів на сітці 2х2" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px;" />

Нехай $S(m, n)$ означає мінімальну кількість ходів для завершення гри на сітці розміром $m$ на $n$. Наприклад, можна перевірити, що $S(5, 4) = 25$.

<img class="img-responsive center-block" alt="початок і кінець гри на сітці розміром 5х4" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px;" />

Існує рівно 5482 сітки, для яких $S(m, n) = p^2$, де $p &lt; 100$ є простим числом.

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
