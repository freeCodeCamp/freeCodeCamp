---
id: 5900f3fc1000cf542c50ff0f
title: 'Завдання 144: вивчення декількох відбиттів лазерного променя'
challengeType: 1
forumTopicId: 301773
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--

«Біла камера» у лазерній фізиці — це система дзеркал, яка діє як лінія затримки для лазерного променя. Промінь проникає у камеру, відскакує від дзеркал і находить вихід з неї.

Ми розглянемо конкретну білу камеру у вигляді еліпса, заданого рівнянням $4{x}^2 + y^2 = 100$

Світло може проникнути та вийти завдяки тому, що видалено верхню ділянку $−0.01 ≤ x ≤ +0.01$.

<div style="text-align: center">
  <img class="img-responsive center-block" alt="світловий промінь починається в точці (0,0; 10,1) і падає на дзеркало в точці (1,4; -9,6)" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-1.png" style="display: inline-block; background-color: white; padding: 10px;">
  <img class="img-responsive center-block" alt="анімація з першими 10 віддзеркаленнями променя" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-2.gif" style="display: inline-block; background-color: white; padding: 10px;">
</div><br>

Світловий промінь у цій задачі починається за межами білої камери в точці (0,0; 10,1), а вперше стикається з дзеркалом в точці (1,4; -9,6).

Кожного разу, коли лазерний промінь потрапляє на поверхню еліпса, він дотримується звичного закону відбиття «кут падіння дорівнює куту відбиття». Тобто надхідний і відбитий промені утворюють однаковий кут із нормаллю у точці падіння.

На малюнку зліва червона лінія показує перші дві точки дотику між лазерним променем та стіною білої камери, а синя лінія показує лінію, дотичну до еліпса в точці падіння першого відбиття.

Нахил m цієї дотичної лінії в будь-якій точці (x, y) заданого еліпса: $m = −4 × \frac{x}{y}$

Нормаль, проведена до точки падіння променя, перпендикулярна дотичній.

Анімація праворуч показує перші 10 віддзеркалень променя.

Скільки разів промінь потрапляє на внутрішню поверхню білої камери перед виходом?

# --hints--

`laserBeamReflections()` має повернути `354`.

```js
assert.strictEqual(laserBeamReflections(), 354);
```

# --seed--

## --seed-contents--

```js
function laserBeamReflections() {

  return true;
}

laserBeamReflections();
```

# --solutions--

```js
// solution required
```
