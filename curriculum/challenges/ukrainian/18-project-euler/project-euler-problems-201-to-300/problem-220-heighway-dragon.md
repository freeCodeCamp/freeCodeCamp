---
id: 5900f4481000cf542c50ff5b
title: 'Завдання 220: дракон Хейтуея'
challengeType: 1
forumTopicId: 301863
dashedName: problem-220-heighway-dragon
---

# --description--

Нехай $D_0$ буде двобуквеним рядком "Fa". За умови $n ≥ 1$ отримаємо $D_n$ від $D_{n - 1}$ за правилами перепису рядків:

- "a" → "aRbFR"
- "b" → "LFaLb"

Таким чином, $D_0$ = "Fa", $D_1$ = "FaRbFR", $D_2$ = "FaRbFRRLFaLbFR" і так далі.

Ці рядки можна вважати англомовною інструкцією до програми комп’ютерної графіки, де "F" означає «просунути вперед на одну одиницю», "L" — «розвернути на 90 градусів вліво», "R" — «розвернути на 90 градусів вправо», але "a" та "b" ігноруються. Комп’ютерний курсор знаходиться в початковому положенні (0,0), спрямований вгору в напрямку до (0,1).

Тоді $D_n$ стає цікавим малюнком, відомим як «Дракон Хейтуея» порядку $n$. Наприклад, $D_{10}$ показано нижче. Якщо вважати кожен рядок "F" одним кроком, то виділена точка (18,16) буде позицією після 500 кроків.

<img class="img-responsive center-block" alt="рисунок дракона Хейтуея після 500 кроків" src="https://cdn.freecodecamp.org/curriculum/project-euler/heighway-dragon.gif" style="background-color: white; padding: 10px;" />

Де буде розташовано курсор після ${10}^{12}$ кроків в $D_{50}$? Надайте свою відповідь у вигляді рядка `x,y` без пробілів.

# --hints--

`heighwayDragon()` має повернути рядок.

```js
assert(typeof heighwayDragon() === 'string');
```

`heighwayDragon()` має повернути рядок `139776,963904`.

```js
assert.strictEqual(heighwayDragon(), '139776,963904');
```

# --seed--

## --seed-contents--

```js
function heighwayDragon() {

  return true;
}

heighwayDragon();
```

# --solutions--

```js
// solution required
```
