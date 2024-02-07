---
id: 5900f4bd1000cf542c50ffce
title: 'Завдання 335: збір квасолі'
challengeType: 1
forumTopicId: 301993
dashedName: problem-335-gathering-the-beans
---

# --description--

Кожен раз, коли Пітеру стає нудно, він розставляє по колу декілька мисок, в кожній з яких знаходиться по одній квасолі. Після цього він дістає всю квасолю з певної миски та кладе по одній квасолі в кожну миску, рухаючись за годинниковою стрілкою. Він повторює ці рухи, починаючи з миски, в яку поклав останню квасолю, поки не виникне початкова позиція. Наприклад, з 5 мисками він взаємодіє таким чином:

<img class="img-responsive center-block" alt="анімація переміщення квасолі в п’яти мисках" src="https://cdn.freecodecamp.org/curriculum/project-euler/gathering-the-beans.gif" style="background-color: white; padding: 10px;" />

Тому, якщо Пітер взяв 5 мисок, йому знадобиться 15 ходів, щоб повернутись до початкової позиції.

Нехай $M(x)$ буде кількістю ходів, необхідних для того, щоб виникла початкова позиція, починаючи з $x$ мисок. Отже, $M(5) = 15$. Також можна довести, що $M(100) = 10920$.

Знайдіть $\displaystyle\sum_{k = 0}^{{10}^{18}} M(2^k + 1)$. Надайте відповідь за модулем $7^9$.

# --hints--

`gatheringTheBeans()` має повернути `5032316`.

```js
assert.strictEqual(gatheringTheBeans(), 5032316);
```

# --seed--

## --seed-contents--

```js
function gatheringTheBeans() {

  return true;
}

gatheringTheBeans();
```

# --solutions--

```js
// solution required
```
