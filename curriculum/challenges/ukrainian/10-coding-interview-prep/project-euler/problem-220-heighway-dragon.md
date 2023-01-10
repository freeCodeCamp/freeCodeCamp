---
id: 5900f4481000cf542c50ff5b
title: 'Завдання 220: Крива Дракона'
challengeType: 1
forumTopicId: 301863
dashedName: problem-220-heighway-dragon
---

# --description--

Нехай $D_0$ — двобуквений рядок "Fa". Для $n ≥ 1$, отримуємо $D_n$ з $D_{n - 1}$ за правилами перезапису рядків:

- "a" → "aRbFR"
- "b" → "LFaLb"

Отримуємо $D_0$ = "Fa", $D_1$ = "FaRbFR", $D_2$ = "FaRbFRRLFaLbFR" і так далі.

Ці рядки можна вважати інструкцією до програми комп'ютерної графіки, де "F"означає "просунути вперед одну одиницю", "L" – "розвернути на 90 градусів уліво", "R" – "розвернути на 90 градусів вправо", але "a" і "b" ігноруються. Комп'ютерний курсор знаходиться в початковому положенні (0,0), спрямований вгору в напрямку до (0,1).

Тоді $D_n$ – екзотичний малюнок, відомий як Крива Дракона порядку $n$. Наприклад, $D_{10}$ зображено нижче; кожну "F" вважаємо за один крок, виділене місце в (18,16) – позиція, отримана після 500 кроків.

<img class="img-responsive center-block" alt="малюнок Кривої Дракона після 500 кроків" src="https://cdn.freecodecamp.org/curriculum/project-euler/heighway-dragon.gif" style="background-color: white; padding: 10px;" />

Де буде розташовано курсор після ${10}^{12}$ кроків в $D_{50}$? Дайте свою відповідь у вигляді рядка `x,y` без пробілів.

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
