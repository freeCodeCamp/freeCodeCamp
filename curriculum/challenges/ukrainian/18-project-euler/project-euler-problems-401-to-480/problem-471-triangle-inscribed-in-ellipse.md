---
id: 5900f5431000cf542c510056
title: 'Завдання 471: трикутник, вписаний в еліпс'
challengeType: 1
forumTopicId: 302148
dashedName: problem-471-triangle-inscribed-in-ellipse
---

# --description--

Трикутник $ΔABC$ вписаний в еліпс, заданий рівнянням $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, де $0 &lt; 2b &lt; a$, а $a$ та $b$ є цілими числами.

Нехай $r(a, b)$ буде радіусом вписаного в $ΔABC$ кола, а його центр лежить в центрі $(2b, 0)$ та $A$ має координати $\left(\frac{a}{2}, \frac{\sqrt{3}}{2}b\right)$.

Наприклад, $r(3, 1) = \frac{1}{2}, r(6, 2) = 1, r(12, 3) = 2$.

<img class="img-responsive center-block" alt="трикутник ΔABC вписаний в еліпс, радіус кола, вписаного в ΔABC, r(6, 2) = 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-1.png" style="background-color: white; padding: 10px;" />

<img class="img-responsive center-block" alt="трикутник ΔABC вписаний в еліпс, радіус кола, вписаного в ΔABC, r(12, 3) = 2" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-2.png" style="background-color: white; padding: 10px;" />

Нехай $G(n) = \sum_{a = 3}^n \sum_{b = 1}^{\left\lfloor\frac{a - 1}{2} \right\rfloor} r(a, b)$

Дано, що $G(10) = 20.59722222$, $G(100) = 19223.60980$ (заокруглено до 10 цифр).

Знайдіть $G({10}^{11})$. Надайте відповідь у вигляді рядка в експоненційному записі, заокругливши до десяти знаків після коми. Використайте `e` в нижньому регістрі, щоб розділити мантису та показник степеня.

За умови $G(10)$ відповіддю буде `2.059722222e1`

# --hints--

`triangleInscribedInEllipse()` має повернути рядок.

```js
assert(typeof triangleInscribedInEllipse() === 'string');
```

`triangleInscribedInEllipse()` має повернути рядок `1.895093981e31`.

```js
assert.strictEqual(triangleInscribedInEllipse(), '1.895093981e31');
```

# --seed--

## --seed-contents--

```js
function triangleInscribedInEllipse() {

  return true;
}

triangleInscribedInEllipse();
```

# --solutions--

```js
// solution required
```
