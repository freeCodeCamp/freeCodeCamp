---
id: 59880443fb36441083c6c20e
title: Метод Ейлера
challengeType: 1
forumTopicId: 302258
dashedName: euler-method
---

# --description--

Метод Ейлера надає приблизний розв’язок звичайних диференціальних рівнянь першого порядку з заданим початковим значенням. Це явний метод розв’язку задачі Коші, як описано <a href="https://www.freecodecamp.org/news/eulers-method-explained-with-examples/" title="Euler's Method Explained with Examples" target="_blank" rel="noopener noreferrer nofollow">в цій статті</a>.

Звичайні диференціальні рівняння задані в такому форматі:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>

з початковим значенням

<ul style='list-style: none;'>
  <li><big>$y(t_0) = y_0$</big></li>
</ul>

Щоб отримати числовий розв’язок, замінимо похідну зліва на скінченнорізницеве наближення:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

потім знайдемо $y(t+h)$:

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

що є тим самим, як і

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

Тоді правило ітеративного розв’язку:

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

де $h$ є розміром кроку — найважливішим параметром для точності розв’язку. Менший розміру кроку збільшує точність, але також і витрати обчислень, тому його завжди потрібно вибирати відповідно до конкретної задачі.

**Приклад: закон Ньютона про охолодження**

Закон Ньютона про охолодження описує, як об’єкт з початковою температурою $T(t_0) = T_0$ охолоджується за температури $T_R$:

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

або

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

Це означає, що швидкість охолодження об’єкта $\\frac{dT(t)}{dt}$ пропорційна поточній різниці температур між об’єктом та навколишнім середовищем $\\Delta T = (T(t) - T_R)$.

Ось аналітичний розв’язок, який ми порівняємо з числовим наближенням:

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

Реалізуйте процедуру методу Ейлера, а потім використайте його, щоб розв’язати закон Ньютона про охолодження з трьома різними розмірами кроку:

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code></li>
  <li><code>10 s</code></li>
</ul>

та порівняйте з аналітичним розв’язком.

**Початкові значення:**

<ul>
  <li>початкова температура <big>$T_0$</big> дорівнює <code>100 °C</code></li>
  <li>кімнатна температура <big>$T_R$</big> дорівнює <code>20 °C</code></li>
  <li>константа охолодження <big>$k$</big> дорівнює <code>0.07</code></li>
  <li>часовий інтервал для обчислення дорівнює від <code>0 s</code> до <code>100 s</code></li>
</ul>

Перший параметр функції — початковий час, другий параметр — початкова температура, третій параметр — пройдений час, а четвертий параметр — розмір кроку.

# --hints--

`eulersMethod` має бути функцією.

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` має повернути число.

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` має повернути `20.0424631833732`.

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)` має повернути `20.01449963666907`.

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` має повернути `20.000472392`.

```js
assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392);
```

# --seed--

## --seed-contents--

```js
function eulersMethod(x1, y1, x2, h) {

}
```

# --solutions--

```js
function eulersMethod(x1, y1, x2, h) {
  let x = x1;
  let y = y1;

  while ((x < x2 && x1 < x2) || (x > x2 && x1 > x2)) {
    y += h * (-0.07 * (y - 20));
    x += h;
  }

  return y;
}
```
