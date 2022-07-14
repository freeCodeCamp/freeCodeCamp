---
id: 5900f4bd1000cf542c50ffce
title: 'Задача 335: Збір бобів'
challengeType: 1
forumTopicId: 301993
dashedName: problem-335-gathering-the-beans
---

# --description--

Кожен раз коли Пітеру стає нудно, він розставляє по колу кілька мисок, в кожній з яких знаходиться по одній квасолині. Після цього він дістає всі боби з певної миски та опускає їх по одному в миски, рухаючись за годинниковою стрілкою. Він повторює ці рухи, починаючи з миски, в яку впустив останню квасолинку, поки початкове положення не виникне знову. Наприклад, з 5 мисками він взаємодіє таким чином:

<img class="img-responsive center-block" alt="анімація переміщення бобів в 5 мисках" src="https://cdn.freecodecamp.org/curriculum/project-euler/gathering-the-beans.gif" style="background-color: white; padding: 10px;" />

Таким чином, при 5 чашах Пітеру потрібно 15 ходів, щоб повернутися до вихідної ситуації.

Нехай $M(x)$ є кількістю ходів, необхідних для повернення до вихідної ситуації, починаючи з чаш $x$. Таким чином, $M(5) = 15$. Можна також підтвердити, що $M(100) = 10920$.

Знайдіть $\displaystyle\sum_{k = 0}^{{10}^{18}} M(2^k + 1)$. Дайте відповідь по модулю $7^9$.

# --hints--

`gatheringTheBeans()` має повертати `5032316`.

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
