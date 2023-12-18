---
id: 5900f4621000cf542c50ff75
title: 'Завдання 246: дотичні до еліпса'
challengeType: 1
forumTopicId: 301893
dashedName: problem-246-tangents-to-an-ellipse
---

# --description--

Визначення еліпса таке:

Якщо дано коло $c$ з центром $M$ і радіусом $r$ та точку $G$, за якої $d(G, M) < r$, то геометричне місце точок, рівновіддалених від $c$ та $G$, формує еліпс.

Побудову точок еліпса зображено нижче.

<img class="img-responsive center-block" alt="анімація побудови еліпса" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-1.gif" style="background-color: white; padding: 10px;" />

Дано точки $M(-2000, 1500)$ та $G(8000, 1500)$.

Також дано коло $c$ із центром $M$ та радіусом $15\\,000$.

Геометричне місце точок, рівновіддалених від $G$ та $c$, формують еліпс $e$.

З точки $P$ поза $e$ проведено дві дотичні $t_1$ та $t_2$ до еліпса.

Нехай точками, де $t_1$ та $t_2$ торкаються до еліпса, будуть $R$ та $S$.

<img class="img-responsive center-block" alt="коло с із центром М, радіусом 15000 та точкою Р поза еліпсом е; від точки Р проведено дві дотичні t_1 та t_2 до еліпса, а R та S є точками дотику до еліпса" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-2.gif" style="background-color: white; padding: 10px;" />

Для скількох точок $P$ значення кута $RPS$ є більшим за 45°?

# --hints--

`tangentsToAnEllipse()` має повернути `810834388`.

```js
assert.strictEqual(tangentsToAnEllipse(), 810834388);
```

# --seed--

## --seed-contents--

```js
function tangentsToAnEllipse() {

  return true;
}

tangentsToAnEllipse();
```

# --solutions--

```js
// solution required
```
