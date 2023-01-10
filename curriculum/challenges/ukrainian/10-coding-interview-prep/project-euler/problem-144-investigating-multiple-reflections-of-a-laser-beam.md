---
id: 5900f3fc1000cf542c50ff0f
title: 'Завдання 144: Дослідження множинних відображень лазерного променя'
challengeType: 1
forumTopicId: 301773
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--

У лазерній фізиці "біла клітина" - це дзеркальна система, яка діє як лінія затримки для лазерного променя. Промінь проникає у клітину, відскакує від дзеркал, і, зрештою, повертається назад.

Конкретна біла клітина, яку ми розглянемо, - це еліпс із рівнянням $ 4 {x}^2 + y^2 = 100 $

Ділянка, що відповідає $ −0.01 ≤ x ≤ +0.01 $ у верхній частині, відсутня, що дозволяє світлу входити і виходити через отвір.

<div style="text-align: center">
  <img class="img-responsive center-block" alt="light beam starting at point (0.0, 10.1), and impacting the mirror at point (1.4, -9.6)" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-1.png" style="display: inline-block; background-color: white; padding: 10px;">
  <img class="img-responsive center-block" alt="animation with first 10 reflections of the beam" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-2.gif" style="display: inline-block; background-color: white; padding: 10px;">
</div><br>

Світловий промінь у цій задачі починається в точці (0,0, 10,1) безпосередньо біля білої клітини, і промінь спочатку стикається з дзеркалом в точці (1,4, -9,6).

Кожного разу, коли лазерний промінь потрапляє на поверхню еліпса, він дотримується звичного закону відбиття «кут падіння дорівнює куту відбиття» Тобто і промінь, що падає, і відбитий промінь, утворюють однаковий кут із нормаллю у точці падіння.

На малюнку зліва червона лінія показує перші дві точки дотику між лазерним променем та стінкою білої клітини; синя лінія показує лінію, дотичну до еліпса в точці падіння першого відскоку.

Кут нахилу m дотичної лінії в будь-якій точці (x, y) заданого еліпса: $m = ℉4 × \frac{x}{y}$

Нормаль — перпендикуляр до дотичної, що проходить через точку дотику.

Анімація праворуч показує перші 10 віддзеркалень променя.

Скільки разів промінь потрапляє на внутрішню поверхню білої клітини перед виходом?

# --hints--

`laserBeamReflections()` має повертати до`354`.

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
